---
title: "About"
---

# {{ page.title }}

The [STM32-base project]({{ site.url }}) is mostly meant for students and hobbyists. The goal of the STM32-base project is to provide a simple and easy to use base project for learning about and experimenting with [STM32 microcontrollers](https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html).

Another big part of the STM32-base project is the [development board section]({{ site.url }}/boards/) on this website. That section almost became a project in itself. It became increasingly important to the STM32 community after the stm32duino wiki went offline.

## How it started

I first read about the Blue Pill on a [local hackerspace's website](https://revspace.nl/STM32). Someone had written a guide on how to get started with stm32duino and the Blue Pill. I soon ordered some [Blue Pill boards]({{ site.url }}/boards/STM32F103C8T6-Blue-Pill) after I read more about the features of the [STM32F103C8T6 microcontroller](https://www.st.com/content/st_com/en/products/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus/stm32-mainstream-mcus/stm32f1-series/stm32f103/stm32f103c8.html).

I wanted to experiment with the CAN bus controller on these microcontrollers. However, when using an Arduino bootloader meant that the USB controller was already in use. The problem here is that the USB controller and the CAN bus controller share a dedicated SRAM memory on that device. I then decided to look into bare-metal programming STM32 microcontrollers. How hard could it be?

I started looking for tutorials which would explain to me how to set up a toolchain, and more importantly, why you need things like linker scripts and startup code and how they work. Most tutorials, however, were focussed on getting you started as fast as possible. They were written with the assumption that the makefiles, linker scripts, startup code, and CMSIS are already present and considered them black boxes.

I don't like that. I _do_ want to know how everything works. That's why I started this project. I started gathering information from many sources and put it all together. And still, this project is not nearly as far as I would like it to be. But progress is made every now and then, and that is the most important thing.

I hope that this project helps out those who currently are where I was when I started this project. To learn more about me and the things I do, visit my website at [thomas-gravekamp.nl](https://thomas-gravekamp.nl).

I am in _no way affiliated_ with [STMicroelectronics](https://www.st.com). This is just a personal project.

 \- _Thomas Gravekamp_
