---
aliases:
tags:
- PC

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

Classes:: #missing/link

#missing/description 


## appearance

#missing/description 


## personality

#missing/description 


## motivation

#missing/description 


## background

#missing/info 


## inventory

#missing/items 
