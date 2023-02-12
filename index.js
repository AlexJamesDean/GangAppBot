const { Client, MessageEmbed, Intents, MessageFlags } = require('discord.js');
const { createConnection } = require('mysql');
const { CLIENT_FOUND_ROWS } = require('mysql/lib/protocol/constants/client');
const { WOKCommands } = require('wokcommands');
const config = require('./config.json');
const welcome = require('./welcome');
const { path } = require('path');
const { ignore } = require('nodemon/lib/rules');



const client = new Client({ intents: [
	"GUILDS",
	"GUILD_MESSAGES",
	"GUILD_MEMBERS"

] });

// Prepare the mysql connection
let con = createConnection(config.mysql);

// Then we are going to connect to our MySQL database and we will test this on errors
con.connect(err => {
    // Console log if there is an error
    if (err) return console.log(err);

    // No error found?
    console.log(`MySQL has been connected!`);
});

	// Ready event
client.on('ready', () => {
    // Log when bot is ready
    console.log(`${client.user.tag} is online!`);
	welcome(client)
});

client.on("messageCreate", (message) => {
    if (message.content == "/register prospect"){
        message.reply("Become a Gambino prospect - http://obnxs.xyz/gambino/register/prospect.php")
    }
    if (message.content == "/register soldier"){
        message.reply("Register your information soldier - http://obnxs.xyz/gambino/register/soldier.php")
    }
    if (message.content == "/register captain"){
        message.reply("Nice to see you Captain, register yourself - http://obnxs.xyz/gambino/register/captain.php")
    }
    if (message.content == "/register underboss"){
        message.reply("Why have you not done this already? - http://obnxs.xyz/gambino/register/underboss.php")
    }
    if (message.content == "/register boss"){
        message.reply("Or you could learn to edit the database manually, boss - http://obnxs.xyz/gambino/register/boss.php")
    }

	if (message.content == "/show drugfund"){
        con.query("SELECT * FROM savings WHERE name = 'drugfund'", function (err, result) {
            if (err) throw err;
            console.log(result);
            message.channel.send("We have $"+ JSON.stringify(result[0].value)+" / $1,800,000 For Drugs");
          })
		}
		if (message.content == "/show vineyard"){
			con.query("SELECT * FROM savings WHERE name = 'vineyard'", function (err, result) {
				if (err) throw err;
				console.log(result);
				message.channel.send("We have $"+ JSON.stringify(result[0].value)+" / $8,000,000 For The Vineyard");
			  })
			}
			if (message.content == "/show motels"){
				con.query("SELECT * FROM savings WHERE name = 'motels'", function (err, result) {
					if (err) throw err;
					console.log(result);
					message.channel.send("We have $"+ JSON.stringify(result[0].value)+" / $15,000,000 For Drugs");
				  })
				}
				if (message.content == "/show gambling"){
					con.query("SELECT * FROM savings WHERE name = 'gambling'", function (err, result) {
						if (err) throw err;
						console.log(result);
						message.channel.send("We have $"+ JSON.stringify(result[0].value)+" / $1,800,000 For Drugs");
					  })
					}
	if (message.content == "/show savings"){
		con.query("SELECT name, value FROM savings", function (err, result) {
			if (err) throw err;
			console.log(result[0]);
			const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
			.setTitle('Savings Account')
			.setURL('http://obnxs.xyz/gambino/savings.php')
			.setDescription('The savings account can be updated with /update, /add or /remove commands.')
			.setImage('http://obnxs.xyz/gambino/assets/img/savings.png')
			.addFields(
				{ name: 'Drug Fund', value: ("$"+JSON.stringify(result[0].value)+" / $1,800,000")},
				{ name: 'Gambling', value: ("$"+JSON.stringify(result[1].value)+" / $500,000")},
				{ name: 'Vineyard', value: ("$"+JSON.stringify(result[2].value)+" / $8,000,000")},
				{ name: 'Motels', value: ("$"+JSON.stringify(result[3].value)+" / $15,000,000")}
			)
			message.channel.send({embeds: [exampleEmbed]});
		  })
		}

	if (message.content == "/show user chrisb"){
		con.query("SELECT * FROM roster WHERE id = 8", function (err, result) {
			if (err) throw err;
			console.log(result[0]);
			const exampleEmbed = new MessageEmbed()
			.setColor('#201985')
			.setTitle('User Information')
			.setURL('http://obnxs.xyz/gambino/savings.php')
			.setDescription('Information panel about a member')
			.addFields(
				{ name: 'Name', value: (JSON.stringify(result[0].cityName)), inline: true },
				{ name: 'Role', value: (JSON.stringify(result[0].role)), inline: true },
				{ name: 'Bank', value: ("$"+JSON.stringify(result[0].bank))},
				{ name: 'Savings', value: ("$"+JSON.stringify(result[0].savings)) },
				{ name: 'Cars', value: (JSON.stringify(result[0].vehicles)), inline: true },
				{ name: 'Houses', value: '1', inline: true },
			)
			message.channel.send({embeds: [exampleEmbed]});
			})
		}
	if (message.content == "/show user dianam"){
		con.query("SELECT * FROM roster WHERE id = 7", function (err, result) {
			if (err) throw err;
			console.log(result[0]);
			const exampleEmbed = new MessageEmbed()
			.setColor('#201985')
			.setTitle('User Information')
			.setURL('http://obnxs.xyz/gambino/savings.php')
			.setDescription('Information panel about ')
			.addFields(
				{ name: 'Name', value: (JSON.stringify(result[0].cityName)), inline: true },
				{ name: 'Role', value: (JSON.stringify(result[0].role)), inline: true },
				{ name: 'Bank', value: ("$"+JSON.stringify(result[0].bank))},
				{ name: 'Savings', value: ("$"+JSON.stringify(result[0].savings))},
				{ name: 'Cars', value: (JSON.stringify(result[0].vehicles)), inline: true },
				{ name: 'Houses', value: '1', inline: true },
			)
			message.channel.send({embeds: [exampleEmbed]});
			})
		}
	if (message.content == "/show user doofus"){
		con.query("SELECT * FROM roster WHERE id = 1", function (err, result) {
			if (err) throw err;
			console.log(result[0]);
			const exampleEmbed = new MessageEmbed()
			.setColor('#201985')
			.setTitle('User Information')
			.setURL('http://obnxs.xyz/gambino/savings.php')
			.setDescription('Information panel about ')
			.addFields(
				{ name: 'Name', value: (JSON.stringify(result[0].cityName)), inline: true },
				{ name: 'Role', value: (JSON.stringify(result[0].role)), inline: true },
				{ name: 'Bank', value: ("$"+JSON.stringify(result[0].bank))},
				{ name: 'Savings', value: ("$"+JSON.stringify(result[0].savings))},
				{ name: 'Cars', value: (JSON.stringify(result[0].vehicles)), inline: true },
				{ name: 'Houses', value: '10', inline: true },
			)
			message.channel.send({embeds: [exampleEmbed]});
			})
		}
	if (message.content == "/show user g0ddess"){
		con.query("SELECT * FROM roster WHERE id = 2", function (err, result) {
			if (err) throw err;
			console.log(result[0]);
			const exampleEmbed = new MessageEmbed()
			.setColor('#201985')
			.setTitle('User Information')
			.setURL('http://obnxs.xyz/gambino/savings.php')
			.setDescription('Information panel about ')
			.addFields(
				{ name: 'Name', value: (JSON.stringify(result[0].cityName)), inline: true },
				{ name: 'Role', value: (JSON.stringify(result[0].role)), inline: true },
				{ name: 'Bank', value: ("$"+JSON.stringify(result[0].bank))},
				{ name: 'Savings', value: ("$"+JSON.stringify(result[0].savings))},
				{ name: 'Cars', value: (JSON.stringify(result[0].vehicles)), inline: true },
				{ name: 'Houses', value: '10', inline: true },
			)
			message.channel.send({embeds: [exampleEmbed]});
			})
		}
	if (message.content == "/show user kurtd"){
		con.query("SELECT * FROM roster WHERE id = 5", function (err, result) {
			if (err) throw err;
			console.log(result[0]);
			const exampleEmbed = new MessageEmbed()
			.setColor('#201985')
			.setTitle('User Information')
			.setURL('http://obnxs.xyz/gambino/savings.php')
			.setDescription('Information panel about ')
			.addFields(
				{ name: 'Name', value: (JSON.stringify(result[0].cityName)), inline: true },
				{ name: 'Role', value: (JSON.stringify(result[0].role)), inline: true },
				{ name: 'Bank', value: ("$"+JSON.stringify(result[0].bank))},
				{ name: 'Savings', value: ("$"+JSON.stringify(result[0].savings))},
				{ name: 'Cars', value: (JSON.stringify(result[0].vehicles)), inline: true },
				{ name: 'Houses', value: '0', inline: true },
			)
			message.channel.send({embeds: [exampleEmbed]});
			})
		}
	if (message.content == "/show user red"){
		con.query("SELECT * FROM roster WHERE id = 6", function (err, result) {
			if (err) throw err;
			console.log(result[0]);
			const exampleEmbed = new MessageEmbed()
			.setColor('#201985')
			.setTitle('User Information')
			.setURL('http://obnxs.xyz/gambino/savings.php')
			.setDescription('Information panel about ')
			.addFields(
				{ name: 'Name', value: (JSON.stringify(result[0].cityName)), inline: true },
				{ name: 'Role', value: (JSON.stringify(result[0].role)), inline: true },
				{ name: 'Bank', value: ("$"+JSON.stringify(result[0].bank))},
				{ name: 'Savings', value: ("$"+JSON.stringify(result[0].savings))},
				{ name: 'Cars', value: (JSON.stringify(result[0].vehicles)), inline: true },
				{ name: 'Houses', value: '1: Reds Mansion', inline: true },
			)
			message.channel.send({embeds: [exampleEmbed]});
			})
		}
	if (message.content == "/show user rufus"){
		con.query("SELECT * FROM roster WHERE id = 3", function (err, result) {
			if (err) throw err;
			console.log(result[0]);
			const exampleEmbed = new MessageEmbed()
			.setColor('#201985')
			.setTitle('User Information')
			.setURL('http://obnxs.xyz/gambino/savings.php')
			.setDescription('Information panel about ')
			.addFields(
				{ name: 'Name', value: (JSON.stringify(result[0].cityName)), inline: true },
				{ name: 'Role', value: (JSON.stringify(result[0].role)), inline: true },
				{ name: 'Bank', value: ("$"+JSON.stringify(result[0].bank))},
				{ name: 'Savings', value: ("$"+JSON.stringify(result[0].savings))},
				{ name: 'Cars', value: (JSON.stringify(result[0].vehicles)), inline: true },
				{ name: 'Houses', value: '10', inline: true },
			)
			message.channel.send({embeds: [exampleEmbed]});
			})
		}
		if (message.content == "/show user charlesb"){
			con.query("SELECT * FROM roster WHERE id = 4", function (err, result) {
				if (err) throw err;
				console.log(result[0]);
				const exampleEmbed = new MessageEmbed()
				.setColor('#201985')
				.setTitle('User Information')
				.setURL('http://obnxs.xyz/gambino/savings.php')
				.setDescription('Information panel about ')
				.addFields(
					{ name: 'Name', value: (JSON.stringify(result[0].cityName.replace(/\"/g, ""))), inline: true },
					{ name: 'Role', value: (JSON.stringify(result[0].role)), inline: true },
					{ name: 'Bank', value: ("$"+JSON.stringify(result[0].bank))},
					{ name: 'Savings', value: ("$"+JSON.stringify(result[0].savings))},
					{ name: 'Cars', value: (JSON.stringify(result[0].vehicles)), inline: true },
					{ name: 'Houses', value: '1', inline: true },
				)
				
				.setTimestamp()
				.setFooter({ text: 'Success!'});
				message.channel.send({embeds: [exampleEmbed]});
				})

			}
			if (message.content == "/update user"){
				message.reply("Please login and update your account information - http://obnxs.xyz/gambino/login.php")
			}
			if (message.content == "/purge drugfund"){
				con.query("UPDATE `savings` SET `value` = '0' WHERE `savings`.`name` = 'drugfund';", function (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Drug Fund Purged - $0, Good luck corner selling!");
				  })
			}
			if (message.content == "/add drugfund 100k"){
				con.query("UPDATE savings SET value = value + 100000 WHERE name = 'drugfund'", function (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Added $100,000 to the drug fund, thanks!");
				  })
			}
			if (message.content == "/add drugfund 10k"){
				con.query("UPDATE savings SET value = value + 10000 WHERE name = 'drugfund';", function async (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Added $10,000 to the drug fund - you can do better than that!");
				  })
			}
			if (message.content == "/purge vineyard"){
				con.query("UPDATE `savings` SET `value` = '0' WHERE `savings`.`name` = 'vineyard';", function (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Vineyard Purged - Did we get it? :O");
				  })
			}
			if (message.content == "/add vineyard 100k"){
				con.query("UPDATE savings SET value = value + 100000 WHERE name = 'vineyard'", function (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Added $100,000 to the Vineyard fund, thanks!");
				  })
			}
			if (message.content == "/add vineyard 10k"){
				con.query("UPDATE savings SET value = value + 10000 WHERE name = 'vineyard';", function async (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Added $10,000 to the Vineyard fund - Keep it up soldier!");
				  })
			}
			if (message.content == "/purge gambling"){
				con.query("UPDATE `savings` SET `value` = '0' WHERE `savings`.`name` = 'gambling';", function (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Gambling Fund Purged - $0, Good luck at the tables!");
				  })
			}
			if (message.content == "/add gambling 100k"){
				con.query("UPDATE savings SET value = value + 100000 WHERE name = 'gambling'", function (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Added $100,000 to fuel our gambling addiction, thanks!");
				  })
			}
			if (message.content == "/add gambling 10k"){
				con.query("UPDATE savings SET value = value + 10000 WHERE name = 'gambling';", function async (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Added $10,000 to the gambling fund - One or two hands of Blackjack wonldn't hurt.");
				  })
			}
			if (message.content == "/purge motels"){
				con.query("UPDATE `savings` SET `value` = '0' WHERE `savings`.`name` = 'motels';", function (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Motels Fund Purged - $0, We buying more already?");
				  })
			}
			if (message.content == "/add motels 100k"){
				con.query("UPDATE savings SET value = value + 100000 WHERE name = 'motels'", function (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Keep it up, we about to run motels in this city");
				  })
			}
			if (message.content == "/add motels 10k"){
				con.query("UPDATE savings SET value = value + 10000 WHERE name = 'motels';", function async (err, result) {
					if (err) throw err;
					console.log(result);
					
					message.channel.send("Added $10,000 to the motels fund - keep it up lil homie");
				  })
			}
			
		

});

// Login into your bot with the bot token
client.login(config.client.token);