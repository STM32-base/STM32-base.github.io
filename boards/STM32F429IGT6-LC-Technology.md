---
title: "STM32F429IGT6 - LC Technology"
---

# {{ page.title }}

![LC Technology STM32F429IGT6]({{ site.url }}/assets/img/boards/STM32F429IGT6_LC_Technology-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>LC Technology</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="http://www.chinalctech.com/">Shenzhen LC Technology</a></td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>China</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Microcontroller</b></td>
        <td>Part</td>
        <td>STM32F429IGT6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP176</td>
    </tr>
    <tr>
        <td>Core</td>
        <td>Cortex-M4</td>
    </tr>
    <tr>
        <td>FLASH</td>
        <td>1024KB</td>
    </tr>
    <tr>
        <td>SRAM</td>
        <td>192KB<br>64KB (CCM)<br>4KB (Backup)</td>
    </tr>
    <tr>
        <td>Max. Clock Speed</td>
        <td>168MHz</td>
    </tr>
    <tr>
        <td rowspan="2"><b>Crystals</b></td>
        <td>HSE (High Speed External)</td>
        <td>25MHz</td>
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
        <td>2x 2x27 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Serial (1x4 male dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>JTAG (20-pin IDC)</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Micro</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (+3.3V)<br>User LED (<b>D1</b>, <code>PD12</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<code>NRST</code>, active low)<br>1-way jumper (<code>BOOT0</code>, active low)<br>User button (<b>KEY</b>, <code>PA0</code>, active high)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td><a href="http://www.issi.com/WW/pdf/42-45S16400J.pdf">ISSI IS42S16400J (64Mb RAM)</a><br><a href="https://www.winbond.com/resource-files/w25q128fv_revhh1_100913_website1.pdf">Winbond 25Q128FV (128Mb FLASH)</a></td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Blue</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>69mm x 62mm</td>
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

![LC Technology STM32F429IGT6]({{ site.url }}/assets/img/boards/STM32F429IGT6_LC_Technology-1.jpg)

![LC Technology STM32F429IGT6 Top view]({{ site.url }}/assets/img/boards/STM32F429IGT6_LC_Technology-2.jpg)

![LC Technology STM32F429IGT6 Bottom view]({{ site.url }}/assets/img/boards/STM32F429IGT6_LC_Technology-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| GND   | Ground plane |
| PA2   | PA2          |
| PA1   | PA1          |
| PA0   | PA0          |
| PC3   | PC3          |
| PC2   | PC2          |
| PC1   | PC1          |
| PC0   | PC0          |
| NRST  | NRST         |
| PF10  | PF10         |
| PI11  | PI11         |
| PI10  | PI10         |
| PI9   | PI9          |
| PC13  | PC13         |
| PI8   | PI8          |
| PE6   | PE6          |
| PE5   | PE5          |
| PE4   | PE4          |
| PE3   | PE3          |
| PE2   | PE2          |
| PI7   | PI7          |
| PI6   | PI6          |
| PI5   | PI5          |
| PI4   | PI4          |
| PB9   | PB9          |
| PB8   | PB8          |
| BOOT0 | BOOT0        |
| PB6   | PB6          |
| GND   | Ground plane |
| PB7   | PB7          |
| PB5   | PB5          |
| PB4   | PB4          |
| PB3   | PB3          |
| PG14  | PG14         |
| PG13  | PG13         |
| PG12  | PG12         |
| PG11  | PG11         |
| PG10  | PG10         |
| PG9   | PG9          |
| PD7   | PD7          |
| PD6   | PD6          |
| PD5   | PD5          |
| PD4   | PD4          |
| PD3   | PD3          |
| PD2   | PD2          |
| PC12  | PC12         |
| PC11  | PC11         |
| PC10  | PC10         |
| PA15  | PA15         |
| PA14  | PA14         |
| VBAT  | VBAT         |
| GND   | Ground plane |
| GND   | Ground plane |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| PI3   | PI3          |
| PI2   | PI2          |
| PI1   | PI1          |
| PI0   | PI0          |
| PH15  | PH15         |
| PH14  | PH14         |
| PH13  | PH13         |
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
| PG7   | PG7          |
| PG6   | PG6          |
| PG3   | PG3          |
| PG2   | PG2          |
| PD13  | PD13         |
| PD11  | PD11         |
| PB15  | PB15         |
| PB14  | PB14         |
| PB13  | PB13         |
| PB12  | PB12         |
| PH12  | PH12         |
| PH11  | PH11         |
| PH10  | PH10         |
| PH9   | PH9          |
| PH8   | PH8          |
| PB11  | PB11         |
| PB10  | PB10         |
| PH9   | PH9          |
| PH8   | PH8          |
| PB11  | PB11         |
| PB10  | PB10         |
| PB2   | PB2          |
| PB1   | PB1          |
| PB0   | PB0          |
| PC5   | PC5          |
| PC4   | PC4          |
| PA7   | PA7          |
| PA6   | PA6          |
| PA5   | PA5          |
| PA4   | PA4          |
| PA3   | PA3          |
| PH5   | PH5          |
| PH4   | PH4          |
| PH2   | PH2          |
| PH3   | PH3          |
| GND   | Ground plane |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| 5V    | +5V rail     |
| 5V    | +5V rail     |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +5V rail     |
| D-    | PA11         |
| D+    | PA12         |
| ID    | N.C.         |
| GND   | Ground plane |

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| Tx    | PA9          |
| Rx    | PA10         |
| GND   | Ground plane |
| 5V    | +5V rail     |

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

## IC - Winbond 25Q128FV (128Mb FLASH)

| Pin   | Connected to |
| ----- | ------------ |
| /CS   | +3.3V rail via 10kΩ resistor |
| DO    | PF8          |
| IO2   | N.C.         |
| GND   | Ground plane |
| DI    | PF10         |
| CLK   | PF9          |
| IO3   | +3.3V rail   |
| VCC   | +3.3V rail   |

## IC - ISSI IS42S1600J (64Mb RAM)

| Pin   | Connected to |
| ----- | ------------ |
| VDD   | +3.3V rail   |
| DQ0   | PD14         |
| VDDQ  | +3.3V rail   |
| DQ1   | PD15         |
| DQ2   | PD0          |
| GNDQ  | Ground plane |
| DQ3   | PD1          |
| DQ4   | PE7          |
| VDDQ  | +3.3V rail   |
| DQ5   | PE8          |
| DQ6   | PE9          |
| GNDQ  | Ground plane |
| DQ7   | PE10         |
| VDD   | +3.3V rail   |
| LDQM  | PE0          |
| WE    | PC0          |
| CAS   | PG15         |
| RAS   | PF11         |
| CS    | PH3          |
| BA0   | PG4          |
| BA1   | PG5          |
| A10   | PG0          |
| A0    | PF0          |
| A1    | PF1          |
| A2    | PF2          |
| A3    | PF3          |
| VDD   | +3.3V rail   |
| GND   | Ground plane |
| A4    | PF4          |
| A5    | PF5          |
| A6    | PF12         |
| A7    | PF13         |
| A8    | PF14         |
| A9    | PF15         |
| A11   | PG1          |
| NC    | N.C.         |
| CKE   | PC3          |
| CLK   | PG8          |
| UDQM  | PE1          |
| NC    | N.C.         |
| GND   | Ground plane |
| DQ8   | PE11         |
| VDDQ  | +3.3V rail   |
| DQ9   | PE12         |
| DQ10  | PE13         |
| GNDQ  | Ground plane |
| DQ11  | PE14         |
| DQ12  | PE15         |
| VDDQ  | +3.3V rail   |
| DQ13  | PD8          |
| DQ14  | PD9          |
| GNDQ  | Ground plane |
| DQ15  | PD10         |
| GND   | Ground plane |
