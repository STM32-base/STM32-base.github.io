---
title: "STM32F103VET6 - CZ miniSTM32F103VE-EK"
---

# {{ page.title }}

![CZ miniSTM32F103VE-EK]({{ site.url }}/assets/img/boards/STM32F103VET6_CZ_mini-EK-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>CZ miniSTM32F103VE-EK</td>
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
        <td>STM32F103VET6</td>
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
        <td>512KB</td>
    </tr>
    <tr>
        <td>SRAM</td>
        <td>64KB</td>
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
        <td>2x 2x25 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>NRF24L01 (2x4 female dupont (2.54mm))<br>TFT (2x16 female dupont (2.54mm))<br>ESP-1 (2x4 female dupont (2.54mm))<br>SD-card connector</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>JTAG (20-pin IDC)</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Mini<br>Mini (Serial)</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>Pwr</b>, +3.3V)<br>User LED (<b>DS1</b>, <code>PE5</code>, sink)<br>User LED (<b>DS2</b>, <code>PE6</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>K1</b>, <code>NRST</code>, active low)<br>2-way jumper (<code>BOOT0</code>)<br>2-way jumper (<code>BOOT1</code>)<br>User button (<b>K2</b>, <code>PE3</code>, active low)<br>User button (<b>K3</b>, <code>PC5</code>, active low)<br>1-way jumper (<b>MCU_RXD</b>, Enable Rx to <code>CH340G</code>)<br>1-way jumper (<b>MCU_TXD</b>, Enable Tx to <code>CH340G</code>)<br>Switch (<b>Pwr</b>, +5V USB)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td>HK24C04 (4k EEPROM)<br><a href="https://www.winbond.com/resource-files/w25q16dv_revi_nov1714_web.pdf">Winbond W25Q16DVSIG (16Mb FLASH)</a><br>CH340G USB to Serial</td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Blue</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>105mm x 76mm</td>
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

 - [Schematic]({{ site.url }}/assets/pdf/boards/original-schematic-STM32F103VET6-CZ_miniSTM32F103VE-EK.pdf)

## Pictures

![CZ miniSTM32F103VE-EK]({{ site.url }}/assets/img/boards/STM32F103VET6_CZ_mini-EK-1.jpg)

![CZ miniSTM32F103VE-EK Top view]({{ site.url }}/assets/img/boards/STM32F103VET6_CZ_mini-EK-2.jpg)

![CZ miniSTM32F103VE-EK Bottom view]({{ site.url }}/assets/img/boards/STM32F103VET6_CZ_mini-EK-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| PC14  | PC14         |
| PC15  | PC15         |
| PE6   | PE6          |
| PC14  | PC14         |
| PE4   | PE4          |
| PE5   | PE5          |
| PE2   | PE2          |
| PE3   | PE3          |
| PE0   | PE0          |
| PE1   | PE1          |
| PB8   | PB8          |
| PB9   | PB9          |
| PB6   | PB6          |
| PB7   | PB7          |
| PB4   | PB4          |
| PB5   | PB5          |
| PD7   | PD7          |
| PB3   | PB3          |
| PD5   | PD5          |
| PD6   | PD6          |
| PD3   | PD3          |
| PD4   | PD4          |
| PD1   | PD1          |
| PD2   | PD2          |
| PC12  | PC12         |
| PD0   | PD0          |
| PC10  | PC10         |
| PC11  | PC11         |
| PA14  | PA14         |
| PA15  | PA15         |
| PA12  | PA12         |
| PA13  | PA13         |
| PA10  | PA10         |
| PA11  | PA11         |
| PA8   | PA8          |
| PA9   | PA9          |
| PC8   | PC8          |
| PC9   | PC9          |
| PC6   | PC6          |
| PC7   | PC7          |
| GND   | Ground plane |
| 5V    | +5V rail     |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| BOOT0 | BOOT0        |
| BOOT1 | BOOT1        |
| GND   | Ground plane |
| GND   | Ground plane |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 5V    | +5V rail     |
| PD14  | PD14         |
| PD15  | PD15         |
| PD12  | PD12         |
| PD13  | PD13         |
| PD10  | PD10         |
| PD11  | PD11         |
| PD8   | PD8          |
| PD9   | PD9          |
| PB14  | PB14         |
| PB15  | PB15         |
| PB12  | PB12         |
| PB13  | PB13         |
| PB10  | PB10         |
| PB11  | PB11         |
| PE14  | PE14         |
| PE15  | PE15         |
| PE12  | PE12         |
| PE13  | PE13         |
| PE10  | PE10         |
| PE11  | PE11         |
| PE8   | PE8          |
| PE9   | PE9          |
| PB2   | PB2          |
| PE7   | PE7          |
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
| 3V3   | +3.3V rail   |
| VREF  | VREF+        |
| PC2   | PC2          |
| PC3   | PC3          |
| PC0   | PC0          |
| PC1   | PC1          |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +5V rail     |
| D-    | PA11         |
| D+    | PA12         |
| ID    | N.C.         |
| GND   | Ground plane |

## USB (Serial)

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +5V rail     |
| D-    | Pin 6        |
| D+    | Pin 5        |
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
| 19    | +5V rail     | N.C.  | -     |
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

## TFT

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| PC2   | PC2          |
| 5V    | +5V rail     |
| PD13  | PD13         |
| PB6   | PB6          |
| PA6   | PA6          |
| PA7   | PA7          |
| PB7   | PB7          |
| PA5   | PA5          |
| PD7   | PD7          |
| PD11  | PD11         |
| PD5   | PD5          |
| PD4   | PD4          |
| PD14  | PD14         |
| PD15  | PD15         |
| PD0   | PD0          |
| PD1   | PD1          |
| PE7   | PE7          |
| PE8   | PE8          |
| PE9   | PE9          |
| PE10  | PE10         |
| PE11  | PE11         |
| PE12  | PE12         |
| PE13  | PE13         |
| PE14  | PE14         |
| PE15  | PE15         |
| PD8   | PD8          |
| PD9   | PD9          |
| PD10  | PD10         |
| PE1   | PE1          |
| GND   | Ground plane |

## NRF2401

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| VCC   | +3.3V rail   |
| CE    | PE4          |
| CSN   | PE2          |
| SCK   | PB3          |
| MOSI  | PB5          |
| MISO  | PB4          |
| IRQ   | PC13         |

## ESP-1

| Pin   | Connected to |
| ----- | ------------ |
| UTXD  | PB11         |
| GND   | Ground plane |
| CH_PD | PA0          |
| GPIO2 | PC0          |
| RST   | PC3          |
| GPIO0 | PC1          |
| VCC   | +3.3V rail   |
| URXD  | PB10         |

## HS0038

| Pin   | Connected to |
| ----- | ------------ |
| D     | PA1          |
| -     | Ground plane |
| +     | +3.3V rail   |

## DS18B20

| Pin   | Connected to |
| ----- | ------------ |
| +     | +3.3V rail   |
| D     | PD12         |
| -     | Ground plane |

## IC - HK24C04 (4k EEPROM)

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

## IC - Winbond W25Q16DVSIG (16Mb FLASH)

| Pin   | Connected to |
| ----- | ------------ |
| /CS   | +3.3V rail via 4.7kΩ resistor |
| DO    | PA6          |
| IO2   | +3.3V rail   |
| GND   | Ground plane |
| DI    | PA7          |
| CLK   | PA5          |
| IO3   | +3.3V rail   |
| VCC   | +3.3V rail   |
