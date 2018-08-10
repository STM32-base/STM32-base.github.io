---
title: "STM32F407VGT6 - SR board"
---

# {{ page.title }}

![SR board]({{ site.url }}/assets/img/boards/STM32F407VGT6_SR_Board-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>SR</td>
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
        <td>STM32F407VGT6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP100</td>
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
        <td>2x 2x22 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>SD card<br>Serial (1x2 male dupont (2.54))</td>
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
        <td>Power LED (<b>D1</b>, +3.3V)<br>User LED (<b>D2</b>, <code>PB0</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<code>NRST</code>, active low)<br>DIP-switch (<code>BOOT0</code>, <code>BOOT1</code>)<br>User button (<b>KEY</b>, <code>PA0</code>, active low)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td>None</td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Black</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>59mm x 46mm</td>
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

![SR board]({{ site.url }}/assets/img/boards/STM32F407VGT6_SR_Board-1.jpg)

![SR board Top view]({{ site.url }}/assets/img/boards/STM32F407VGT6_SR_Board-2.jpg)

![SR board Bottom view]({{ site.url }}/assets/img/boards/STM32F407VGT6_SR_Board-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| 3.3V  | +3.3V rail   |
| 5V    | +5V rail     |
| 5V    | +5V rail     |
| B10   | PB10         |
| B11   | PB11         |
| E14   | PE14         |
| E15   | PE15         |
| E12   | PE12         |
| E13   | PE13         |
| E10   | PE10         |
| E11   | PE11         |
| E8    | PE8          |
| E9    | PE9          |
| B2    | PB2          |
| E7    | PE7          |
| B0    | PB0          |
| B1    | PB1          |
| C4    | PC4          |
| C5    | PC5          |
| A6    | PA6          |
| A7    | PA7          |
| A4    | PA4          |
| A5    | PA5          |
| A2    | PA2          |
| A3    | PA3          |
| A0    | PA0          |
| A1    | PA1          |
| C2    | PC2          |
| C3    | PC3          |
| C0    | PC0          |
| C1    | PC1          |
| C15   | PC15         |
| RST   | NRST         |
| C13   | PC13         |
| C14   | PC14         |
| E6    | PE6          |
| VBAT  | VBAT         |
| E4    | PE4          |
| E5    | PE5          |
| E2    | PE2          |
| E3    | PE3          |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| E1    | PE1          |
| E0    | PE0          |
| B9    | PB9          |
| B8    | PB8          |
| B7    | PB7          |
| B6    | PB6          |
| B5    | PB5          |
| B4    | PB4          |
| B3    | PB3          |
| D7    | PD7          |
| D6    | PD6          |
| D5    | PD5          |
| D4    | PD4          |
| D3    | PD3          |
| D2    | PD2          |
| D1    | PD1          |
| D0    | PD0          |
| C12   | PC12         |
| C11   | PC11         |
| C10   | PC10         |
| A15   | PA15         |
| A14   | PA14         |
| A13   | PA13         |
| A12   | PA12         |
| A10   | PA10         |
| A11   | PA11         |
| A8    | PA8          |
| A9    | PA9          |
| C8    | PC8          |
| C9    | PC9          |
| C6    | PC6          |
| C7    | PC7          |
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

## SD-card connector

| Pin   | Connected to |
| ----- | ------------ |
| RSV   | PC10         |
| CS    | PC11         |
| DI    | PD2          |
| VCC   | +3.3V rail   |
| SCLK  | PC12         |
| GND   | Ground plane |
| DO    | PC8          |
| RSV   | PC9          |
| CD    | PC7          |
| BODY  | Ground plane |
