<%* let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(title);
  }
  let titles =
	[...customJS.Text.getParentheticalOptions(title)]
tR += `---
aliases:
${titles?.length
	? titles.map(t => "- " + customJS.YAML.Escape(t))
		.join("\n")
	: ''
}
tags:

created: ${tp.date.now("YYYY-MM-DD")}
---
# ${titles.pop()}
` -%>

%% <% "#missing/brief"%> %%
