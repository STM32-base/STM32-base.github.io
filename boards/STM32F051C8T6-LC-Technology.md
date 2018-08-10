---
title: "STM32F051C8T6 - LC Technology"
---

# {{ page.title }}

![LC Technology]({{ site.url }}/assets/img/boards/STM32F051C8T6_LC_Technology-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>LC Technology STM32F051C8T6</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="http://www.chinalctech.com/">Shenzhen LC Technology Co., Ltd.</a></td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>AliExpress, China</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Microcontroller</b></td>
        <td>Part</td>
        <td>STM32F051C8T6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP48</td>
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
        <td>8KB</td>
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
        <td>2x 2x11 male dupont (2.54mm)</td>
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
        <td>Mini (+5V power only)</td>
    </tr>
    <tr>
        <td rowspan="3"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>D1</b>, +3.3V)<br>User LED (<b>D2</b>, <code>PC13</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<code>NRST</code>, active low)<br>2-way jumper (<code>BOOT0</code>)<br>2-way jumper (<code>BOOT1</code>)</td>
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
        <td>53mm x 32.5mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>2x mounting hole (M4)</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Note:</b> Because the <code>STM32F051C8T6</code> does not support USB, only the power pins on the USB connector are connected.</li>
                <li><b>Warning:</b> The +5V pins on this board are directly connected to the +5V pin of the USB connector. There is no protection in place. Do not power this board through USB and an external power supply at the same time.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![LC Technology]({{ site.url }}/assets/img/boards/STM32F051C8T6_LC_Technology-1.jpg)

![LC Technology Top view]({{ site.url }}/assets/img/boards/STM32F051C8T6_LC_Technology-2.jpg)

![LC Technology Bottom view]({{ site.url }}/assets/img/boards/STM32F051C8T6_LC_Technology-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| VCC   | +3.3V rail   |
| PB9   | PB9          |
| PB8   | PB8          |
| PB7   | PB7          |
| PB6   | PB6          |
| PB5   | PB5          |
| PB4   | PB4          |
| PB3   | PB3          |
| PA15  | PA15         |
| CLK   | PA14         |
| PF7   | PF7          |
| PF6   | PF6          |
| DAT   | PA13         |
| PA12  | PA12         |
| PA11  | PA11         |
| PA8   | PA8          |
| PB15  | PB15         |
| PB14  | PB14         |
| PB13  | PB13         |
| PB12  | PB12         |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +3.3V rail   |
| GND   | Ground plane |
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
| NRST  | NRST         |
| PF1   | PF1          |
| PF0   | PF0          |
| PC15  | PC15         |
| PC14  | PC14         |
| PC13  | PC13         |
| VBAT  | VBAT         |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   |     +5V rail |
| D-    |         N.C. |
| D+    |         N.C. |
| ID    |         N.C. |
| GND   | Ground plane |

## SWD

| Pin   | Connected to |
| ----- | ------------ |
| 3.3V  |   +3.3V rail |
| DAT   |         PA13 |
| CLK   |         PA14 |
| GND   | Ground plane |

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| 5V    | +5V rail     |
| TX    | PA9          |
| RX    | PA10         |
| GND   | Ground plane |
