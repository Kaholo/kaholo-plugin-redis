const parsers = require("./parsers");
const RedisService = require('./redis.service');

async function get(action, settings){
    const { keys } = action.params;
    const redis = RedisService.from(action.params, settings);
    return redis.get({
        keys: parsers.array(keys)
    });
}

async function set(action, settings){
    const { key, value } = action.params;
    const redis = RedisService.from(action.params, settings);
    return redis.set({
        key: parsers.string(key),
        value
    });
} 

module.exports = {
    get,
	set
}