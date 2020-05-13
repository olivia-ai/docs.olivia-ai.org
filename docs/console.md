# Console client
The repository is located [here](https://github.com/olivia-ai/olivia-console).

Here is a preview of the tool.
<p align="center">
  <img src="https://github.com/olivia-ai/olivia-console/raw/master/olivia-cc.svg?sanitize=true">
</p>

## Installation
Clone the project and go inside it with:
```bash
$ git clone git@github.com:olivia-ai/olivia-console.git
$ cd olivia-console
```

Then run it:
```bash
$ go build
$ ./olivia-console
```

It will create a default `config.json` file.

## Config
### File
To change the Olivia url just update the `config.json` file.

Here is an example:
```json
{
 "port": "8080",
 "host": "localhost",
 "debug_level": "error",
 "bot_name": "Olivia",
 "user_token": "52fdfc072182654f163f5f0f9a621d729566c74d10037c4d7bbb0407d1e2c64981855ad8681d0d86d1e91e00167939cb6694"
}
```

### Description
* `bot_name` - name for your bot (default - Olivia)
* `debug_level` - verbosity (default - error)
* `host` - host where is running server part of olivia (default - localhost)
* `port` - the same about port
* `user_token` - your own token (default - generated on the first run)