const redis = require('redis');
const {promisify} = require('util');

module.exports = class RedisService{
    constructor(connectionUrl){
        if (!connectionUrl) throw "Must specify Redis connection URL!";
        this.client = redis.createClient(connectionUrl);
        this.getRaw = promisify(this.client.get).bind(this.client);
        this.setRaw = promisify(this.client.set).bind(this.client);
    }

    static from(params, settings){
        return new RedisService({connectionUrl: params.connectionUrl || settings.connectionUrl});
    }
    
    async get({keys}){
        if (keys.length === 0) throw "Must specify at least one key to get it's value";
        const result = [];
        for (const key of keys){
            try {
                result.push({
                    key, 
                    value: JSON.parse(await this.getRaw(key))
                });
            }
            catch (error) {
                throw `Failed getting the key '${key}'. Error: ${error.message || JSON.stringify(error)}`;
            }
        }
        return result;
    }
    
    async set({key, value}){
        if (!key) throw "Must specify a key to set";
        if (!value) value = '""';
        else value = JSON.stringify(value);
        await this.setRaw(key, value);
        return "success";
    }
}