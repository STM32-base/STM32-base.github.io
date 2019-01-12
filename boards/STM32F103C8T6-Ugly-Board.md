---
title: "STM32F103C8T6 - Ugly Board"
---

# {{ page.title }}

![Ugly Board]({{ site.url }}/assets/img/boards/STM32F103C8T6_Ugly_Board-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Ugly Board</td>
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
        <td>Any +3.3V pin (+3.3V)<br>USB connector (+5V)</td>
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
        <td>1x 2x20 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>OLED (1x8 female dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>JTAG (20-pin IDC)</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Mini</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>D2</b>, +3.3V)<br>User LED (<b>D1</b>, <code>PB8</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>REST</b>, <code>NRST</code>, active low)<br>User button (<b>KEY</b>, <code>PC13</code>, active low)<br>1-way jumper (<code>BOOT0</code>, active high)</td>
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
        <td>60mm x 42mm</td>
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
                <li><b>Trivia:</b> This board got its name from the <a href="https://github.com/rogerclarkmelbourne/Arduino_STM32">STM32duino project's</a> <a href="http://wiki.stm32duino.com/index.php?title=Ugly_board">wiki page</a> on this board.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![Ugly Board]({{ site.url }}/assets/img/boards/STM32F103C8T6_Ugly_Board-1.jpg)

![Ugly Board Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Ugly_Board-2.jpg)

![Ugly Board Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Ugly_Board-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| 3.3V  | +3.3V rail   |
| PB9   | PB9          |
| PB8   | PB8          |
| PB7   | PB7          |
| PB6   | PB6          |
| PB5   | PB5          |
| PB4   | PB4          |
| PB3   | PB3          |
| PA15  | PA15         |
| PA14  | PA14         |
| PA13  | PA13         |
| PA12  | PA12         |
| PA11  | PA11         |
| PA10  | PA10         |
| PA9   | PA9          |
| PA8   | PA8          |
| PB15  | PB15         |
| PB14  | PB14         |
| PB13  | PB13         |
| PB12  | PB12         |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| 3.3V  | +3.3V rail   |
| 3.3V  | +3.3V rail   |
| PB11  | PB11         |
| PB10  | PB10         |
| PB2   | PB2          |
| PB1   | PB1          |
| PB0   | PB0          |
| PA7   | PA7          |
| PA6   | PA6          |
| PA5   | PA5          |
| PA4   | PA4          |
| PA3   | PA3          |
| PA2   | PA2          |
| PA1   | PA1          |
| PA0   | PA0          |
| PC13  | PC13         |
| 3.3V  | +3.3V rail   |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +5V rail     |
| D-    | PA11         |
| D+    | PA12         |
| ID    | N.C.         |
| GND   | Ground plane |

## JTAG

| Pin   | Connected to | JTAG  | SWD   |
| ----- | ------------ | ----- | ----- |
| 1     | +3.3V rail   | VCC   | -     |
| 2     | +3.3V rail   | VCC   | -     |
| 3     | PB4          | TRST  | -     |
| 4     | Ground plane | GND   | -     |
| 5     | PA15         | TDI   | -     |
| 6     | Ground plane | GND   | -     |
| 7     | PA13         | TMS   | SWDIO |
| 8     | Ground plane | GND   | -     |
| 9     | PA14         | TCLK  | SWCLK |
| 10    | Ground plane | GND   | -     |
| 11    | N.C.         | RTCK  | -     |
| 12    | Ground plane | GND   | -     |
| 13    | PB3          | TDO   | SWO   |
| 14    | Ground plane | GND   | -     |
| 15    | NRST         | RESET | -     |
| 16    | Ground plane | GND   | -     |
| 17    | N.C.         | N.C.  | -     |
| 18    | Ground plane | GND   | -     |
| 19    | N.C.         | N.C.  | -     |
| 20    | Ground plane | GND   | -     |

## OLED

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| VCC   | +3.3V rail   |
| PA5   | PA5          |
| PA7   | PA7          |
| PB0   | PB0          |
| PB1   | PB1          |
| PA4   | PA4          |
| PB10  | PB10         |
