---
title: "STM32F103C8T6 - Black Board"
---

# {{ page.title }}

![Black Board]({{ site.url }}/assets/img/boards/STM32F103C8T6_Black_Board-1.jpg)

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
        <td>2x 2x10 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Serial (1x4 male dupont (2.54mm))<br>ESP8266 (2x4 female dupont (2.54mm))<br>NRF24L01 (2x4 female dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>SWD (1x4 male dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Micro</td>
    </tr>
    <tr>
        <td rowspan="3"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (+3.3V)<br>User LED (<code>PA1</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>2-way jumper (<b>BOOT0</b>, <code>BOOT0</code>)<br>2-way jumper (<b>BOOT1</b>, <code>BOOT1</code>)<br>User button (<b>PA8</b>, <code>PA8</code>)</td>
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
        <td>52mm x 41mm</td>
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

![Black Board]({{ site.url }}/assets/img/boards/STM32F103C8T6_Black_Board-1.jpg)

![Black Board Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Black_Board-2.jpg)

![Black Board Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Black_Board-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| 5V    | +5V rail     |
| GND   | Ground plane |
| C13   | PC13         |
| 3.3   | +3.3V rail   |
| B1    | PB1          |
| B0    | PB0          |
| B2    | PB2          |
| B3    | PB3          |
| B4    | PB4          |
| B5    | PB5          |
| B6    | PB6          |
| B7    | PB7          |
| B8    | PB8          |
| B9    | PB9          |
| B10   | PB10         |
| B11   | PB11         |
| B12   | PB12         |
| B13   | PB13         |
| B14   | PB14         |
| B15   | PB15         |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| C14   | PC14         |
| C15   | PC15         |
| A14   | PA14         |
| A15   | PA15         |
| A12   | PA12         |
| A13   | PA13         |
| A10   | PA10         |
| A11   | PA11         |
| A8    | PA8          |
| A9    | PA9          |
| A6    | PA6          |
| A7    | PA7          |
| A4    | PA4          |
| A5    | PA5          |
| A2    | PA2          |
| A3    | PA3          |
| A0    | PA0          |
| A1    | PA1          |
| GND   | Ground plane |
| 3.3   | +3.3V rail   |

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
| 3.3   |   +3.3V rail |
| DIO   |         PA13 |
| CLK   |         PA14 |
| GND   | Ground plane |

## Serial UART1

| Pin   | Connected to |
| ----- | ------------ |
| TXD   | PA9          |
| RXD   | PA10         |
| 5V    | +5V rail     |
| GND   | Ground plane |

## NRF2401

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| VCC   | +3.3V rail   |
| CE    | PB0          |
| CSN   | PB2          |
| SCK   | PA5          |
| MOSI  | PA7          |
| MISO  | PA6          |
| IRQ   | PA15         |

## ESP8266

| Pin   | Connected to |
| ----- | ------------ |
| UTXD  | PA3          |
| GND   | Ground plane |
| CH_PD | +3.3V rail   |
| GPIO2 | N.C.         |
| RST   | +3.3V rail   |
| GPIO0 | N.C.         |
| VCC   | +3.3V rail   |
| URXD  | PA2          |
