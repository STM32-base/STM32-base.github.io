---
title: "STM32F103C8T6 - Blue Pill"
---

# {{ page.title }}

![Blue Pill Variations]({{ site.url }}/assets/img/boards/STM32F103C8T6_Blue_Pill-4.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Blue Pill</td>
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
        <td><a href="http://txsemi.com/">Shanghai TX Electronics Sci-Tech Co., Ltd</a></td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td><a href="http://www.txsemi.com/Upload/TX6211B_V12-11264794020.pdf">TX6211B (<code>DE=A1D</code>)</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT353</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 300mA</td>
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
        <td>Power LED (<b>PWR</b>, +3.3V)<br>User LED (<b>PC13</b>, <code>PC13</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>2-way jumper (<code>BOOT0</code>)<br>2-way jumper (<code>BOOT1</code>)</td>
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
        <td>53mm x 23mm</td>
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
                <li><b>Warning:</b> This board may have a wrong value of resistor on the USB D+ pin. Instead of a 1.5kΩ it has either a 10kΩ or 4.7kΩ resistor. This can be solved by replacing the resistor with the right value.</li>
                <li><b>Trivia:</b> This board might be one of the most populair Chinese STM32 development boards currently available. This board is based on the Maple Mini.</li>
                <li><b>Trivia:</b> This board got its name from a <a href="http://www.stm32duino.com/viewtopic.php?f=28&t=117&hilit=blue+pill">forum post</a> at the STM32duino forums and is a reference to the movie <a href="https://www.imdb.com/title/tt0133093/">The Matrix</a>.</li>
                <li><b>Trivia:</b> This board is <a href="{{ site.url }}/boards/STM32F051C8T6-Blue-Pill">also available</a> with an <code>STM32F051C8T6</code> microcontroller, although slightly different.</li>
            </ul>
        </td>
    </tr>
</table>

## Resources

 - [Schematic]({{ site.url }}/assets/pdf/boards/original-schematic-STM32F103C8T6-Blue_Pill.pdf)

## Pictures

![Blue Pill]({{ site.url }}/assets/img/boards/STM32F103C8T6_Blue_Pill-1.jpg)

![Blue Pill Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Blue_Pill-2.jpg)

![Blue Pill Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Blue_Pill-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| G     | Ground plane |
| G     | Ground plane |
| 3.3   | +3.3V rail   |
| R     | NRST         |
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
| VB    | VBAT         |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 3.3   | +3.3 rail    |
| G     | Ground plane |
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
