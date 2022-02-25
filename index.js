const { Client, Intents } = require('discord.js')

const { token } = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
  console.log('Bot is ready.')
  console.log(`Logged in as: ${client.user.tag}`)
})

client.on('interactionCreate', async interaction => {
  console.log('interactionCreate hit.')
  if (!interaction.isCommand()) return;
  
  const {commandName} = interaction;
  
  console.log(`commandName: ${commandName}`)
  
  if (commandName === 'yuki') {
    console.log('command yuki hit.')
    await interaction.reply('Pong!')
    console.log('sent "Pong!"')
  } else if (commandName === 'yuki2') {
    console.log('command yuki2 hit.')
    await interaction.reply(`Server name: ${interaction.guild.name}\n Total members: ${interaction.guild.memberCount}`)
    console.log('sent.')
  }

})

client.login(token)
