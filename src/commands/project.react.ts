import { GluegunToolbox } from 'gluegun'
import {
  clearReact,
  enumsReact,
  envReact,
  eslintConfigReact,
  rootImportReact,
  setPkgReact,
  storeReact,
  themeReact,
  utilsReact,
  scenesReact,
  servicesReact,
} from '../utils'
import { routesReact } from '../utils/services/project.router';

module.exports = {
  name: 'react',
  description: 'Create a ReactJS Project',
  run: async (toolbox: GluegunToolbox) => {
    const {
      print,
      parameters,
      system,
      filesystem,
      template: { generate },
    } = toolbox

    const { name } = parameters.options;

    if(!name) {
      print.error('You must pass the name of the project with the --name parameter')
      return
    }

    print.info(`\n Initialize Config Project: ${name} \n `)
    
    if(!filesystem.exists(name)) {
      print.highlight(`\n This process can take a few minutes \n`)

      await system.run(`npx create-react-app ${name} --template typescript`)
  
      await rootImportReact({ appName: name, callback: generate });
  
      await eslintConfigReact({ appName: name, callback: generate });
  
      await envReact({ appName: name, callback: generate });
      
      await storeReact({ appName: name, callback: generate });

      await scenesReact({ appName: name, callback: generate });

      await servicesReact({ appName: name, callback: generate });
      
      await utilsReact({ appName: name, callback: generate });
      
      await routesReact({ appName: name, callback: generate });
      
      await setPkgReact({ appName: name });

      await themeReact({ appName: name, callback: generate });
      
      await enumsReact({ appName: name, callback: generate });
  
      await clearReact({ appName: name });
      
      print.success(`\n Finish Config Project ${name} \n`)
  
      print.info(` Run the following commands:
          
          $ cd ${name}; yarn

          $ yarn dev
  `)
    } else {
      print.error('This project already exists')
      return
    }
  },  
}
