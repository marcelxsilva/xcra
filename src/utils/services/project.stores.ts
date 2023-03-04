/* eslint-disable @typescript-eslint/no-explicit-any */
import { print } from 'gluegun'
import { ProjectServicesParams } from '../../types/project.type'
import { createFile } from '../helpers/file.helper'

export const storeReact = async ({ appName, callback }: ProjectServicesParams) => {
  try {
    print.highlight(`\nSettings Stores with Mobx ...\n`)

    await createFile({
      template: './react/stores/index.ts.ejs',
      target: `${appName}/src/stores/index.ts`,
      callback,
    })

    await createFile({
      template: './react/stores/user.store.ts.ejs',
      target: `${appName}/src/stores/user.store.ts`,
      callback,
    })

  } catch (error) {
    print.error(error)
    throw error
  }
}