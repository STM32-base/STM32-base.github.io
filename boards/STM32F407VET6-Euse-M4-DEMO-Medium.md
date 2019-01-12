---
title: "STM32F407VET6 - Euse M4 DEMO Medium"
---

# {{ page.title }}

![Euse M4 DEMO Medium]({{ site.url }}/assets/img/boards/STM32F407VET6_Euse_M4_DEMO_Medium-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Euse M4 DEMO</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="https://euse.world.taobao.com/">Euse</a></td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>China</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Microcontroller</b></td>
        <td>Part</td>
        <td>STM32F407VET6</td>
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
        <td>512KB</td>
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
        <td><a href="http://www.holtek.com.tw/">Holtek Semiconductor Inc.</a></td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td><a href="http://www.holtek.com.tw/documents/10179/82844a36-1633-498c-a6e3-4d99f2d0f6d7">HT7833</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT23-5</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 500mA</td>
    </tr>
    <tr>
        <td>Battery holder</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 2x24 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Display (2x17 female dupont (2.54mm))<br>SD card</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>SWD (1x4 female dupont (2.54mm))<br>JTAG (20-pin IDC)</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Micro</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (+3.3V)<br>User LED (<b>LED1</b>, <code>PC0</code>, sink)<br>User LED (<b>LED2</b>, <code>PD3</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>Push button (<b>BOOT0 SET1</b>, <code>BOOT0</code>, active high)<br>2-way jumper (<b>BT0</b>, <code>BOOT0</code>)<br>2-way jumper (<b>BT1</b>, <code>BOOT1</code>)<br>User button (<b>KEY1</b>, <code>PA0</code>, active high)<br>User button (<b>KEY2</b>, <code>PC1</code>, active high)</td>
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
        <td>101mm x 69mm</td>
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

![Euse M4 DEMO Medium]({{ site.url }}/assets/img/boards/STM32F407VET6_Euse_M4_DEMO_Medium-1.jpg)

![Euse M4 DEMO Medium Top view]({{ site.url }}/assets/img/boards/STM32F407VET6_Euse_M4_DEMO_Medium-2.jpg)

![Euse M4 DEMO Medium Bottom view]({{ site.url }}/assets/img/boards/STM32F407VET6_Euse_M4_DEMO_Medium-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| 5V    | +5V rail     |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| C4    | PC4          |
| A15   | PA15         |
| B5    | PB5          |
| A4    | PA4          |
| B3    | PB3          |
| B4    | PB4          |
| C10   | PC10         |
| B2    | PB2          |
| C9    | PC9          |
| B1    | PB1          |
| C8    | PC8          |
| B0    | PB0          |
| C5    | PC5          |
| A14   | PA14         |
| C3    | PC3          |
| A13   | PA13         |
| C2    | PC2          |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| E3    | PE3          |
| E6    | PE6          |
| B7    | PB7          |
| E5    | PE5          |
| B6    | PB6          |
| E4    | PE4          |
| A12   | PA12         |
| C1    | PC1          |
| A11   | PA11         |
| C0    | PC0          |
| A3    | PA3          |
| B15   | PB15         |
| A2    | PA2          |
| B14   | PB14         |
| A1    | PA1          |
| B13   | PB13         |
| A0    | PA0          |
| B12   | PB12         |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| D11   | PD11         |
| D12   | PD12         |
| A7    | PA7          |
| A5    | PA5          |
| A8    | PA8          |
| A6    | PA6          |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| A10   | PA10         |
| A9    | PA9          |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| VREF+ | VREF+        |
| C11   | PC11         |
| D13   | PD13         |
| C12   | PC12         |
| D14   | PD14         |
| C13   | PC13         |
| D15   | PD15         |
| C14   | PC14         |
| E0    | PE0          |
| C15   | PC15         |
| E1    | PE1          |
| D0    | PD0          |
| E2    | PE2          |
| D1    | PD1          |
| E7    | PE7          |
| D2    | PD2          |
| E8    | PE8          |
| D3    | PD3          |
| E9    | PE9          |
| D4    | PD4          |
| E10   | PE10         |
| D5    | PD5          |
| E11   | PE11         |
| D6    | PD6          |
| E12   | PE12         |
| D7    | PD7          |
| E13   | PE13         |
| D8    | PD8          |
| E14   | PE14         |
| D9    | PD9          |
| E15   | PE15         |
| D10   | PD10         |
| B8    | PB8          |
| GND   | Ground plane |
| B9    | PB9          |
| B10   | PB10         |
| C6    | PC6          |
| B11   | PB11         |
| C7    | PC7          |
| 5V    | +5V rail     |

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
| 3.3V  | +3.3V rail   |

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
| D13   | PD13         |
| D7    | PD7          |
| D4    | PD4          |
| D5    | PD5          |
| D14   | PD14         |
| C5    | PC5          |
| D0    | PD0          |
| D15   | PD15         |
| E7    | PE7          |
| D1    | PD1          |
| E9    | PE9          |
| E8    | PE8          |
| E11   | PE11         |
| E10   | PE10         |
| E13   | PE13         |
| E12   | PE12         |
| E15   | PE15         |
| E14   | PE14         |
| D9    | PD9          |
| D8    | PD8          |
| C2    | PC2          |
| D10   | PD10         |
| 3.3V  | +3.3V rail   |
| B0    | PB0          |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| NC    | N.C.         |
| GND   | Ground plane |
| E1    | PE1          |
| E0    | PE0          |
| C3    | PC3          |
| E2    | PE2          |
| B1    | PB1          |
| B2    | PB2          |
