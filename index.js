const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');

let bot = new Client({
  fetchAllMembers: true, // Remove this if the bot is in large guilds.
  presence: {
    status: 'online',
    activity: {
      name: `${config.prefix}help`,
      type: 'LISTENING'
    }
  }
});

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));

bot.on('message', async message => {
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();
    switch (command) {
      case 'ping':
      case 'p':
        let msg = await message.channel.send('Pinging...');
        await msg.edit(config.pool[Math.round(Math.random() *(config.pool.length - 1))] + `(${Date.now() - msg.createdTimestamp}ms.)`)
        break;
      case 'call':
      case 'signal':
      case 'c':
      case 's':
        for(i = 0;i<5;i++){
            message.channel.send(`${config.pingprefix}${config.ping}>` + args.join(' '))  
        }
        break
      case 'help':
      case 'h':
        message.channel.send("I ping people(`<call`/`<signal``), it's what I do. If you ping me(<ping), I'll tell you something.");
        break;
    }
  }
});

require('./server')();
bot.login(config.token);