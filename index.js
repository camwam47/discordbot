const Discord = require('discord.js');

const client = new Discord.Client();


const prefix = '*';






client.once('ready', () => {
    console.log('KauzmicBot is online!')
});



client.on('message', message =>{
    if(!message.content.startsWith(prefix)  ||  message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    } else if(command == 'pong'){
        message.channel.send('ping');
    }
     
});







client.login('OTU2MzMxOTA3Nzc4NDc4MTcw.Yjurfg.l-jfphd4o779wrYaoTBZGUq_GHs');
