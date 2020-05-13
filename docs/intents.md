# Intents
## Adding via the file system
The intents are patterns of messages grouped with a tag like for example

```json
{
    "tag": "hello",
    "patterns": ["Hey", "Hello", "Hi", "Good morning"],
    "responses": ["Hey!", "Hello", "Hi!", "Good morning!"],
    "context": ""
}
```

They are located in the `res/locales/<locale>/intents.json` file.

## Adding via the Web dashboard
You can see intents and add some in the Web Dashboard, a preview is available [here](https://olivia-ai.org/dashboard/intents).

<p align="center">
    <img src="https://i.imgur.com/WYJ2iUI.png">
</p>

At the start of Olivia, you get an authentication token which you can use to log-in using the **“Enter credentials”** button.

### Form
Then, you can add intents via the **“Create button”**:
<p align="center">
    <img src="https://i.imgur.com/02x57Wf.png" width="600">
</p>

### QR Code
You can share intents via their QR code:
<p align="center">
    <img src="https://i.imgur.com/NLrgnpL.png">
</p>

And add them directly by scanning this QR Code via the **“Scan”** button.
<p align="center">
    <img src="https://i.imgur.com/WoNgR1m.png" width="400">
</p>