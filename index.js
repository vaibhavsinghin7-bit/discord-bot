
// index.js - Discord Bot Ready for Railway

const { Client, GatewayIntentBits } = require("discord.js");

// Create a new Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,            // To know about servers
        GatewayIntentBits.GuildMessages,     // To read messages
        GatewayIntentBits.MessageContent     // To read message content
    ]
});

// When the bot is ready
client.once("ready", () => {
    console.log(`Bot is online! Logged in as ${client.user.tag}`);
});

// Handle messages
client.on("messageCreate", message => {
    if (message.author.bot) return; // Ignore other bots

    // Example command: !ping
    if (message.content.toLowerCase() === "!ping") {
        message.channel.send("Pong!");
    }

    // Add more commands below
    if (message.content.toLowerCase() === "!hello") {
        message.channel.send(`Hello, ${message.author.username}!`);
    }
});

// Login using Railway environment variable
client.login(process.env.DISCORD_BOT_TOKEN);
