import { Client } from "../../BACESYSTEM/KMCodes.js";
export default {
    name: 'ready',
    /**
     * 
     * @param {Client} client 
     */
    run: async(client)=> {
        client.pkgs.figlet(`KINGMAN`, (err, data)=> {
            if(err) return console.log(`Err`);
            console.log(client.pkgs.chalk.red(data))
        })
    }
}