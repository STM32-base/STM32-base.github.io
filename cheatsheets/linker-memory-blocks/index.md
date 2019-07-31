---
title: "Linker: Memory blocks"
---

# {{ page.title }}

This cheatsheet page contains an overview of available memory blocks for use in the project level linker scripts. Blocks having a size are already defined in the linker scripts provided by STM32-base.

## STM32F0

The `FLASH_BANK_1` and `SRAM_1` memory blocks are available to all devices in the STM32F0 series. These devices to not support any other type of memory.

[Show table for STM32F0]({{ site.url }}/cheatsheets/linker-memory-blocks/STM32F0)

## STM32F1

The `FLASH_BANK_1` and `SRAM_1` memory blocks are available to all devices in the STM32F1 series. The `FLASH_BANK_2` memory block is available for devices with more than 512KiB of flash memory. Some devices support external memory.

[Show table for STM32F1]({{ site.url }}/cheatsheets/linker-memory-blocks/STM32F1)

## STM32F2

The `FLASH_BANK_1`, `SRAM_1`, `SRAM_2`, and `BKP_SRAM` memory blocks are available to all devices in the STM32F2 series. All devices support external memory.

[Show table for STM32F2]({{ site.url }}/cheatsheets/linker-memory-blocks/STM32F2)

## STM32F3

The `FLASH_BANK_1` and `SRAM_1` memory blocks are available to all devices in the STM32F3 series. The `CCM_SRAM` memory block is available on some devices. Some devices support external memory.

[Show table for STM32F3]({{ site.url }}/cheatsheets/linker-memory-blocks/STM32F3)

## STM32F4

The `FLASH_BANK_1` and `SRAM_1` memory blocks are available to all devices in the STM32F4 series. The `SRAM_2`, `SRAM_3`, `CCM_SRAM`, and `BKP_SRAM` memory blocks are available for some devices in varying configurations. Some devices support external memory.

The CCM SRAM available on STM32F4x3xx devices is available through the addresses defined for `SRAM_2` and `CCM_SRAM`. Use only one of those to load data into this part of SRAM.

[Show table for STM32F4]({{ site.url }}/cheatsheets/linker-memory-blocks/STM32F4)

## STM32F7

The `FLASH_BANK_1`, `FLASH_ITCM`, `SRAM_1`, `SRAM_2`, `DTCM_RAM`, `ITCM_RAM`, and `BKP_SRAM` memory blocks are available to all devices in the STM32F7 series. All devices support external memory.

Note that the flash memory cannot be written to via the `ICTM_FLASH` memory region.

[Show table for STM32F7]({{ site.url }}/cheatsheets/linker-memory-blocks/STM32F7)
