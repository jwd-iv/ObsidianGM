---
aliases:
tags:
- NPC

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

Race:: #missing/link

Class:: #missing/link

#missing/description 


## personality

%% #missing/info What character archetype are they? %%


## connections

### to the adventure

%% #missing/info %%


### to the PCs

%% #missing/items %%


## inventory

%% #missing/items %%


## secrets

%% #missing/items %%
