---
title: "STM32F103ZET6 - CZ miniSTM32F103ZE-EK"
---

# {{ page.title }}

![CZ miniSTM32F103ZE-EK]({{ site.url }}/assets/img/boards/STM32F103ZET6_CZ_mini-EK-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>CZ miniSTM32F103ZE-EK</td>
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
        <td>STM32F103ZET6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP144</td>
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
        <td>NRF24L01 (2x4 female dupont (2.54mm))<br>TFT (2x16 male dupont (2.54mm))<br>SD-card connector<br>OLED (Unpopulated (2.54mm))</td>
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
        <td>Power LED (<b>Pwr</b>, +3.3V)<br>User LED (<b>DS2</b>, <code>PE2</code>, sink)<br>User LED (<b>DS3</b>, <code>PE0</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>2-way jumper (<code>BOOT0</code>)<br>2-way jumper (<code>BOOT1</code>)<br>User button (<b>K1</b>, <code>PB10</code>, active low)<br>User button (<b>K2</b>, <code>PB11</code>, active low)<br>Switch (<b>Pwr</b> +5V USB and power jack)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td><a href="http://www.prolific.com.tw/UserFiles/files/ds_pl2303HXD_v1_4_4.pdf">Prolific PL-2303HX</a></td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Blue</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>108mm x 65mm</td>
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

![CZ miniSTM32F103ZE-EK]({{ site.url }}/assets/img/boards/STM32F103ZET6_CZ_mini-EK-1.jpg)

![CZ miniSTM32F103ZE-EK Top view]({{ site.url }}/assets/img/boards/STM32F103ZET6_CZ_mini-EK-2.jpg)

![CZ miniSTM32F103ZE-EK Bottom view]({{ site.url }}/assets/img/boards/STM32F103ZET6_CZ_mini-EK-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| 5V    | +5V rail     |
| GND   | Ground plane |
| B11   | PB11         |
| RST   | NRST         |
| G1    | PG1          |
| B10   | PB10         |
| F15   | PF15         |
| G0    | PG0          |
| F13   | PF13         |
| F14   | PF14         |
| F11   | PF11         |
| F12   | PF12         |
| B0    | PB0          |
| B1    | PB1          |
| C4    | PC4          |
| C5    | PC5          |
| A3    | PA3          |
| A4    | PA4          |
| A1    | PA1          |
| A2    | PA2          |
| A0    | PA0          |
| 3V3   | +3.3V rail   |
| C3    | PC3          |
| AREF  | AREF+        |
| C0    | PC0          |
| C1    | PC1          |
| F9    | PF9          |
| F10   | PF10         |
| F7    | PF7          |
| F8    | PF8          |
| F5    | PF5          |
| F6    | PF6          |
| F3    | PF3          |
| F4    | PF4          |
| F1    | PF1          |
| F2    | PF2          |
| C15   | PC15         |
| F0    | PF0          |
| C13   | PC13         |
| C14   | PC14         |
| E5    | PE5          |
| E6    | PE6          |
| E3    | PE3          |
| E4    | PE4          |
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
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| E0    | PE0          |
| E2    | PE2          |
| B8    | PB8          |
| B9    | PB9          |
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
| D3    | PD3          |
| D6    | PD6          |
| C12   | PC12         |
| D2    | PD2          |
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
| G7    | PG7          |
| G8    | PG8          |
| G5    | PG5          |
| G6    | PG6          |
| G3    | PG3          |
| G4    | PG4          |
| D12   | PD12         |
| G2    | PG2          |
| B14   | PB14         |
| B15   | PB15         |
| B12   | PB12         |
| B13   | PB13         |
| GND   | Ground plane |
| 5V    | +5V rail     |

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
| D-    |              |
| D+    |              |
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
| C2    | PC2          |
| 5V    | +5V rail     |
| D13   | PD13         |
| B6    | PB6          |
| A6    | PA6          |
| A7    | PA7          |
| B7    | PB7          |
| A5    | PA5          |
| D7    | PD7          |
| D11   | PD11         |
| D5    | PD5          |
| D4    | PD4          |
| D14   | PD14         |
| D15   | PD15         |
| D0    | PD0          |
| D1    | PD1          |
| E7    | PE7          |
| E8    | PE8          |
| E9    | PE9          |
| E10   | PE10         |
| E11   | PE11         |
| E12   | PE12         |
| E13   | PE13         |
| E14   | PE14         |
| E15   | PE15         |
| D8    | PD8          |
| D9    | PD9          |
| D10   | PD10         |
| E1    | PE1          |
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

## OLED

| Pin   | Connected to |
| ----- | ------------ |
| E6    | PE6          |
| E5    | PE5          |
| E4    | PE4          |
| E3    | PE3          |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
