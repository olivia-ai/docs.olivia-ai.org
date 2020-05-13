# Modules
## Write a module
With olivia, you can easily add a module:
Just write in a new file inside the `modules` package

A module is composed of a `Replacer()` function which contains the core of the module and the module registration which is located in the target locale module file `res/locales/<locale>/modules.go`

```go
package modules

var NameGetterTag = "name getter"

func NameGetterReplacer(_, response, token string) (string, string) {
	name := user.GetUserInformation(token).Name

	if strings.TrimSpace(name) == "" {
		responseTag := "don't know name"
		return responseTag, util.GetMessage(responseTag)
	}

	return NameGetterTag, fmt.Sprintf(response, name)
}
```

To register the module, you must do it in the `res/locales/<locale>/modules.go` file by creating a new line:
```go 
Module{
		Tag: NameGetterTag,
		Patterns: []string{
			"Do you know my name?",
		},
		Responses: []string{
			"Your name is %s!",
		},
		Replacer: NameGetterReplacer,
	},
```

You can re-train the specific locale's model by adding the `-re-train=<locale>` flag to the run command.

You can look at the existent modules [here](https://github.com/olivia-ai/olivia/tree/master/modules)

## Features 
### User information
To save information about the user, there is the package `user` to get and save information in the user's client.

You need to add a field for the information you want to add [here](https://github.com/olivia-ai/olivia/blob/master/user/information.go#L4)
Then, you can get and save the information inside the module, like this:

```go
name := user.GetUserInformation(token).Name
```

```go
user.ChangeUserInformation(token, func(information user.Information) user.Information {
	information.Name = name
	return information
})
```
