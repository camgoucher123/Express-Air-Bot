const Discord = require('discord.js');
const client = new Discord.Client();
var general = "410967357532536834"
var joinleave = "469351590361301023"

client.on('ready', () => {
  console.log("Express Air bot online");
  client.user.setActivity('Type \'help for help!')
});

client.on('guildMemberAdd',member =>{
	let guild = member.guild;
	guild.channels.get(joinleave).send(`Welcome, ${member.user.username} to the Express Air Official Discord! Have a good time here! :wink:`)
})
client.on('guildMemberRemove',member =>{
	let guild = member.guild;
	guild.channels.get(joinleave).send(`Well, ${member.user.username} just left the Discord.. :sob:`)
})


var prefix = "\'"


client.on('message', message => {
  let args = message.content.split(' ');
 var argsresult = args.join(' ');

 if (!message.content.startsWith(prefix)) return;

 if (message.author.bot) return;
 //if (message.channel.id !== ("bot commands")) return
 if (message.channel.type === "dm"){
   message.channel.send("Please use the Express Air Discord to run commands")
   return
 };
  if(message.content.startsWith(prefix+'help')){
   message.reply("A DM has been sent to you for help!")
   message.author.send({embed: {
     color: 3447003,
     title: "Basic Commands",
     description: "All commands must begin with the prefix (\')",
     fields: [{
    name: "help",
    value: "Gives you this menu!"
  },
  {
    name: "urban",
    value: "Search your definition on the Urban Dictionary! \'urban [definition]"

  },
  {
    name: "ping",
    value: "Pong!"

  }]
   }})
 if(message.member.roles.find("name", "Camgoucher123")){
   message.author.send({embed: {
     color: 3447003,
     title: "Moderation Commands",
     description: "All commands must begin with the prefix (\')",
     fields: [{
    name: "Shout (IN DEVELOPMENT, DOES NOT WORK)",
    value: "Shout something to the group! -shout [message]"
  },
  {
    name:"???",
    value: "??? (Coming soon)"
  }
]
   }

 })}
} else
if(message.content.startsWith(prefix+'ping')) {
message.channel.send('Pinging!').then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`) );
} else
if(message.content.startsWith(prefix + 'urban')){
let question = args[1];
if(!question) return message.channel.send("You must provide something to search!")
message.reply("The definition for, " + args[1] + ' is this: http://www.urbandictionary.com/define.php?term='+ args[1])
}
});

client.login(process.env.BOT_TOKEN);
