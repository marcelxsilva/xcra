import { ProjectServicesParams } from "../../types/project.type";
import { print } from 'gluegun'
import { createFile } from "../helpers/file.helper"

export const componentsReact = async ({ appName, callback }: ProjectServicesParams) => {
    try {
        print.highlight(`\nSettings Components ...\n`)
    
        const _baseDir = 'components';

        await createFile({
          template: `./react/${_baseDir}/index.ts.ejs`,
          target: `${appName}/src/${_baseDir}/index.ts`,
          callback,
          force: true,
        })

      } catch (error) {
        print.error(error)
        throw error
      }
}