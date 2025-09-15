
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`🌿 Mossy is online as ${client.user.tag}`);
    client.user.setPresence({
        activities: [{ name: '🌿 vibing softly', type: ActivityType.Playing }],
        status: 'online',
    });
});

// Responds to "hi mossy"
client.on('messageCreate', message => {
    if (message.content.toLowerCase() === 'hi mossy') {
        message.channel.send('💚 Mossy says hi back!');
    }
});

// Welcome new members
client.on('guildMemberAdd', member => {
    const channel = member.guild.systemChannel;
    if (channel) {
        channel.send(`🌱 Welcome <@${member.id}>! Mossy’s glad you joined 💚`);
    }
});

client.login('YOUR_BOT_TOKEN_HERE');
