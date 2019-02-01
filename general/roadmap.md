---
title: "Roadmap"
---

# {{ page.title }}

This is the roadmap page for the STM32-base project. It's nothing fancy, just a list of things still to be done. This also means that there is no particular order or priority.

* **Add a guide on debugging**<br>Add a guide on debugging STM32 devices using GDB.
* **Look into Visual Studio Code GDB support**<br>As an addition to the guide on debugging with GDB, it might be nice to at least look into the support Visual Studio Code offers for working with GDB.
* **Remove the CCM SRAM definitions for devices not having CCM SRAM**<br>CCM SRAM is not found on the lower performance STM32 devices. However, due to the way the linker scripts are currently set up, the `CCMRAM` memory region is also defined for these devices. The linker script files for these devices would look a little better if this memory region could simply be omitted.
* **Add support for backup SRAM, DTCM and ITCM**<br>Should these types of memory have their own memory region in the linker file? If so, add them to the apporpriate linker files. If not, at least document how these types of memory can be used.
* **Add a guide on flashing a device via its serial port**<br>All devices come with a pre-programmed bootloader which is capable of flashing a device via its UART and sometimes other peripherals. There is a open-source utility available for flashing STM32 devices via their UART using a UART to USB bridge.
* **Look into supporting the official [ARM CMSIS](https://developer.arm.com/embedded/cmsis)**<br>The official CMSIS could (optionally) replace the one that comes with the ST Cube packages.
* **Create an installer**<br>The setup instructions aren't rocket science at the moment, but an automatic installer is even easier.
* **Test support for STM32F7 and STM32F3**<br>An STM32F7 development board is available, but not yet tested. An STM32F3 board needs to be bought.
* **Ongoing: Improve documentation**
* **Ongoing: Buy more unique STM32 development boards**<br>Keep expanding the STM32 boards collection!
