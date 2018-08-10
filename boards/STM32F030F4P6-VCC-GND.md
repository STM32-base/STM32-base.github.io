---
title: "STM32F030F4P6 - vcc-gnd.com"
---

# {{ page.title }}

![STM32F030F4P6 vcc-gnd.com]({{ site.url }}/assets/img/boards/STM32F030F4P6_vcc-gnd.com-1.jpg)

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
        <td>2x 1x10 male dupont (2.54mm)</td>
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
        <td>Micro (+5V power only)</td>
    </tr>
    <tr>
        <td rowspan="3"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (+3.3V)<br>User LED (<code>PB1</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<code>NRST</code>, active low)<br>1-way jumper (<code>BOOT0</code>, active low)</td>
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
        <td>28mm x 22mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>Breadboard</td>
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

![STM32F030F4P6 vcc-gnd.com]({{ site.url }}/assets/img/boards/STM32F030F4P6_vcc-gnd.com-1.jpg)

![STM32F030F4P6 vcc-gnd.com Top view]({{ site.url }}/assets/img/boards/STM32F030F4P6_vcc-gnd.com-2.jpg)

![STM32F030F4P6 vcc-gnd.com Bottom view]({{ site.url }}/assets/img/boards/STM32F030F4P6_vcc-gnd.com-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| 3.3   | +3.3V rail   |
| 5V    | +5V rail     |
| G     | Ground plane |
| A14   | PA14         |
| A13   | PA13         |
| A10   | PA10         |
| A9    | PA9          |
| B1    | PB1          |
| G     | Ground plane |
| G     | Ground plane |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| A7    | PA7          |
| A6    | PA6          |
| A5    | PA5          |
| A4    | PA4          |
| A3    | PA3          |
| A2    | PA2          |
| A1    | PA1          |
| A0    | PA0          |
| F1    | PF1          |
| F0    | PF0          |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +5V rail     |
| D-    | N.C.         |
| D+    | N.C.         |
| ID    | N.C.         |
| GND   | Ground plane |

## SWD

| Pin   | Connected to |
| ----- | ------------ |
| G     | Ground plane |
| C     | PA14         |
| D     | PA13         |
| V     | +3.3V rail   |
