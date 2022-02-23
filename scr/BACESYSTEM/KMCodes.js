import { Client, Collection } from 'discord.js';
import { default as pkgs } from './Utils/pkgs.js';
import { default as ownpkgs } from './OwnClasses/Classes.js';
import { default as config } from './Config.js'
class KINGMAN extends Client{
    constructor(ops){
        super(ops)
        this.commands = new Collection();
        this.slach = new Collection();
        this.alia = new Collection();
        ['cmd', 'events'].forEach(async (eve) => {
            (await import(`./Handler/${eve}.js`)).default(this)
        });
        this.pkgs = pkgs;
        this.ownpkgs = ownpkgs;
        this.config = config;
    }
}
export { KINGMAN as Client }
export default KINGMAN;