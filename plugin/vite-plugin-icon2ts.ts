import type { PluginOption } from "vite"
import { stat, readdir, writeFile } from "node:fs/promises"
import { resolve } from "path"

export interface VitePluginIcon2TsOptions {
  path: string
  fileType?: string
  outFile?: string
  typeName?: string
  enums?: boolean
  genDelay?: number
}

const log = console.log.bind(console, 'icon2Ts[log]:')

const plugin = ({
  path,
  fileType = 'svg',
  outFile = 'icon.ts',
  typeName = 'Icon',
  enums = true,
  genDelay = 500
}: VitePluginIcon2TsOptions): PluginOption => {

  const gen = async () => {
    log(`正在读取 ${path}`)
    const s = await stat(path)
    if (s.isDirectory()) {
      const items = await readdir(path)
      const mapSvg = items.filter(item => item.endsWith(`.${fileType}`))
      const removeFileType = (item: string) => {
        return item.slice(0, item.length - (fileType.length + 1))
      }
      const pathToSafeEnumName = (item: string) => {
        const fItem = removeFileType(item).replace(/\-/g, '_')

        return fItem.slice(0, 1).toUpperCase() + fItem.slice(1)
      }
      const outFilePath = resolve(path, outFile)
      log(`正在生成 ${outFilePath}`)
      let tsString =
        `export type ${typeName} = \n\t${mapSvg.map(item => `|'${removeFileType(item)}'`).join(' ')}\n`
      if (enums) {
        log(`需要生成 enum`)
        tsString +=
          `\nexport enum ${'E' + typeName} {\n${mapSvg.map(item => `${pathToSafeEnumName(item)} = '${removeFileType(item)}'`).map(item => `\t${item}`).join(',\n')}\n}`
      }
      log(`正在写入 ${outFilePath}`)
      await writeFile(outFilePath, tsString, {
        encoding: 'utf-8'
      })
      log(`完成 ${outFilePath}`)
    }
  }

  let timer: NodeJS.Timeout | null = null

  const dGen = async () => {
    clearTimeout(timer!)
    timer = setTimeout(async () => {
      await gen()
    }, genDelay);
  }

  return {
    name: 'vite-plugin-icon2ts',
    apply: 'serve',
    enforce: 'post',
    async buildStart() {
      await gen()
      this.addWatchFile(path)
    },
    // async configureServer(server) {
    //   server.watcher.add(path)
    //   server.watcher.on('all', async (eName) => {
    //     await dGen()
    //   })
    // }
  }
}

export default plugin
