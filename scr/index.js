/**
 * @name kmcodes-discord-js-handler-v13
 * @author kingman-muhammad-rafat-kurkar +962792914245
 * @github https://github.com/KMKINGMAN
 */
import { Client } from './BACESYSTEM/KMCodes.js'
const client = new Client({
    intents: 32767
});
client.login(client.config.token)
