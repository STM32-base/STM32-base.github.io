---
title: "Data models"
---

# {{ page.title }}

This page contains a description of the data models used to generate this website. Still work in progress.

# _abstract_ Device

```
manufacturer       : Object
  - name           : String | null = The manufacturer's name.
  - url            : String | null = The manufacturer's website.
part               : Object
  - name           : String | null = The part's name.
  - marking        : String | null = The part's marking on the device.
  - datasheet      : String        = Name of the device's datasheet.
  - url            : String | null = The part's product page.
package            : Object
  - abbreviation   : String | null = The abbreviation of the package name.
  - name           : String        = The package name.
  - pins           : Number        = The number of pins on the package.
```

# Microcontroller _extends_ Device

```
core               : Object
  - name           : String        = The CPU core's name.
  - url            : String        = The URL to the core's product page.
  - maxClock       : Number        = The maximum clock speed of the core.
memories           : Object
  - flash          : Number        = The size of the FLASH memory in MiB.
  - sram           : Number        = The size of the SRAM memory in MiB.
  - ccm            : Number        = The size of the CCM memory in MiB.
  - backup         : Number        = The size of the Backup SRAM memory in MiB.
  - itcmFlash      : Number        = The size of the ITCM FLASH memory in MiB.
  - itcmRam        : Number        = The size of the ITCM RAM memory in MiB.
  - dtcmRam        : Number        = The size of the DTCM RAM memory in MiB.
oscillators        : Object
  - hsi            : Number        = The speed of the High Speed Internal oscillator in MHz.
  - lsi            : Number        = The speed of the Low Speed Internal oscillator in kHz.
```

# Regulator _extends_ Device

```
input              : Object
  - min            : Number        = The minimum input voltage in V.
  - max            : Number        = The maximum input voltage in V.
output             : Object
  - voltage        : Number        = The output voltage in V.
  - amperage       : Number        = The output current in A.
```

# IC _extends_ Device

```
type               : String        = The type of this IC.
```

# Board data model

