---
title: "STM32F103ZET6 - YL-29"
---

# {{ page.title }}

![STM32F103ZET6 - YL-29]({{ site.url }}/assets/img/boards/STM32F103ZET6_YL-29-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>YL-29</td>
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
        <td>Optional</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 2x36 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Serial (1x4 male dupont (2.54mm))<br>USB data lines (1x2 male dupont (2.54mm))<br>Power (2x2 male dupont (2.54))</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>JTAG (20-pin IDC)</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>USB A</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>D2</b>, +5V)<br>User LED (<b>D3</b>, <code>PE2</code>, active low)<br>User LED (<b>D4</b>, <code>PB5</code>, active low)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<code>NRST</code>, active low)</td>
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
        <td>104mm x 72mm</td>
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

![STM32F103ZET6 - YL-29]({{ site.url }}/assets/img/boards/STM32F103ZET6_YL-29-1.jpg)

![STM32F103ZET6 - YL-29 Top view]({{ site.url }}/assets/img/boards/STM32F103ZET6_YL-29-2.jpg)

![STM32F103ZET6 - YL-29 Bottom view]({{ site.url }}/assets/img/boards/STM32F103ZET6_YL-29-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| E1    | PE1          |
| E0    | PE0          |
| B9    | PB9          |
| B8    | PB8          |
| BOOT0 | BOOT0        |
| B7    | PB7          |
| B6    | PB6          |
| B5    | PB5          |
| NRST  | NRST         |
| TDO   | PB3          |
| G15   | PG15         |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| G14   | PG14         |
| G13   | PG13         |
| G12   | PG12         |
| G11   | PG11         |
| G10   | PG10         |
| G9    | PG9          |
| D7    | PD7          |
| D6    | PD6          |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| D5    | PD5          |
| D4    | PD4          |
| D3    | PD3          |
| D2    | PD2          |
| D1    | PD1          |
| D0    | PD0          |
| C12   | PC12         |
| C11   | PC11         |
| C10   | PC10         |
| TDI   | PA15         |
| TCK   | PA14         |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
|       | N.C.         |
| TMS   | PA13         |
| A12   | PA12         |
| A11   | PA11         |
| A10   | PA10         |
| A9    | PA9          |
| A8    | PA8          |
| C9    | PC9          |
| C8    | PC8          |
| C7    | PC7          |
| C6    | PC6          |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| G8    | PG8          |
| G7    | PG7          |
| G6    | PG6          |
| G5    | PG5          |
| G4    | PG4          |
| G3    | PG3          |
| G2    | PG2          |
| D15   | PD15         |
| D14   | PD14         |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| D13   | PD13         |
| D12   | PD12         |
| D11   | PD11         |
| D10   | PD10         |
| D9    | PD9          |
| D8    | PD8          |
| B15   | PB15         |
| B14   | PB14         |
| B13   | PB13         |
| B12   | PB12         |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| B10   | PB10         |
| B11   | PB11         |
| E14   | PE14         |
| E15   | PE15         |
| E12   | PE12         |
| E13   | PE13         |
| E10   | PE10         |
| E11   | PE11         |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| E8    | PE8          |
| E9    | PE9          |
| G1    | PG1          |
| E7    | PE7          |
| F15   | PF15         |
| G0    | PG0          |
| F13   | PF13         |
| F14   | PF14         |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
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
| 3.3V  | +3.3V rail   |
| A4    | PA4          |
| A3    | PA3          |
| GND   | Ground plane |
| A1    | PA1          |
| A2    | PA2          |
| 3.3V  | +3.3V rail   |
| A0    | PA0          |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| C3    | PC3          |
| GND   | Ground plane |
| C1    | PC1          |
| C2    | PC2          |
| NRST  | NRST         |
| C0    | PC0          |
|       | N.C.         |
|       | N.C.         |
| F9    | PF9          |
| F10   | PF10         |
| F7    | PF7          |
| F8    | PF8          |
| 3.3V  | +3.3V rail   |
| F6    | PF6          |
| F5    | PF5          |
| GND   | Ground plane |
| F3    | PF3          |
| F4    | PF4          |
| F1    | PF1          |
| F2    | PF2          |
|       | N.C.         |
| F0    | PF0          |
| C13   | PC13         |
|       | N.C.         |
| E6    | PE6          |
| VBAT  | VBAT         |
| E4    | PE4          |
| E5    | PE5          |
| E2    | PE2          |
| E3    | PE3          |

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
| TX1   | PA9          |
| RX1   | PA10         |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |

## Power

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| +5V   | +5V rail     |
| GND   | Ground plane |
| +5V   | +5V rail     |

## USB header

| Pin   | Connected to |
| ----- | ------------ |
| D+    | USB A D+     |
| D-    | USB A D-     |
