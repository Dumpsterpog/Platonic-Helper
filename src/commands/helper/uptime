const { Client, CommandInteraction, MessageEmbed} = require('discord.js');
const moment = require("moment");
const momentDurationFormatSetup = require("moment-duration-format");
const Discord = require('discord.js')
module.exports = {
    data: {
        name: "uptime",
        description: "Get this bot's uptime!",
    },

    run: async (client, interaction, args) => {
      //  await interaction.deferReply();
await interaction.reply({content:`Checking`, ephemeral: true})
    const uptime = moment
      .duration(client.uptime)
      .format(" D [Days] - H [Hours] - m [Minutes] - s [Seconds]");

      const upvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

      const up = new Discord.MessageEmbed()
      .setTitle('UPTIME')
      .setDescription(`UPTIME - ${uptime}\n Since: <t:${upvalue}:T>`)
     
      return interaction.followUp({ embeds: [up] , ephemeral: true});

    
  }
};
