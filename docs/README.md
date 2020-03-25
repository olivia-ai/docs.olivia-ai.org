# Introduction
<p align="center">
  <img alt="introduction" height="100" src="https://i.imgur.com/Ygm9CMc.png">
</p>

## Description
Olivia is an open-source chatbot built in Golang using Machine Learning technologies.
Its goal is to provide a free and open-source alternative to big services like DialogFlow. 

You can chat with her by speaking (STT) or writing, she replies with a text message but you can enable her voice (TTS).

You can clone the project and customize it as you want using [GitHub](https://github.com/olivia-ai/olivia)
Try it on [her website!](https://olivia-ai.org)

## Why Olivia?
- The only chatbot project in Go that could be modulable and customizable.
- Using daily a privacy-friendly chatbot is great.
- The Website is a Progessive Web Application, which means you can add it to your phone and it seems like a native app!

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
