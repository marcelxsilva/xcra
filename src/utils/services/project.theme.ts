import { ProjectServicesParams } from "../../types/project.type"
import { print } from 'gluegun'
import { createFile } from "../helpers/file.helper"

export const themeReact = async ({ appName, callback }: ProjectServicesParams) => {
    try {
      print.highlight(`\nSettings Theme ...\n`)
  
      await createFile({
        template: './react/theme/breakpoints.ts.ejs',
        target: `${appName}/src/theme/breakpoints.ts`,
        callback,
        force: true,
      })

      await createFile({
        template: './react/theme/spacings.ts.ejs',
        target: `${appName}/src/theme/spacings.ts`,
        callback,
        force: true,
      })

      await createFile({
        template: './react/theme/colors.ts.ejs',
        target: `${appName}/src/theme/colors.ts`,
        callback,
        force: true,
      })

      await createFile({
        template: './react/theme/index.ts.ejs',
        target: `${appName}/src/theme/index.ts`,
        callback,
        force: true,
      })

    } catch (error) {
      print.error(error)
      throw error
    }
  }