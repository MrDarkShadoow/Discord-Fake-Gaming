const keepAlive = require("./server")
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("GAME", { type: "PLAYING"})
   console.log(`${client.user.username} Successfully!`)
})

keepAlive();
client.login(process.env.TOKEN);
