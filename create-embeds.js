const Discord = require("discord.js");

exports.createGreetingEmbed = () => {
    return new Discord.MessageEmbed()
        .setTitle('Genshin Tempact')
        .setColor('0x219ddd')
        .setDescription('Version ' + '1.0.0')
        .setURL('https://github.com/Natsu-dev/genshin-tempact')
        .addField(':ballot_box_with_check: About',
            `毎日5時に原神の武器突破素材、天賦素材の一覧を書き込むbotです。`,
            false)
        .addField(':ballot_box_with_check: Commands',
            `\`gt:today\`, \`gt:t\` 今日の天賦素材一覧を表示します。`,
            false)
}

exports.createDailyEmbed = (day) => {
    const dayString = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'][day]
    const dayColor = ['RED', 'YELLOW', 'ORANGE', 'AQUA', 'GREEN', 'GOLD', 'BLURPLE'][day]
    const dayImg = ['all', 'mon', 'tue', 'wed', 'mon', 'tue', 'wed'][day]

    return new Discord.MessageEmbed()
        .setTitle(dayString + ' の素材一覧')
        .setColor(dayColor)
        .setDescription(dayString + ' の素材一覧です。')
        .setURL('https://github.com/Natsu-dev/genshin-tempact')
        .setImage(`https://raw.githubusercontent.com/Natsu-dev/genshin-tempact/main/imgs/${dayImg}.png`)
}
