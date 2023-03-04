import { filesystem, print } from 'gluegun'

type ParamsCallback = {
  template: string
  target: string
}

type Params = {
  template: string
  target: string
  callback: ({ target, template }: ParamsCallback) => Promise<void>
  force?: boolean
}

export const createFile = async ({
  callback,
  target,
  template,
  force = false,
}: Params): Promise<boolean> => {
  try {
    const file = force ? false : filesystem.exists(target)

    if (file) {
      print.muted(`File ${target} already exists`)
      return
    }
    
    await callback({ target, template })

    print.muted(`Generated file ${target}`)
    return true
  } catch (error) {
    return false
  }
}
