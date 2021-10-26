# kaholo-plugin-redis
Kaholo plugin for integration with Redis DB.

##  Settings
1. Redis Connection URL (Vault) **Required if not provided in method parameters** - The URL to use to connect to Redis on default. The format of the URL should be redis://[[user]:password@]host[:port][/db-number][?option=value]. For example redis://:SecretPass1234@127.0.0.1:6379.

## Method: Get
Get

## Parameters
1. Redis Connection URL (Vault) **Required if not in settings** - The URL to use to connect to Redis. The format of the URL should be redis://[[user]:password@]host[:port][/db-number][?option=value]. For example redis://:SecretPass1234@127.0.0.1:6379.
2. Keys (Text) **Required** - Keys to return the value of. Seperate each key with a new line. Also accepts an array from code.

## Method: Set
Set

## Parameters
1. Redis Connection URL (Vault) **Required if not in settings** - The URL to use to connect to Redis. The format of the URL should be redis://[[user]:password@]host[:port][/db-number][?option=value]. For example redis://:SecretPass1234@127.0.0.1:6379.
2. Key (String) **Required** - The key to set it's value.
3. Value (String) **Optional** - The value to set to the key. Also accepts any kind of value from code. If not specified will use the empty string "" as the default value.

