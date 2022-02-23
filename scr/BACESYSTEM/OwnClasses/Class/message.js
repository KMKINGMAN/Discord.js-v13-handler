import { Client } from '../../KMCodes.js';
import { Message, GuildChannel, MessageEmbed, User, GuildMember, Role } from "discord.js";
import { GET_USER, GET_MEMBER, GET_CHANNEL, GET_ROLE } from "./RES/message-res.js";
class EasyMessage {
    /**
     * 
     * @param {Message} message 
     */
    constructor(message){
        this.message = message
    }
    /**
     * 
     * @param {GuildChannel} channel 
     * @param {String} content 
     * @returns {Message}
     */
    async sendError(channel, content){
        return await channel.send({
            embeds: [
                new MessageEmbed({
                    title: `**⚠️ Error**`,
                    description: `**${content}**`,
                    footer: {
                        text: `${channel.client.user.username} Power By KMCodes`
                    },
                    color: `#f5210a`
                })
            ]
        })
    }
    /**
     * 
     * @param {string} id 
     * @returns {Promise<User>}
     */
    async GetUser(id){
        return new Promise(async (res, rej)=> {
            let user = await this.message.mentions.members.first() || 
            await this.message.guild.members.cache.get(id) ||
            await this.message.guild.members.cache.find(m => m.displayName.toLowerCase() == id.toLowerCase())
            if(!user){
                rej({
                    message: GET_USER.ERR
                })
            } else {
                res(user.user)
            }
        })
    }
    /**
     * 
     * @param {string} id 
     * @returns {Promise<GuildMember>}
     */
     async GetMember(id){
        return new Promise(async (res, rej)=> {
            let user = await this.message.mentions.members.first() || 
            await this.message.guild.members.cache.get(id) ||
            await this.message.guild.members.cache.find(m => m.displayName.toLowerCase() == id.toLowerCase())
            if(!user){
                rej({
                    message: GET_MEMBER.ERR
                })
            } else {
                res(user)
            }
        })
    }
    /**
     * 
     * @param {string} id 
     * @returns {Promise<GuildChannel}
     */
    async GetChannel(id){
        return new Promise(async (res, rej) =>{
            let channel = await this.message.mentions.channels.first() ||
            await this.message.guild.channels.cache.get(id) ||
            await this.message.guild.channels.cache.find((c) => c.name == id);
            if(!channel){
                rej({
                    message: GET_CHANNEL.ERR
                })
            } else {
                res(channel)
            }
        })
    }
    /**
     * 
     * @param {string} id 
     * @returns {Promise<Role}
     */
    async GetRole(id){
        return new Promise(async (res, rej)=> {
            let role = await this.message.mentions.roles.first() ||
            await this.message.guild.roles.cache.get(id) ||
            await this.message.guild.roles.cache.find((role)=> { role.name == id})
            if(!role){
                return rej({
                    message: GET_ROLE.ERR
                })
            }
            if(role.managed || role.name === '@everyone'){
                return rej({
                    message: GET_ROLE.ERR
                })
            } else {
                return res(role)
            }
        })
    }
    /**
     * 
     * @param {GuildChannel} channel 
     * @param {string} content 
     * @returns {Message}
     */
    async SendDone(channel, content, title){
        return await channel.send({
            embeds: [
                new MessageEmbed({
                    title: `${title? title : `**✔️ Succeed**`}`,
                    author: {
                        name: `${this.message.author.username}`
                    },
                    description: `**${content}**`,
                    footer: {
                        text: `${channel.client.user.username} Power By KMCodes`
                    },
                    color: `#ffaa00`
                })
            ]
        })
    }
}
export default EasyMessage;
export { EasyMessage }