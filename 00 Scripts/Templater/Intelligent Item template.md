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

Item:: #missing/link 

## personality

![[pfmig-i#^Item]]

Alignment:: `dice:[[PFMIG-i#^Alignment]]`

Purpose:: `dice:[[PFMIG-i#^Purpose]]`

Senses:: `dice:[[PFMIG-i#^SenseOrCommunication]]`


## secrets

Powers:: `dice:[[PFMIG-i#^ItemPower]]`

%% #missing/items  %%


## stats

Intelligence:: `dice:[[PFMIG-i#^AbilityScore]]`

Wisdom:: `dice:[[PFMIG-i#^AbilityScore]]`

Charisma:: `dice:[[PFMIG-i#^AbilityScore]]`

Ego:: #missing/calculation

gp:: #missing/calculation 
