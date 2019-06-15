# Write your own module

With olivia, you can easily add a module:

Just write in a new file inside the `modules` package

```go
package modules

func init() {
	RegisterModule(Module{
		Tag: "mymodule",
		Patterns: []string{
			"Here are the patterns of my module like",
			"Could you give me the latest post of r/memes"
		},
		Responses: []string{
			"And here are the responses, %s",
			"Yes, the post title is %s !",
		},
		Replacer: MyModuleReplacer,
	})
}

func MyModuleReplacer(entry, response string) string {
    // Here execute actions on the string!
    return response
}
```

And that's all, just re-run Olivia!