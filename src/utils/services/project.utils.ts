/* eslint-disable @typescript-eslint/no-explicit-any */
import { print } from 'gluegun'
import { ProjectServicesParams } from '../../types/project.type'
import { createFile } from '../helpers/file.helper'

export const utilsReact = async ({
  callback,
  appName
}: ProjectServicesParams): Promise<void> => {
  try {
    print.highlight(`\nSettings Utilities ...\n`)

    await createFile({
      template: 'react/utils/helpers/store.helper.ts.ejs',
      target: `${appName}/src/utils/helpers/store.helper.ts`,
      callback,
      force: true,
    })

    await createFile({
      template: 'react/utils/helpers/index.ts.ejs',
      target: `${appName}/src/utils/helpers/index.ts`,
      callback,
      force: true,
    })

    await createFile({
      template: 'react/utils/helpers/theme.helper.ts.ejs',
      target: `${appName}/src/utils/helpers/theme.helper.ts`,
      callback,
      force: true,
    })

    await createFile({
      template: 'react/utils/modules/index.ts.ejs',
      target: `${appName}/src/utils/modules/index.ts`,
      callback,
      force: true,
    })

    await createFile({
      template: 'react/utils/index.ts.ejs',
      target: `${appName}/src/utils/index.ts`,
      callback,
      force: true,
    })

    await createFile({
      template: 'react/config/reactotron.ts.ejs',
      target: `${appName}/src/config/reactotron.ts`,
      callback,
      force: true,
    })
  } catch (error) {
    print.error(error)
    throw error
  }
}
