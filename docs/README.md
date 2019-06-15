# Getting started

## Installation
Clone Olivia's REST Api from the master branch of Github repository

```bash
git clone https://github.com/olivia-ai/olivia.git
```

Then go inside the project and install the dependencies

```bash
cd olivia

# Install the dependencies with dep (https://github.com/golang/dep)
dep ensure
```

And run the application

```bash
go run main.go
```

The REST Api is now listening on the port `8080`, to change it just set it inside the environment variable `PORT`

The app will automatically check for `res/training.json` file which contains the save of the neural network.
By default when you clone the repository from Github you have a stable save.
If you want to train a new model just delete this file and rerun the app.

## How to use
To use the REST Api you must establish `POST` request to `/api/response` with two parameters:
- `sentence` which is the message you want to send to Olivia
- `authorId` which is an arbitrary ID to identify the user for having a contextual chat

The latest release is online at `https://olivia-api.herokuapp.com`

### Example with curl
```bash
curl -X POST 'https://olivia-api.herokuapp.com/api/response' --data "sentence=Hello" --data "authorId=81278329032"
```

The response arrives in this format

```json
{
  "content": "Good morning!",
  "tag": "hello"
}
```