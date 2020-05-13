# Translations
<p align="center">
  <img src="https://i.imgur.com/MDKbP0R.png" height="150">
</p>

If you wish to add a language to Olivia, you need to translate the [Backend](https://github.com/olivia-ai/olivia) and the [Frontend](https://github.com/olivia-ai/olivia-ai.org).

## Contributing to existing languages
If you just want to contribute to existing languages, check the [translations coverages](https://olivia-ai.org/dashboard/language) to see which translations are required.

## Backend
To add a language support to the backend of Olivia, 

- first of all make sure that the [stemmer](https://github.com/tebeka/snowball) supports it.- Then, if it does supports it add your language with its name in english in [this map](https://github.com/olivia-ai/olivia/blob/master/locales/locales.go#L14).

- Now you can create a folder named with the locale of the language you are implementing in `res/locales`, you can copy the files from the `en` folder.

- You can now start to translate the `intents.json`, `messages.json` and `stopwords.txt` files.

- Then, you can translate the `modules.go` file.
Please **read the comments** in front of the modules because some of them requires additional translations located in different files.

- Don't worry, if you can't translate all you can just stop and someone who wants to contribute will continue your work. Just make sure that all the modules you've translated are fully translated.

- Don't forget to add the import to your modules files [here](https://github.com/olivia-ai/olivia/blob/master/locales/locales.go#L8)

## Frontend
To add a language support to the frontend of Olivia, 

- Add the language to the locales list [here](https://github.com/olivia-ai/olivia-ai.org/blob/master/src/components/LocaleSwitch.vue#L43)

- Then, add your language here with an existing voice [here](https://github.com/olivia-ai/olivia-ai.org/blob/master/src/views/Chat.vue#L154), since it is a complicated step you can leave it to somebody else but please mention it.

- And you can translate the messages by creating a copy of the `en.json` file [right here](https://github.com/olivia-ai/olivia-ai.org/tree/master/src/i18n).