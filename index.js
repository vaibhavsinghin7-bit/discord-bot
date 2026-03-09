// index.js - Discord Bot Ready for Railway

const { Client, GatewayIntentBits } = require("discord.js");

// Create a new Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// When the bot is ready
client.once("ready", () => {
    console.log(`Bot is online! Logged in as ${client.user.tag}`);
});

// Simple command example
client.on("messageCreate", message => {
    if (message.author.bot) return; // Ignore other bots

    // Example command: !ping
    if (message.content.toLowerCase() === "!ping") {
        message.channel.send("Pong!");
    }

    // You can add more commands here
});

// Login using your Railway environment variable
client.login(process.env.DISCORD_BOT_TOKEN);
