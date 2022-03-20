const {Client, Intents, Collection} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const {createGreetingEmbed, createDailyEmbed} = require(".././create-embeds");
const date = new Date()

// 今日の素材一覧
module.exports = {
    name: 'today',
    description: 'today',
    async execute(client, command, args, message) {
        let argInt = parseInt(args[0])
        // 引数なし
        if (!args)
            message.channel.send({embeds: [createDailyEmbed(date.getDay())]})
        // 引数あり & 0~6
        else if (argInt >= 0 && argInt <= 6)
            message.channel.send({embeds: [createDailyEmbed(parseInt(args[0]))]})
        // 不正な引数 -> デフォルト処理
        else
            message.channel.send({embeds: [createDailyEmbed(date.getDay())]})
    }
}
