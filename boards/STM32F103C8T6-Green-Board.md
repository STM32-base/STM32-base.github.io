---
title: "STM32F103C8T6 - Green Board"
---

# {{ page.title }}

![Green Board]({{ site.url }}/assets/img/boards/STM32F103C8T6_Green_Board-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Green Board</td>
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
        <td><a href="https://www.torexsemi.com/">Torex Semiconductior</a></td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td><a href="https://www.torexsemi.com/file/xc6204/XC6204-XC6205.pdf">XC6204 (<code>4A2D</code>)</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT89</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 150mA</td>
    </tr>
    <tr>
        <td>Battery holder</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>3x 2x12 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Power (1x2 male dupont (2.54mm))</td>
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
        <td>Power LED (+5V)<br>User LED (<b>LED1</b>, <code>PB0</code>, source)<br>User LED (<b>LED2</b>, <code>PB1</code>, source)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>1-way jumper (<b>BOOT0</b>, <code>BOOT0</code>, active high)<br>User button (<b>KEY</b>, <code>PB2</code>, active low)<br>2-way switch (+5V from USB / +5V IN)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td>None</td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Green</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>70mm x 60mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>4x mounting hole (M3)</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Note:</b> This board features a switch which is used to select the +5V source. Either +5V from USB or +5V from the <code>5V IN</code> pin.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![Green Board]({{ site.url }}/assets/img/boards/STM32F103C8T6_Green_Board-1.jpg)

![Green Board Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Green_Board-2.jpg)

![Green Board Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Green_Board-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| GND   | Ground plane |
| GND   | Ground plane |
| PB0   | PB0          |
| NC    | N.C.         |
| PB1   | PB1          |
| NC    | N.C.         |
| PB2   | PB2          |
| NC    | N.C.         |
| PB3   | PB3          |
| GND   | Ground plane |
| PB4   | PB4          |
| GND   | Ground plane |
| PB5   | PB5          |
| GND   | Ground plane |
| PB6   | PB6          |
| NC    | N.C.         |
| PB7   | PB7          |
| NC    | N.C.         |
| GND   | Ground plane |
| 5V    | +5V rail     |
| 3V3   | +3.3V rail   |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 5V    | +5V rail     |
| 3V3   | +3.3V rail   |
| NC    | N.C.         |
| GND   | Ground plane |
| GND   | Ground plane |
| PB15  | PB15         |
| GND   | Ground plane |
| PB14  | PB14         |
| GND   | Ground plane |
| PB13  | PB13         |
| NC    | N.C.         |
| PB12  | PB12         |
| 5V    | +5V rail     |
| PB11  | PB11         |
| GND   | Ground plane |
| PB10  | PB10         |
| GND   | Ground plane |
| PB9   | PB9          |
| GND   | Ground plane |
| PB8   | PB8          |
| NC    | N.C.         |
| GND   | Ground plane |
| 5V    | +5V rail     |
| 3V3   | +3.3V rail   |

## Header 3

The left main header as seen on the top view. Pins listed in a clock-wise order, alternating the outer pin with the inner pin.

| Pin   | Connected to |
| ----- | ------------ |
| NC    | N.C.         |
| NC    | N.C.         |
| 5V    | +5V rail     |
| 5V    | +5V rail     |
| GND   | Ground plane |
| GND   | Ground plane |
| PA15  | PA15         |
| PA10  | PA10         |
| PA8   | PA8          |
| PA9   | PA9          |
| GND   | Ground plane |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| GND   | Ground plane |
| PA3   | PA3          |
| PA7   | PA7          |
| PA2   | PA2          |
| PA6   | PA6          |
| PA1   | PA1          |
| PA5   | PA5          |
| PA0   | PA0          |
| PA4   | PA4          |

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
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| CLK   | PA14         |
| DIO   | PA13         |

## Power

| Pin   | Connected to |
| ----- | ------------ |
| -     | Ground plane |
| +     | +5V rail     |
