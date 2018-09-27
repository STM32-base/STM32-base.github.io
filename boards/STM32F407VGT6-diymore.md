---
title: "STM32F407VGT6 - Diymore"
---

# {{ page.title }}

![STM32F407VGT6 Diymore]({{ site.url }}/assets/img/boards/STM32F407VGT6_diymore-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Diymore</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="https://www.diymore.cc/">diymore.cc</a></td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>China</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Microcontroller</b></td>
        <td>Part</td>
        <td>STM32F407VGT6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP100</td>
    </tr>
    <tr>
        <td>Core</td>
        <td>Cortex-M4</td>
    </tr>
    <tr>
        <td>FLASH</td>
        <td>1024KB</td>
    </tr>
    <tr>
        <td>SRAM</td>
        <td>128KB<br>64KB (CCM)<br>4KB (Backup)</td>
    </tr>
    <tr>
        <td>Max. Clock Speed</td>
        <td>168MHz</td>
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
        <td>2x 2x16 male dupont (2.54mm)<br>1x 2x12 male dupont (2.54mm)</td>
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
        <td>Micro</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>LED1</b>, +3.3V)<br>User LED (<b>LED2</b>, <code>PE0</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>K2</b>, <code>NRST</code>, active low)<br>User button (<code>PD15</code>, active low)<br>1-way jumper (<code>BOOT0</code>, active low)<br>1-way jumper (<code>BOOT1</code>, active low)</td>
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
        <td>60mm x 45mm</td>
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

![STM32F407VGT6 vcc-gnd.com Small]({{ site.url }}/assets/img/boards/STM32F407VGT6_diymore-1.jpg)

![STM32F407VGT6 vcc-gnd.com Small Top view]({{ site.url }}/assets/img/boards/STM32F407VGT6_diymore-2.jpg)

![STM32F407VGT6 vcc-gnd.com Small Bottom view]({{ site.url }}/assets/img/boards/STM32F407VGT6_diymore-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| VCC   | +5V rail     |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| PE0   | PE0          |
| PB7   | PB7          |
| PB6   | PB6          |
| PB5   | PB5          |
| PB4   | PB4          |
| PB3   | PB3          |
| PD7   | PD7          |
| PD6   | PD6          |
| PD5   | PD5          |
| PD4   | PD4          |
| PD3   | PD3          |
| PD2   | PD2          |
| PD1   | PD1          |
| PD0   | PD0          |
| PC12  | PC12         |
| PC11  | PC11         |
| PC10  | PC10         |
| PA15  | PA15         |
| PA14  | PA14         |
| PA13  | PA13         |
| PA12  | PA12         |
| PA11  | PA11         |
| PA10  | PA10         |
| PA9   | PA9          |
| PA8   | PA8          |
| PC9   | PC9          |
| GND   | Ground plane |
| VCC   | +5V rail     |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| PC8   | PC8          |
| PC7   | PC7          |
| PC6   | PC6          |
| PD15  | PD15         |
| PD14  | PD14         |
| PD13  | PD13         |
| PD12  | PD12         |
| PD11  | PD11         |
| PD10  | PD10         |
| PD9   | PD9          |
| PD8   | PD8          |
| PB15  | PB15         |
| PB14  | PB14         |
| PB13  | PB13         |
| PB12  | PB12         |
| 3.3V  | +3.3V rail   |
| PB11  | PB11         |
| GND   | Ground plane |
| PE15  | PE15         |
| PB10  | PB10         |
| PE13  | PE13         |
| PE14  | PE14         |
| PE11  | PE11         |
| PE12  | PE12         |

## Header 3

| Pin   | Connected to |
| ----- | ------------ |
| PB2   | PB2          |
| PE10  | PE10         |
| PE9   | PE9          |
| PE8   | PE8          |
| PE7   | PE7          |
| PE1   | PE1          |
| PB9   | PB9          |
| PB8   | PB8          |
| PB1   | PB1          |
| PB0   | PB0          |
| PC5   | PC5          |
| PC4   | PC4          |
| PA7   | PA7          |
| PA6   | PA6          |
| PA5   | PA5          |
| PA4   | PA4          |
| PA3   | PA3          |
| PC3   | PC3          |
| PA2   | PA2          |
| PA1   | PA1          |
| PA0   | PA0          |
| PC2   | PC2          |
| PC1   | PC1          |
| PC0   | PC0          |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| PC13  | PC13         |
| PE6   | PE6          |
| PE5   | PE5          |
| PE4   | PE4          |
| PE3   | PE3          |
| PE2   | PE2          |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +5V rail     |
| D-    | PA11         |
| D+    | PA12         |
| ID    | N.C.         |
| GND   | Ground plane |
