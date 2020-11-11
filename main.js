require('dotenv').config() // read token to enviroment
const Discord = require('discord.js');
const client = new Discord.Client();
const mapreplace = require('mapped-replace').default;
const choose = a => a[Math.floor(Math.random() * a.length)];

function maak_netjes (str) {
	return mapreplace(str, {
		'kkr': 'komkommer',
		'kanker': 'griep',
		'kk ': choose(['koelkast', 'kosten koper']),
	});
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('Nu kan ik beginnnen met vervelend doen...\n----------------')
});
client.on('message', msg => {
	msg = msg.content.toLowerCase();
	if (msg == maak_netjes(msg)) return;
	else {
		msg.delete()
		msg.channel.send(`${msg.author.toString()} zei: ${maak_netjes(msg)}`)
	}
});

client.login(process.env.TOKEN);