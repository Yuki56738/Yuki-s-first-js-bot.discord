const { SlashCommandBuilder } = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
//require('dotenv').config;
//const token = process.env.DISCORD_TOKEN;
const { token, clientId, guildId } = require('./config.json')

const commands = [
  new SlashCommandBuilder().setName('yuki').setDescription('Reply with Pong!'),
  new SlashCommandBuilder().setName('yuki2').setDescription('yuki test')
  ]
    .map(command => command.toJSON())

const rest = new REST({ version: '9' }).setToken(token)

rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands })
  .then(() => console.log('Registered app commands.'))
  .catch(console.error)

