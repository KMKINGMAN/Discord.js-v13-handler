import { config } from 'dotenv';
config();
import {default as ConfigFile} from '../../config.js';
export default {
    token: process.env.token ? process.env.token : ConfigFile.token,
    prefix: process.env.prefix ? process.env.prefix : ConfigFile.prefix,
    mongodb: process.env.mongo ? process.env.mongo : ConfigFile.mongo_db
}