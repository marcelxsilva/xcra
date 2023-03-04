import { ProjectServicesParams } from "../../types/project.type";
import { print } from 'gluegun'
import { createFile } from "../helpers/file.helper"

export const routesReact = async ({ appName, callback }: ProjectServicesParams) => {
    try {
        print.highlight(`\nSettings Routes ...\n`)
    
        const _baseDir = 'routes';

        await createFile({
          template: `./react/${_baseDir}/index.tsx.ejs`,
          target: `${appName}/src/${_baseDir}/index.tsx`,
          callback,
          force: true,
        })


        await createFile({
          template: `./react/${_baseDir}/private.route.tsx.ejs`,
          target: `${appName}/src/${_baseDir}/private.route.tsx`,
          callback,
          force: true,
        })

        await createFile({
          template: `./react/${_baseDir}/public.route.tsx.ejs`,
          target: `${appName}/src/${_baseDir}/public.route.tsx`,
          callback,
          force: true,
        })

        await createFile({
          template: `./react/${_baseDir}/provider.tsx.ejs`,
          target: `${appName}/src/${_baseDir}/provider.tsx`,
          callback,
          force: true,
        })

        await createFile({
          template: `./react/${_baseDir}/routes.path.ts.ejs`,
          target: `${appName}/src/${_baseDir}/routes.path.ts`,
          callback,
          force: true,
        })

      } catch (error) {
        print.error(error)
        throw error
      }
}