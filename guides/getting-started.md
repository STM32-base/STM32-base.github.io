---
title: Getting started with STM32
---

# {{ page.title }}

Welcome to the first guide in a series of guides. This guide is intended for beginners (hobbyists, students) who want to get started with STM32 microcontrollers but don't know _how_ to or _where_ to get started.

This guide gives you an overview of the available hardware and software for working with STM32 microcontrollers. Also, it will briefly introduce you to the STM32 family of microcontrollers.

All guides, except this one, assume you will be using the [STM32-base project](https://github.com/stm32-base). To be able to follow the following guides, you will need a basic understanding of the [C programming language](https://en.wikipedia.org/wiki/C_(programming_language)). Prior experience with an embedded platform is not required.

## Introduction to STM32

STM32 does not refer to one specific microcontroller. It is the name [STMicroelectronics](https://www.st.com/content/st_com/en.html) gave to their [ARM Cortex-M](https://developer.arm.com/ip-products/processors/cortex-m) based microcontroller family. The [STM32 family](https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html) itself can be divided into multiple groups, which in turn can be divided into series.

The STM32 family currently consists of fifteen series. These series are grouped in four different groups: [High Performance](https://www.st.com/en/microcontrollers-microprocessors/stm32-high-performance-mcus.html), [Mainstream](https://www.st.com/en/microcontrollers-microprocessors/stm32-high-performance-mcus.html), [Ultra Low Power](https://www.st.com/en/microcontrollers-microprocessors/stm32-ultra-low-power-mcus.html), and [Wireless](https://www.st.com/en/microcontrollers-microprocessors/stm32-wireless-mcus.html). The following list briefly describes each series:

 - **[STM32F0](https://www.st.com/en/microcontrollers-microprocessors/stm32f0-series.html) (Mainstream)**<br>Based on the [Arm Cortex-M0](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m0) processor. Optimized for low cost. Designed to compete with 8-bit and 16-bit platforms.
 - **[STM32F1](https://www.st.com/en/microcontrollers-microprocessors/stm32f1-series.html) (Mainstream)**<br>Based on the [Arm Cortex-M3](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m3) processor. General purpose.
 - **[STM32F2](https://www.st.com/en/microcontrollers-microprocessors/stm32f2-series.html) (High Performance)**<br>Based on the [Arm Cortex-M3](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m3) processor. General purpose. Optimized for high performance.
 - **[STM32F3](https://www.st.com/en/microcontrollers-microprocessors/stm32f3-series.html) (Mainstream)**<br>Based on the [Arm Cortex-M4](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m4) processor with FPU and DSP instructions. Optimized for mixed signal applications.
 - **[STM32F4](https://www.st.com/en/microcontrollers-microprocessors/stm32f4-series.html) (High Performance)**<br>Based on the [Arm Cortex-M4](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m4) processor with FPU and DSP instructions. Optimized for high performance.
 - **[STM32F7](https://www.st.com/en/microcontrollers-microprocessors/stm32f7-series.html) (High Performance)**<br>Based on the [Arm Cortex-M7](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m7) processor with FPU and DSP instructions. Optimized for high performance. Pin-to-pin compatible with STM32F4 series.
 - **[STM32G0](https://www.st.com/en/microcontrollers-microprocessors/stm32g0-series.html) (Mainstream)**<br>Based on the [Arm Cortex-M0+](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m0-plus) processor. Optimized for efficiency. Designed to compete with 8-bit and 16-bit platforms.
 - **[STM32G4](https://www.st.com/en/microcontrollers-microprocessors/stm32g4-series.html) (Mainstream)**<br>Based on the [Arm Cortex-M4](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m4) processor with FPU and DSP instructions. Optimized for mixed signal applications. Successor of STM32F3 series.
 - **[STM32H7](https://www.st.com/en/microcontrollers-microprocessors/stm32h7-series.html) (High Performance)**<br>Based on the [Arm Cortex-M7](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m7) processor with FPU and DSP instructions. Some devices have a second [Arm Cortex-M4](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m4) based co-processor.
 - **[STM32L0](https://www.st.com/en/microcontrollers-microprocessors/stm32l0-series.html) (Ultra Low Power)**<br>Based on the [Arm Cortex-M0+](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m0-plus) processor. Optimized for low power applications.
 - **[STM32L1](https://www.st.com/en/microcontrollers-microprocessors/stm32l1-series.html) (Ultra Low Power)**<br>Based on the [Arm Cortex-M3](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m3) processor. Optimized for low power applications.
 - **[STM32L4](https://www.st.com/en/microcontrollers-microprocessors/stm32l4-series.html) (Ultra Low Power)**<br>Based on the [Arm Cortex-M4](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m4) processor with FPU and DSP instructions. Optimized for low power applications.
 - **[STM32L4+](https://www.st.com/en/microcontrollers-microprocessors/stm32l4-plus-series.html) (Ultra Low Power)**<br>Based on the [Arm Cortex-M4](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m4) processor with FPU and DSP instructions. Optimized for low power applications. Higher performance than the STM32L4 series.
 - **[STM32L5](https://www.st.com/en/microcontrollers-microprocessors/stm32l5-series.html) (Ultra Low Power)**<br>Based on the [Arm Cortex-M33](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m33) processor. Optimized for low power applications. Improved security.
 - **[STM32WB](https://www.st.com/en/microcontrollers-microprocessors/stm32wb-series.html) (Wireless)**<br>Based on the [Arm Cortex-M4](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m4) processor with FPU and DSP instructions. Features a second [Arm Cortex-M0+](https://developer.arm.com/ip-products/processors/cortex-m/cortex-m0-plus) processor as network processor. Supports both Bluetooth 5 and [IEEE 802.15.4](https://en.wikipedia.org/wiki/IEEE_802.15.4) wireless standards.

## Hardware

You will need at least one development board to get started. Without a development board, you can not run or debug your code properly. If you already own a development board, you can [skip]({{ page.url }}#software) this chapter.

### Microcontrollers

The STM32 family consists of many different microcontrollers. Picking one is hard for a beginner. Luckily, most things you will need to learn first are common to all microcontrollers in the STM32 family. This means you can start with virtually any STM32 microcontroller.

There are two series that are better suited for beginners than the other series. The [STM32F1 series](https://www.st.com/en/microcontrollers-microprocessors/stm32f1-series.html) and the [STM32F4 series](https://www.st.com/en/microcontrollers-microprocessors/stm32f4-series.html). And the reason is simple:

Both series are around for a long time and are still popular among hobbyists. This means that there are a lot of resources available for devices in these series. Also, the devices in the STM32F1 series are not as complex as most other parts.

### Development boards

Most development boards are designed to work with as few components as possible. They are designed this way to be as cheap as possible and to not limit the user in any way. There are also boards that feature additional components such as LEDs, sensors, and memories.

Most pins, if not all, of the microcontroller are exposed via headers for easy access. There is also at least one dedicated header for connecting a debugger.

Development boards are manufactured by different parties. STMicroelectronics offers three different ranges of development boards:

 - **[Nucleo boards](https://www.st.com/en/evaluation-tools/stm32-nucleo-boards.html)**<br>These boards are very similar to Arduino boards. They feature only the microcontroller and a builtin ST-Link debugger. There are three form factors available.
 - **[Discovery kits](https://www.st.com/en/evaluation-tools/stm32-discovery-kits.html)**<br>These boards all contain input and output devices in addition to the microcontroller. These boards also come with a builtin ST-Link debugger.
 - **[Evaluation boards](https://www.st.com/en/evaluation-tools/stm32-eval-boards.html)**<br>These boards are very extensive and feature many extra devices and interfaces in addition to the microcontroller.

There are also many [boards]({{ site.url }}/boards) that can be bought from Ebay and AliExpress. The most popular ones are the [Blue Pill]({{ site.url }}/boards/STM32F103C8T6-Blue-Pill) and the [Black Pill]({{ site.url }}/boards/STM32F103C8T6-Black-Pill). The latter is an improved version of the first one.

### Recommendations

Both the Nucleo and Discovery boards are very well suited for absolute beginners. They are guaranteed to work properly and include a builtin debugger. And all this for reasonable prices. If you are in a very thight budget, you can buy one of the Chinese development boards. The following boards are recommended for beginners:

 - **[NUCLEO-F103RB](https://www.st.com/en/evaluation-tools/nucleo-f103rb.html)**<br>This board features an STM32F103RBT6 device with 128kB of FLASH memory.
 - **[STM32F407G-DISC1](https://www.st.com/en/evaluation-tools/stm32f4discovery.html)**<br>This board features an STM32F407VGT6 device with 1024kB of FLASH memory.
 - **[Black Pill]({{ site.url }}/boards/STM32F103C8T6-Black-Pill)**<br>This board features an STM32F103C8T6 device with 64kB of FLASH memory. Be sure to also buy an [ST-Link clone]({{ site.url }}/boards/Debugger-STM32F103C8U6-STLINKV2) for debugging and flashing.

## Software

If you want to get started with the STM32-base project, you don't have to make a lot of choices on the software side. The STM32-base project is designed to be used with the [GNU Arm Embedded Toolchain](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm). STM32-base can be used with you favorite code editor. A recommendation for an editor is [Visual Studio Code](https://code.visualstudio.com/).

Other software discussed in this chapter can be used when you do not want to use the STM32-base project. The other software is discussed to give you a better overview of all available software for STM32 microcontrollers.

### IDEs

[IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) stands for Integrated Development Environment. This usually means that, once installed, an IDE is ready to be used without any further actions required. IDEs install all required software, like compilers and drivers, once they are installed.

Some IDEs are free, others require a licence to be bought. The IDEs listed here are potentially interesting to beginners and hobbyists since they're free. For a complete overview of available IDEs, refer to the [ST website](https://www.st.com/en/development-tools/stm32-ides.html).

 - [Arm Keil MDK](http://www2.keil.com/stmicroelectronics-stm32) - Free for STM32G0, STM32F0, and STM32L0 series (Windows)
 - [STM32CubeIDE](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html) - Free (Windows, Linux, macOS)
 - [Segger Embedded Studio](https://www.segger.com/products/development-tools/embedded-studio/) - Free for non-commercial use (Windows, Linux, macOS)
 - [SW4STM32](http://www.openstm32.org/HomePage) - Free (Windows, Linux, macOS)

### Platforms

Platforms offer, in addition to an IDE, their own API for controlling a device. Platforms like these are usually aimed at prototyping. There are two platforms available for STM32 microcontrollers.

The first one is [STM32duino](https://github.com/stm32duino/Arduino_Core_STM32). This platform implements the well known [Arduino API](https://www.arduino.cc/reference/en/) for STM32 microcontrollers. It can be used with the [Arduino IDE](https://www.arduino.cc/en/Main/Software).

The second one is [Arm Mbed](https://www.mbed.com/en/). This platform supports not only STM32 microcontrollers. It supports a wide range of devices from different vendors. Mbed includes an OS specifically developed for IoT applications. It has both an cloud based IDE and a downloadable variant.

### Other

ST offers an CMSIS and HAL for each device series. The CMSIS contains all the register and peripheral definitions needed to make use of the available peripherals on a microcontroller. The HAL is a higher level library that offers portability of code between different series. The CMSIS and HAL code is distributed in so-called [STM32Cube packages](https://www.st.com/en/embedded-software/stm32cube-mcu-mpu-packages.html).

A popular open-source alternative to the official CMSIS is [libopencm3](https://github.com/libopencm3/libopencm3). This project aims to create an open-source firmware library for Arm Cortex-M microcontrollers. Not all STM32 series are supported.
