---
title: "STM32F103RCT6 - STM32 Mini V2.0"
---

# {{ page.title }}

![STM32 Mini V2.0]({{ site.url }}/assets/img/boards/STM32F103RCT6_STM32_Mini_V2.0-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>STM32 Mini V2.0</td>
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
        <td>2x 2x15 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Serial (1x4 male dupont (2.54mm))<br>OLED (1x8 female dupont (2.54mm))<br>NRF2401 (2x4 female dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>JTAG (20-pin IDC))</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Mini</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>D2</b>, +3.3V)<br>User LED (<b>D1</b>, <code>PD2</code>, sink)<br>User LED (<b>D0</b>, <code>PA8</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>REST</b>, <code>NRST</code>)<br>2-way jumper (<code>BOOT0</code>)<br>2-way jumper (<code>BOOT1</code>)<br>User button (<b>WK_UP</b>, <code>PA0</code>, active high)<br>User button (<b>KEY1</b>, <code>PC13</code>, active low)<br>User button (<b>KEY0</b>, <code>PC1</code>, active low)</td>
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
        <td>62mm x 57mm</td>
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

![STM32 Mini V2.0]({{ site.url }}/assets/img/boards/STM32F103RCT6_STM32_Mini_V2.0-1.jpg)

![STM32 Mini V2.0 Top view]({{ site.url }}/assets/img/boards/STM32F103RCT6_STM32_Mini_V2.0-2.jpg)

![STM32 Mini V2.0 Bottom view]({{ site.url }}/assets/img/boards/STM32F103RCT6_STM32_Mini_V2.0-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| PA12  | PA12         |
| 5V    | +5V rail     |
| PA11  | PA11         |
| GND   | Ground plane |
| PB9   | PB9          |
| GND   | Ground plane |
| PB7   | PB7          |
| PB8   | PB8          |
| PB5   | PB5          |
| PB6   | PB6          |
| PB3   | PB3          |
| PB4   | PB4          |
| PC12  | PC12         |
| PD2   | PD2          |
| PC10  | PC10         |
| PC11  | PC11         |
| PA14  | PA14         |
| PA15  | PA15         |
| PA10  | PA10         |
| PA13  | PA13         |
| PA8   | PA8          |
| PA8   | PA9          |
| PC8   | PC8          |
| PC9   | PC9          |
| PC6   | PC6          |
| PC7   | PC7          |
| PB14  | PB14         |
| PB15  | PB15         |
| PB12  | PB12         |
| PB13  | PB13         |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| GND   | Ground plane |
| BT0   | BOOT0        |
| BT1   | BOOT1        |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| PB10  | PB10         |
| PB11  | PB11         |
| PB0   | PB0          |
| PB1   | PB1          |
| PC4   | PC4          |
| PC5   | PC5          |
| PA6   | PA6          |
| PA7   | PA7          |
| PA4   | PA4          |
| PA5   | PA5          |
| PA2   | PA2          |
| PA3   | PA3          |
| PA0   | PA0          |
| PA1   | PA1          |
| PC2   | PC2          |
| PC3   | PC3          |
| PC0   | PC0          |
| PC1   | PC1          |
| GND   | Ground plane |
| PC13  | PC13         |
| GND   | Ground plane |
| PC14  | PC14         |
| 3V3   | +3.3V        |
| PC15  | PC15         |

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
| 5V    | +5V rail     |

## OLED

| Pin   | Connected to |
| ----- | ------------ |
| NC    | N.C.         |
| A0    | PC6          |
| RST   | NRST         |
| CS    | PB12         |
| SCL   | PB13         |
| SDI   | PB15         |
| GND   | Ground plane |
| 3V    | +3.3V rail   |

## NRF2401

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| VCC   | +3.3V rail   |
| CE    | PA4          |
| CSN   | PC4          |
| SCK   | PA5          |
| MOSI  | PA7          |
| MISO  | PA6          |
| IRQ   | PC5          |

## IC - Winbond W25Q16JV (16Mb FLASH)

| Pin   | Connected to |
| ----- | ------------ |
| /CS   | PA2, +3.3V rail via 10kΩ resistor |
| DO    | PA6          |
| IO2   | +3.3V rail   |
| GND   | Ground plane |
| DI    | PA7          |
| CLK   | PA5          |
| IO3   | +3.3V rail   |
| VCC   | +3.3V rail   |
