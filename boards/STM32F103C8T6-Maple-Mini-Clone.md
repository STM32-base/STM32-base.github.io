---
title: "STM32F103C8T6 - Maple Mini Clone"
---

# {{ page.title }}

![Maple Mini Clone]({{ site.url }}/assets/img/boards/STM32F103C8T6_Maple_Mini_Clone-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>Maple Mini Clone</td>
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
        <td>None</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Power</b></td>
        <td>Sources</td>
        <td>Any +3.3V pin (+3.3V)<br>USB connector (+5V)<br><code>Vin</code> pin (+15V max.)</td>
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
        <td>2x 1x20 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>None</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>None</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Mini</td>
    </tr>
    <tr>
        <td rowspan="3"><b>I/O</b></td>
        <td>LEDs</td>
        <td>User LED (<b>d1=33</b>, <code>PB1</code>, source)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>reset</b>, <code>NRST</code>, active low)<br>User button (<b>but=32</b>, <code>PB8</code> and <code>BOOT0</code>, active high)</td>
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
        <td>51mm x 18mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>Breadboard</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Note:</b> The user button is also connected the the BOOT0 pin. This means that this button should be pressed when flashing the microcontroller.</li>
                <li><b>Trivia:</b> This board is a clone of the official <a href="https://www.leaflabs.com/maple/">Maple Mini</a> originally made by <a href="https://www.leaflabs.com/">Leaflabs</a>. The originial Maple Mini was designed to be used with the standard <a href="https://www.arduino.cc/en/Main/software">Arduino IDE</a>. The official Maple products are no longer supported. The software has since been forked and is maintained under the <a href="http://wiki.stm32duino.com/index.php?title=Main_Page">STM32duino</a> flag, supporting more boards than the original Maple project.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![Maple Mini Clone]({{ site.url }}/assets/img/boards/STM32F103C8T6_Maple_Mini_Clone-1.jpg)

![Maple Mini Clone Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Maple_Mini_Clone-2.jpg)

![Maple Mini Clone Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_Maple_Mini_Clone-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| Vcc   | +3.3V rail   |
| GND   | Ground plane |
| Vbat  | VBAT         |
| 14    | PC13         |
| 13    | PC14         |
| 12    | PC15         |
| reset | NRST         |
| 11    | PA0          |
| 10    | PA1          |
| 9     | PA2          |
| 8     | PA3          |
| 7     | PA4          |
| 6     | PA5          |
| 5     | PA6          |
| 4     | PA7          |
| 3     | PB0          |
| 2     | PB2          |
| 1     | PB10         |
| 0     | PB11         |
| Vin   | Regulator in |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 31    | PB12         |
| 30    | PB13         |
| 29    | PB14         |
| 28    | PB15         |
| 27    | PA8          |
| 26    | PA9          |
| 25    | PA10         |
| 24    | PA11         |
| 23    | PA12         |
| 22    | PA13         |
| 21    | PA14         |
| 20    | PA15         |
| 19    | PB3          |
| 18    | PB4          |
| 17    | PB5          |
| 16    | PB6          |
| 15    | PB7          |
| but   | PB8          |
| GND   | Ground plane |
| Vcc   | +3.3V rail   |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | Regulator in |
| D-    | PA11         |
| D+    | PA12         |
| ID    | N.C.         |
| GND   | Ground plane |
