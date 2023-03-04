import { ProjectServicesParams } from "../../types/project.type";
import { createFile } from "../helpers/file.helper";


export const eslintConfigReact = async ({ appName, callback }: ProjectServicesParams): Promise<boolean> => {
    try {
        // eslint
        await createFile({
            template: './react/eslintignore.ejs',
            target: `${appName}/.eslintignore`,
            callback,
            force: true,
        })

        await createFile({
            template: './react/eslintrc.json.ejs',
            target: `${appName}/.eslintrc.json`,
            callback,
            force: true,
        })

        // prettier
        await createFile({
            template: './react/.prettierignore.ejs',
            target: `${appName}/.prettierignore`,
            callback,
            force: true,
        })
        
        await createFile({
            template: './react/prettierrc.json.ejs',
            target: `${appName}/prettierrc.json`,
            callback,
            force: true,
        })

        return true;
    } catch (error) {
        return false;
    }
}