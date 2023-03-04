/* eslint-disable @typescript-eslint/no-explicit-any */
export type ParamsCallback = {
  template: string
  target: string
}

export type ProjectServicesParams = {
  callback: ({ target, template }: ParamsCallback) => Promise<any>,
  appName: string
}

export type CliParams = {
  appName: string
}