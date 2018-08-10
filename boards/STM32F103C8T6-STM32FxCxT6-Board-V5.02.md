---
title: "STM32F103C8T6 - STM32FxCxT6 Board V5.02"
---

# {{ page.title }}

![STM32FxCxT6 Board V5.02]({{ site.url }}/assets/img/boards/STM32F103C8T6_STM32FxCxT6_Board_V5.02-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>STM32FxCxT6 Board V5.02</td>
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
        <td>STM32F103C8T6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP48</td>
    </tr>
    <tr>
        <td>Core</td>
        <td>Cortex-M3</td>
    </tr>
    <tr>
        <td>FLASH</td>
        <td>64KB</td>
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
        <td><a href="http://www.ic-fortune.com/">Fortune Semiconductor Corp.</a></td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td><a href="http://www.ic-fortune.com/upload/Download/FS1117-DS-14_EN.pdf">FS1117</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT223</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 1100mA</td>
    </tr>
    <tr>
        <td>Battery holder</td>
        <td>No</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 2x12 male dupont (2.54mm)<br>1x 2x4 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>OLED (8x1 female dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>SWD (1x4 male dupont (2.54mm))<br>JTAG (20-pin IDC)</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Mini</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>D1</b>, +3.3V)<br>User LED (<b>D2</b>, <code>PC13</code>, source)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>rST</b>, <code>NRST</code>, active low)<br>Switch (USB +5V enable)</td>
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
        <td>63mm x 45mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>None</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Note:</b> The +5V pin of the USB port is connected through an diode to the +5V rail of the board. There is also an USB +5V enable switch.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![STM32FxCxT6 Board V5.02]({{ site.url }}/assets/img/boards/STM32F103C8T6_STM32FxCxT6_Board_V5.02-1.jpg)

![STM32FxCxT6 Board V5.02 Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_STM32FxCxT6_Board_V5.02-2.jpg)

![STM32FxCxT6 Board V5.02 Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_STM32FxCxT6_Board_V5.02-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| +5V   | +5V rail     |
| +5V   | +5V rail     |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| PB00  | PB0          |
| GND   | Ground plane |
| PA06  | PA6          |
| PA07  | PA7          |
| PA04  | PA4          |
| PA05  | PA5          |
| PA02  | PA2          |
| PA03  | PA3          |
| PA00  | PA0          |
| PA01  | PA1          |
| PC14  | PC14         |
| PC15  | PC15         |
| PB09  | PB9          |
| PC13  | PC13         |
| PB07  | PB7          |
| PB08  | PB8          |
| PB05  | PB5          |
| PB06  | PB6          |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| LED   | LED D2       |
| PB03  | PB3          |
| PB04  | PB4          |
| PA14  | PA14         |
| PA15  | PA15         |
| PA12  | PA12         |
| PA13  | PA13         |
| PA10  | PA10         |
| PA11  | PA11         |
| PA08  | PA8          |
| PA09  | PA9          |
| PB14  | PB14         |
| PB15  | PB15         |
| PB12  | PB12         |
| PB13  | PB13         |
| PB10  | PB10         |
| PB11  | PB11         |
| PB01  | PB1          |
| PB02  | PB2          |
| GND   | Ground plane |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| 3.3V  | +3.3V rail   |

## Header 3

| Pin   | Connected to |
| ----- | ------------ |
| +5V   | +5V rail     |
| TXD   | PA9          |
| 3.3V  | +3.3V rail   |
| RXD   | PA10         |
| BT1   | BOOT1        |
| BT0   | BOOT0        |
| GND   | Ground plane |
| RST   | NRST         |

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

## SWD

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| CLK   | PA14         |
| DIO   | PA13         |
| 3V3   | +3.3V rail   |
