---
title: "Roadmap"
---

# {{ page.title }}

This is the STM32-base project roadmap. It is essentially just a list of things that still need to be done. This list has no particular order or priority.

 * **Move all content from the wiki to Github pages.** <br> _This allows for a better control of the page layout._
 * **Move all content from the README.md files to Github pages.** <br> _Documenting certain aspects of the STM32-base project in the main repo worked initially, but things tend to get more complex and thus require a better way of presenting the information. As a bonus, this improves the separation between code and background documentation._
 * **Add a guide on debugging.**
 * **Get rid of the CCM SRAM definitions for devices not having this type of memory.** <br> _Minor annoyance, you shouldn't need to have this definition when your device does not support this type of memory._
 * **Add support for backup SRAM, DTCM, and ITCM.** <br> _Should these types of memory have separate entities in the linker file?_
 * **Move contents of the system folder to separate repository** <br> _The contents of the system folder are mainly the files provided by the official CMSIS for these chips. Moving them into their own repository helps keeping a clear distinction between STM32-base project code and code provided by ST Microelectronics._
 * **Add support for using the STM32 HAL.** <br> _The STM32-base project currently does not support usage of the STM32 HAL, due to the nature of the project. Adding support for the official HAL should not be that much work. Do this after moving the system code out of the main repository._
 * **Add an option to flash a device over its serial port.** <br> _Some STM32 devices have a built-in bootloader supporting flahsing over serial. Look into enabling this via the make file._
 * **Find a way to use the official [ARM CMSIS](https://developer.arm.com/embedded/cmsis).** <br> _Use this CMSIS instead of the one packaged with the ST Cube packages._
 * **Improve documentation on "system"**
 * **Buy STM32F3 development boards.** <br> _So I can finally test the STM32-base project with an STM32F3 series chip._
 * **Test support for STM32F7** <br> _I've got a STM32F7 development board, but have not yet tested it._
 * **Buy more unique STM32 development boards.** <br> _To keep expanding the boards collection!_
