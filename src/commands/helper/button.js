const { MessageButton, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    data: {
        name: "help",
        description: "Get some buttons!",
        options: [],
    },

    /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
      
        if (!client.owners.includes(interaction.user.id)) return interaction.reply({ content: `They have been uploaded in <#936942901970210907>`, ephemeral: true });
        const sent = await interaction.reply({content: 'Creating help menu...',fetchReply: true});

        const help = new Discord.MessageEmbed()
        .setTitle('Help Desk')
        .setDescription(`1 - How to invite Platonic? \n\n  2 - What is the prefix for Platonic? \n\n 3 - How to setup the bot?\n\n 4 - Platonic is laggy / Slash commands or buttons not working.\n\n5 - Platonic is offline in my server.\n\n6 - Privacy Policy and Terms of Service\n \n7 - Permissions needed \n \n8- All Commands`)
        .setFooter('None of the above choices helped you? click the red button below ')
        const row = new MessageActionRow().addComponents(
          //  new MessageButton().setStyle("LINK").setURL("https://google.com").setLabel("Google").setEmoji("883586635470606356").setDisabled(true),
            new MessageButton().setStyle("SECONDARY").setLabel("1").setCustomId("button"),
            new MessageButton().setStyle("SECONDARY").setLabel("2").setCustomId("button2"),
            new MessageButton().setStyle("SECONDARY").setLabel("3").setCustomId("button3"),
            new MessageButton().setStyle("SECONDARY").setLabel("4").setCustomId("button4"),
            new MessageButton().setStyle("SECONDARY").setLabel("5").setCustomId("button5")
        );
        const row2 = new MessageActionRow().addComponents(
            new MessageButton().setStyle("SECONDARY").setLabel("6").setCustomId("button7"),
            new MessageButton().setStyle("SECONDARY").setLabel("7").setCustomId("button8"),
            new MessageButton().setStyle("SECONDARY").setLabel("8").setCustomId("button9"),
            new MessageButton().setStyle("DANGER").setLabel("HUMAN SUPPORT").setCustomId("button10")
        );
       

     await interaction.editReply({ content: 'GET HELP!', embeds: [help],components: [row, row2] });
       
    }   
}