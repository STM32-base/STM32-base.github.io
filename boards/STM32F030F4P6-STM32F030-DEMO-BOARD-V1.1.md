---
title: "STM32F030F4P6 - STM32F030 DEMO BOARD V1.1"
---

# {{ page.title }}

![STM32F030 DEMO BOARD V1.1]({{ site.url }}/assets/img/boards/STM32F030F4P6_STM32F030_DEMO_BOARD_V1.1-4.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>STM32F030 DEMO BOARD V1.1</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td>Unknown</td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>AliExpress, China</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Microcontroller</b></td>
        <td>Part</td>
        <td>STM32F030F4P6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>TSSOP20</td>
    </tr>
    <tr>
        <td>Core</td>
        <td>Cortex-M0</td>
    </tr>
    <tr>
        <td>FLASH</td>
        <td>16KB</td>
    </tr>
    <tr>
        <td>SRAM</td>
        <td>4KB</td>
    </tr>
    <tr>
        <td>Max. Clock Speed</td>
        <td>48MHz</td>
    </tr>
    <tr>
        <td rowspan="2"><b>Crystals</b></td>
        <td>HSE (High Speed External)</td>
        <td>8MHz</td>
    </tr>
    <tr>
        <td>LSE (Low Speed External)</td>
        <td>None</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Power</b></td>
        <td>Sources</td>
        <td>Any +3.3V pin (+3.3V)<br>Any +5V pin (+5V)<br>USB connector (+5V)</td>
    </tr>
    <tr>
        <td>Regulator manufacturer</td>
        <td><a href="http://www.advanced-monolithic.com/">Advanced Monolithic Systems Inc.</a></td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td><a href="http://www.advanced-monolithic.com/pdf/ds1117.pdf">AMS1117</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT223</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 1000mA</td>
    </tr>
    <tr>
        <td>Battery holder</td>
        <td>No</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 1x11 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Serial (1x4 male dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>SWD (1x4 male dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Micro (+5V power only)</td>
    </tr>
    <tr>
        <td rowspan="3"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (+3.3V)<br>User LED (<code>PA4</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<code>NRST</code>, active low)<br>2-way jumper (<code>BOOT0</code>)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td>None</td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Blue</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>45mm x 30mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>4 mounting holes (M3)</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Note:</b> Because the <code>STM32F030F4P6</code> does not support USB, only the power pins on the USB connector are connected.</li>
                <li><b>Warning:</b> The +5V pins on this board are directly connected to the +5V pin of the USB connector. There is no protection in place. Do not power this board through USB and an external power supply at the same time.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![STM32F030 DEMO BOARD V1.1]({{ site.url }}/assets/img/boards/STM32F030F4P6_STM32F030_DEMO_BOARD_V1.1-1.jpg)

![STM32F030 DEMO BOARD V1.1 Top view]({{ site.url }}/assets/img/boards/STM32F030F4P6_STM32F030_DEMO_BOARD_V1.1-2.jpg)

![STM32F030 DEMO BOARD V1.1 Bottom view]({{ site.url }}/assets/img/boards/STM32F030F4P6_STM32F030_DEMO_BOARD_V1.1-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| 5V    | +5V rail     |
| 5V    | +5V rail     |
| PA14  | PA14         |
| PA13  | PA13         |
| PA10  | PA10         |
| PA9   | PA9          |
| PB1   | PB1          |
| PA7   | PA7          |
| PA6   | PA6          |
| PA5   | PA5          |
| 3V3   | +3.3V rail   |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| PA4   | PA4          |
| PA3   | PA3          |
| PA2   | PA2          |
| PA1   | PA1          |
| PA0   | PA0          |
| VDDA  | VDDA         |
| NRST  | NRST         |
| PF1   | PF1          |
| PF0   | PF0          |
| BOOT0 | BOOT0        |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +5V rail     |
| D-    | N.C.         |
| D+    | N.C.         |
| ID    | N.C.         |
| GND   | Ground plane |

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| TXD   | PA9          |
| RXD   | PA10         |

## SWD

| Pin   | Connected to |
| ----- | ------------ |
| 3V3   | +3.3V rail   |
| DIO   | PA13         |
| CLK   | PA14         |
| GND   | Ground plane |
