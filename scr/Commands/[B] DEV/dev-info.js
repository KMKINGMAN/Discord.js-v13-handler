import { Client } from "../../BACESYSTEM/KMCodes.js";
import { Message, CommandInteraction, MessageButton, MessageActionRow, MessageEmbed } from 'discord.js'
export default {
    general: {
        name: `devs`,
        permissions:{
            me: "",
            bot: ""
        },
        description: "Show Dev info",
        examples: ["devs"],
        usage: ["devs"],
        category: `Dev `,
        /**
         * 
         * @param {Client} client 
         * @param {Message} kmsg 
         * @param {Array} args 
         * @param {} manager
         */
        run: async(client, kmsg, args, manager)=>{            
            const row = new MessageActionRow()
            .addComponents(
            new MessageButton()
                .setLabel('GitHub')
                .setStyle('LINK')
                .setURL(`https://github.com/KMKINGMAN`),
            new MessageButton()
            .setLabel('Discord Server')
                .setStyle('LINK')
                .setURL(`https://discord.gg/kingmandev`),
            );
            let devloper = new MessageEmbed()
            .setTitle(`Bot developer`)
            .setDescription(`**Mr: Muhammad Kurkar**`)
            .addFields(
            { name: '**\\📱 Phone Number**', value: '+962792914245', inline: false },
            { name: '**\\📶 GitHub**', value: '**[click here]( https://github.com/KMKINGMAN )**', inline: false },
            { name: '**\\❤️ Discord Server**', value: '**[KMCodes]( https://discord.gg/kingmandev )**', inline: false },
            )
            kmsg.channel.send({
                embeds: [devloper], 
                components: [row]
            })
        }
    },
    slachcmd: {
        name: `devs`,
        permissions:{
            me: "",
            bot: ""
        },
        description: "Show Dev info",
        examples: ["devs"],
        usage: ["devs"],
        category: `Dev `,
        /**
         * 
         * @param {Client} client 
         * @param {CommandInteraction} interaction 
         */
        run: async(client, interaction)=> {
            const row = new MessageActionRow()
            .addComponents(
            new MessageButton()
                .setLabel('GitHub')
                .setStyle('LINK')
                .setURL(`https://github.com/KMKINGMAN`),
            new MessageButton()
            .setLabel('Discord Server')
                .setStyle('LINK')
                .setURL(`https://discord.gg/kingmandev`),
            );
            let devloper = new MessageEmbed()
            .setTitle(`Bot developer`)
            .setDescription(`**Mr: Muhammad Kurkar**`)
            .addFields(
            { name: '**\\📱 Phone Number**', value: '+962792914245', inline: false },
            { name: '**\\📶 GitHub**', value: '**[click here]( https://github.com/KMKINGMAN )**', inline: false },
            { name: '**\\❤️ Discord Server**', value: '**[KMCodes]( https://discord.gg/kingmandev )**', inline: false },
            )
            interaction.reply({
                embeds: [devloper], 
                components: [row]
            })
        }
    }
}