import { ProjectServicesParams } from "../../types/project.type"
import { print } from 'gluegun'
import { createFile } from "../helpers/file.helper"


export const servicesReact = async ({ appName, callback }: ProjectServicesParams) => {
    try {
      print.highlight(`\nSettings Services ...\n`)
  
      await createFile({
        template: './react/services/index.ts.ejs',
        target: `${appName}/src/services/index.ts`,
        callback,
      })

      await createFile({
        template: './react/services/storage.ts.ejs',
        target: `${appName}/src/services/storage.ts`,
        callback,
      })
  
      await createFile({
        template: './react/services/api/index.ts.ejs',
        target: `${appName}/src/services/api/index.ts`,
        callback,
      })

      await createFile({
        template: './react/services/api/request.ts.ejs',
        target: `${appName}/src/services/api/request.ts`,
        callback,
      })

      await createFile({
        template: './react/services/api/user.api.ts.ejs',
        target: `${appName}/src/services/api/user.api.ts`,
        callback,
      })

      await createFile({
        template: './react/types/user.d.ts.ejs',
        target: `${appName}/src/types/user.d.ts`,
        callback,
      })
  
    } catch (error) {
      print.error(error)
      throw error
    }
  }