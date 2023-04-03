---
aliases:
tags:
- location

created: <% tp.date.now("YYYY-MM-DD") %>
---
<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(title);
  }
  tR += "# " + title
%>

%% #missing/brief %%

> #missing/description 


### features
%% What's different about being here? %%

- %% #missing/items  Sights, smells, sounds, sensations, tastes? %%


## current events

- %% #missing/items What's happening in this area right now? %%


### possible encounters

- %% #missing/items What may the players come across? %%


## loot

- %% #missing/items  %%


## secrets

- %% #missing/items  %%


## BGM

ambient:: #missing/links 

battle:: #missing/links 
