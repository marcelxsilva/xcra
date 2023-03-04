import { ProjectServicesParams } from "../../types/project.type";
import { createFile } from "../helpers/file.helper";

export const envReact = async ({ appName, callback }: ProjectServicesParams): Promise<boolean> => {
    try {

        // env.dev
        await createFile({
            template: './react/env.dev.ejs',
            target: `${appName}/.env.dev`,
            callback,
            force: true,
        })

        // env.prd
        await createFile({
            template: './react/env.prd.ejs',
            target: `${appName}/.env.prd`,
            callback,
            force: true,
        })

        return true;
    } catch (error) {
        return false;
    }
}