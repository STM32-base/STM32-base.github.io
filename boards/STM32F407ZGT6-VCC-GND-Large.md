---
title: "STM32F407ZGT6 - vcc-gnd.com Large"
---

# {{ page.title }}

![STM32F407ZGT6 vcc-gnd.com Large]({{ site.url }}/assets/img/boards/STM32F407ZGT6_vcc-gnd.com_Large-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>vcc-gnd.com Large</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="https://vcc-gnd.world.taobao.com/">vcc-gnd.com</a></td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>China</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Microcontroller</b></td>
        <td>Part</td>
        <td>STM32F407ZGT6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP144</td>
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
        <td>128KB<br>64KB (CCM)<br>4KB (Backup)</td>
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
        <td><a href="http://txsemi.com/">Shanghai TX Electronics Sci-Tech Co., Ltd</a></td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td><a href="http://www.txsemi.com/Upload/TX6211B_V12-11264794020.pdf">TX6211B (<code>DE=A1D</code>)</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT353</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 300mA</td>
    </tr>
    <tr>
        <td>Battery holder</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 2x22 male dupont (2.54mm)<br>1x 2x13 male dupont (2.54mm)<br>1x 2x6 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>SD card</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>SWD (1x4 female dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Micro</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>PWR</b>, +3.3V)<br>User LED (<b>PG15</b>, <code>PG15</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>DIP-switch (<code>BOOT0</code>, <code>BOOT1</code>)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td><a href="http://ww1.microchip.com/downloads/en/DeviceDoc/doc0180.pdf">Atmel AT24C08N (8Kb EEPROM)</a><br><a href="https://www.winbond.com/resource-files/w25x40cl_e01.pdf">Winbond 25X40CLNIG (4Mb FLASH)</a></td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Blue</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>59mm x 47mm</td>
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

## Picture

![STM32F407ZGT6 vcc-gnd.com Large]({{ site.url }}/assets/img/boards/STM32F407ZGT6_vcc-gnd.com_Large-1.jpg)

![STM32F407ZGT6 vcc-gnd.com Large Top view]({{ site.url }}/assets/img/boards/STM32F407ZGT6_vcc-gnd.com_Large-2.jpg)

![STM32F407ZGT6 vcc-gnd.com Large Bottom view]({{ site.url }}/assets/img/boards/STM32F407ZGT6_vcc-gnd.com_Large-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| GND   | Ground plane |
| 3.3   | +3.3V rail   |
| 3.3   | +3.3V rail   |
| B8    | PB8          |
| B9    | PB9          |
| B6    | PB6          |
| B7    | PB7          |
| B4    | PB4          |
| B5    | PB5          |
| G15   | PG15         |
| B3    | PB3          |
| G13   | PG13         |
| G14   | PG14         |
| G11   | PG11         |
| G12   | PG12         |
| G9    | PG9          |
| G10   | PG10         |
| D6    | PD6          |
| D7    | PD7          |
| D4    | PD4          |
| D5    | PD5          |
| D2    | PD2          |
| D3    | PD3          |
| D0    | PD0          |
| D1    | PD1          |
| C11   | PC11         |
| C12   | PC12         |
| A15   | PA15         |
| C10   | PC10         |
| A13   | PA13         |
| A14   | PA14         |
| A11   | PA11         |
| A12   | PA12         |
| A9    | PA9          |
| A10   | PA10         |
| C9    | PC9          |
| A8    | PA8          |
| C7    | PC7          |
| C8    | PC8          |
| G8    | PG8          |
| C6    | PC6          |
| GND   | Ground plane |
| GND   | Ground plane |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| G6    | PG6          |
| G7    | PG7          |
| G4    | PG4          |
| G5    | PG5          |
| G2    | PG2          |
| G3    | PG3          |
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
| B10   | PB10         |
| B11   | PB11         |
| E14   | PE14         |
| E15   | PE15         |
| E12   | PE12         |
| E13   | PE13         |
| E10   | PE10         |
| E11   | PE11         |

## Header 3

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| GND   | Ground plane |
| E8    | PE8          |
| E9    | PE9          |
| G1    | PG1          |
| E7    | PE7          |
| F15   | PF15         |
| G0    | PG0          |
| F13   | PF13         |
| F14   | PF14         |
| F11   | PF11         |
| F12   | PF12         |
| B1    | PB1          |
| B2    | PB2          |
| C5    | PC5          |
| B0    | PB0          |
| A7    | PA7          |
| C4    | PC4          |
| A5    | PA5          |
| A6    | PA6          |
| A3    | PA3          |
| A4    | PA4          |
| A1    | PA1          |
| A2    | PA2          |
| C3    | PC3          |
| A0    | PA0          |
| C1    | PC1          |
| C2    | PC2          |
| F10   | PF10         |
| C0    | PC0          |
| F8    | PF8          |
| F9    | PF9          |
| F6    | PF6          |
| F7    | PF7          |
| F4    | PF4          |
| F5    | PF5          |
| F2    | PF2          |
| F3    | PF3          |
| 5V    | +5V rail     |
| 5V    | +5V rail     |
| VB    | VBAT         |
| 3.3   | +3.3V rail   |
| GND   | Ground plane |
| GND   | Ground plane |

## Header 4

The left main header as seen on the top view. Pins listed in a clock-wise order, alternating the outer pin with the inner pin.

| Pin   | Connected to |
| ----- | ------------ |
| F0    | PF0          |
| F1    | PF1          |
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

## SD-card connector (SDIO)

| Pin      | Connected to |
| -------- | ------------ |
| SDIO_D2  | PC10         |
| SDIO_D3  | PC11         |
| SDIO_CMD | PD2          |
| VCC      | +3.3V rail   |
| SDIO_CK  | PC12         |
| GND      | Ground plane |
| SDIO_D0  | PC8          |
| SDIO_D1  | PC9          |
| CD       | PF10         |
| BODY     | Ground plane |

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

## IC - Winbond 25X40CLNIG (4Mb FLASH)

| Pin   | Connected to |
| ----- | ------------ |
| /CS   | PC4 (+3.3V rail via 10kΩ resistor) |
| DO    | PA6          |
| /WP   | +3.3V rail   |
| GND   | Ground plane |
| DI    | PA7          |
| CLK   | PA5          |
| /HOLD | +3.3V rail   |
| VCC   | +3.3V rail   |
