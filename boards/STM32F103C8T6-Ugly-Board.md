---
title: "STM32F103C8T6 - Ugly Board"
---

{% assign filename = page.name | remove: '.md' | remove: '.' %}
{% assign board = site.data.boards[filename] %}

{% include board-content.html data=board %}
