---
title: "STM32F103RCT6 - Generic Board"
---

# {{ page.title }}

![Generic Board]({{ site.url }}/assets/img/boards/STM32F103RCT6_Generic_Board-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Generic Board</td>
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
        <td>STM32F103RCT6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>LQFP64</td>
    </tr>
    <tr>
        <td>Core</td>
        <td>Cortex-M3</td>
    </tr>
    <tr>
        <td>FLASH</td>
        <td>256KB</td>
    </tr>
    <tr>
        <td>SRAM</td>
        <td>48KB</td>
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
        <td>2x 2x15 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>None</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>JTAG (20-pin IDC))</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Mini</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>PWR</b>, +5V)<br>User LED (<b>LED1</b>, <code>PB11</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RST</b>, <code>NRST</code>, active low)<br>DIP-Switch (<code>BOOT0</code>, <code>BOOT1</code>)<br>Switch (<b>SW2</b>, +5V USB enable)</td>
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
        <td>50mm x 50mm</td>
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
                <li><b>Note:</b> This board has a switch to enable the +5V from the USB connector.</li>
                <li><b>Note:</b> This generic board comes in three different forms, one with an <a href="{{ site.url }}/boards/STM32F103RBT6-Generic-Board"><code>STM32F103RBT6</code></a> microcontroller, one with an <code>STM32F103RCT6</code> microcontroller and one with an <a href="{{ site.url }}/boards/STM32F103RET6-Generic-Board"><code>STM32F103RET6</code></a> microcontroller.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![Generic Board]({{ site.url }}/assets/img/boards/STM32F103RCT6_Generic_Board-1.jpg)

![Generic Board Top view]({{ site.url }}/assets/img/boards/STM32F103RCT6_Generic_Board-2.jpg)

![Generic Board Bottom view]({{ site.url }}/assets/img/boards/STM32F103RCT6_Generic_Board-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| B10   | PB10         |
| B11   | PB11         |
| B1    | PB1          |
| B2    | PB2          |
| C5    | PC5          |
| B0    | PB0          |
| A7    | PA7          |
| C4    | PC4          |
| A5    | PA5          |
| A6    | PA6          |
| A4    | PA4          |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| A3    | PA3          |
| A2    | PA2          |
| A1    | PA1          |
| A0    | PA0          |
| VDDA  | VDDA         |
| GND   | Ground plane |
| C3    | PC3          |
| C2    | PC2          |
| C1    | PC1          |
| C0    | PC0          |
| RST   | NRST         |
| D1    | PD1          |
| D0    | PD0          |
| C15   | PC15         |
| C14   | PC14         |
| C13   | PC13         |
| C12   | PC12         |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| B9    | PB9          |
| B8    | PB8          |
| 3.3V  | +3.3V rail   |
| B7    | PB7          |
| B6    | PB6          |
| B5    | PB5          |
| B4    | PB4          |
| B3    | PB3          |
| D2    | PD2          |
| C12   | PC12         |
| C11   | PC11         |
| C10   | PC10         |
| A15   | PA15         |
| A14   | PA14         |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| A13   | PA13         |
| A12   | PA12         |
| A11   | PA11         |
| A10   | PA10         |
| A9    | PA9          |
| A8    | PA8          |
| C9    | PC9          |
| C8    | PC8          |
| C7    | PC7          |
| C6    | PC6          |
| B15   | PB15         |
| B14   | PB14         |
| B13   | PB13         |
| B12   | PB12         |

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

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| Tx    | PA9          |
| Rx    | PA10         |
| 3.3V  | +3.3V rail   |

## Power

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| 5V    | +5V rail     |
| 5V    | +5V rail     |
