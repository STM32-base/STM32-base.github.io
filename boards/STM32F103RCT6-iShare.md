---
title: "STM32F103RCT6 - iShare"
---

# {{ page.title }}

![iShare]({{ site.url }}/assets/img/boards/STM32F103RCT6_iShare-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>iShare</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td>iShare</td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>AliExpress, China</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Microcontroller</b></td>
        <td>Part</td>
        <td>STM32F103RCT6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP64</td>
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
        <td>1x 2x17 female dupont (2.54mm)<br>1x 2x14 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>SD-card connector</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>JTAG (20-pin IDC))</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Micro</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>PWR</b>, +3.3V)<br>User LED (<b>DSO</b>, <code>PA8</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>User button (<b>KEY0</b>, <code>PC5</code>, active low)<br>2-way jumper (<code>BOOT0</code>)<br>2-way jumper (<code>BOOT1</code>)<br>Switch (Enable power from USB)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td>ATMH442 (ATMEL AT24Cxx clone/counterfeit)<br><a href="https://www.winbond.com/resource-files/w25q64fw_revd_032513.pdf">Winbond W25Q64FVSI6 (64Kb FLASH)</a></td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Blue</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>75mm x 50mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>4x mounting hole (M3)</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Note:</b> This board is meant for developing LCD based projects, hence the female connector.</li>
                <li><b>Warning:</b> The +5V pins on this board are directly connected to the +5V pin of the USB connector. There is no protection in place. Do not power this board through USB and an external power supply at the same time.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![iShare]({{ site.url }}/assets/img/boards/STM32F103RCT6_iShare-1.jpg)

![iShare Top view]({{ site.url }}/assets/img/boards/STM32F103RCT6_iShare-2.jpg)

![iShare Bottom view]({{ site.url }}/assets/img/boards/STM32F103RCT6_iShare-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| C13   | PC13         |
| PC0   | PC0          |
| PC1   | PC1          |
| PA2   | PA2          |
| PC2   | PC2          |
| PC3   | PC3          |
| GND   | Ground plane |
| NC    | N.C.         |
| VCC   | +3.3V rail   |
| GND   | Ground plane |
| C10   | PC10         |
| VCC   | +3.3V rail   |
| B15   | PC15         |
| PA3   | PA3          |
| B13   | PB13         |
| B14   | PB14         |
| B11   | PB11         |
| B12   | PB12         |
| PB9   | PB9          |
| B10   | PB10         |
| PB7   | PB7          |
| PB8   | PB8          |
| PB5   | PB5          |
| PB6   | PB6          |
| PB3   | PB3          |
| PB4   | PB4          |
| PB1   | PB1          |
| PB2   | PB2          |
| PC4   | PC4          |
| PB0   | PB0          |
| PC7   | PC7          |
| PC6   | PC6          |
| PC9   | PC9          |
| PC8   | PC8          |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 5V    | +5V rail     |
| GND   | Ground plane |
| 5V    | +5V rail     |
| GND   | Ground plane |
| 5V    | +5V rail     |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| BT0   | BOOT0        |
| BT1   | BOOT1        |
| GND   | Ground plane |
| GND   | Ground plane |
| PC5   | PC5          |
| PD2   | PD2          |
| PA1   | PA1          |
| PA0   | PA0          |
| C15   | PC15         |
| PC14  | PC14         |
| A12   | PA12         |
| PA11  | PA11         |
| PA9   | PA9          |
| PA10  | PA10         |

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
| 2     | PB4          | TRST  | -     |
| 3     | PA15         | TDI   | -     |
| 4     | PA13         | TMS   | SWDIO |
| 5     | PA14         | TCLK  | SWCLK |
| 6     | N.C.         | RTCK  | -     |
| 7     | PB3          | TDO   | SWO   |
| 8     | NRST         | RESET | -     |
| 9     | N.C.         | N.C.  | -     |
| 10    | N.C.         | N.C.  | -     |
| 11    | Ground plane | GND   | -     |
| 12    | Ground plane | GND   | -     |
| 13    | Ground plane | GND   | -     |
| 14    | Ground plane | GND   | -     |
| 15    | Ground plane | GND   | -     |
| 16    | Ground plane | GND   | -     |
| 17    | Ground plane | GND   | -     |
| 18    | Ground plane | GND   | -     |
| 19    | Ground plane | GND   | -     |
| 20    | +3.3V rail   | VCC   | -     |

## SD-card connector

| Pin   | Connected to |
| ----- | ------------ |
| RSV   | N.C.         |
| CS    | PC11         |
| DI    | PD2          |
| VCC   | +3.3V rail   |
| SCLK  | PC12         |
| GND   | Ground plane |
| DO    | PC8          |
| RSV   | N.C.         |
| CD    | PC7          |
| BODY  | N.C.         |

## IC - Winbond W25Q64FVSI6 (64Mb FLASH)

| Pin   | Connected to |
| ----- | ------------ |
| /CS   | +3.3V rail via 10kΩ resistor |
| DO    | PA6          |
| IO2   | +3.3V rail   |
| GND   | Ground plane |
| DI    | PA7          |
| CLK   | PA5          |
| IO3   | +3.3V rail   |
| VCC   | +3.3V rail   |

## IC - ATMH442 (ATMEL AT24Cxx clone/counterfeit)

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
