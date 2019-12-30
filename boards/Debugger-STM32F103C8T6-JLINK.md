---
title: "STM32F103C8T6 - JLINK Debugger"
---

# {{ page.title }}

![JLINK Debugger]({{ site.url }}/assets/img/boards/STM32F103C8T6_JLINK-1.jpg)

## Overview

<table>
    <tr>
        <td rowspan="3"><b>Board</b></td>
        <td>Name</td>
        <td>JLINK Debugger</td>
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
        <td>No</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Power</b></td>
        <td>Sources</td>
        <td>USB connector (+5V)</td>
    </tr>
    <tr>
        <td>Regulator manufacturer</td>
        <td><a href="http://www.microchip.com/">Micrel / Microchip</a></td>
    </tr>
    <tr>
        <td>Regulator part number</td>
        <td><a href="https://cdn-shop.adafruit.com/product-files/3081/mic5219.pdf">MIC5219 (LG33)</a></td>
    </tr>
    <tr>
        <td>Regulator package</td>
        <td>SOT-23-5</td>
    </tr>
    <tr>
        <td>Output</td>
        <td>+3.3V @ 500mA (peak)</td>
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
        <td>SWD in (unpopulated 1x3 (2.54mm))<br>SWD out (1x4 male dupont (2.54mm))</td>
    </tr>
    <tr>
        <td>USB</td>
        <td>Mini</td>
    </tr>
    <tr>
        <td rowspan="3>"><b>I/O</b></td>
        <td>LEDs</td>
        <td>RUN LED (<b>RUN</b>, <code>PB12</code>, sink)</td>
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
        <td>Purple</td>
    </tr>
    <tr>
        <td>Size</td>
        <td>38mm x 16.5mm</td>
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

![JLINK Debugger]({{ site.url }}/assets/img/boards/STM32F103C8T6_JLINK-1.jpg)

![JLINK Debugger Top view]({{ site.url }}/assets/img/boards/STM32F103C8T6_JLINK-2.jpg)

![JLINK Debugger Bottom view]({{ site.url }}/assets/img/boards/STM32F103C8T6_JLINK-3.jpg)

## SWD out

| Pin    | Connected to |
| ------ | ------------ |
| TVCC   | N.C.         |
| GND    | Ground plane |
| SWDCLK | PA4          |
| SWDIO  | PA3          |

## SWD in

| Pin    | Connected to |
| ------ | ------------ |
|        | Ground plane |
|        | PA14 (SWCLK) |
|        | PA13 (SWDIO) |
