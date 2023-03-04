import { GluegunToolbox } from 'gluegun'
module.exports = {
  name: 'react-native',
  description: 'Create a React Native Project',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox
  
    print.highlight(`\n Module in development... \n`)

  },  
}
