/*komutlarım.js*/

const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    const plasmic = new Discord.MessageEmbed()
    .setTitle("buyur bebeğim")
    .setDescription(`
    **Eveeeeeet! Toplamda ${client.commands.size} kadar komutum var! Bunları şöyle sıralarız:**
    ${client.commands.map(kmt => `${kmt.help.name}`).join('\n')}
    `)
    message.channel.send(plasmic)
};
        exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: [],
            permLevel: 0
        }
        exports.help = {
            name: "komutlarım"
        }