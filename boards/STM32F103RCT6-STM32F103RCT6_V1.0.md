---
title: "STM32F103RCT6 - STM32F103RCT6 V1.0"
---

# {{ page.title }}

![STM32F103RCT6 V1.0]({{ site.url }}/assets/img/boards/STM32F103RCT6_STM32F103RCT6_V1.0-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>STM32F103RCT6_V1.0</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td>Unknown</td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>China</td>
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
        <td>Yes</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 2x18 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Serial (1x4 male dupont (2.54mm))<br>OLED (1x7 female dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>SWD (1x4 male dupont (2.54mm))<br>JTAG (20-pin IDC)</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Micro</td>
    </tr>
    <tr>
        <td rowspan="3"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>LED1</b>, +3.3V)<br>User LED (<b>D2</b>, <code>PA8</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RSET</b>, <code>NRST</code>, active low)<br>DIP-switch (<code>BOOT0</code>, <code>BOOT1</code>)<br>User switch (<b>KEY</b>, <code>PC0</code>, active low)<br>Switch (+5V from USB)<br>1-way jumper (Enable user LED)<br>1-way jumper (Enable USB D-)<br>1-way jumper (Enable USB D+)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td><a href="https://www.winbond.com/resource-files/w25q16jv%20spi%20revd%2008122016.pdf">Winbond W25Q16JV (16Mb FLASH)</a></td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Black</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>71mm x 47mm</td>
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

![STM32F103RCT6 V1.0]({{ site.url }}/assets/img/boards/STM32F103RCT6_STM32F103RCT6_V1.0-1.jpg)

![STM32F103RCT6 V1.0 Top view]({{ site.url }}/assets/img/boards/STM32F103RCT6_STM32F103RCT6_V1.0-2.jpg)

![STM32F103RCT6 V1.0 Bottom view]({{ site.url }}/assets/img/boards/STM32F103RCT6_STM32F103RCT6_V1.0-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| B0    | BOOT0        |
| PC0   | PC0          |
| B1    | BOOT1        |
| PC1   | PC1          |
| REST  | NRST         |
| PC2   | PC2          |
| PD2   | PD2          |
| PC3   | PC3          |
| U-5V  | USB +5V rail |
| PC4   | PC4          |
| U-5V  | USB +5V rail |
| PC5   | PC5          |
| 5V    | +5V rail     |
| PC6   | PC6          |
| 5V    | +5V rail     |
| PC7   | PC7          |
| 3V3   | +3.3V rail   |
| PC8   | PC8          |
| 3V3   | +3.3V rail   |
| PC9   | PC9          |
| 3V3   | +3.3V rail   |
| PC10  | PC10         |
| 3V3   | +3.3V rail   |
| PC11  | PC11         |
| GND   | Ground plane |
| PC12  | PC12         |
| GND   | Ground plane |
| PC13  | PC13         |
| GND   | Ground plane |
| PC14  | PC14         |
| GND   | Ground plane |
| PC15  | PC15         |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| PA15  | PA15         |
| PB15  | PB15         |
| PA14  | PA14         |
| PB14  | PB14         |
| PA13  | PA13         |
| PB13  | PB13         |
| PA12  | PA12         |
| PB12  | PB12         |
| PA11  | PA11         |
| PB11  | PB11         |
| PA10  | PA10         |
| PB10  | PB10         |
| PA9   | PA9          |
| PB9   | PB9          |
| PA8   | PA8          |
| PB8   | PB8          |
| PA7   | PA7          |
| PB7   | PB7          |
| PA6   | PA6          |
| PB6   | PB6          |
| PA5   | PA5          |
| PB5   | PB5          |
| PA4   | PA4          |
| PB4   | PB4          |
| PA3   | PA3          |
| PB3   | PB3          |
| PA2   | PA2          |
| PB2   | PB2          |
| PA1   | PA1          |
| PB1   | PB1          |
| PA0   | PA0          |
| PB0   | PB0          |
| 3V3   | +3.3V rail   |
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
| 3.3   | +3.3V rail   |

## JTAG

| Pin   | Connected to | JTAG  | SWD   |
| ----- | ------------ | ----- | ----- |
| 1     | +3.3V rail   | VCC   | -     |
| 2     | +3.3V rail   | VCC   | -     |
| 3     | PB4          | TRST  | -     |
| 4     | Ground plane | GND   | -     |
| 5     | PA15         | TDI   | -     |
| 6     | Ground plane | GND   | -     |
| 7     | PA13         | TMS   | SWDIO |
| 8     | Ground plane | GND   | -     |
| 9     | PA14         | TCLK  | SWCLK |
| 10    | Ground plane | GND   | -     |
| 11    | N.C.         | RTCK  | -     |
| 12    | Ground plane | GND   | -     |
| 13    | PB3          | TDO   | SWO   |
| 14    | Ground plane | GND   | -     |
| 15    | NRST         | RESET | -     |
| 16    | Ground plane | GND   | -     |
| 17    | N.C.         | N.C.  | -     |
| 18    | Ground plane | GND   | -     |
| 19    | N.C.         | N.C.  | -     |
| 20    | Ground plane | GND   | -     |

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| Tx    | PA9          |
| Rx    | PA10         |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |

## OLED

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| VCC   | +3.3V rail   |
| D0    | PB13         |
| D1    | PB15         |
| RES   | PB11         |
| DC    | PB10         |
| CS    | PB12         |

## IC - Winbond W25Q16JV (16Mb FLASH)

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
