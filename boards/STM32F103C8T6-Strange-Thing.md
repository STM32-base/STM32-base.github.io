---
title: "STM32F103C8T6 - Strange Thing"
---

# {{ page.title }}

![Strange Thing]({{ site.url }}/assets/img/boards/STM32F103C8T6_Strange_Thing-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Strange Thing</td>
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
        <td>2x 2x8 male dupont (2.54mm)<br>1x 1x13 male dupont (2.54mm)</td>
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
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (+3.3V)<br>User LED (<code>PB0</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>NRST</b>, <code>NRST</code>, active low)<br>1-way jumper (<b>BT0</b>, <code>BOOT0</code>, active low)<br>1-way jumper (<b>BT1</b>, <code>BOOT1</code>, active low)</td>
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
        <td>33mm x 34mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>None</td>
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

![Strange Thing]({{ site.url }}/assets/img/boards/STM32F103C8T6_Strange_Thing-1.jpg)

![Strange Thing Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Strange_Thing-2.jpg)

![Strange Thing Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Strange_Thing-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| A14   | PA14         |
| A15   | PA15         |
| A12   | PA12         |
| A13   | PA13         |
| A10   | PA10         |
| A11   | PA11         |
| A8    | PA8          |
| A9    | PA9          |
| A6    | PA6          |
| A7    | PA7          |
| A4    | PA4          |
| A5    | PA5          |
| A2    | PA2          |
| A3    | PA3          |
| A0    | PA0          |
| A1    | PA1          |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 3.3   | +3.3V rail   |
| 5V    | +5V rail     |
| GND   | Ground plane |
| GND   | Ground plane |
| C13   | PC13         |
| C14   | PC14         |
| C15   | PC15         |
| RST   | NRST         |
| BAT   | VBAT         |
| 3.3   | +3.3V rail   |
| 5V    | +5V rail     |
| GND   | Ground plane |
| GND   | Ground plane |

## Header 3

| Pin   | Connected to |
| ----- | ------------ |
| B14   | PB14         |
| B15   | PB15         |
| B12   | PB12         |
| B13   | PB13         |
| B10   | PB10         |
| B11   | PB11         |
| B8    | PB8          |
| B9    | PB9          |
| B6    | PB6          |
| B7    | PB7          |
| B4    | PB4          |
| B5    | PB5          |
| B2    | PB2          |
| B3    | PB3          |
| B0    | PB0          |
| B1    | PB1          |

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

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| TXD   | PA9          |
| RXD   | PA10         |
| +5V   | +5V rail     |
