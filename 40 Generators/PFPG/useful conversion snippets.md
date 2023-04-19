---
aliases:

tags:

status: 🌰
created: 2022-08-18
---
# useful conversion #snippets

using:: [[Regex]], [[Markdown]], [[HTML]]


## [[Markdown]]

- Convert race traits and story feats to inline values
	-  Find `(?:(?:You gain access to the)|(?:(?:and )?the)) ([\w '’-]+?) ((?:(?:(?:magic)|(?:social)|(?:combat)|(?:faith)|(?:religion)|(?:bloodline race)|(?:gnome race)|(?:regional)) trait)|(?:story feat))(?:\.?)`
	- Replace with `[\2:: \1]`
