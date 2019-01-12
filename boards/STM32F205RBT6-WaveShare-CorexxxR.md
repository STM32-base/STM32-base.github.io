---
title: "STM32F205RBT6 - WaveShare CorexxxR"
---

# {{ page.title }}

![STM32F205RBT6 WaveShare CorexxxR]({{ site.url }}/assets/img/boards/STM32F205RBT6_WaveShare_CorexxxR-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>WaveShare CorexxxR</td>
    </tr>
    <tr>
        <td>Brand</td>
        <td><a href="https://www.waveshare.com/">WaveShare</a></td>
    </tr>
    <tr>
        <td>Origin</td>
        <td>AliExpress, China</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Microcontroller</b></td>
        <td>Part</td>
        <td>STM32F205RBT6</td>
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
        <td>128KB</td>
    </tr>
    <tr>
        <td>SRAM</td>
        <td>64KB</td>
    </tr>
    <tr>
        <td>Max. Clock Speed</td>
        <td>120MHz</td>
    </tr>
    <tr>
        <td rowspan="2"><b>Crystals</b></td>
        <td>HSE (High Speed External)</td>
        <td>25MHz</td>
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
        <td>2x 2x33 male dupont (2.54mm)</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>None</td>
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
        <td>Power LED (<b>VBUS LED</b>, +5V)<br>Power LED (<b>PWR LED</b>, +3.3V)</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>Reset button (<b>RESET</b>, <code>NRST</code>, active low)<br>2-way switch (<b>BOOT CONFIG</b>, <code>BOOT0</code>)<br>1-way jumper (<b>VBAT 3.3</b>, <code>VBAT</code>)<br>1-way jumper (<b>OTG JMP</b>, <code>PC1</code> to <code>PWR OUT</code>)<br>1-way jumper (<b>OTG JMP</b>, <code>PC2</code> to <code>FLG</code>)<br>1-way jumper (<b>OTG JMP</b>, <code>PA9</code> to <code>VBUS</code>)</td>
    </tr>
    <tr>
        <td>Other devices</td>
        <td>None</td>
    </tr>
    <tr>
        <td rowspan="3"><b>PCB</b></td>
        <td>Colour</td>
        <td>Green</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>64mm x 48mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>None</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Note:</b> This board features a Micrel power management IC (<a href="http://ww1.microchip.com/downloads/en/DeviceDoc/mic2025.pdf">MIC2025</a>).</li>
                <li><b>Note:</b> This is a generic board. There are other variation available with a different microcontroller, like one with an <a href="STM32F405RGT6-WaveShare-CorexxxR">STM32F405RGT6</a> device.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![STM32F205RBT6 Waveshare CorexxxR]({{ site.url }}/assets/img/boards/STM32F205RBT6_WaveShare_CorexxxR-1.jpg)

![STM32F205RBT6 Waveshare CorexxxR Top view]({{ site.url }}/assets/img/boards/STM32F205RBT6_WaveShare_CorexxxR-2.jpg)

![STM32F205RBT6 Waveshare CorexxxR Bottom view]({{ site.url }}/assets/img/boards/STM32F205RBT6_WaveShare_CorexxxR-3.jpg)

## Header 1

| Pin   | Connected to |
| ----- | ------------ |
| GND   | Ground plane |
| 3.3V  | +3.3V rail   |
| PB8   | PB8          |
| PB9   | PB9          |
| PB7   | PB7          |
| BOOT0 | BOOT0        |
| BP5   | BP5          |
| PB6   | PB6          |
| PB3   | PB3          |
| PB4   | PB4          |
| PC12  | PC12         |
| PB2   | PB2          |
| PC10  | PC10         |
| PC11  | PC11         |
| PA14  | PA14         |
| PA15  | PA15         |
| PA12  | PA12         |
| PA13  | PA13         |
| PA10  | PA10         |
| PA11  | PA11         |
| PA8   | PA8          |
| PA9   | PA9          |
| PC8   | PC8          |
| PC9   | PC9          |
| PC6   | PC6          |
| PC7   | PC7          |
| PB14  | PB14         |
| PB15  | PB15         |
| PB12  | PB12         |
| PB13  | PB13         |
| GND   | Ground plane |
| 5V OUT| +5V out      |

## Header 2

| Pin   | Connected to |
| ----- | ------------ |
| 5VIN  | +5V in       |
| GND   | Ground plane |
| PB10  | PB10         |
| PB11  | PB11         |
| PB1   | PB1          |
| PB2   | PB2          |
| PC5   | PC5          |
| PB0   | PB0          |
| PA7   | PA7          |
| PC4   | PC4          |
| PA5   | PA5          |
| PA6   | PA6          |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |
| PA3   | PA3          |
| PA4   | PA4          |
| PA1   | PA1          |
| PA2   | PA2          |
| PC3   | PC3          |
| PA0   | PA0          |
| PC1   | PC1          |
| PC2   | PC2          |
| RST   | NRST         |
| PC0   | PC0          |
| OSCIN | OSC_IN       |
| OSCOUT| OSC_OUT      |
| PC14  | PC14         |
| PC15  | PC15         |
| VBAT  | VBAT         |
| PC13  | PC13         |
| 3.3V  | +3.3V rail   |
| GND   | Ground plane |

## USB

| Pin   | Connected to |
| ----- | ------------ |
| VCC   | +5V rail     |
| D-    | PA11         |
| D+    | PA12         |
| ID    | PA10         |
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
