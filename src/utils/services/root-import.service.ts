import { ProjectServicesParams } from "../../types/project.type";
import { createFile } from "../helpers/file.helper";


export const rootImportReact = async ({ appName, callback }: ProjectServicesParams): Promise<boolean> => {
    try {
        
        await createFile({
            template: './react/tsconfig.json.ejs',
            target: `${appName}/tsconfig.json`,
            callback,
            force: true,
        })

        await createFile({
            template: './react/config-overrides.js.ejs',
            target: `${appName}/config-overrides.js`,
            callback,
            force: true,
        })

        return true;
    } catch (error) {
        return false;
    }
}