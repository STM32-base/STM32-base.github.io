---
title: "STM32F103RBT6 - vcc-gnd.com"
---

# {{ page.title }}

![STM32F103RBT6 vcc-gnd.com]({{ site.url }}/assets/img/boards/STM32F103RBT6_vcc-gnd.com-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>vcc-gnd.com</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="https://vcc-gnd.world.taobao.com/">vcc-gnd.com</a></td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>China</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Microcontroller</b></td>
        <td>Part</td>
        <td>STM32F103RBT6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP64</td>
    </tr>
    <tr>
        <td>Core</td>
        <td>Cortex-M3</td>
    </tr>
    <tr>
        <td>FLASH</td>
        <td>128KB</td>
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
        <td>2x 2x13 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Power +3.3V (1x3 male dupont (2.54mm))<br>Power ground (1x3 male dupont (2.54mm))</td>
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
        <td>Power LED (<b>PWR</b>, +3.3V)<br>User LED (<b>PC13</b>, <code>PC13</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>2-way jumper (<b>BOOT0</b>, <code>BOOT0</code>)<br>2-way jumper (<b>BOOT1</b>, <code>BOOT1</code>)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td><a href="http://ww1.microchip.com/downloads/en/DeviceDoc/doc0180.pdf">Atmel AT24C08N (8Kb EEPROM)</a></td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Blue</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>49mm x 49mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>4x mounting hole (M3)</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Warning:</b> The +5V pins on this board are directly connected to the +5V pin of the USB connector. There is no protection in place. Do not power this board through USB and an external power supply at the same time.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![STM32F103RBT6 vcc-gnd.com]({{ site.url }}/assets/img/boards/STM32F103RBT6_vcc-gnd.com-1.jpg)

![STM32F103RBT6 vcc-gnd.com Top view]({{ site.url }}/assets/img/boards/STM32F103RBT6_vcc-gnd.com-2.jpg)

![STM32F103RBT6 vcc-gnd.com Bottom view]({{ site.url }}/assets/img/boards/STM32F103RBT6_vcc-gnd.com-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| B15   | PB15         |
| B14   | PB14         |
| B13   | PB13         |
| B12   | PB12         |
| B11   | PB11         |
| B10   | PB10         |
| B1    | PB1          |
| B2    | PB2          |
| C5    | PC5          |
| B0    | PB0          |
| A7    | PA7          |
| C4    | PC4          |
| A5    | PA5          |
| A6    | PA6          |
| A3    | PA3          |
| A4    | PA4          |
| A1    | PA1          |
| A2    | PA2          |
| C3    | PC3          |
| A0    | PA0          |
| C1    | PC1          |
| C2    | PC2          |
| C13   | PC13         |
| C0    | PC0          |
| 5V    | +5V rail     |
| GND   | Ground plane |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 3.3   | +3.3V rail   |
| B9    | PB9          |
| B7    | PB7          |
| B8    | PB8          |
| B5    | PB5          |
| B6    | PB6          |
| B3    | PB3          |
| B4    | PB4          |
| C12   | PC12         |
| D2    | PD2          |
| C10   | PC10         |
| C11   | PC11         |
| A14   | PA14         |
| A15   | PA15         |
| A12   | PA12         |
| A13   | PA13         |
| A10   | PA10         |
| A11   | PA11         |
| A8    | PA8          |
| A9    | PA9          |
| C8    | PC8          |
| C9    | PC9          |
| C6    | PC6          |
| C7    | PC7          |

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
| SWCLK | PA14         |
| SWDIO | PA13         |
| 3V3   | +3.3V rail   |

## IC - Atmel AT24C08N (8Kb EEPROM)

| Pin   | Connected to |
| ----- | ------------ |
| A0    | Ground plane |
| A1    | Ground plane |
| A2    | Ground plane |
| GND   | Ground plane |
| SDA   | PB7          |
| SCL   | PB6          |
| WP    | Ground plane |
| VCC   | +3.3V rail   |
