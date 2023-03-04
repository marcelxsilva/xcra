import { ProjectServicesParams } from "../../types/project.type";
import { print } from 'gluegun'
import { createFile } from "../helpers/file.helper"

export const scenesReact = async ({ appName, callback }: ProjectServicesParams) => {
    try {
        print.highlight(`\nSettings Scenes ...\n`)
    
        const _baseDir = 'scenes';

        await createFile({ // src/index 
          template: `./react/index.tsx.ejs`,
          target: `${appName}/src/index.tsx`,
          callback,
          force: true,
        })

        await createFile({
          template: `./react/${_baseDir}/index.ts.ejs`,
          target: `${appName}/src/${_baseDir}/index.ts`,
          callback,
          force: true,
        })

        await createFile({
          template: `./react/${_baseDir}/Home/index.tsx.ejs`,
          target: `${appName}/src/${_baseDir}/Home/index.tsx`,
          callback,
          force: true,
        })

        await createFile({
          template: `./react/${_baseDir}/Home/home.styles.ts.ejs`,
          target: `${appName}/src/${_baseDir}/Home/home.styles.ts`,
          callback,
          force: true,
        })

        await createFile({
          template: `./react/${_baseDir}/Login/index.tsx.ejs`,
          target: `${appName}/src/${_baseDir}/Login/index.tsx`,
          callback,
          force: true,
        })

        await createFile({
          template: `./react/${_baseDir}/Login/login.styles.ts.ejs`,
          target: `${appName}/src/${_baseDir}/Login/login.styles.ts`,
          callback,
          force: true,
        })


      } catch (error) {
        print.error(error)
        throw error
      }
}