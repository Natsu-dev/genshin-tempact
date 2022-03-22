const {Client, Intents, Collection} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const {createGreetingEmbed, createDailyEmbed} = require(".././create-embeds");

// コマンドハブ
module.exports = {
    name: 'command',
    description: 'command hub',
    async execute(client, command, args, message){
        console.log(`command: ${command}, args: [${args}]`);
        if (command === 'test'){
            message.channel.send('test');
        }
        // 今日の素材一覧
        if (command === 'today' || command === 't'){
            await client.commands.get('today').execute(client, command, args, message);
        }
        // キャラ名から素材検索
        if (command === 'chara' || command === 'c'){
            await client.commands.get('chara').execute(client, command, args, message);
        }
        // 素材名からキャラ検索
        if (command === 'item' || command === 'i') {
            await client.commands.get('item').execute(client, command, args, message);
        }
        // Info (Greetingと同じ)
        if (command === 'info') {
            await client.commands.get('info').execute(client, command, args, message);
        }
    }
}
