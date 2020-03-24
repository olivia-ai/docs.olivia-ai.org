# Modules
With olivia, you can easily add a module:

First of all make sure you are working inside `GOPATH/src/github.com/olivia-ai/olivia`
Just write in a new file inside the `modules` package

A module is composed with a `Replacer()` function which contains the core of the module and the `init()` function which contains the module registerer 

```go
packages modules

var nameGetterTag = "name getter"

func init() {
	RegisterModule(Module{
		Tag: nameGetterTag,
		Patterns: []string{
			"Do you know my name?",
		},
		Responses: []string{
			"Your name is %s!",
		},
		Replacer: NameGetterReplacer,
	})
}

func NameGetterReplacer(_, response, token string) (string, string) {
	name := user.GetUserInformation(token).Name

	if strings.TrimSpace(name) == "" {
		responseTag := "don't know name"
		return responseTag, util.GetMessage(responseTag)
	}

	return nameGetterTag, fmt.Sprintf(response, name)
}
```

If there's already a save (`res/training.json`) you must delete it and re-run the REST Api

You can look at the existent modules [here](https://github.com/olivia-ai/olivia/tree/master/modules)
