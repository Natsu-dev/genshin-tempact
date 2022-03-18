const {Client, Intents, Collection} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
client.commands = new Collection();
const prefix = 'gt:';
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const {createGreetingEmbed, createDailyEmbed} = require("./create-embeds");

// 環境変数に.envを使う
require('dotenv').config({path: path.join(__dirname, '.env')});

// コマンド読み込み
let command_count = 0;
const commandFiles = fs.readdirSync('./command').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    command_count++;
    const command = require(`./command/${file}`);
    console.log(command);
    client.commands.set(command.name, command);
}
console.log(`${command_count} files loaded.`)

// 定期実行の設定
cron.schedule('0 0 5 * * *', () => {

    // 実行する関数
    client.guilds.cache.forEach(guild => {
        new Promise(channel => {
            channel(guild.channels.cache
                .find(channel => channel.type === 'text'
                    && channel.permissionsFor(guild.me).has('SEND_MESSAGES')
                    && channel.name.indexOf('原神武器天賦素材') > -1)
            )
        }).then(channel => {
            // TODO: weekをNumberで渡したいって話ね
            channel.send(createDailyEmbed(0))
                .then(r => console.log('Sent a greeting message.'))
        })
    })

}, {
    scheduled: true,
    timezone: 'Asia/Tokyo'
})

// ログイン処理
client.on('ready', () => {
    client.user.setStatus('online') //online, idle, dnd, invisible
    client.user.setActivity('gt:') //ステータスメッセージ

    console.log(`USER: ${client.user.username}`)
    console.log(`ID: ${client.user.id}`)
    console.log(`SERVERS:`)
    client.guilds.cache.forEach(guild =>
        console.log(`    ${guild.name}`)
    )

    console.log('ready...')
})

// コマンド処理
client.on('message', async message => {

    // Botの書き込みと接頭辞のない書き込みは無視
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase(); //引数
    console.log(command)
    // -> command.js
    await client.commands.get('command').execute(client, command, args, message);

})

// サーバー参加時
client.on("guildCreate", guild => {
    client.guilds.cache.forEach(guild => {
        new Promise(channel => {
            channel(guild.channels.cache
                .find(channel => channel.type === 'text'
                    && channel.permissionsFor(guild.me).has('SEND_MESSAGES')
                    && channel.name.indexOf('原神武器天賦素材') > -1)
            )
        }).then(channel => {
            channel.send(createGreetingEmbed())
                .then(r => console.log('Sent a greeting message.'))
        })
    })
})

client.login(process.env.DISCORD_TOKEN) // Login phase
    .then(r => console.log('Login success.'))
    .catch(console.error)
