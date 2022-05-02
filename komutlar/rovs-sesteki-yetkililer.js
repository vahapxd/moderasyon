const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let enAltYetkiliRolü = message.guild.roles.get("952553751183499295"); // en alttaki rol id
  let yetkililer = message.guild.members.filter(uye => uye.highestRole.position >= enAltYetkiliRolü.position);
  let embed = new Discord.RichEmbed().setTitle(message.guild.name + " Yetkili Sayımı").setTimestamp().setFooter(message.author.tag + " tarafından istendi!")
  .setDescription(`Toplam Yetkili Sayısı: ${yetkililer.size}\nAktif Yetkili Sayısı: ${yetkililer.filter(uye => uye.presence.status !== "offline").size}\nSesli Kanalda Bulunanlar: ${yetkililer.filter(uye => uye.voiceChannel).size} | Bulunmayanlar: ${yetkililer.filter(uye => !uye.voiceChannel).size}`)
  // Online Üye Sayısı: ${message.guild.members.filter(uye => uye.presence.status !== "offline").size}
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkilisay',
  description: 'Yetkilileri sayar.',
  usage: 'yetkilisay',
  kategori: 'yetkili'
};