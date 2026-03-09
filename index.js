// index.js - Minimal Working Discord Bot for Railway

const { Client, GatewayIntentBits } = require("discord.js");

// Create a new bot client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// When bot is ready
client.once("ready", () => {
    console.log(`Bot is online! Logged in as ${client.user.tag}`);
});

// Handle messages
client.on("messageCreate", message => {
    if (message.author.bot) return; // Ignore other bots

    if (message.content.toLowerCase() === "!ping") {
        message.channel.send("Pong!");
    }

    if (message.content.toLowerCase() === "!hello") {
        message.channel.send(`Hello, ${message.author.username}!`);
    }
});

// Login using Railway environment variable
client.login(process.env.DISCORD_BOT_TOKEN);
