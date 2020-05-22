# Website client

## Docker-compose
To run the website chat client, you can use Docker-compose by following the [introduction steps](https://docs.olivia-ai.org/#frontend-and-backend)

## NPM
You can run the website with the npm scripts.

### Installation
Clone the project and go inside it with:
```bash
$ git clone git@github.com:olivia-ai/olivia-ai.org.git
$ cd olivia-console
```

Then execute the NPM installation:
```bash
$ npm i
```

### Start the website
Then to start the website execute the `start` script.
Note that you can customize the API Url using the `VUE_APP_URL` environment variable.

```bash
$ npm run serve
```
