---
aliases: []
<% "tags: [ campaign ]" %>

status: 🌰
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

## Setting the stage

### Introduction

> Description of your strong start.


### Dramatis Personae
%% Player characters %%

**Name** (Player) - What's their motivation?


### Fantastic Locations

**Location** - aspect, aspect, aspect


### Important NPCs

**Name** - why are they relevant to this adventure?


## Currently happening

### Active Quests
%% Include what the players have decided to do as well %%

- [ ] Join together to start the adventure


### Questions
%% Essentially open plot holes that can be hooks for new quests %%

- [ ] Why are we all working together?


## Coming up

### Encounters

- Small scene description.


### Secrets and Clues
%% Check these when the party discovers them %%

- [ ] Description


### Potential Treasure

Name - where is it?
