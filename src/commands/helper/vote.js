const { Client, CommandInteraction, MessageEmbed} = require('discord.js');

const Discord = require('discord.js')
module.exports = {
    data: {
        name: "vote",
        description: "vote for platonic",
        options: [],
    },

    run: async (client, interaction, args) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('VOTE FOR PLATONIC')
        .setDescription('[dbl.com](https://discordbotlist.com/bots/platonic)\n [top.gg](https://top.gg/bot/933737467360718868)')
        .setFooter('HELP PLATONIC GROW BY VOTING!')
interaction.reply({embeds: [embed]})
    }
}
