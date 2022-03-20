const {Client, Intents, Collection} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const {createGreetingEmbed, createDailyEmbed} = require(".././create-embeds");
const date = new Date()

// 素材名からキャラ検索
module.exports = {
    name: 'item',
    description: 'item',
    async execute(client, command, args, message) {
        message.channel.send('未実装です。');
    }
}
