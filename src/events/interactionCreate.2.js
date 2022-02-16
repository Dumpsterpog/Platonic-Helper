  const Discord = require('discord.js')
  const { MessageEmbed, MessageActionRow, MessageButton, CommandInteraction } = require('discord.js');
  
  module.exports = async (client, interaction) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('GET HELP!')
    .setDescription('Invite link is posted in <#936952841615073280>')

    const prefix = new Discord.MessageEmbed()
    .setTitle('GET HELP!')
    .setDescription('Prefix for Platonic is `/`')

    const setup = new Discord.MessageEmbed()
    .setTitle('GET HELP!')
    .setDescription('Check <#940817004439404604>')

    const lag = new Discord.MessageEmbed()
    .setTitle('GET HELP!')
    .setDescription('Type `/ping` if the ping is high then wait for it to low down or check the outages channel in our support server')

    const offline = new Discord.MessageEmbed()
    .setTitle('GET HELP!')
    .setDescription('This can happen because we restart the bot to update the bot or to fix some bugs this usually happens every 2-3 days , maximum outage can be of 15 mins not more than that.')

    const privacy = new Discord.MessageEmbed()
    .setTitle('Privacy Policy')
    .setDescription('By using Platonic, you agree to the following privacy policy. ')
    .addField('1. Private data we receive and collect.','Platonic stores your discord user id, server id, role id, channel id and message id.  ')
    .addField('2. Why we store the information and how we use it?','1)**USER ID**-When a ticket is created bot stores the user id so that it can send info about the ticket in logs when the ticket is closed bot can set the `VIEW_CHANNELS` perms to false and when to re-opened bot can set the `VIEW_CHANNELS` perms to true of that user who created the ticket\n2)**SERVER-ID**-Bot stores it for checking if the panel is still available or not for that server\n3)**ROLE ID**-Bot stores it when a ticket is created it can assign the moderator to help the user\n4)**CHANNEL AND MESSAGE ID**-Bot stores it for checking if the channel is a ticket channel or not')
    .addField('3. Who gets this data?','Your data is not shared with anyone.')
    .addField('4. How to Remove your data?','If you would like to remove your data, you can join our support server and create support ticket and post ur `GUILD ID` with the `OWNER\'S ID` with a reason why u want to delete the data. After posting this information pls wait for 24 hours for the deletion of data.')
    const tos = new Discord.MessageEmbed()
    .setTitle('Terms Of Service')
    .setDescription(`Terms Of Service | ToS
    » 1. Your age must be 13 or 13+ or legal consent age for your country.
    » 2. You Must Not Abuse our database by spamming commands
    » 3. You must Not Abuse any feature in your bot.
    » 4. Ticket Panels names must NOT contain any Bad Word.
    » 5. Must Agree to Discord ToS https://discord.com`)
    const permissions = new Discord.MessageEmbed()
    .setTitle('BOT NEEDS THESE PERMS')
    .setDescription(`Listed below are all permissions for optimal bot functionality.Platonic uses Application commands (slash commands ). If they don't show up, re-invite the bot.If they still don't show up, you might have reached a limit.`) 
  .addField('General Permissions',`Administrator (optional), Manage Channels, View Server Insights, Manage Server, Change Nickname, Manage Nicknames, Manage Roles`)
  .addField('Text Permissions',`Read Messages, Send Messages, Embed Links, Attach Files, Add Reactions, Use External Emojis, Manage Messages, Read Message History`)
  .addField('Voice Permissions',`View Channel, Connect, Speak, Use Voice Activity`)

    const commands = new Discord.MessageEmbed()
    .setTitle('GET HELP!')
    .addField('General','`/help`\n`/bot vote` \n `/bot ping` \n `/bot credits`\n `/bot invite` \n`/bot uptime`\n`/bot required-permissions`')
    .addField('Statistics','`/serverinfo`\n `/bot stats`\n`/bot shards`')
    .addField('Tickets','`/ticket create`\n`/ticket start [panel name] [channel]`\n`/ticket remove [panel name]` \n `/ticket logs-enable [panel name] [channel]` \n `/ticket logs-disable [panel name]`\n `/ticket moderator-add [panel-name] [role]`\n `/ticket moderator-remove [panel-name] [role]` \n `/ticket notification [panel name] [channel]`\n `/ticket close` \n `/ticket re-open` \n `/ticket delete`')
   .addField('Purge','`/purge messages [number]` \n `/purge bot-messages`\n `/purge link-messages [number]` \n `/purge emoji-messages [number]` \n `/purge attachment-messages [number]` \n `/purge user-messages [number] [user]` \n `/purge messages-equal [number] [string] ` \n `/purge messages-includes [number] [string]` \n `/purge messages-starts [number] [string]`\n`/purge messages-ends [number] [string]`')
   const general = new Discord.MessageEmbed()
   .setTitle('GENERAL COMMANDS')
   .addField('`/help`','This gives you all the help commands in slash and you can choose your own category.')
   .addField('`/bot vote`','Gives you the vote link.')
   .addField('`/bot ping`','Shows you the bot ping.')
   .addField('`/bot credits`','Credits!')
   .addField('`/bot invite`','Invite!')
   .addField('`/bot uptime`','Get the bots uptime!')
   .addField('`/bot required-permissions`','Platonic required server permissions')

   const statistics = new Discord.MessageEmbed()
   .setTitle('STATISTICS COMMANDS')
   .addField('`/stats`','Gives you the server info')
   .addField('`/bot stats`','Gives you the information about bot')
   .addField('`/bot shards`','Get info about shards')

   const tickets = new Discord.MessageEmbed()
   .setTitle('TICKET COMMANDS')
   .addField('/ticket create [panel-name]','Create a panel first \n For example `/ticket create support`')
   .addField('/ticket start [panel-name] [channel]','S tart a ticket-panel with this command \n for example `/ticket start support #ticket`')
   .addField('/ticket remove [panel-name]','Disable the ticket panel \n For example `/ticket remove support` - After this panel with `support` name wont be functional')
   .addField('/ticket logs-enable [panel name] [channel]','Set the ticket logs channel \n For example `/ticket logs-enable support #ticket-logs`')
   .addField('/ticket logs-disable [panel name]','Remove the ticket logs channel \n For example `/ticket logs-disable support` - After this bot wont be sending any logs in that channel')
   .addField('/ticket moderator-add [panel-name] [role]','Add a moderator role  \n For example `/ticket moderator-add support @support`')
   .addField('/ticket moderator-remove [panel-name] [role]','Remove the moderator role which was added \n For example `/ticket moderator-remove support @support` \n **NOTE: NO MODERATOR ROLES ARE ADDED FROM BEFORE YOU HAVE TO ADD IT ON YOUR OWN**')
   .addField('/ticket notification [panel name] [channel]','Add a notification channel when a ticket opens it pings the moderator role \n For example `/ticket notification support #noti`')
    .addField('/ticket notification-remove [panel name] ','Delete the notification channel \n For example `/ticket notification-remove support`')
    .addField('-------------------------------------------------------------------','**COMMANDS BELOW WILL ONLY WORK IN TICKET CHANNEL**')
    .addField('/ticket close','Close the ticket channel \n For example `/ticket close`')
    .addField('/ticket re-open','Re-open the ticket \n For example `/ticket re-open`')
    .addField('/ticket delete','Delete the ticket \n For example `/ticket delete`')

    const purge = new Discord.MessageEmbed()
    .setTitle('PURGE COMMANDS')
    .addField('/purge messages [number]','Delete the no of messages you want to\n For example `/purge messages 10`')
    .addField('/purge bot-messages','Clear all bot messages\n For example `/purge bot-messages`')
    .addField('/purge link-messages [number]','Clear those messages which contains links\n For example `/purge link-messages 10`')
    .addField('/purge emoji-messages [number]','Clear those messages which contain emojis\n For exameple `/purge emoji-messages 10`')
    .addField('/purge attachment-messages [number]','Clear those messsages which contains attachments\n For example `/purge attachment-messages 10`')
    .addField('/purge user-messages [number] [user]','Clear user messages\n For example `/purge user-messages 10 @Shisui`')
    .addField('/purge messages-equal [number] [string]','Clear messages which contains a word\n For example `/purge message-equal 10 hi`')
    .addField('/purge messages-includes [number] [string]','Clear messages which include something\n For example `/purge messages-equal 10 nth`')
    .addField('/purge messages-starts [number] [string]','Clear messages which starts with something\n For example `/purge messages-starts 10 yo`')
    .addField('/purge messages-ends [number] [string]','Clear messages which ends with something\n For example `/purge messages-ends 10 thanks`')
   const support = new Discord.MessageEmbed()
   .setTitle('GET HELP!')
   .setDescription('Move to <#936943816802451557> and create a ticket')
   const help = new MessageActionRow().addComponents(
    new MessageButton().setStyle("SUCCESS").setLabel("GENERAL").setCustomId("general"),
    new MessageButton().setStyle("SUCCESS").setLabel("TICKETS").setCustomId("ticket"),
    new MessageButton().setStyle("SUCCESS").setLabel("STATISTICS").setCustomId("stats"),
    new MessageButton().setStyle("SUCCESS").setLabel("PURGE").setCustomId("purge"),
);

            if(interaction.isButton()) {
          if (interaction.customId === 'button') {
           interaction.reply({embeds: [embed], ephemeral: true})
        
            }else  if(interaction.customId === 'button2') {
            
                interaction.reply({embeds: [prefix], ephemeral: true})

                }else  if(interaction.customId === 'button3') {
                    interaction.reply({embeds: [setup], ephemeral: true})
                  }else  if(interaction.customId === 'button4') {
                    interaction.reply({embeds: [lag], ephemeral: true})
                  }else  if(interaction.customId === 'button5') {
                    interaction.reply({embeds: [offline], ephemeral: true})
                  }else  if(interaction.customId === 'button6') {
                    interaction.reply({embeds: [privacy], ephemeral: true})
                  }else  if(interaction.customId === 'button7') {
                    interaction.reply({embeds: [privacy, tos], ephemeral: true})
                  }else  if(interaction.customId === 'button8') {
                    interaction.reply({embeds: [permissions], ephemeral: true})
                  }else  if(interaction.customId === 'button9') {
                    interaction.reply({embeds: [commands], components: [help], ephemeral: true})
                  }else  if(interaction.customId === 'button10') {
                    interaction.reply({embeds: [support], ephemeral: true})
//commands
                  }else  if(interaction.customId === 'general') {
                    interaction.reply({embeds: [general], ephemeral: true})
                  }else  if(interaction.customId === 'ticket') {
                    interaction.reply({embeds: [tickets], ephemeral: true})
                  }else  if(interaction.customId === 'stats') {
                    interaction.reply({embeds: [statistics], ephemeral: true})
                  }else  if(interaction.customId === 'purge') {
                    interaction.reply({embeds: [purge], ephemeral: true})
                  }
            }
        }