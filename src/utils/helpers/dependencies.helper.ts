import { filesystem, print } from 'gluegun'
import { CliParams } from '../../types'
import { pkgJsonReact } from '../enum'

export const setPkgReact = async ({ appName }: CliParams) => {
  const _dirPackageJson = `${appName}/package.json`

  if (!filesystem.exists(_dirPackageJson)) {
    print.error('package.json not found')
    return
  }

  const json = filesystem.read(_dirPackageJson, 'json')

  filesystem.write(_dirPackageJson, {
    ...json,
    name: appName,
    devDependencies: {
      ...json.devDependencies,
      ...pkgJsonReact.devDependencies,
    },
    dependencies: {
      ...json.dependencies,
      ...pkgJsonReact.dependencies,
    },
    scripts: {
      ...json.scripts,
      ...pkgJsonReact.scripts,
    }
  })
}