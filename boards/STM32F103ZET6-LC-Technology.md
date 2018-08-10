---
title: "STM32F103ZET6 - LC Technology"
---

# {{ page.title }}

![LC Technology]({{ site.url }}/assets/img/boards/STM32F103ZET6_LC_Technology-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>LC Technology STM32F103ZET6</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="http://www.chinalctech.com/">Shenzhen LC Technology Co., Ltd.</a></td>
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
        <td>No</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>4x 2x15 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Serial (1x4 male dupont (2.54mm))<br>Power (1x4 male dupont (2.54mm))</td>
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
        <td>Power LED (<b>D1</b>, +3.3V)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>NRST</b>, <code>NRST</code>, active low)<br>2-way jumper (<code>BOOT0</code>)<br>2-way jumper (<code>BOOT1</code>)<br>1-way jumper (USB D+ enable)</td>
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
        <td>73mm x 49mm</td>
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

![LC Technology]({{ site.url }}/assets/img/boards/STM32F103ZET6_LC_Technology-1.jpg)

![LC Technology Top view]({{ site.url }}/assets/img/boards/STM32F103ZET6_LC_Technology-2.jpg)

![LC Technology Bottom view]({{ site.url }}/assets/img/boards/STM32F103ZET6_LC_Technology-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| PB8   | PB8          |
| PB9   | PB9          |
| PB6   | PB6          |
| PB7   | PB7          |
| PB4   | PB4          |
| PB5   | PB5          |
| PG15  | PG15         |
| PB3   | PB3          |
| PG13  | PG13         |
| PG14  | PG14         |
| PG11  | PG11         |
| PG12  | PG12         |
| PG9   | PG9          |
| PG10  | PG10         |
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
| PA13  | PA13         |
| PA14  | PA14         |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| PA11  | PA11         |
| PA12  | PA12         |
| PA9   | PA9          |
| PA10  | PA10         |
| PC9   | PC9          |
| PA8   | PA8          |
| PC7   | PC7          |
| PC8   | PC8          |
| PG8   | PG8          |
| PC6   | PC6          |
| PG6   | PG6          |
| PG7   | PG7          |
| PG4   | PG4          |
| PG5   | PG5          |
| PG2   | PG2          |
| PG3   | PG3          |
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
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |

## Header 3

| Pin   | Connected to |
| ----- | ------------ |
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
| PG1   | PG1          |
| PE7   | PE7          |
| PF15  | PF15         |
| PG0   | PG0          |
| PF13  | PF13         |
| PF14  | PF14         |
| PF11  | PF11         |
| PF12  | PF12         |
| PB1   | PB1          |
| PB2   | PB2          |
| PC5   | PC5          |
| PB0   | PB0          |
| PA7   | PA7          |
| PC4   | PC4          |
| PA5   | PA5          |
| PA6   | PA6          |
| PA3   | PA3          |
| PA4   | PA4          |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |

## Header 4

| Pin   | Connected to |
| ----- | ------------ |
| PA1   | PA1          |
| PA2   | PA2          |
| PC3   | PC3          |
| PA0   | PA0          |
| PC1   | PC1          |
| PC2   | PC2          |
| PF10  | PF10         |
| PC0   | PC0          |
| PF8   | PF8          |
| PF9   | PF9          |
| PF6   | PF6          |
| PF7   | PF7          |
| PF4   | PF4          |
| PF5   | PF5          |
| PF2   | PF2          |
| PF3   | PF3          |
| PF0   | PF0          |
| PF1   | PF1          |
| PC14  | PC14         |
| PC15  | PC15         |
| PE6   | PE6          |
| PC13  | PC13         |
| PE4   | PE4          |
| PE5   | PE5          |
| PE2   | PE2          |
| PE3   | PE3          |
| PE0   | PE0          |
| PE1   | PE1          |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |

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

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| RX    | PA10         |
| TX    | PA9          |
| 3.3V  | +3.3V rail   |

## Power

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| GND   | Ground plane |
| VCC   | +5V rail     |
| VCC   | +5V rail     |
