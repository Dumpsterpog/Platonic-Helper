const { Message, Client, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, Collector, Interaction } = require("discord.js");

module.exports = {
    data: {
        name: "setup-bot",
        description: "Setup the bot",
    },

    /**
     * 
     * @param {*} client const { MessageButton, MessageActionRow, CommandInteraction, MessageComponentInteraction, InteractionCollector, MessageCollector } = require('discord.js');
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
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        if (!client.owners.includes(interaction.user.id)) return interaction.reply({ content: `Oops! This command is under testing you are not allowed to use it`, ephemeral: true });

     
        const channel = interaction.channel;
        
    
            const embedRules = new MessageEmbed()
            .setTitle("Rules")
            .setDescription("**1. All [Discord ToS and Guidelines](https://discordapp.com/guidelines) apply. [Ban]\n 2. Racism will not be tolerated. [Ban]\n 3. Do not post malicious links or files. [Mute, Ban]\n 4. Do not beg for items (money, nitro or stuff). [Mute, Kick]\n 5. NSFW content is STRICTLY prohibited. [Instant Ban]\n 6. Do not use alts. [Alt acc will be kicked]\n 7. Do not spam. [Warn, Mute]**")
            .addField('Note:', "Rules that list multiple punishments are the order they will be received.")
            .addField('Note 2:', "Not all the rules are listed yet, it'll be updated soon!")
            .setColor('PURPLE')
            const embed = new MessageEmbed()
            .setTitle("Rules and FAQs")
            .setDescription("Choose an option!")
            .setColor('PURPLE')
            const embedFaq = new MessageEmbed()
            .setTitle("FAQs")
            .setDescription("Choose an option from the dropdown menu!")
            .setColor("PURPLE")
            const embedServer = new MessageEmbed()
            .setTitle("Server FAQs")
            .setDescription("Choose an option from the dropdown menu")
            .setColor('PURPLE')
            const embedBot = new MessageEmbed()
            .setTitle("Bot FAQs")
            .setDescription("Choose an option from the dropdown menu")
            .setColor('PURPLE')

            //BOT FAQs
            const bot2 = new MessageEmbed()
            .setTitle("Invite")
            .setDescription("You can invite me to your server by clicking [here](https://discord.com/oauth2/authorize?client_id=880317355627016232&permissions=2415978678&scope=bot%20applications.commands)")
            .setColor('PURPLE')
            const bot1 = new MessageEmbed()
            .setTitle("Bot Information")
            .setDescription("I am a bot developed by Phantomヅ#3132. I am a multi-purpose Discord Bot with many fun, information, utilities and server config commands. I also have join-leave messages, custom-commands and much more stuff.")
            .setColor('PURPLE')
            const bot5 = new MessageEmbed()
            .setTitle("Custom Commands")
            .setDescription("You know what they are! You can create custom commands by using the `?cc-create` command, delete them by using the `?cc-delete` command and get a list of all the custom commands by using the `?cc-list` command!")
            .setColor('PURPLE')
            const bot4 = new MessageEmbed()
            .setTitle("Commands")
            .setDescription("You can get a list of all the bot commands by using the `?help` command!")
            .setColor('PURPLE')
            const bot3 = new MessageEmbed()
            .setTitle("Prefix")
            .setDescription("The default prefix of the bot is `?`. You can change the prefix for your server by using the `?set-prefix` command. If you forget the prefix after changing it, just `@mention` Eternos to get the default and custom prefix. You can reset the prefix by using the `?prefix-reset command`")
            .setColor('PURPLE')
            const bot6 = new MessageEmbed()
            .setTitle("Join-Leave messages")
            .setDescription("For now, you can just set the join and leave channel by using slash commands or normal prefixxed commands. The option to set a custom message is not yet released. Stay Tuned!")
            .setColor('PURPLE')
            const bot7 = new MessageEmbed()
            .setTitle("Moderation")
            .setDescription("The bot features kick, ban, lockdown, mod-nick and timeout moderation commands. You can use both slash and normal prefixxed commands!")
            .setColor('PURPLE')
            const bot8 = new MessageEmbed()
            .setTitle("Custom Slash Commands")
            .setDescription("This feature is not yet added. Stay tuned!")
            .setColor('PURPLE')
            const bot9 = new MessageEmbed()
            .setTitle("Mod Logs")
            .setDescription("This feature is not yet added. Stay tuned!")
            .setColor('PURPLE')
            const bot10 = new MessageEmbed()
            .setTitle("Website")
            .setDescription("Not yet released")
            .setColor('PURPLE')
            const bot11 = new MessageEmbed()
            .setTitle("Documentation")
            .setDescription("Not yet released")
            .setColor('PURPLE')
            
           
           
            //SERVER FAQs
             const rowMain = new MessageActionRow()
       .addComponents(
           new MessageButton()
           .setLabel("RULES")
           .setStyle("PRIMARY")
           .setCustomId("rules"),
           new MessageButton()
           .setLabel("FAQs")
           .setStyle("PRIMARY")
           .setCustomId("faq"),
       )
    channel.send({embeds: [embed], components: [rowMain]})
const rowFaq = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
    .setCustomId('FAQ')
    .setPlaceholder('Choose an option')
    .addOptions([
        {
            label: 'Bot',
            value: 'bot',
            description: 'Bot FAQs',

        }
    ])
)



const BotFAQs = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
    .setCustomId('BotFAQs')
    .setPlaceholder('Choose an option')
    .addOptions([
        {
            label: 'Information',
            value: 'botInfo',
            description: 'Bot information',

        },
        {
            label: 'Invite',
            value: 'botInvite',
            description: 'Bot invite link',

        },
        {
            label: 'Website',
            value: 'website',
            description: 'Bot Website',

        },
        {
            label: 'Documentation',
            value: 'Docs',
            description: 'Documentation',

        },
        {
            label: 'Prefix',
            value: 'prefix',
            description: 'Bot prefix',

        },
        {
            label: 'Commands',
            value: 'botComms',
            description: 'Commands',

        },
        {
            label: 'Custom Commands',
            value: 'botCC',
            description: 'Custom Commands',

        },
        {
            label: 'Join-Leave',
            value: 'botJL',
            description: 'Join-Leave Messages',

        },
        {
            label: 'Moderation',
            value: 'botMod',
            description: 'Moderation through the bot',

        },
        {
            label: 'Custom Slash Commands',
            value: 'botCSC',
            description: 'Custom Slash Commands',

        },
        {
            label: 'Mod Logs',
            value: 'botML',
            description: 'Mod logs feature',

        },
       
    ])
)

       const filter = (interaction) => {
           if(interaction.user.id === interaction.user.id) return true;
           
       }
const collector = interaction.channel.createMessageComponentCollector({
    filter
});
       collector.on("collect", (ButtonInteraction) => {
           const id = ButtonInteraction.customId;

           if(id == 'rules') return ButtonInteraction.reply({ embeds: [embedRules], ephemeral: true})
           if(id == 'faq') return ButtonInteraction.reply({ embeds: [embedFaq], components: [BotFAQs], ephemeral: true})

       })
       collector.on("collect", async (collected) => {
        const value = collected.values;
        
     if(value == 'server') return collected.reply({ embeds: [embedServer], components: [ServerFAQs], ephemeral: true})
        if(value == 'bot') return collected.reply({ embeds: [embedBot], components: [BotFAQs], ephemeral: true})
if(value == 'botInfo') return collected.update({ embeds: [bot1], components: [BotFAQs], ephemeral: true})
if(value == 'botInvite') return collected.update({ embeds: [bot2], components: [BotFAQs], ephemeral: true})

if(value == 'prefix') return collected.update({ embeds: [bot3], components: [BotFAQs], ephemeral: true})
if(value == 'botComms') return collected.update({ embeds: [bot4], components: [BotFAQs], ephemeral: true})
if(value == 'botCC') return collected.update({ embeds: [bot5], components: [BotFAQs], ephemeral: true})

if(value == 'botJL') return collected.update({ embeds: [bot6], components: [BotFAQs], ephemeral: true})
if(value == 'botMod') return collected.update({ embeds: [bot7], components: [BotFAQs], ephemeral: true})
if(value == 'botCSC') return collected.update({ embeds: [bot8], components: [BotFAQs], ephemeral: true})
if(value == 'botML') return collected.update({ embeds: [bot9], components: [BotFAQs], ephemeral: true})
if(value == 'website') return collected.update({ embeds: [bot10], components: [BotFAQs], ephemeral: true})
if(value == 'Docs') return collected.update({ embeds: [bot11], components: [BotFAQs], ephemeral: true})

    })

    }
}
