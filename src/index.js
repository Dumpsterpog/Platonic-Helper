console.log('CLIENT IS UP')
const { Client, Collection, WebhookClient, MessageEmbed} = require("discord.js");
const Discord = require('discord.js');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const { readdirSync } = require('fs');
const { join } = require('path');

// Creating the client instance
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGE_REACTIONS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
    partials: ["REACTION", "MESSAGE"]
});

client.commands = new Discord.Collection();
client.categories = readdirSync(join(__dirname, "./commands"));
client.owners = ["OWNER ID"];

// Event handler
readdirSync(join(__dirname, "./events")).forEach(file =>
    client.on(file.split(".")[0], (...args) => require(`./events/${file}`)(client, ...args))
);

// Command Handler
for (let i = 0; i < client.categories.length; i++) {
    const commands = readdirSync(join(__dirname, `./commands/${client.categories[i]}`)).filter(file => file.endsWith(".js"));

    for (let j = 0; j < commands.length; j++) {
        const command = require(`./commands/${client.categories[i]}/${commands[j]}`);
        if (!command || !command?.data?.name || typeof (command?.run) !== "function") continue;
        command.category = client.categories[i];
        client.commands.set(command.data.name, command);
    }
}
//error handler
const hook = new WebhookClient({ url: 'webhookurl' }); 
process.on('unhandledRejection', (error) => {
  hook.send(`\`\`\`js\n${error.stack}\`\`\``)
});
process.on("uncaughtException", (err, origin) => {
  hook.send(`\`\`\`js\n${err.stack}\`\`\``)
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
 hook.send(`\`\`\`js\n${err.stack}\`\`\``)
});
process.on('beforeExit', (code) => {
 hook.send(`\`\`\`js\n${code}\`\`\``)
});
process.on('exit', (code) => {
 hook.send(`\`\`\`js\n${code}\`\`\``)
});
process.on('multipleResolves', (type, promise, reason) => {
}); 
// Logging in the client
client.login("login");
