module.exports = (client) => {
    const channelId = '928452866379743373'
    const targetChannelId = '976409534333587456'

    client.on('guildMemberAdd', (member) => {
        console.log(member)
        member.guild.channels.cache.get(ChannelId).send('<@$member.id> Welcome to The Gambino Family Discordia.')




    const channel = member.guild.channels.cache.get(ChannelId)
    channel.send(message)
    })
}