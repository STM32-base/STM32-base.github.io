---
title: "STM32F103ZET6 - F103ZE board"
---

# {{ page.title }}

![F103ZE board]({{ site.url }}/assets/img/boards/STM32F103ZET6_F103ZE-Board-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>F103ZE_Board</td>
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
        <td>Yes</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 2x30 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>TFT (2x16 female dupont (2.54mm))<br>NRF2401 (2x4 female dupont (2.54mm))</td>
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
        <td>Power LED (<b>D3</b>, +3.3V)<br>User LED (<b>D2</b>, <code>PE5</code>, active low)<br>User LED (<b>D4</b>, <code>PB5</code>, active low)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>REST</b>, <code>NRST</code>, active low)<br>2-way jumper (<code>BOOT0</code>)<br>2-way jumper (<code>BOOT1</code>)<br>User button (<b>KEY1</b>, <code>PE2</code>, active low)<br>User button (<b>KEY2</b>, <code>PE1</code>, active low)<br>User button (<b>WK_UP</b>, <code>PA0</code>, active high)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td><a href="https://www.winbond.com/resource-files/w25q16jv%20spi%20revd%2008122016.pdf">Winbond W25Q16JV (16Mb FLASH)</a></td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Blue</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>95mm x 64mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>4x mounting hole (M2)</td>
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

![F103ZE board]({{ site.url }}/assets/img/boards/STM32F103ZET6_F103ZE-Board-1.jpg)

![F103ZE board Top view]({{ site.url }}/assets/img/boards/STM32F103ZET6_F103ZE-Board-2.jpg)

![F103ZE board Bottom view]({{ site.url }}/assets/img/boards/STM32F103ZET6_F103ZE-Board-3.jpg)

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
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| GND   | Ground plane |
| 5V    | +5V rail     |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 3V3   | +3.3V rail   |
| 3V3   | +3.3V rail   |
| BT0   | BOOT0        |
| BT1   | BOOT1        |
| GND   | Ground plane |
| GND   | Ground plane |
| PB11  | PB11         |
| PB10  | PB10         |
| PE15  | PE15         |
| PE14  | PE14         |
| PE13  | PE13         |
| PE12  | PE12         |
| PE11  | PE11         |
| PE10  | PE10         |
| PE9   | PE9          |
| PE8   | PE8          |
| PE7   | PE7          |
| PG1   | PG1          |
| PG0   | PG0          |
| PF15  | PF15         |
| PF14  | PF14         |
| PF13  | PF13         |
| PF12  | PF12         |
| PF11  | PF11         |
| PB2   | PB2          |
| PB1   | PB1          |
| PB0   | PB0          |
| PC5   | PC5          |
| PC4   | PC4          |
| PA6   | PA6          |
| PA5   | PA5          |
| PA4   | PA4          |
| PA3   | PA3          |
| PA2   | PA2          |
| PA1   | PA1          |
| PA0   | PA0          |
| PC3   | PC3          |
| PC2   | PC2          |
| PC1   | PC1          |
| PC0   | PC0          |
| PF10  | PF10         |
| PF9   | PF9          |
| PF8   | PF8          |
| PF7   | PF7          |
| PF6   | PF6          |
| PF5   | PF5          |
| PF4   | PF4          |
| PF3   | PF3          |
| PF2   | PF2          |
| PF1   | PF1          |
| PF0   | PF0          |
| PC13  | PC13         |
| PE6   | PE6          |
| PE5   | PE5          |
| PE4   | PE4          |
| PE3   | PE3          |
| PE2   | PE2          |
| PE1   | PE1          |
| PE0   | PE0          |

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
| 10    | +5V rail     | N.C.  | -     |
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

## TFT

| Pin   | Connected to |
| ----- | ------------ |
|       | NRST         |
|       | Ground plane |
|       | PD9          |
|       | PD10         |
|       | PE15         |
|       | PD8          |
|       | PE13         |
|       | PE14         |
|       | PE11         |
|       | PE12         |
|       | PE9          |
|       | PE10         |
|       | PE7          |
|       | PE8          |
|       | PD0          |
|       | PD1          |
|       | PD14         |
|       | PD15         |
|       | PD5          |
|       | PD4          |
|       | PG12         |
|       | PG0          |
|       | PB2          |
|       | PB1          |
|       | PF8          |
|       | PF9          |
|       | N.C.         |
|       | N.C.         |
|       | VBAT         |
|       | Ground plane |
|       | +3.3V rail   |
|       | Ground plane |

## NRF2401

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| VCC   | +3.3V rail   |
| CE    | PG6          |
| CSN   | PG7          |
| SCK   | PB13         |
| MOSI  | PB15         |
| MISO  | PB14         |
| IRQ   | PG8          |

## IC - Winbond W25Q16JV (16Mb FLASH)

| Pin   | Connected to |
| ----- | ------------ |
| /CS   | +3.3V rail via 10kΩ resistor |
| DO    | PB14         |
| IO2   | +3.3V rail   |
| GND   | Ground plane |
| DI    | PB15         |
| CLK   | PB13         |
| IO3   | +3.3V rail   |
| VCC   | +3.3V rail   |
