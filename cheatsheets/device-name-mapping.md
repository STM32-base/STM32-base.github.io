---
title: "Device name mapping"
---

# {{ page.title }}

To define the device you are using, you must set its name in the make file in your project. This name should be in the form of `STM32F___x_`, except for some [STM32F4 devices](#stm32f4-mapping). In addition to the device name mapping, the tables also provide an overview of de sizes of FLASH and SRAM available on the device. The sizes of the backup SRAM, CCM (Core Coupled Memory), ITCM (Instruction Tightly Coupled Memory), and
DTCM (Data Tightly Coupled Memory) are given where applicable.

**Bold device names** will be mapped to another value. _Italic device names_ deviate from the standard naming convention. Device names without styling are not mapped and thus are directly used. Memory sizes are given in KB, unless otherwise noted.

 * [Jump to STM32F0 mapping](#stm32f0-mapping)
 * [Jump to STM32F1 mapping](#stm32f1-mapping)
 * [Jump to STM32F2 mapping](#stm32f2-mapping)
 * [Jump to STM32F3 mapping](#stm32f3-mapping)
 * [Jump to STM32F4 mapping](#stm32f4-mapping)
 * [Jump to STM32F7 mapping](#stm32f7-mapping)

## STM32F0 mapping

| Device:         | Maps to:        | FLASH | SRAM |
| --------------- | --------------- | :---: | :--: |
| **STM32F030x4** |   STM32F030x6   |    16 |    4 |
|   STM32F030x6   |   STM32F030x6   |    32 |    4 |
|   STM32F030x8   |   STM32F030x8   |    64 |    8 |
|   STM32F030xC   |   STM32F030xC   |   256 |   32 |
| **STM32F031x4** |   STM32F031x6   |    16 |    4 |
|   STM32F031x6   |   STM32F031x6   |    32 |    4 |
| **STM32F038x6** |   STM32F038xx   |    32 |    4 |
| **STM32F042x4** |   STM32F042x6   |    16 |    6 |
|   STM23F042x6   |   STM32F042x6   |    32 |    6 |
| **STM32F048x6** |   STM32F048xx   |    32 |    6 |
| **STM32F051x4** |   STM32F051x8   |    16 |    8 |
| **STM32F051x6** |   STM32F051x8   |    32 |    8 |
|   STM32F051x8   |   STM32F051x8   |    64 |    8 |
| **STM32F058x8** |   STM32F058xx   |    64 |    8 |
|   STM32F070x6   |   STM32F070x6   |    32 |    6 |
|   STM32F070xB   |   STM32F070xB   |   128 |   16 |
| **STM32F071x8** |   STM32F071xB   |    64 |   16 |
|   STM32F071xB   |   STM32F071xB   |   128 |   16 |
| **STM32F072x8** |   STM32F072xB   |    64 |   16 |
|   STM32F072xB   |   STM32F072xB   |   128 |   16 |
| **STM32F078xB** |   STM32F078xx   |   128 |   16 |
| **STM32F091xB** |   STM32F091xC   |   128 |   32 |
|   STM32F091xC   |   STM32F091xC   |   256 |   32 |
| **STM32F098xC** |   STM32F098xx   |   256 |   32 |

## STM32F1 mapping

| Device:         | Maps to:        | FLASH | SRAM |
| --------------- | --------------- | :---: | :--: |
| **STM32F100x4** |   STM32F100xB   |    16 |    4 |
| **STM32F100x6** |   STM32F100xB   |    32 |    4 |
| **STM32F100x8** |   STM32F100xB   |    64 |    8 |
|   STM32F100xB   |   STM32F100xB   |   128 |    8 |
| **STM32F100xC** |   STM32F100xE   |   256 |   24 |
| **STM32F100xD** |   STM32F100xE   |   384 |   32 |
|   STM32F100xE   |   STM32F100xE   |   512 |   32 |
| **STM32F101x4** |   STM32F101x6   |    16 |    4 |
|   STM32F101x6   |   STM32F101x6   |    32 |    6 |
| **STM32F101x8** |   STM32F101xB   |    64 |   10 |
|   STM32F101xB   |   STM32F101xB   |   128 |   16 |
| **STM32F101xC** |   STM32F101xE   |   256 |   32 |
| **STM32F101xD** |   STM32F101xE   |   384 |   48 |
|   STM32F101xE   |   STM32F101xE   |   512 |   48 |
| **STM32F101xF** |   STM32F101xG   |   768 |   80 |
|   STM32F101xG   |   STM32F101xG   |  1024 |   80 |
| **STM32F102x4** |   STM32F102x6   |    16 |    4 |
|   STM32F102x6   |   STM32F102x6   |    32 |    6 |
| **STM32F102x8** |   STM32F102xB   |    64 |   10 |
|   STM32F102xB   |   STM32F102xB   |   128 |   16 |
| **STM32F103x4** |   STM32F103x6   |    16 |    6 |
|   STM32F103x6   |   STM32F103x6   |    32 |   10 |
| **STM32F103x8** |   STM32F103xB   |    64 |   20 |
|   STM32F103xB   |   STM32F103xB   |   128 |   20 |
| **STM32F103xC** |   STM32F103xE   |   256 |   48 |
| **STM32F103xD** |   STM32F103xE   |   384 |   64 |
|   STM32F103xE   |   STM32F103xE   |   512 |   64 |
| **STM32F103xF** |   STM32F103xG   |   768 |   96 |
|   STM32F103xG   |   STM32F103xG   |  1024 |   96 |
| **STM32F105x8** |   STM32F105xC   |    64 |   64 |
| **STM32F105xB** |   STM32F105xC   |   128 |   64 |
|   STM32F105xC   |   STM32F105xC   |   256 |   64 |
| **STM32F107xB** |   STM32F107xC   |   128 |   64 |
|   STM32F107xC   |   STM32F107xC   |   256 |   64 |

## STM32F2 mapping

| Device:         | Maps to:        | FLASH | SRAM | Backup |
| --------------- | --------------- | :---: | :--: | :----: |
| **STM32F205xB** |   STM32F205xx   |   128 |   64 |      4 |
| **STM32F205xC** |   STM32F205xx   |   256 |   96 |      4 |
| **STM32F205xE** |   STM32F205xx   |   512 |  128 |      4 |
| **STM32F205xF** |   STM32F205xx   |   768 |  128 |      4 |
| **STM32F205xG** |   STM32F205xx   |  1024 |  128 |      4 |
| **STM32F207xC** |   STM32F207xx   |   256 |  128 |      4 |
| **STM32F207xE** |   STM32F207xx   |   512 |  128 |      4 |
| **STM32F207xF** |   STM32F207xx   |   768 |  128 |      4 |
| **STM32F207xG** |   STM32F207xx   |  1024 |  128 |      4 |
| **STM32F215xE** |   STM32F215xx   |   512 |  128 |      4 |
| **STM32F215xG** |   STM32F215xx   |  1024 |  128 |      4 |
| **STM32F217xE** |   STM32F217xx   |   512 |  128 |      4 |
| **STM32F217xG** |   STM32F217xx   |  1024 |  128 |      4 |

## STM32F3 mapping

| Device:         | Maps to:        | FLASH | SRAM | CCM |
| --------------- | --------------- | :---: | :--: | :-: |
| **STM32F301x6** |   STM32F301x8   |    32 |   16 |   - |
|   STM32F301x8   |   STM32F301x8   |    64 |   16 |   - |
| **STM32F302x6** |   STM32F302x8   |    32 |   16 |   - |
|   STM32F302x8   |   STM32F302x8   |    64 |   16 |   - |
| **STM32F302xB** |   STM32F302xC   |   128 |   32 |   - |
|   STM32F302xC   |   STM32F302xC   |   256 |   40 |   - |
| **STM32F302xD** |   STM32F302xE   |   384 |   64 |   - |
|   STM32F302xE   |   STM32F302xE   |   512 |   64 |   - |
| **STM32F303x6** |   STM32F303x8   |    32 |   12 |   4 |
|   STM32F303x8   |   STM32F303x8   |    64 |   12 |   4 |
| **STM32F303xB** |   STM32F303xC   |   128 |   32 |   8 |
|   STM32F303xC   |   STM32F303xC   |   256 |   40 |   8 |
| **STM32F303xD** |   STM32F303xE   |   384 |   64 |  16 |
|   STM32F303xE   |   STM32F303xE   |   512 |   64 |  16 |
| **STM32F318x8** |   STM32F318xx   |    64 |   16 |   - |
| **STM32F328x8** |   STM32F328xx   |    64 |   12 |   4 |
| **STM32F334x4** |   STM32F334x8   |    16 |   12 |   4 |
| **STM32F334x6** |   STM32F334x8   |    32 |   12 |   4 |
|   STM32F334x8   |   STM32F334x8   |    64 |   12 |   4 |
| **STM32F358xC** |   STM32F358xx   |   256 |   40 |   8 |
| **STM32F373x8** |   STM32F373xC   |    64 |   16 |   - |
| **STM32F373xB** |   STM32F373xC   |   128 |   24 |   - |
|   STM32F373xC   |   STM32F373xC   |   256 |   32 |   - |
| **STM32F378xC** |   STM32F378xx   |   256 |   32 |   - |
| **STM32F398xE** |   STM32F398xx   |   512 |   64 |  16 |

## STM32F4 mapping

| Device:         | Maps to:        | FLASH | SRAM | CCM | Backup |
| --------------- | --------------- | :---: | :--: | :-: | :----: |
| **STM32F401xB** |   STM32F401xC   |   128 |   64 |   - |      - |
|   STM32F401xC   |   STM32F401xC   |   256 |   64 |   - |      - |
| **STM32F401xD** |   STM32F401xE   |   384 |   96 |   - |      - |
|   STM32F401xE   |   STM32F401xE   |   512 |   96 |   - |      - |
| **STM32F405xE** |   STM32F405xx   |   512 |  128 |  64 |      4 |
| **STM32F405xG** |   STM32F405xx   |  1024 |  128 |  64 |      4 |
| **STM32F407xE** |   STM32F407xx   |   512 |  128 |  64 |      4 |
| **STM32F407xG** |   STM32F407xx   |  1024 |  128 |  64 |      4 |
|  _STM32F410T8*_ |   STM32F410Tx   |    64 |   32 |   - |      - |
|  _STM32F410TB*_ |   STM32F410Tx   |   128 |   32 |   - |      - |
|  _STM32F410C8*_ |   STM32F410Cx   |    64 |   32 |   - |      - |
|  _STM32F410CB*_ |   STM32F410Cx   |   128 |   32 |   - |      - |
|  _STM32F410R8*_ |   STM32F410Rx   |    64 |   32 |   - |      - |
|  _STM32F410RB*_ |   STM32F410Rx   |   128 |   32 |   - |      - |
| **STM32F411xC** |   STM32F411xE   |   256 |  128 |   - |      - |
|   STM32F411xE   |   STM32F411xE   |   512 |  128 |   - |      - |
|  _STM32F412CE*_ |   STM32F412Cx   |   512 |  256 |   - |      - |
|  _STM32F412CG*_ |   STM32F412Cx   |  1024 |  256 |   - |      - |
|  _STM32F412ZE*_ |   STM32F412Zx   |   512 |  256 |   - |      - |
|  _STM32F412ZG*_ |   STM32F412Zx   |  1024 |  256 |   - |      - |
|  _STM32F412VE*_ |   STM32F412Vx   |   512 |  256 |   - |      - |
|  _STM32F412VG*_ |   STM32F412Vx   |  1024 |  256 |   - |      - |
|  _STM32F412RE*_ |   STM32F412Rx   |   512 |  256 |   - |      - |
|  _STM32F412RG*_ |   STM32F412Rx   |  1024 |  256 |   - |      - |
| **STM32F413xG** |   STM32F413xx   |  1024 |  320 |   - |      - |
| **STM32F413xH** |   STM32F413xx   |  1536 |  320 |   - |      - |
| **STM32F415xG** |   STM32F415xx   |  1024 |  128 |  64 |      4 |
| **STM32F417xE** |   STM32F417xx   |   512 |  128 |  64 |      4 |
| **STM32F417xG** |   STM32F417xx   |  1024 |  128 |  64 |      4 |
| **STM32F423xH** |   STM32F423xx   |  1536 |  320 |   - |      - |
| **STM32F427xG** |   STM32F427xx   |  1024 |  192 |  64 |      4 |
| **STM32F427xI** |   STM32F427xx   |  2048 |  192 |  64 |      4 |
| **STM32F429xE** |   STM32F429xx   |   512 |  192 |  64 |      4 |
| **STM32F429xG** |   STM32F429xx   |  1024 |  192 |  64 |      4 |
| **STM32F429xI** |   STM32F429xx   |  2048 |  192 |  64 |      4 |
| **STM32F437xG** |   STM32F437xx   |  1024 |  192 |  64 |      4 |
| **STM32F437xI** |   STM32F437xx   |  2048 |  192 |  64 |      4 |
| **STM32F439xG** |   STM32F439xx   |  1024 |  192 |  64 |      4 |
| **STM32F439xI** |   STM32F439xx   |  2048 |  192 |  64 |      4 |
| **STM32F446xC** |   STM32F446xE   |   256 |  128 |   - |      - |
|   STM32F446xE   |   STM32F446xE   |   512 |  128 |   - |      - |
| **STM32F469xE** |   STM32F469xI   |   512 |  320 |  64 |      4 |
| **STM32F469xG** |   STM32F469xI   |  1024 |  320 |  64 |      4 |
|   STM32F469xI   |   STM32F469xI   |  2048 |  320 |  64 |      4 |
| **STM32F479xG** |   STM32F479xI   |  1024 |  320 |  64 |      4 |
|   STM32F479xI   |   STM32F479xI   |  2048 |  320 |  64 |      4 |

_\* NOTE: These device names deviate from the standard naming, using the full name of the device (without the "x")._

## STM32F7 mapping

| Device:         | Maps to:        | FLASH | SRAM | DTCM | ITCM | Backup |
| --------------- | --------------- | :---: | :--: | :--: | :--: | :----: |
| **STM32F722xC** |   STM32F722xx   |   256 |  192 |   64 |   16 |      4 |
| **STM32F722xE** |   STM32F722xx   |   512 |  192 |   64 |   16 |      4 |
| **STM32F723xC** |   STM32F723xx   |   256 |  192 |   64 |   16 |      4 |
| **STM32F723xE** |   STM32F723xx   |   512 |  192 |   64 |   16 |      4 |
| **STM32F732xC** |   STM32F732xx   |   256 |  192 |   64 |   16 |      4 |
| **STM32F732xE** |   STM32F732xx   |   512 |  192 |   64 |   16 |      4 |
| **STM32F733xC** |   STM32F733xx   |   256 |  192 |   64 |   16 |      4 |
| **STM32F733xE** |   STM32F733xx   |   512 |  192 |   64 |   16 |      4 |
| **STM32F745xE** |   STM32F745xx   |   512 |  256 |   64 |   16 |      4 |
| **STM32F745xG** |   STM32F745xx   |  1024 |  256 |   64 |   16 |      4 |
| **STM32F746xE** |   STM32F746xx   |   512 |  256 |   64 |   16 |      4 |
| **STM32F746xG** |   STM32F746xx   |  1024 |  256 |   64 |   16 |      4 |
| **STM32F756xE** |   STM32F756xx   |   512 |  256 |   64 |   16 |      4 |
| **STM32F756xG** |   STM32F756xx   |  1024 |  256 |   64 |   16 |      4 |
| **STM32F765xG** |   STM32F765xx   |  1024 |  384 |  128 |   16 |      4 |
| **STM32F765xI** |   STM32F765xx   |  2048 |  384 |  128 |   16 |      4 |
| **STM32F767xG** |   STM32F767xx   |  1024 |  384 |  128 |   16 |      4 |
| **STM32F767xI** |   STM32F767xx   |  2048 |  384 |  128 |   16 |      4 |
| **STM32F768xI** |   STM32F768xx   |  2048 |  384 |  128 |   16 |      4 |
| **STM32F769xG** |   STM32F769xx   |  1024 |  384 |  128 |   16 |      4 |
| **STM32F769xI** |   STM32F769xx   |  2048 |  384 |  128 |   16 |      4 |
| **STM32F777xG** |   STM32F777xx   |  1024 |  384 |  128 |   16 |      4 |
| **STM32F777xI** |   STM32F777xx   |  2048 |  384 |  128 |   16 |      4 |
| **STM32F778xI** |   STM32F778xx   |  2048 |  384 |  128 |   16 |      4 |
| **STM32F779xG** |   STM32F779xx   |  1024 |  384 |  128 |   16 |      4 |
| **STM32F779xI** |   STM32F779xx   |  2048 |  384 |  128 |   16 |      4 |
