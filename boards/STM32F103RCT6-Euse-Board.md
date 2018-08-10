---
title: "STM32F103RCT6 - Euse Board"
---

# {{ page.title }}

![Euse Board]({{ site.url }}/assets/img/boards/STM32F103RCT6_Euse_Board-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Euse Board</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="https://euse.world.taobao.com/">Euse</a></td>
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
        <td><a href="http://www.holtek.com.tw/">Holtek Semiconductor Inc.</a></td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td><a href="http://www.holtek.com.tw/documents/10179/11842/HT75xx-1v230.pdf">HT7533-1</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT23-5</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 100mA</td>
    </tr>
    <tr>
        <td>Battery holder</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>2x 2x14 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>Serial (Unpopulated)</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>SWD (1x4 female dupont (2.54))<br>JTAG (20-pin IDC))</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Mini</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>Power LED (<b>PD1</b>, +5V)<br>User LED (<b>LD1</b>, <code>PB10</code>, sink)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>DIP-Switch (<code>BOOT0</code>, <code>BOOT1</code>)<br>2-way jumper (<b>J7</b>, <code>VBAT</code>, +3.3V or battery)<br>1-way jumper (<b>LS1</b>, Enable user LED)<br>1-way jumper (<b>US2</b>, Enable USB D-)<br>1-way jumper (<b>US1</b>, Enable USB D+)<br>1-way jumper (<b>MS1</b>, Enable OSC_32_IN)<br>1-way jumper (<b>MS2</b>, Enable OSC_32_OUT)<br>1-way jumper (<b>MS3</b>, Enable OSC_IN)<br>1-way jumper (<b>MS4</b>, Enable OSC_OUT)</td>
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
        <td>68mm x 54mm</td>
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

![Euse Board]({{ site.url }}/assets/img/boards/STM32F103RCT6_Euse_Board-1.jpg)

![Euse Board Top view]({{ site.url }}/assets/img/boards/STM32F103RCT6_Euse_Board-2.jpg)

![Euse Board Bottom view]({{ site.url }}/assets/img/boards/STM32F103RCT6_Euse_Board-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| PA6   | PA6          |
| PA7   | PA7          |
| PA5   | PA5          |
| PA4   | PA4          |
| PC14  | PC14         |
| PC15  | PC15         |
| PA15  | PA15         |
| PD2   | PD2          |
| PB7   | PB7          |
| PB6   | PB6          |
| PB3   | PB3          |
| PB4   | PB4          |
| PA0   | PA0          |
| PA1   | PA1          |
| PA2   | PA2          |
| PA3   | PA3          |
| PA13  | PA13         |
| PA14  | PA14         |
| PB0   | PB0          |
| PB5   | PB5          |
| PA11  | PA11         |
| PA12  | PA12         |
| PA9   | PA9          |
| PA10  | PA10         |
| PB1   | PB1          |
| PC13  | PC13         |
| 5V    | +5V rail     |
| GND   | Ground plane |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 3V3   | +3.3V rail   |
| NC    | N.C.         |
| PD1   | PD1          |
| PD0   | PD0          |
| PB2   | PB2          |
| PA8   | PA8          |
| PC12  | PC12         |
| PC11  | PC11         |
| PC10  | PC10         |
| PC9   | PC9          |
| PC8   | PC8          |
| PC7   | PC7          |
| PC6   | PC6          |
| PC5   | PC5          |
| PC4   | PC4          |
| PC3   | PC3          |
| PC2   | PC2          |
| PC1   | PC1          |
| PC0   | PC0          |
| PB15  | PB15         |
| PB14  | PB14         |
| PB13  | PB13         |
| PB12  | PB12         |
| PB11  | PB11         |
| PB10  | PB10         |
| PB9   | PB9          |
| PB8   | PB8          |

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
| 3V3   | +3.3V rail   |
| SWDIO | PA13         |
| SWCLK | PA14         |
| GND   | Ground plane |

## Serial

| Pin   | Connected to |
| ----- | ------------ |
| 3V3   | +3.3V rail   |
| TX    | PA9          |
| RX    | PA10         |
| GND   | Ground plane |
