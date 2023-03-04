import { ProjectServicesParams } from "../../types/project.type";
import { filesystem } from 'gluegun'

export const clearReact = async ({ appName }: Omit<ProjectServicesParams, 'callback'>) => {
    filesystem.remove(`${appName}/src/App.tsx`)
    filesystem.remove(`${appName}/src/App.css`)
    filesystem.remove(`${appName}/src/App.test.tsx`)
    filesystem.remove(`${appName}/src/logo.svg`)
    filesystem.remove(`${appName}/src/index.css`)
}