const Discord = require('discord.js')
const { Message, Client, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, Collector, Interaction } = require("discord.js");

module.exports = {
    data: {
        name: "update-preview",
        description: "SOON",
    },

    /**
     * 
     * @param {*} client 
     * @param {CommandInteraction} interaction 
     */

     run: async (client, interaction) => {
        const sent = await interaction.reply({content: ' UPDATE RELEASING SOON!', ephemeral: true});

        const release = new Discord.MessageEmbed()
        release.setTitle(`V2 Detailed information`)
        release.setDescription(`This release has many fixes for stability issues.If you have any other issues with the bot pls post in <#939155658962505778>\n\n**NOTE: Anyone who suggests a new feature now and if it gets accepted it wont be released in this update.**`)
         release.setColor('GREEN')
        const release2 = new Discord.MessageEmbed()
        release2.setTitle(`GREETINGS SYSTEM`)
        release2.setDescription(`Greetings system [WELCOME AND LEAVE LOGS]. You will now be able to set WELCOME and LEAVE channel , enable [CANVAS](https://media.discordapp.net/attachments/944911549724778538/945249723395215401/file.jpg?width=960&height=422) for both **leave** and **welcome** module.You can also enable and disable **JOIN-DM** messages\n\n[WELCOME CANVAS](https://media.discordapp.net/attachments/944911549724778538/945249628813660180/file.jpg?width=960&height=422)\n[LEAVE CANVAS](https://media.discordapp.net/attachments/944911570553667624/945609636982173716/file.jpg?width=960&height=422) `)
        release2.setColor('GREEN')
        const release3 = new Discord.MessageEmbed()
        release3.setTitle(`TICKET SYSTEM UPDATE :tada:`)
        release3.setDescription(`We have fixed alot of bugs for example:\n\n **1) Sometimes when creating a ticket button interaction was failing - Fixed ✅\n2) Sometimes when the ticket was created then only channel was created and bot didnt send a message there - Fixed ✅**\n\n🎉 NEW FEATURES ADDED 🎉\n\n**1)Added Transcript feature** *we cant provide more info on this for now*\n\n**2)Reset ticket data- You will be able to delete/reset ticket data for you server**\n\n**3)When you delete the ticket panel and someone tries to create a ticket from that panel PLATONIC will send you a message like this -[MESSAGE](https://media.discordapp.net/attachments/875664130793701377/946685634184101908/unknown.png?width=971&height=89)**`)
        release3.setColor('GREEN')
        const release4 = new Discord.MessageEmbed()
        release4.setTitle(`CONFIGURATIONS`)
        release4.setDescription(`You can now check your server channel setted as \`TICKET, WELCOME , LEAVE \` etc via \`/server config\``)
        release4.setColor('GREEN')
        const release5 = new Discord.MessageEmbed()
        release5.setTitle(`SMALL UPDATES`)
        release5.setDescription(`New Help Menu\n\nServerinfo command has been improved\n\n\`/setup\` command is now available\n\nUsers who abuse the bot and dont follow our TOS will now be blacklisted`)
        release5.setColor('GREEN')
        const release6 = new Discord.MessageEmbed()
        release6.setTitle(`RELEASE DATE`)
        release6.setDescription(`For now i am thinking to release these features in mid-april 2022. I know this is late but there is nothing i can do. Every feature listed above is finished and i am testing it also i am not always free so for now all i can say is this update will be released in mid-april maybe before that`)
         release6.setColor('GREEN')
        await interaction.followUp({content: `Platonic has been verified!\nWe want to thank you all for your support\n\nWe have managed to create an application that not only has gathered enough audience to be eligible for verification, but be independent and unique enough to pass it! This process wasn't easy but it definitely was fun, interesting and I managed to learn a thing or two from it. As a thank you to all of you who trusted my unverified application and decided to use Platonic in your servers.\n\n\n\Again, a big thanks to all who participated and helped throughout this process!\nRegards\nAtharvaaaaaa#4651`,
        embeds: [release, release2, release3, release4, release5, release6]})
    }
}