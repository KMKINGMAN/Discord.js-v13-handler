import Client from '../KMCodes.js'
/**
 * 
 * @param {Client} client 
 */
let data = async(client) => {
    client.pkgs.fs.readdirSync("./scr//Events").forEach(Folder => {
        const events_folder = client.pkgs.fs.readdirSync(`./scr/Events/${Folder}`).filter(file => file.endsWith(".js"));
        events_folder.forEach(async CommandFile => {
            const eve = (await import(`../../Events/${Folder}/${CommandFile}`)).default;
            if(eve.name){
                client.on(eve.name, (...args) => eve.run(...args, client));
            }
        })
    })

}
export default data;