const {Client, Intents, Collection} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const {createGreetingEmbed, createDailyEmbed} = require(".././create-embeds");
const date = new Date()

// キャラ名から素材検索
module.exports = {
    name: 'chara',
    description: 'chara',
    async execute(client, command, args, message) {
        message.channel.send('未実装です。');
    }
}
