---
title: "STM32F103C8T6 - RobotDyn Black Pill"
---

# {{ page.title }}

![RobotDyn Black Pill]({{ site.url }}/assets/img/boards/STM32F103C8T6_RobotDyn_Black_Pill-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>RobotDyn Black Pill</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="https://robotdyn.com/">RobotDyn</a></td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>AliExpress, China</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Microcontroller</b></td>
        <td>Part</td>
        <td>STM32F103C8T6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP48</td>
    </tr>
    <tr>
        <td>Core</td>
        <td>Cortex-M3</td>
    </tr>
    <tr>
        <td>FLASH</td>
        <td>64KB</td>
    </tr>
    <tr>
        <td>SRAM</td>
        <td>20KB</td>
    </tr>
    <tr>
        <td>Max. Clock Speed</td>
        <td>72MHz</td>
    </tr>
    <tr>
        <td rowspan="2"><b>Crystals</b></td>
        <td>HSE (High Speed External)</td>
        <td>8MHz</td>
    </tr>
    <tr>
        <td>LSE (Low Speed External)</td>
        <td>32.768kHz</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Power</b></td>
        <td>Sources</td>
        <td>Any +3.3V pin (+3.3V)<br>Any +5V pin (+5V)<br>USB connector (+5V)</td>
    </tr>
    <tr>
        <td>Regulator manufacturer</td>
        <td>Unkown</td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td>Unkown (S20A)</td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT353</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 180mA</td>
    </tr>
    <tr>
        <td>Battery holder</td>
        <td>No</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 1x20 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>None</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>SWD (1x4 male dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Micro</td>
    </tr>
    <tr>
        <td rowspan="3"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>ON</b>, +3.3V)<br>User LED (<b>L</b>, <code>PC13</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RST</b>, <code>NRST</code>, active low)<br>2-way jumper (<code>BOOT0</code>)<br>2-way jumper (<code>BOOT1</code>)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td>None</td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Black</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>53mm x 18mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>Breadboard</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Warning:</b> The +5V pins on this board are directly connected to the +5V pin of the USB connector. There is no protection in place. Do not power this board through USB and an external power supply at the same time.</li>
                <li><b>Trivia:</b> This board is a variation on the better known <a href="{{ site.url }}/boards/STM32F103C8T6-Blue-Pill">Blue Pill</a>.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![RobotDyn Black Pill]({{ site.url }}/assets/img/boards/STM32F103C8T6_RobotDyn_Black_Pill-1.jpg)

![RobotDyn Black Pill Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_RobotDyn_Black_Pill-2.jpg)

![RobotDyn Black Pill Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_RobotDyn_Black_Pill-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| RST   | NRST         |
| B11   | PB11         |
| B10   | PB10         |
| B1    | PB1          |
| B0    | PB0          |
| A7    | PA7          |
| A6    | PA6          |
| A5    | PA5          |
| A4    | PA4          |
| A3    | PA3          |
| A2    | PA2          |
| A1    | PA1          |
| A0    | PA0          |
| C15   | PC15         |
| C14   | PC14         |
| C13   | PC13         |
| VBT   | VBAT         |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 3V3   | +3.3 rail    |
| GND   | Ground plane |
| 5V    | +5V rail     |
| B9    | PB9          |
| B8    | PB8          |
| B7    | PB7          |
| B6    | PB6          |
| B5    | PB5          |
| B4    | PB4          |
| B3    | PB3          |
| A15   | PA15         |
| A12   | PA12         |
| A11   | PA11         |
| A10   | PA10         |
| A9    | PA9          |
| A8    | PA8          |
| B15   | PB15         |
| B14   | PB14         |
| B13   | PB13         |
| B12   | PB12         |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +5V rail     |
| D-    | PA11         |
| D+    | PA12         |
| ID    | N.C.         |
| GND   | Ground plane |

## SWD

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| CLK   | PA14         |
| DIO   | PA13         |
| 3V3   | +3.3V rail   |
