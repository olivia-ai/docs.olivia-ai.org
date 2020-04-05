# Architecture
How Olivia is working deep down.

![](https://i.imgur.com/G9BYf4Y.png)

## Neural network training
First of all comes the neural network training.
It retrieves all the intents from `res/intents.json` and the modules, it changes the sentences into words bags, link them to their tag and put them into the neural network.

Then the neural network learns from the intents data and save it into `res/training.json`.

## Message sending
When you send a message to Olivia, it passes through a WebSocket and the server calculates the result.
It calculates the prediction via the neural network and returns a list of tags and their prediction value as a float.
We get the first prediction as the right one, and chooses a random message from `res/intents.json` with the given tag.

## User token 
To remind of the context and information, a random token is assigned to each user.
