import {Guild} from "../model/guild";

interface GuildBox {
    [index: number]: Guild
}

abstract class StateManager {
    abstract getGuild(guildId: number): Guild;
}

class MockStateManager extends StateManager {
    _guilds: GuildBox;

    constructor() {
        super();

        this._guilds = {
          1234343: new Guild()
        }
    }

    getGuild(guildId: number): Guild {
        return this._guilds[guildId];
    }
}