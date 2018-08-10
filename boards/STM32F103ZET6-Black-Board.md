---
title: "STM32F103ZET6 - Black Board"
---

# {{ page.title }}

![Black Board]({{ site.url }}/assets/img/boards/STM32F103ZET6_Black_Development_Board-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Black Board</td>
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
        <td>2x 2x19 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>TFT (2x17 female dupont (2.54mm))<br>SD-card connector</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>JTAG (20-pin IDC)</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Micro<br>Micro (Serial)</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (+3.3V)<br>User LED (<code>PE5</code>, sink)<br>User LED (<code>PE6</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>2-way jumper (<b>B0</b>, <code>BOOT0</code>)<br>2-way jumper (<b>B1</b>, <code>BOOT1</code>)<br>User button (<b>KEY2</b>, <code>PE4</code>, active high)<br>(<b>KEY3</b>, <code>PA0</code>, active high)<br>Switch (+5 USB)<br>1-way jumper (TX to PA10 enable)<br>1-way jumper (RX to PA9 enable)<br>1-way jumper (VREF+ to +3.3V rail enable)<br>1-way jumper (VREF- to ground plane enable)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td>CH340G (USB to Serial)</td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Black</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>100mm x 68mm</td>
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

![Black Board]({{ site.url }}/assets/img/boards/STM32F103ZET6_Black_Development_Board-1.jpg)

![Black Board]({{ site.url }}/assets/img/boards/STM32F103ZET6_Black_Development_Board-1.jpg)

![Black Board]({{ site.url }}/assets/img/boards/STM32F103ZET6_Black_Development_Board-1.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| E0    | PE0          |
| E1    | PE1          |
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
| D-    | USB D-       |
| D+    | USB D+       |
| C9    | PC9          |
| A8    | PA8          |
| C7    | PC7          |
| C8    | PC8          |
| G8    | PG8          |
| C6    | PC6          |
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

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 5V    | +5V rail     |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| B11   | PB11         |
| B10   | PB10         |
| E15   | PE15         |
| E14   | PE14         |
| E13   | PE13         |
| E12   | PE12         |
| E11   | PE11         |
| E10   | PE10         |
| E9    | PE9          |
| E8    | PE8          |
| E7    | PE7          |
| G1    | PG1          |
| G0    | PG0          |
| F15   | PF15         |
| F14   | PF14         |
| F13   | PF13         |
| F12   | PF12         |
| F11   | PF11         |
| B2    | PB2          |
| B1    | PB1          |
| B0    | PB0          |
| C5    | PC5          |
| C4    | PC4          |
| A7    | PA7          |
| A6    | PA6          |
| A5    | PA5          |
| A4    | PA4          |
| A3    | PA3          |
| A2    | PA2          |
| A1    | PA1          |
| A0    | PA0          |
| C3    | PC3          |
| C2    | PC2          |
| C1    | PC1          |
| C0    | PC0          |
| F10   | PF10         |
| F9    | PF9          |
| F8    | PF8          |
| F7    | PF7          |
| F6    | PF6          |
| F5    | PF5          |
| F4    | PF4          |
| F3    | PF3          |
| F2    | PF2          |
| F1    | PF1          |
| F0    | PF0          |
| C13   | PC13         |
| E6    | PE6          |
| E5    | PE5          |
| E4    | PE4          |
| E3    | PE3          |
| E2    | PE2          |

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
| CD    | N.C.         |
| BODY  | N.C.         |

## TFT

| Pin   | Connected to |
| ----- | ------------ |
|       | PG0          |
|       | PG12         |
|       | PD4          |
|       | PD5          |
|       | PD14         |
|       | NRST         |
|       | PD0          |
|       | PD15         |
|       | PE7          |
|       | PD1          |
|       | PE9          |
|       | PE8          |
|       | PE11         |
|       | PE10         |
|       | PE13         |
|       | PE12         |
|       | PE15         |
|       | PE14         |
|       | PD9          |
|       | PD8          |
|       | Ground plane |
|       | PD10         |
|       | +3.3V rail   |
|       | PB0          |
|       | Ground plane |
|       | +3.3V rail   |
|       | +5V rail     |
|       | Ground plane |
|       | PF9          |
|       | PF8          |
|       | N.C.         |
|       | PF10         |
|       | PB1          |
|       | PB2          |
