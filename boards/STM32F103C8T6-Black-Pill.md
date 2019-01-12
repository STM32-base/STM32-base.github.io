---
title: "STM32F103C8T6 - Black Pill"
---

# {{ page.title }}

![Black Pill]({{ site.url }}/assets/img/boards/STM32F103C8T6_Black_Pill-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Black Pill</td>
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
        <td>No</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Power</b></td>
        <td>Sources</td>
        <td>Any +3.3V pin (+3.3V)<br>Any +5V pin (+5V)<br>USB connector (+5V)</td>
    </tr>
    <tr>
        <td>Regulator manufacturer</td>
        <td>Unknown</td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td>Unknown (S20K)</td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT-23-5</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 150mA</td>
    </tr>
    <tr>
        <td>Battery holder</td>
        <td>No</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 1x17 male dupont (2.54mm)</td>
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
        <td>Power LED (+3.3V)<br>User LED (<code>PB12</code>, sink)</td>
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
        <td>57mm x 25mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>Breadboard</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Trivia:</b> This board is a improved version of the <a href="{{ site.url }}/boards/STM32F103C8T6-Blue-Pill">Blue Pill</a> board. The name of this board is also derived from the Blue Pill.</li>
            </ul>
        </td>
    </tr>
</table>

## Resources

 - [Schematic]({{ site.url }}/assets/pdf/boards/original-schematic-STM32F103C8T6-Black_Pill.pdf)

## Pictures

![Black Pill]({{ site.url }}/assets/img/boards/STM32F103C8T6_Black_Pill-1.jpg)

![Black Pill Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Black_Pill-2.jpg)

![Black Pill Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Black_Pill-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| V3.3  | +3.3V rail   |
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

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
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
| RST   | NRST         |
| C13   | PC13         |
| B9    | PB9          |
| B8    | PB8          |
| GND   | Ground plane |

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
