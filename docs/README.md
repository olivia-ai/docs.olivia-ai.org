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

### Advanced parameters

If you want to change the port where Olivia's REST Api is running just change the `PORT` environment variable to the port you want to use.

## How to use
To use the REST Api you must establish `POST` request to `/api/response` with two parameters:
- `sentence` which is the message you want to send to Olivia
- `authorId` which is an arbitrary ID to identify the user for having a contextual chat

### Example with curl
```bash
curl -X POST 'https://olivia-api.herokuapp.com/api/response' --data "sentence=Hello" --data "authorId=81278329032"
```
