---
title: "Development boards"
---

# {{ page.title }}

This page contains a list of all the STM32 development board pages currently available on this wiki. Every board page describes one unique kind of development board, both Chinese development boards and official ST development boards.

The board pages contain one main table with different groups of information on the board. After that follow three pictures of the board (perspective, top view and bottom view). After the pictures, the pinouts of the different headers and connectors are listed. Headers and their pins are listed clock-wise (based on the top view) with the outer pin first (for double row headers). Click [here](#debuggers) to jump to the boards list.

**Warning:** Most Chinese development boards do not have any kind of protection on the +5V rail. This means that the +5V pin of the USB connector is directly connected to any +5V/VIN pin on the development board. Always check if this is the case when you're connecting your development board to an external power source while using the USB port.

**Warning:** The listed power output for the on board regulators is based on their datasheets. The Chinese development boards may use a fake/clone/counterfeit regulator which is less capable than the real part. Do not push the on board regulators to their limits.

**Note:** Although these pages have been written with great care, they will contain errors. Always double check your connections, especially power connections.

## Debuggers

 * [STM32F101C8T6 - ST-LINK V2]({{ site.url }}/boards/Debugger-STM32F101C8T6-STLINKV2)
 * [STM32F103C8T6 - JLINK]({{ site.url }}/boards/Debugger-STM32F103C8T6-JLINK)
 * [STM32F103C8U6 - ST-LINK V2]({{ site.url }}/boards/Debugger-STM32F103C8U6-STLINKV2)

## STM32F0 boards

 * [STM32F030F4P6 - Baite]({{ site.url }}/boards/STM32F030F4P6-Baite)
 * [STM32F030F4P6 - STM32F030 DEMO BOARD V1.1]({{ site.url }}/boards/STM32F030F4P6-STM32F030-DEMO-BOARD-V1.1)
 * [STM32F030F4P6 - STM32F030F4 V2.00]({{ site.url }}/boards/STM32F030F4P6-STM32F030F4-V2.00)
 * [STM32F030F4P6 - vcc-gnd.com]({{ site.url }}/boards/STM32F030F4P6-VCC-GND)
 * [STM32F051C8T6 - Blue Pill]({{ site.url }}/boards/STM32F051C8T6-Blue-Pill)
 * [STM32F051C8T6 - LC Technology]({{ site.url }}/boards/STM32F051C8T6-LC-Technology)

## STM32F1 boards

 * [STM32F103C8T6 - Black Board]({{ site.url }}/boards/STM32F103C8T6-Black-Board)
 * [STM32F103C8T6 - Black Pill]({{ site.url }}/boards/STM32F103C8T6-Black-Pill)
 * [STM32F103C8T6 - Blue Header]({{ site.url }}/boards/STM32F103C8T6-Blue-Header)
 * [STM32F103C8T6 - Blue Pill]({{ site.url }}/boards/STM32F103C8T6-Blue-Pill)
 * [STM32F103C8T6 - Green Board]({{ site.url }}/boards/STM32F103C8T6-Green-Board)
 * [STM32F103C8T6 - Maple Mini Clone]({{ site.url }}/boards/STM32F103C8T6-Maple-Mini-Clone)
 * [STM32F103C8T6 - Purple Pill]({{ site.url }}/boards/STM32F103C8T6-Purple-Pill)
 * [STM32F103C8T6 - RobotDyn Black Pill]({{ site.url }}/boards/STM32F103C8T6-RobotDyn-Black-Pill)
 * [STM32F103C8T6 - STM32 Smart V2.0]({{ site.url }}/boards/STM32F103C8T6-STM32-Smart-V2.0)
 * [STM32F103C8T6 - STM32FxCxT6 Board V5.02]({{ site.url }}/boards/STM32F103C8T6-STM32FxCxT6-Board-V5.02)
 * [STM32F103C8T6 - Strange Thing]({{ site.url }}/boards/STM32F103C8T6-Strange-Thing)
 * [STM32F103C8T6 - Ugly Board]({{ site.url }}/boards/STM32F103C8T6-Ugly-Board)
 * [STM32F103RBT6 - Generic Board]({{ site.url }}/boards/STM32F103RBT6-Generic-Board)
 * [STM32F103RBT6 - STM32F103RxT6 DEMO]({{ site.url }}/boards/STM32F103RBT6-STM32F103RxT6-DEMO)
 * [STM32F103RBT6 - vcc-gnd.com]({{ site.url }}/boards/STM32F103RBT6-VCC-GND)
 * [STM32F103RCT6 - Euse Board]({{ site.url }}/boards/STM32F103RCT6-Euse-Board)
 * [STM32F103RCT6 - Generic Board]({{ site.url }}/boards/STM32F103RCT6-Generic-Board)
 * [STM32F103RCT6 - iShare]({{ site.url }}/boards/STM32F103RCT6-iShare)
 * [STM32F103RCT6 - STM32 Mini V2.0]({{ site.url }}/boards/STM32F103RCT6-STM32-Mini-V2.0)
 * [STM32F103RCT6 - STM32F103RCT6 V1.0]({{ site.url }}/boards/STM32F103RCT6-STM32F103RCT6_V1.0)
 * [STM32F103RET6 - Generic Board]({{ site.url }}/boards/STM32F103RET6-Generic-Board)
 * [STM32F103T8U6 - CJMCU-3206]({{ site.url }}/boards/STM32F103T8U6-CJMCU-3206)
 * [STM32F103VCT6 - vcc-gnd.com Medium]({{ site.url }}/boards/STM32F103VCT6-VCC-GND-Medium)
 * [STM32F103VCT6 - vcc-gnd.com Small]({{ site.url }}/boards/STM32F103VCT6-VCC-GND-Small)
 * [STM32F103VET6 - CZ miniSTM32F103VE-EK]({{ site.url }}/boards/STM32F103VET6-CZ-miniSTM32F103VE-EK)
 * [STM32F103ZET6 - Black Board]({{ site.url }}/boards/STM32F103ZET6-Black-Board)
 * [STM32F103ZET6 - CZ miniSTM32F103ZE-EK]({{ site.url }}/boards/STM32F103ZET6-CZ-miniSTM32F103ZE-EK)
 * [STM32F103ZET6 - Euse M3 DEMO]({{ site.url }}/boards/STM32F103ZET6-Euse-M3-DEMO)
 * [STM32F103ZET6 - F103ZE Board]({{ site.url }}/boards/STM32F103ZET6-F103ZE-Board)
 * [STM32F103ZET6 - LC Technology]({{ site.url }}/boards/STM32F103ZET6-LC-Technology)
 * [STM32F103ZET6 - vcc-gnd.com XLarge]({{ site.url }}/boards/STM32F103ZET6-VCC-GND-XLarge)
 * [STM32F103ZET6 - YL-29]({{ site.url }}/boards/STM32F103ZET6-YL-29)

## STM32F2 boards

 * [STM32F205RBT6 - WaveShare CorexxxR]({{ site.url }}/boards/STM32F205RBT6-WaveShare-CorexxxR)

## STM32F4 boards

 * [STM32F405RGT6 - WaveShare CorexxxR]({{ site.url }}/boards/STM32F405RGT6-WaveShare-CorexxxR)
 * [STM32F407VET6 - Euse M4 DEMO]({{ site.url }}/boards/STM32F407VET6-Euse-M4-DEMO-Medium)
 * [STM32F407VET6 - STM32 F4VE V2.0]({{ site.url }}/boards/STM32F407VET6-STM32-F4VE-V2.0)
 * [STM32F407VET6 - vcc-gnd.com Small]({{ site.url }}/boards/STM32F407VET6-VCC-GND-Small)
 * [STM32F407VGT6 - Diymore]({{ site.url }}/boards/STM32F407VGT6-diymore)
 * [STM32F407VGT6 - SR Board]({{ site.url }}/boards/STM32F407VGT6-SR-Board)
 * [STM32F407ZET6 - STM32FXX]({{ site.url }}/boards/STM32F407ZET6-STM32F4XX)
 * [STM32F407ZGT6 - Euse M4 DEMO]({{ site.url }}/boards/STM32F407ZGT6-Euse-M4-DEMO-Large)
 * [STM32F407ZGT6 - vcc-gnd.com Large]({{ site.url }}/boards/STM32F407ZGT6-VCC-GND-Large)
 * [STM32F429IGT6 - LC Technology]({{ site.url }}/boards/STM32F429IGT6-LC-Technology)

## STM32F7 boards

 * [STM32F746IGT6 - WaveShare Core7XXI]({{ site.url }}/boards/STM32F746IGT6-WaveShare-Core7XXI)
