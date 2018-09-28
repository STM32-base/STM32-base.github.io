---
title: "STM32F103C8U6 - ST-LINK V2 Debugger"
---

# {{ page.title }}

![ST-LINK V2 clone]({{ site.url }}/assets/img/boards/STM32F103C8U6_ST-LINK_V2-4.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>ST-LINK V2 clone</td>
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
        <td>STM32F103C8U6</td>
    </tr>
    <tr>
        <td>Package</td>
        <td>UFQFPN48</td>
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
        <td>10KB</td>
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
        <td>No</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Power</b></td>
        <td>Sources</td>
        <td>USB connector (+5V)</td>
    </tr>
    <tr>
        <td>Regulator manufacturer</td>
        <td>Unknown</td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td>Unkown (S2R0)</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT-23-5</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V</td>
    </tr>
    <tr>
        <td>Battery holder</td>
        <td>No</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Connectivity</b></td>
        <td>Headers</td>
        <td>None</td>
    </tr>
    <tr>
        <td>Specific</td>
        <td>None</td>
    </tr>
    <tr>
        <td>Debug</td>
        <td>SWD in (unpopulated 1x4 (1.25mm))<br>SWD out (10-pin IDC)</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Male A</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>B<br>R</td>
    </tr>
    <tr>
        <td>Buttons, switches and jumpers</td>
        <td>None</td>
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
        <td>30mm x 15mm</td>
    </tr>
    <tr>
        <td>Mounting</td>
        <td>None</td>
    </tr>
    <tr>
        <td><b>Remarks</b></td>
        <td colspan="2">
            <ul>
                <li><b>Note:</b> This board is intended to use as ST-Link device to program and debug other STM32 and STM8 devices.</li>
            </ul>
        </td>
    </tr>
</table>

## Pictures

![ST-LINK V2 clone]({{ site.url }}/assets/img/boards/STM32F103C8U6_ST-LINK_V2-1.jpg)

![ST-LINK V2 clone Top view]({{ site.url }}/assets/img/boards/STM32F103C8U6_ST-LINK_V2-2.jpg)

![ST-LINK V2 clone Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8U6_ST-LINK_V2-3.jpg)

## SWD out

| Pin    | Connected to |
| ------ | ------------ |
| RST    | PB6          |
| SWDIO  | PB12         |
| GND    | Ground plane |
| GND    | Ground plane |
| SWIM   | PB11         |
| SWCLK  | PA5          |
| 3.3V   | +3.3V rail   |
| 3.3V   | +3.3V rail   |
| 5V     | +5V rail     |
| 5V     | +5V rail     |

## SWD in

| Pin    | Connected to |
| ------ | ------------ |
|        | PA13 (SWDIO) |
|        | Ground plane |
|        | PA14 (SWCLK) |
|        | +3.3V rail   |
