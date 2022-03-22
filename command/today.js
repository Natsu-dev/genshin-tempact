const {Client, Intents, Collection} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const {createGreetingEmbed, createDailyEmbed} = require(".././create-embeds");
const date = new Date()

// 今日の素材一覧
module.exports = {
    name: 'today',
    description: 'today',
    async execute(client, command, args, message) {
        let argInt =
            args !== undefined ? date.getDay() // 引数なし
                : (parseInt(args[0]) >= 0 && parseInt(args[0]) <= 6) ? parseInt(args[0]) // 引数あり & 0~6
                    : date.getDay() // 不正な引数 -> デフォルト処理

        message.channel.send({embeds: [createDailyEmbed(argInt)]})
            .then(r => console.log('Sent today\'s message.'))
    }
}
