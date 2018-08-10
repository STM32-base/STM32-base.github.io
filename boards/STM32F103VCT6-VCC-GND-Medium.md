---
title: "STM32F103VCT6 - vcc-gnd.com Medium"
---

# {{ page.title }}

![STM32F103VCT6 vcc-gnd.com Medium]({{ site.url }}/assets/img/boards/STM32F103VCT6_vcc-gnd.com_Medium-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>vcc-gnd.com Medium</td>
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
        <td>STM32F103VCT6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP100</td>
    </tr>
    <tr>
        <td>Core</td>
        <td>Cortex-M3</td>
    </tr>
    <tr>
        <td>FLASH</td>
        <td>256KB</td>
    </tr>
    <tr>
        <td>SRAM</td>
        <td>48KB</td>
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
        <td>2x 2x24 male dupont (2.54mm)</td>
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
        <td>Power LED (<b>PWR</b>, +3.3V)<br>User LED (<b>PC13</b>, <code>PC13</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>2-way jumper (<b>BOOT0</b>, <code>BOOT0</code>)<br>2-way jumper (<b>BOOT1</b>, <code>BOOT1</code>)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td><a href="http://ww1.microchip.com/downloads/en/DeviceDoc/doc0180.pdf">Atmel AT24C08N (8Kb EEPROM)</a></td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Blue</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>62mm x 45mm</td>
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

![STM32F103VCT6 vcc-gnd.com Medium]({{ site.url }}/assets/img/boards/STM32F103VCT6_vcc-gnd.com_Medium-1.jpg)

![STM32F103VCT6 vcc-gnd.com Medium Top View]({{ site.url }}/assets/img/boards/STM32F103VCT6_vcc-gnd.com_Medium-2.jpg)

![STM32F103VCT6 vcc-gnd.com Medium Bottom View]({{ site.url }}/assets/img/boards/STM32F103VCT6_vcc-gnd.com_Medium-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| G     | Ground plane |
| 3.3   | +3.3V rail   |
| G     | Ground plane |
| 3.3   | +3.3V rail   |
| G     | Ground plane |
| 3.3   | +3.3V rail   |
| B10   | PB10         |
| B11   | PB11         |
| E14   | PE14         |
| E15   | PE15         |
| E12   | PE12         |
| E13   | PE13         |
| E10   | PE10         |
| E11   | PE11         |
| E8    | PE8          |
| E9    | PE9          |
| B2    | PB2          |
| E7    | PE7          |
| B0    | PB0          |
| B1    | PB1          |
| C4    | PC4          |
| C5    | PC5          |
| A6    | PA6          |
| A7    | PA7          |
| A4    | PA4          |
| A5    | PA5          |
| A2    | PA2          |
| A3    | PA3          |
| A0    | PA0          |
| C2    | PC2          |
| C3    | PC3          |
| C0    | PC0          |
| C1    | PC1          |
| C14   | PC14         |
| C15   | PC15         |
| E6    | PE6          |
| C13   | PC13         |
| E4    | PE4          |
| E5    | PE5          |
| E2    | PE2          |
| E3    | PE3          |
| E0    | PE0          |
| E1    | PE1          |
| G     | Ground plane |
| G     | Ground plane |
| G     | Ground plane |
| G     | Ground plane |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| G     | Ground plane |
| 3.3   | +3.3V rail   |
| G     | Ground plane |
| VB    | VBAT         |
| B8    | PB8          |
| B9    | PB9          |
| B6    | PB6          |
| B7    | PB7          |
| B4    | PB4          |
| B5    | PB5          |
| D7    | PD7          |
| B3    | PB3          |
| D5    | PD5          |
| D6    | PD6          |
| D3    | PD3          |
| D4    | PD4          |
| D1    | PD1          |
| D2    | PD2          |
| C12   | PC12         |
| D0    | PD0          |
| C10   | PC10         |
| C11   | PC11         |
| A14   | PA14         |
| A15   | PA15         |
| A12   | PA12         |
| A13   | PA13         |
| A10   | PA10         |
| A11   | PA11         |
| A8    | PA8          |
| A9    | PA9          |
| C8    | PC8          |
| C9    | PC9          |
| C6    | PC6          |
| C7    | PC7          |
| D14   | PD14         |
| D15   | PD15         |
| D12   | PD12         |
| D13   | PD13         |
| D10   | PD10         |
| D11   | PD11         |
| D8    | PD8          |
| D9    | PD9          |
| B14   | PB14         |
| B15   | PB15         |
| B12   | PB12         |
| B13   | PB13         |
| G     | Ground plane |
| 5V    | +5V rail     |

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
| SWCLK | PA14         |
| SWDIO | PA13         |
| 3V3   | +3.3V rail   |

## IC - Atmel AT24C08N (8Kb EEPROM)

| Pin   | Connected to |
| ----- | ------------ |
| A0    | Ground plane |
| A1    | Ground plane |
| A2    | Ground plane |
| GND   | Ground plane |
| SDA   | PB7          |
| SCL   | PB6          |
| WP    | Ground plane |
| VCC   | +3.3V rail   |
