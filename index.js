const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on("ready", () => {
  console.log("Bot is online!");
});

client.on("messageCreate", message => {
  if (message.content === "!ping") {
    message.reply("Pong!");
  }
});

client.login("MTQ4MDQxMDMxNzA5OTExMDQ5Mg.GZwxLZ.F4br8hy2Sm4JvC8Qmcgb4PEc_kt7ShhdTMl6RE");
