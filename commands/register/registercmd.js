const BaseCommand = require(../BaseCommand)

module.exports = class RegisterCommand extends BaseCommand {
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
}