---
title: "Development boards"
---

# {{ page.title }}

This page lists all STM32 development boards currently documented on this website. Each board has its own page with more details.

All board pages have been written with the greatest care, but there will be errors. Always double check your connections, especially power connections. Please [create a pull request](https://github.com/STM32-base/STM32-base.github.io) if you encounter an error on any of the board pages.

## Buying boards

The official Nucleo, Discovery, and Eval development boards manufactured and sold by STMicroelectronics are available from official ST distributors around the world.

The Chinese development boards are available from webshops like Ebay, AliExpress, Wish, Taobao, and many more. It may be hard to find the specific board you are looking for, since many of these boards do not have a clear unique name. Also, availability of these boards changes over time. Be aware of counterfeit STM32F103C8T6 devices when ordering from China. These specific devices are mostly used on the [Blue Pill]({{ site.url }}/boards/STM32F103C8T6-Blue-Pill) and [Black Pill]({{ site.url }}/boards/STM32F103C8T6-Black-Pill) boards.

## General warnings

Most Chinese development boards do not have any kind of protection on the +5V rail. This means that the +5V pin of the USB connector is directly connected to any +5V/VIN pin on the development board. Always check if this is the case when you're connecting your development board to an external power source while using the USB port.

Also, the listed power output for the used power regulators is based on their datasheets. The Chinese development boards may use counterfeit regulators which may not meet these specifications. Do not push the onboard regulator to their limits.

{% assign lists = site.data.boards.index %}
{% assign debuggers = lists['debuggers'] %}
{% assign stm32f0 = lists['STM32F0'] %}
{% assign stm32f1 = lists['STM32F1'] %}
{% assign stm32f2 = lists['STM32F2'] %}
{% assign stm32f4 = lists['STM32F4'] %}
{% assign stm32f7 = lists['STM32F7'] %}

## Debuggers

{% include board-list.html list=debuggers %}

## STM32F0 boards

{% include board-list.html list=stm32f0 %}

## STM32F1 boards

{% include board-list.html list=stm32f1 %}

## STM32F2 boards

{% include board-list.html list=stm32f2 %}

## STM32F4 boards

{% include board-list.html list=stm32f4 %}

## STM32F7 boards

{% include board-list.html list=stm32f7 %}
