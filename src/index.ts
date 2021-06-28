const { Client, Intents } = require('discord.js');
const client = new Client({ intents: Intents.ALL });

const config = require('../config.json');

client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.discord.token);
