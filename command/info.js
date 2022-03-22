const {Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const {createGreetingEmbed} = require(".././create-embeds");

// Info (Greetingと同じ)
module.exports = {
    name: 'info',
    description: 'info',
    async execute(client, command, args, message) {
        const date = new Date()
        message.channel.send({embeds: [createGreetingEmbed()]})
            .then(r => console.log('Sent a info message.'))
    }
}
