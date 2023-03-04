import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'xcra',
  run: async (toolbox) => {
    const { print } = toolbox
    print.success(`
    
    Hello from XCRA v(${toolbox.meta.version()}) 🚀

    `)

    print.warning(`

    Run Commandsddd

    $ xcra react --name <name-project> : Create a ReactJS Project

    $ xcra react-native --name <name-project> : Create a React Native Project

    `)
  },
}

module.exports = command
