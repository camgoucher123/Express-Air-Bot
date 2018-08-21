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
 if(message.member.roles.find("name", "HR")){
   message.author.send({embed: {
     color: 3447003,
     title: "Moderation Commands",
     description: "All commands must begin with the prefix (\')",
     fields: [{
    name: "shout",
    value: "Shout something to the group! -shout [message]"
  },
  {
    name:"flight",
    value: "Announce a flight, message sends to announcements by default."
  }
]
   }

 })}
} else
if(message.content.startsWith(prefix+'spam')){
  message.guild.members.get("id").send("msg")
 } else
if(message.content.startsWith(prefix+'ping')) {
  message.channel.send('Pinging!').then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`) );
} else
if(message.content.startsWith(prefix + 'urban')){
let question = args[1];
if(!question) return message.channel.send("You must provide something to search!")
message.reply("The definition for, " + args[1] + ' is this: http://www.urbandictionary.com/define.php?term='+ args[1])
} else {
if(message.content.startsWith(prefix+'flight')){
 if(message.member.roles.find("name", "HR")){
   message.channel.guild.channels.get("427891589042667530").send("@everyone Flight! Join the airport! @ https://www.roblox.com/games/1749175903/Ennex-County-International-Airport")
}else
  message.reply("No permissions.")
}}
});


client.login(process.env.BOT_TOKEN);

//roblox stuff under here
var roblox = require('roblox-js');

roblox.login({username: process.env.BOT_USERNAME, password: process.env.BOT_PASSWORD}).then((success) => {

}).catch(() => {console.log("Failed to login.");})

var groupId = "3761375"


 function isCommand(command, message){
   if (message.channel.type === "dm"){
     message.channel.send("Please use the Express Air Discord for commands")
     return
   }};


 client.on('message', (message) => {
 	if (message.author.bot) return;
       var args = message.content.split(' ');
       var argsresult = args.join(' ');

     if(message.content.startsWith(prefix + 'shout')){
	 if(message.member.roles.find("name", "HR")){
    	var shout = args[1]
     	if (shout){
     	roblox.shout(groupId,argsresult.slice(6))
         message.reply("shouted the message:" + argsresult.slice(6))
		}else{

	message.reply("You must provide something to shout!")
  	return
	}
} else{
message.reply("No permissions.")}}

 });

