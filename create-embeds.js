const Discord = require("discord.js");

exports.createGreetingEmbed = () => {

    return new Discord.MessageEmbed()
        .setTitle('Genshin Tempact')
        .setColor('0x219ddd')
        .setDescription('Version ' + '1.0.0')
        .setURL('https://github.com/Natsu-dev/genshin-tempact')
        .addField(':ballot_box_with_check: About',
            `毎日5時に原神の武器突破素材、天賦素材の一覧を書き込むbotです。
            詳しい仕様はGitHubリポジトリ( https://github.com/Natsu-dev/genshin-tempact )に掲載していますので、必ずご一読ください。`,
            false)
        .addField(':ballot_box_with_check: Commands',
            `\`gt:info\`, \`gt:i\` このbotの説明が表示されます。`,
            false)
}

exports.createDailyEmbed = (week) => {
    // TODO: ここもうちょい綺麗な実装ない？
    const weekString = (w => {
            switch (w) {
                case 0:
                    return '日曜日'
                case 1:
                    return '月曜日'
                case 2:
                    return '火曜日'
                case 3:
                    return '水曜日'
                case 4:
                    return '木曜日'
                case 5:
                    return '金曜日'
                case 6:
                    return '土曜日'
            }
        }
    )(week) // 即時関数

    return new Discord.MessageEmbed()
        .setTitle(weekString + ' の素材一覧')
        .setColor('0x219ddd')
        .setDescription('日付とか入れる？')
        .setURL('https://github.com/Natsu-dev/genshin-tempact')
        .addField(':ballot_box_with_check: About',
            `画像を貼りますの感情`,
            false)
}