```
board              : Object        = Board metadata.
  - brand          : Object        = Brand information.
    - name         : String | null = Brand name.
    - url          : String | null = Brand website.
  - part           : Object        = Part information.
    - name         : String        = Part name.
    - marking      : String | null = Part number printed on the board.
    - url          : String | null = Part page on brand website.
  - origin         : String        = Country of origin.
microcontroller    : String        = Microcontroller part number.
oscillators        : Object
  - hse            : Number | null = High Speed External oscillator speed in MHz.
  - lse            : Number | null = Low Speed External oscillator speed in kHz.
power              : Object
  - inputs         : Object[]      = List of power inputs.
    - name         : String        = Power input name.
    - voltage      : Number        = Power input voltage.
  - analog         : Object
    - vdda         : Boolean       = Whether this board exposes the Vdda pin on any header.
    - vssa         : Boolean       = Whether this board exposes the Vssa pin on any header.
    - vrefNegative : Boolean       = Whether this board exposes the Vref- pin on any header.
    - vrefPositive : Boolean       = Whether this board exposes the Vref+ pin on any header.
  - battery        : Object
    - attachment   : String        = The way the backup battery is attached to the board.
                                   = "soldered"  > Directly soldered to PCB.
                                   = "holder"    > Battery holder on PCB.
                                   = "footprint" > PCB features a footprint for a battery holder.
                                   = "header"    > Battery can be connected through header.
                                   = "connector" > Battery can be connected through dedicated connector.
                                   = "none"      > No way to attach a backup battery.
    - size         : Object | null
      - code       : String        = The battery coin cell size code.
      - diameter   : Number        = The battery diameter in mm.
regulator          : String        = The regulator
pcb                : Object
  - color          : String        = The board's PCB color.
  - size           : Object        = The board's PCB size, excluding overhanging connectors.
    - length       : Number        = Length in mm.
    - width        : Number        = Width in mm.
  - mounting       : String        = Mounting options for this board:
                                   = "Breadboard"             > For boards that fit in a breadboard.
                                   = "nx mounting holes (Md)" > Where n is the number of holes and d the diameter in ISO metric screw thread sizes.
                                   = "none"                   > Boards for boards without mounting holes or headers fit for a breadboard.
remarks            : Object[]      = List of remarks related to this board.
  - type           : String        = One of:
                                   = "trivia"  > Information that is nice to know, not required for using this board.
                                   = "note"    > Noteworthy information.
                                   = "warning" > Information user needs to be aware of.
  - content        : String        = The contents of the remark. Use HTML for inserting links etc...
resources          : Object[]      = List of resources.
  - name           : String        = The name of the resource to display.
  - type           : String        = The type of the resource. One of:
                                   = "picture"  > The pictures shown on the page. At least one perspective, a top, and a bottom view.
                                   = "image"    > Any other images, like pin-outs.
                                   = "document" > Any non-pdf documents.
                                   = "pdf"      > Any pdf documents.
                                   = "link"     > Links to external resources.
  - file           : String        = The filename, or full URL in the case of type = "link".
- inputs           : Object[]      = List of inputs.
  - name           : String        = Input name to be shown.
  - identifiers    : Object
    - name         | String | null = The name of the input as printed on the PCB.
    - reference    : String | null = The reference of the input as printed on the PCB.
  - function       : String        = The function of the input. One of:
                                   = "user"   > For inputs that can be used by users.
                                   = "boot0"  > For inputs setting the signal level on the BOOT0 pin.
                                   = "boot1"  > For inputs setting the signal level on the BOOT1 pin.
                                   = "enable" > For inputs enabling power or a signal to reach a device on the board.
  - type           : String        = The type of input device. One of:
                                   = "button"
                                   = "switch"
                                   = "1-way jumper" > For jumpers with only one position.
                                   = "2-way jumper" > For jumpers with two positions.
  - to             : String        = The pin this input connects to.
  - mode           : String        = The mode of this input. Applicable to button and 1-way jumper. One of:
                                   = "active high"
                                   = "active low"
- outputs          : Object[]      = List of outputs.
  - name           : String        = Output name to be shown.
  - identifiers    : Object
    - name         : String | null = The name of the output as printed on the PCB.
    - reference    : String | null = The reference of the output as printed on the PCB.
  - function       : String        = The function of the output. One of:
                                   = "user"  > For outputs that can be used by users.
                                   = "power" > For outputs signaling that power is on.
  - type           : String        = The type of output. One of:
                                   = "LED"
  - to             : String        = The pin this output connects to.
  - mode           : String | null = The mode of this output. Applicable to user outputs. One of:
                                   = "sink"  > For outputs that need a current sink (low signal).
                                   = "source > For outputs that need a current source (high signal).
connectors         : Object[]      = List of connectors.
  - name           : String        = The name to be shown.
  - identifiers    : Object
    - name         : String | null = The name of the connector as printed on the PCB.
    - reference    : String | null = The reference of the connector as printed on the PCB.
  - function       : String        = The function of the connector. One of:
                                   = "header" > For headers.
                                   = "debug"  > For debug headers/connectors including JTAG and SWD.
                                   = "usb"    > For USB connectors.
                                   = "sd"     > For SD card connectors.
                                   = "other"  > Anything else.
  - footprint      : Boolean       = Whether this connector is only a footprint on the PCB.
  - type           : Object
    - name         : String        = The type name of the connector. Examples: "Pin header", "IDC", "USB Micro".
    - gender       : String | null = The gender of the connector. One of: "male", "female".
    - pitch        : Number | null = The pin pitch of the connector in mm.
    - size         : Object | null = The size of the connector.
      - length     : Number        = The number of pins.
      - width      : Number        = The number of pins.
  - pins           : Object[]
    - number       : Number        = The pin number.
    - name         : String | null = The pin name as printed on the PCB.
    - function     : String | null = The function of the pin following the specification. Applicable to standard connectors like USB and JTAG.
    - to           : String        = The microcontroller pin this pin is connected to.
devices            : Object[]      = List of devices.
  - name           : String        = The name of the device.
  - identifiers    : Object
    - name         : String | null = The name of the device as printed on the PCB.
    - reference    : String | null = The reference of the device as printed on the PCB.
  - footprint      : Boolean       = Whether this device is only a footprint on the PCB.
  - pins           : Object[]
    - number       : Number        = The pin number.
    - name         : String | null = The name of the pin as printed on the PCB.
    - function     : String | null = The function of the pin following the device's datasheet.
    - to           : String        = The (microcontroller) pin this pin is connected to.
```
