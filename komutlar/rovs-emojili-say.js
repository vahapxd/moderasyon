const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["952181983864299520"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "951941159440236544"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:0:952551545705226290>`,
            '1': `<a:1:952551557856124938>`,
            '2': `<a:2:952551564768321536>`,
            '3': `<a:3:952551577921679360>`,
            '4': `<a:4:952551585349763112>`,
            '5': `<a:5:952551608481370163>`,
            '6': `<a:6:952551629838745630>`,
            '7': `<a:7:952551647450636308>`,
            '8': `<a:8:952551657730887721>`,
            '9': `<a:9:952551675011412079>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
  '0': `<a:0:952551545705226290>`,
  '1': `<a:1:952551557856124938>`,
  '2': `<a:2:952551564768321536>`,
  '3': `<a:3:952551577921679360>`,
  '4': `<a:4:952551585349763112>`,
  '5': `<a:5:952551608481370163>`,
  '6': `<a:6:952551629838745630>`,
  '7': `<a:7:952551647450636308>`,
  '8': `<a:8:952551657730887721>`,
  '9': `<a:9:952551675011412079>`}[d];})}

var taglılar = 0;
let tag = "Valué";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
  '0': `<a:0:952551545705226290>`,
  '1': `<a:1:952551557856124938>`,
  '2': `<a:2:952551564768321536>`,
  '3': `<a:3:952551577921679360>`,
  '4': `<a:4:952551585349763112>`,
  '5': `<a:5:952551608481370163>`,
  '6': `<a:6:952551629838745630>`,
  '7': `<a:7:952551647450636308>`,
  '8': `<a:8:952551657730887721>`,
  '9': `<a:9:952551675011412079>`}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:0:952551545705226290>`,
            '1': `<a:1:952551557856124938>`,
            '2': `<a:2:952551564768321536>`,
            '3': `<a:3:952551577921679360>`,
            '4': `<a:4:952551585349763112>`,
            '5': `<a:5:952551608481370163>`,
            '6': `<a:6:952551629838745630>`,
            '7': `<a:7:952551647450636308>`,
            '8': `<a:8:952551657730887721>`,
            '9': `<a:9:952551675011412079>`}[d];})}
  
  
  
  
var booster = message.guild.roles.cache.get("814601689629196300").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:zeze0:814601620691222568>`,
            '1': `<a:zeze1:814601516262096986>`,
            '2': `<a:zeze2:814601528584175616>`,
            '3': `<a:zeze3:814601539788341308>`,
            '4': `<a:zeze4:814601550987133008>`,
            '5': `<a:zeze5:814601562382008400>`,
            '6': `<a:zeze6:814601574499745842>`,
            '7': `<a:zeze7:814601585673240597>`,
            '8': `<a:zeze8:814601597426204723>`,
            '9': `<a:zeze9:814601609157148682>`}[d];})}

  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye Bulunmaktadır.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}