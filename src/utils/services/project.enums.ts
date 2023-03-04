import { ProjectServicesParams } from "../../types/project.type"
import { print } from 'gluegun'
import { createFile } from "../helpers/file.helper"


export const enumsReact = async ({ appName, callback }: ProjectServicesParams) => {
    try {
      print.highlight(`\nSettings Enums ...\n`)
  
      await createFile({
        template: './react/utils/enums/env.enum.ts.ejs',
        target: `${appName}/src/utils/enums/env.enum.ts`,
        callback,
      })

      await createFile({
        template: './react/utils/enums/index.ts.ejs',
        target: `${appName}/src/utils/enums/index.ts`,
        callback,
      })

    } catch (error) {
      print.error(error)
      throw error
    }
  }