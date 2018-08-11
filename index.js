const Discord = require("discord.js");

const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("ready");
    client.user.setActivity(
        `${client.guilds.size} servers | Prefix: ... | Nothing to see here | For Help ...PlzHelp`, { type: "STREAMING", url: "https://www.twitch.tv/ninja" }
    );

    
 
});

client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.author.equals(client.user)) return;

    if(msg.content.startsWith(`${config.PREFIX}Hi`)) {
       msg.reply("I hate you...");  
       msg.react(`😶`);
    
    } else if(msg.content.startsWith(`${config.PREFIX}Bye`)) {
        msg.reply("Dont talk with me...");
        msg.react(`😶`);
    
    } else if(msg.content.startsWith(`${config.PREFIX}Baxter`)) {
      
        msg.channel.send(":regional_indicator_b: :regional_indicator_a: :regional_indicator_x: :regional_indicator_t: :regional_indicator_e: :regional_indicator_r:");
        msg.react(`😶`);
        
    }  else if(msg.content.startsWith(`${config.PREFIX}Avatar`)) {
        let user = msg.mentions.users.first() || msg.author;
        let output = user.username + `#` + user.discriminator
        var embed = new Discord.RichEmbed()
        .setAuthor(`${output}'s avatar`)
        .setImage(user.displayAvatarURL)
        .setColor(3447003)
        .setFooter(`Nothing to see here ;)`)
        msg.channel.send(embed)
    }  
    
    else if(msg.content.startsWith(`${config.PREFIX}PlzHelp`)) {
      
        msg.channel.send("https://rapidui.io/live/1em9dbudrznnupv01616131/Commands.html");
        msg.channel.send("【﻿ＫＩＬＬ　ＭＥ】");
    }      
});



client.login(process.env.TOKEN);
