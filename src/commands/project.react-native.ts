import { GluegunToolbox } from 'gluegun'
module.exports = {
  name: 'react-native',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox
  
    print.highlight(`\n Module in development... \n`)

  },  
}
