---
title: "STM32F407VGT6 - Diymore"
---

{% assign filename = page.name | remove: '.md' | remove: '.' %}
{% assign board = site.data.boards[filename] %}

{% include board-content.html data=board %}
