---
title: "STM32F103RBT6 - STM32F103RxT6 DEMO"
---

# {{ page.title }}

![STM32F103RBT6 - STM32F103RxT6 DEMO]({{ site.url }}/assets/img/boards/STM32F103RBT6_STM32F103RxT6_DEMO-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>STM32F103RxT6 DEMO</td>
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
        <td>STM32F103RBT6</td>
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
        <td>128KB</td>
    </tr>
    <tr>
        <td>SRAM</td>
        <td>20KB</td>
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
        <td>TFT (1x8 female dupont (2.54))<br>UART (1x4 male dupont (2.54))</td>
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
        <td>Power LED (<b>POWER</b>, +3.3V)<br>User LED (<b>D1/PC13</b>, <code>PC13</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RST</b>, <code>NRST</code>, active low)<br>2-way jumper (<b>BOOT0</b>, <code>BOOT0</code>)<br>2-way jumper (<b>BOOT1</b>, <code>BOOT1</code>)</td>
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
        <td>60mm x 54mm</td>
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

![STM32F103RBT6 - STM32F103RxT6 DEMO]({{ site.url }}/assets/img/boards/STM32F103RBT6_STM32F103RxT6_DEMO-1.jpg)

![STM32F103RBT6 - STM32F103RxT6 DEMO Top view]({{ site.url }}/assets/img/boards/STM32F103RBT6_STM32F103RxT6_DEMO-2.jpg)

![STM32F103RBT6 - STM32F103RxT6 DEMO Bottom view]({{ site.url }}/assets/img/boards/STM32F103RBT6_STM32F103RxT6_DEMO-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| 5V    | +5V rail     |
| PB9   | PB9          |
| PB8   | PB8          |
| PB7   | PB7          |
| PB6   | PB6          |
| PB5   | PB5          |
| PB4   | PB4          |
| PB3   | PB3          |
| PD2   | PD2          |
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
| PC8   | PC8          |
| PC7   | PC7          |
| PC6   | PC6          |
| PB15  | PB15         |
| PB14  | PB14         |
| PB13  | PB13         |
| PB12  | PB12         |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 5V    | +5V rail     |
| GND   | Ground plane |
| 5V    | +5V rail     |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| PB11  | PB11         |
| 3V3   | +3.3V rail   |
| PB2   | PB2          |
| PB10  | PB10         |
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
| PC14  | PC14         |
| PC15  | PC15         |
| VBAT  | VBAT         |
| PC13  | PC13         |

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| 5V    | +5V rail     |
| GND   | Ground plane |
| TX1   | PA9          |
| RX1   | PA10         |

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

## TFT

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| LED   | PB0          |
| 3V3   | +3.3V rail   |
| SCL   | PB13         |
| SDA   | PB15         |
| RS    | PB1          |
| CS    | PB12         |
| RST   | NRST         |

## SWD

| Pin   | Connected to |
| ----- | ------------ |
| 3V3   | +3.3V rail   |
| DIO   | PA13         |
| CLK   | PA14         |
| GND   | Ground plane |
