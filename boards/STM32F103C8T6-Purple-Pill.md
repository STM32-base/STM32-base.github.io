---
title: "STM32F103C8T6 - Purple Pill"
---

# {{ page.title }}

![Purple Pill]({{ site.url }}/assets/img/boards/STM32F103C8T6_Purple_Pill-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Purple Pill</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="http://cjmcu.com/">CJMCU</a></td>
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
        <td>None</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Power</b></td>
        <td>Sources</td>
        <td>Any +3.3V pin (+3.3V)<br>Any +5V pin (+5V)<br>USB connector (+5V)</td>
    </tr>
    <tr>
        <td>Regulator manufacturer</td>
        <td><a href="http://www.microchip.com/">Micrel / Microchip</a></td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td><a href="https://cdn-shop.adafruit.com/product-files/3081/mic5219.pdf">MIC5219 (LG33)</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT-23-5</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 500mA (peak)</td>
    </tr>
    <tr>
        <td>Battery holder</td>
        <td>No</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 1x15 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>None</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>None</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Mini</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (+3.3V)<br>User LED (<code>PB11</code>, source)<br>User LED (<code>PB12</code>, source)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>None</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td>None</td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Purple</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>45mm x 25mm</td>
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
            </ul>
        </td>
    </tr>
</table>

## Pictures

![Purple Pill]({{ site.url }}/assets/img/boards/STM32F103C8T6_Purple_Pill-1.jpg)

![Purple Pill Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Purple_Pill-2.jpg)

![Purple Pill Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Purple_Pill-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| 3.3   | +3.3V rail   |
| DIO   | PA13         |
| DLK   | PA14         |
| RST   | NRST         |
| GND   | Ground plane |
| MOS   | PA7          |
| MIO   | PA6          |
| CLK   | PA5          |
| CS    | PA4          |
| 3.3   | +3.3V rail   |
| GND   | Ground plane |
| PA0   | PA0          |
| PA1   | PA1          |
| PA2   | PA2          |
| PA3   | PA3          |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| PB3   | PB3          |
| PB2   | PB2          |
| PB1   | PB1          |
| PB0   | PB0          |
| 3.3   | +3.3V rail   |
| GND   | Ground plane |
| RX    | PA10         |
| TX    | PA9          |
| 3.3   | +3.3V rail   |
| +5V   | +5V rail     |
| GND   | Ground plane |
| SDA   | PB6          |
| SCL   | PB7          |
| +5V   | +5V rail     |
| GND   | Ground plane |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +5V rail     |
| D-    | PA11         |
| D+    | PA12         |
| ID    | N.C.         |
| GND   | Ground plane |
