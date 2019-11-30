---
title: "STM32F407VET6 - STM32 F4VE V2.0"
---

# {{ page.title }}

![STM32 F4VE V2.0]({{ site.url }}/assets/img/boards/STM32F407VET6_STM32_F4VE_V2.0-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>STM32 F4VE V2.0</td>
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
        <td>STM32F407VET6</td>
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
        <td>512KB</td>
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
        <td>2x 2x24 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Serial (1x4 male dupont (2.54mm))<br>NRF24L01 (2x4 female dupont (2.54mm))<br>Display (2x16 male dupont (2.54mm))<br>SD card</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>JTAG (20-pin IDC)</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Mini</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>D1</b>, +3.3V)<br>User LED (<b>D2</b>, <code>PA6</code>, sink)<br>User LED (<b>D3</b>, <code>PA7</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RST</b>, <code>NRST</code>, active low)<br>User button (<b>WK_UP</b>, <code>PA0</code>, active high)<br>2-way jumper (<b>BT0</b>, <code>BOOT0</code>)<br>2-way jumper (<b>BT1</b>, <code>BOOT1</code>)<br>User button (<b>K0</b>, <code>PE4</code>, active low)<br>User button (<b>K1</b>, <code>PE3</code>, active low)</td>
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
        <td>85mm x 62mm</td>
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

## Resources

 - [Schematic]({{ site.url }}/assets/pdf/boards/original-schematic-STM32F407VET6-STM32_F4VE_V2.0.pdf)

## Pictures

![STM32 F4VE V2.0]({{ site.url }}/assets/img/boards/STM32F407VET6_STM32_F4VE_V2.0-1.jpg)

![STM32 F4VE V2.0 Top view]({{ site.url }}/assets/img/boards/STM32F407VET6_STM32_F4VE_V2.0-2.jpg)

![STM32 F4VE V2.0 Bottom view]({{ site.url }}/assets/img/boards/STM32F407VET6_STM32_F4VE_V2.0-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| PB13  | PB13         |
| PB14  | PB14         |
| PB11  | PB11         |
| PB12  | PB12         |
| PE15  | PE15         |
| PB10  | PB10         |
| PE13  | PE13         |
| PE14  | PE14         |
| PE11  | PE11         |
| PE12  | PE12         |
| PE9   | PE9          |
| PE10  | PE10         |
| PE7   | PE7          |
| PE8   | PE8          |
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
| VR-   | VREF-        |
| VR+   | VREF+        |
| PC2   | PC2          |
| PC3   | PC3          |
| PC0   | PC0          |
| PC1   | PC1          |
| PE6   | PE6          |
| PC13  | PC13         |
| PE4   | PE4          |
| PE5   | PE5          |
| PE2   | PE2          |
| PE3   | PE3          |
| GND   | Ground plane |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| 5V    | +5V rail     |
| 5V    | +5V rail     |
| 5V    | +5V rail     |
| 5V    | +5V rail     |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| BT1   | BOOT1        |
| BT0   | BOOT0        |
| GND   | Ground plane |
| GND   | Ground plane |
| GND   | Ground plane |
| GND   | Ground plane |
| PE0   | PE0          |
| PE1   | PE1          |
| PB8   | PB8          |
| PB9   | PB9          |
| PB6   | PB6          |
| PB7   | PB7          |
| PB3   | PB3          |
| PB5   | PB5          |
| PD6   | PD6          |
| PD7   | PD7          |
| PD4   | PD4          |
| PD5   | PD5          |
| PD2   | PD2          |
| PD3   | PD3          |
| PD0   | PD0          |
| PD1   | PD1          |
| PC11  | PC11         |
| PC12  | PC12         |
| PA15  | PA15         |
| PC10  | PC10         |
| PA11  | PA11         |
| PA12  | PA12         |
| PA9   | PA9          |
| PA10  | PA10         |
| PC9   | PC9          |
| PA8   | PA8          |
| PC7   | PC7          |
| PC8   | PC8          |
| PD15  | PD15         |
| PC6   | PC6          |
| PD13  | PD13         |
| PD14  | PD14         |
| PD11  | PD11         |
| PD12  | PD12         |
| PD9   | PD9          |
| PD10  | PD10         |
| PB15  | PB15         |
| PD8   | PD8          |

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
| CD    | N.C.         |
| BODY  | Ground plane |

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| Tx    | PA9          |
| Rx    | PA10         |
| GND   | Ground plane |
| 5V    | +5V rail     |

## NRF2401

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| VCC   | +3.3V rail   |
| CE    | PB6          |
| CSN   | PB7          |
| SCK   | PB3          |
| MOSI  | PB5          |
| MISO  | PB4          |
| IRQ   | PB8          |

## TFT

| Pin   | Connected to |
| ----- | ------------ |
| NRST  | NRST         |
| GND   | Ground plane |
| PD9   | PD9          |
| PD10  | PD10         |
| PE15  | PE15         |
| PD8   | PD8          |
| PE13  | PE13         |
| PE14  | PE14         |
| PE11  | PE11         |
| PE12  | PE12         |
| PE9   | PE9          |
| PE10  | PE10         |
| PE7   | PE7          |
| PE8   | PE8          |
| PD0   | PD0          |
| PD1   | PD1          |
| PD14  | PD14         |
| PD15  | PD15         |
| PD5   | PD5          |
| PD4   | PD4          |
| PD7   | PD7          |
| PD13  | PD13         |
| PB12  | PB12         |
| PB13  | PB13         |
| PB14  | PB14         |
| PB15  | PB15         |
| VBAT  | VBAT         |
| PC4   | PC4          |
| GND   | Ground plane |
| NC    | N.C.         |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |

## IC - Winbond W25Q16JV (16Mb FLASH)

| Pin   | Connected to |
| ----- | ------------ |
| /CS   | +3.3V rail via 10kΩ resistor |
| DO    | PB4          |
| IO2   | +3.3V rail   |
| GND   | Ground plane |
| DI    | PB5          |
| CLK   | PB3          |
| IO3   | +3.3V rail   |
| VCC   | +3.3V rail   |
