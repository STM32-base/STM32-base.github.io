---
title: "STM32F030F4P6 - Baite STM32F030F4 Module"
---

# {{ page.title }}

![Baite STM32F030F4P6]({{ site.url }}/assets/img/boards/STM32F030F4P6_Baite-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Baite STM32F030F4 Module</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="https://aliexpress.com/store/812021">Baite</a></td>
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
        <td>16MHz</td>
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
        <td><a href="http://www.advanced-monolithic.com/">Advanced Monolithic Systems Inc.</a></td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td><a href="http://www.advanced-monolithic.com/pdf/ds1117.pdf">AMS1117</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT89</td>
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
        <td>2x 1x10 male dupont (2.54mm)</td>
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
        <td>None</td>
    </tr>
    <tr>
        <td rowspan="3"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>PWR</b>, +3.3V)<br>User LED (<b>TST</b>, <code>PA1</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>1-way jumper (<code>BOOT0</code>, active high)</td>
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
        <td>25mm x 18mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>Breadboard</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Note:</b> This board has a 16MHz HSE crystal installed instead of a more common 8MHz variant.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![Baite STM32F030F4P6]({{ site.url }}/assets/img/boards/STM32F030F4P6_Baite-1.jpg)

![Baite STM32F030F4P6 Top view]({{ site.url }}/assets/img/boards/STM32F030F4P6_Baite-2.jpg)

![Baite STM32F030F4P6 Bottom view]({{ site.url }}/assets/img/boards/STM32F030F4P6_Baite-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| A14   | PA14         |
| A13   | PA13         |
| A10   | PA10         |
| A9    | PA9          |
| VIN   | Vin rail     |
| GND   | Ground plane |
| B1    | PB1          |
| A7    | PA7          |
| A6    | PA6          |
| A5    | PA5          |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| A4    | PA4          |
| A3    | PA3          |
| A2    | PA2          |
| A1    | PA1          |
| A0    | PA0          |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| F1    | PF1          |
| F0    | PF0          |
| BT0   | BOOT0        |

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| TX    | PA9          |
| RX    | PA10         |

## SWD

| Pin   | Connected to |
| ----- | ------------ |
| 3V3   | +3.3V rail   |
| SWDIO | PA13         |
| SWCLK | PA14         |
| GND   | Ground plane |
