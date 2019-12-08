---
title: "STM32F407ZET6 - STM32_F4XX board"
---

# {{ page.title }}

![STM32_F4XX board]({{ site.url }}/assets/img/boards/STM32F407ZET6-STM32_F4xx_1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>STM32_F4XX</td>
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
        <td>STM32F407ZET6</td>
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
        <td>512KB (There is a STM32F4ZGT6 variant with 1024KB)</td>
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
        <td>TFT (2x16 male dupont (2.54mm))<br>NRF2401 (2x4 female dupont (2.54mm))</td>
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
        <td>Power LED (<b>D3</b>, +3.3V)<br>User LED (<b>D1</b>, <code>PF9</code>, active low)<br>User LED (<b>D2</b>, <code>PF10</code>, active low)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>REST</b>, <code>NRST</code>, active low)<br>User button (<b>KEY1</b>, <code>PE2</code>, active low)<br>User button (<b>KEY2</b>, <code>PE1</code>, active low)<br>User button (<b>WK_UP</b>, <code>PA0</code>, active high)<br>(BT0/BT1 jumpers are part of HEADER 2)</td>
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

## Resources

 - [Schematic]({{ site.url }}/assets/pdf/boards/original-schematic-STM32F407ZET6-STM32_F4XX.pdf)

## Pictures

![STM32_F4XX board]({{ site.url }}/assets/img/boards/STM32F407ZET6-STM32_F4xx_1.jpg)

![STM32_F4XX board Top view]({{ site.url }}/assets/img/boards/STM32F407ZET6-STM32_F4xx_2.jpg)

![STM32_F4XX board Bottom view]({{ site.url }}/assets/img/boards/STM32F407ZET6-STM32_F4xx_3.jpg)

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
| _BT0*_  | _BOOT0_        |
| _BT1*_  | _BOOT1/PB2_    |
| GND   | Ground plane |
| _VREF+_ | _VREF+ *_        |
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
| PB2   | PB2/BOOT1    |
| PB1   | PB1          |
| PB0   | PB0          |
| PC5   | PC5          |
| PC4   | PC4          |
| PA7   | PA7          |
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

*Notes: **Jumper:** BT0 has 10K pulldown R25, but can be jumpered to adjacent 3.3V or GND.<br>
        BT1 (BT1/PB2) has 10K pulldown R12, but can be jumpered to adjacent pin 3.3V. 
	       The other adjacent pin is **NOT GND** <br>
	       VREF+ has 0R R21 to VDDA and common 0R R22 from there to 3.3V.

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

| Pin   | Connected to | Function       |
| ----- | ------------ | -------------- |
|   2   | NRST         |                |
|   1   | Ground plane |                |
|   4   | PD9          | FSMC D14       |
|   3   | PD10         | FSMC D15       |
|   6   | PE15         | FSMC D12       |
|   5   | PD8          | FSMC D13       |
|   8   | PE13         | FSMC D10       |
|   7   | PE14         | FSMC D11       |
|  10   | PE11         | FSMC D8        |
|   9   | PE12         | FSMC D9        |
|  12   | PE9          | FSMC D6        |
|  11   | PE10         | FSMC D7        |
|  14   | PE7          | FSMC D4        |
|  13   | PE8          | FSMC D5        |
|  16   | PD0          | FSMC D2        |
|  15   | PD1          | FSMC D3        |
|  18   | PD14         | FSMC D0        |
|  17   | PD15         | FSMC D1        |
|  20   | PD5          | FSMC NWE       |
|  19   | PD4          | FSMC NOE       |
|  22   | PG12         | FSMC NE4       |
|  21   | PF12         | FSMC A6        |
|  24   | PC13         | Touch CS       |
|  23   | PB0          | Touch CLK      |
|  26   | PB2/BOOT1    | Touch (MI)SO   |
|  25   | PF11         | Touch (MO)SI   |
|  28   | PB15 via Q2  | Backlight      |
|  27   | PC13 via R15 | Touch Event    |
|  30   | Ground plane |                |
|  29   | nc           |                |
|  32   | Ground plane |                |
|  31   | +3.3V rail   |                |

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
