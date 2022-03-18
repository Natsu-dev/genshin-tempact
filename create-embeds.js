const Discord = require("discord.js");

exports.createGreetingEmbed = () => {

    return new Discord.MessageEmbed()
        .setTitle('Genshin Tempact')
        .setColor('0x219ddd')
        .setDescription('Version ' + '1.0.0')
        .setURL('https://github.com/Natsu-dev/otenki.js')
        .addField(':ballot_box_with_check: About',
            `毎日5時に武器突破素材、天賦素材の一覧を書き込むbotです。
            詳しい仕様はGitHubリポジトリ( https://github.com/Natsu-dev/otenki.js )に掲載していますので、必ずご一読ください。`,
            false)
        .addField(':ballot_box_with_check: Commands',
            `\`gt:info\`, \`gt:i\` このbotの説明が表示されます。`,
            false)
}

exports.createDailyEmbed = (week) => {

    return new Discord.MessageEmbed()
        .setTitle(String(week) + '素材一覧')
        .setColor('0x219ddd')
        .setDescription('Version ' + '1.0.0')
        .setURL('https://github.com/Natsu-dev/otenki.js')
        .addField(':ballot_box_with_check: About',
            `画像を貼りますの感情`,
            false)
}
