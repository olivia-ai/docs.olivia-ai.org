# Introduction
## Description
Olivia is an open-source chatbot built in Golang using Machine Learning technologies.
Its goal is to provide a free and open-source alternative to big services like DialogFlow. 

You can chat with her by speaking or writing, she replies with a text message but you can enable her voice.

You can download the project and customize it as you want using [GitHub](https://github.com/olivia-ai/olivia)
Try it on [her website!](https://olivia-ai.org)

## Why Olivia?
First of all, I love using open-source tools and contributing to the open-source world.
Then, in 2017 I was searching for tools to build a chatbot and I didn't really find an open-source chatbot in Go who was modulable and easy to deploy.
Though, I decided to begin Olivia, an open-source chatbot in Go.

## Docker installation
<p align="center">
  <img alt="docker installation" height="100" src="https://i.imgur.com/5NDCfF3.png">
</p>

Pull the image from GitHub Packages
```bash
$ docker pull docker.pkg.github.com/olivia-ai/olivia/olivia:latest
```

Then start it
```bash
$ docker run -d -p 8080:8080 docker.pkg.github.com/olivia-ai/olivia/olivia:latest
```

You can just use the websocket of Olivia now.

To stop it, get the container id:
```bash
$ docker container ls
```
```bash
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES
311b3abb963a        olivia              "./main"            7 minutes ago       Up 7 minutes        0.0.0.0:8080->8080/tcp   quizzical_mayer
```

and stop it
```bash
$ docker container stop 311b3abb963a 
```

The app will automatically check for `res/training.json` file which contains the save of the neural network.
By default when you clone the repository from Github you have a stable save.
If you want to train a new model just delete this file and rerun the app.

## GitHub installation
<p align="center">
  <img height="100" src="https://i.imgur.com/RRPoP69.png">
</p>

Clone the project via GitHub:

```bash 
$ git clone git@github.com:olivia-ai/olivia.git
```

Then download the dependencies
```bash
$ go mod download
```

And run it
```bash
$ go run main.go
```
