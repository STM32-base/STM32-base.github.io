---
title: "Device name mapping"
---

# {{ page.title }}

To define the device you are using, you must set its name in the make file in your project. This name should be in the form of `STM32F___x_`, except for some [STM32F4 devices](#stm32f4-mapping). In addition to the device name mapping, the tables also provide an overview of de sizes of FLASH and SRAM available on the device. The sizes of the backup SRAM, CCM (Core Coupled Memory), ITCM (Instruction Tightly Coupled Memory), and
DTCM (Data Tightly Coupled Memory) are given where applicable and are part of the total amount of SRAM available on each device.

**Bold device names** will be mapped to another value. _Italic device names_ deviate from the standard naming convention. Device names without styling are not mapped and thus are directly used. Memory sizes are given in KB, unless otherwise noted.

 * [Jump to STM32F0 mapping](#stm32f0-mapping)
 * [Jump to STM32F1 mapping](#stm32f1-mapping)
 * [Jump to STM32F2 mapping](#stm32f2-mapping)
 * [Jump to STM32F3 mapping](#stm32f3-mapping)
 * [Jump to STM32F4 mapping](#stm32f4-mapping)
 * [Jump to STM32F7 mapping](#stm32f7-mapping)
 * [Jump to STM32G0 mapping](#stm32g0-mapping)
 * [Jump to STM32H7 mapping](#stm32h7-mapping)
 * [Jump to STM32L0 mapping](#stm32l0-mapping)
 * [Jump to STM32L1 mapping](#stm32l1-mapping)
 * [Jump to STM32L4 mapping](#stm32l4-mapping)
 * [Jump to STM32L4+ mapping](#stm32l4-mapping-1)
 * [Jump to STM32L5 mapping](#stm32l5-mapping)

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

## STM32G0 mapping

| Device:         | Maps to:        | FLASH | SRAM |
| --------------- | --------------- | :---: | :--: |
| **STM32G031x4** |   STM32G031xx*  |    16 |    8 |
| **STM32G031x6** |   STM32G031xx*  |    32 |    8 |
| **STM32G031x8** |   STM32G031xx*  |    64 |    8 |
| **STM32G041x4** |   STM32G041xx*  |    16 |    8 |
| **STM32G041x6** |   STM32G041xx*  |    32 |    8 |
| **STM32G041x8** |   STM32G041xx*  |    64 |    8 |
| **STM32G070xB** |   STM32G070xx   |   128 |   36 |
| **STM32G071x8** |   STM32G071xx   |    64 |   36 |
| **STM32G071xB** |   STM32G071xx   |   128 |   36 |
| **STM32G081xB** |   STM32G081xx   |   128 |   36 |
| **STM32G0B1xC** |   STM32G0B1xx*  |   256 |  128 |
| **STM32G0B1xE** |   STM32G0B1xx*  |   512 |  128 |
| **STM32G0C1xC** |   STM32G0C1xx*  |   256 |  128 |
| **STM32G0C1xE** |   STM32G0C1xx*  |   512 |  128 |

_\* Note: These devices are not yet released. The mapping is a guess based on the mapping available for the STM32G070, STM32G071, and STM32G081 mappings._

## STM32H7 mapping

| Device:         | Maps to:        | FLASH | SRAM | DTCM | ITCM | Backup |
| --------------- | --------------- | :---: | :--: | :--: | :--: | :----: |
| **STM32H743xG** |   STM32H743xx   |  1024 | 1024 |  128 |   64 |      4 |
| **STM32H743xI** |   STM32H743xx   |  2048 | 1024 |  128 |   64 |      4 |
| **STM32H750xB** |   STM32H750xx   |   128 | 1024 |  128 |   64 |      4 |
| **STM32H753xI** |   STM32H753xx   |  2048 | 1024 |  128 |   64 |      4 |

## STM32L0 mapping

| Device:         | Maps to:        | FLASH | SRAM | EEPROM | Backup Registers |
| --------------- | --------------- | :---: | :--: | :----: | :--------------: |
|   STM32L010x4   |   STM32L010x4   |    16 |    2 |   128B |              20B |
|   STM32L010x6   |   STM32L010x6   |    32 |    8 |   256B |              20B |
|   STM32L010x8   |   STM32L010x8   |    64 |    8 |   256B |              20B |
|   STM32L010xB   |   STM32L010xB   |   128 |   20 |   512B |              20B |
| **STM32L011x3** |   STM32L011xx   |     8 |    2 |   512B |              20B |
| **STM32L011x4** |   STM32L011xx   |    16 |    2 |   512B |              20B |
| **STM32L021x4** |   STM32L021xx   |    16 |    2 |   512B |              20B |
| **STM32L031x4** |   STM32L031xx   |    16 |    8 |      1 |              20B |
| **STM32L031x6** |   STM32L031xx   |    32 |    8 |      1 |              20B |
| **STM32L041x6** |   STM32L041xx   |    32 |    8 |      1 |              20B |
| **STM32L051x6** |   STM32L051xx   |    32 |    8 |      2 |              20B |
| **STM32L051x8** |   STM32L051xx   |    64 |    8 |      2 |              20B |
| **STM32L052x6** |   STM32L052xx   |    32 |    8 |      2 |              20B |
| **STM32L052x8** |   STM32L052xx   |    64 |    8 |      2 |              20B |
| **STM32L053x6** |   STM32L053xx   |    32 |    8 |      2 |              20B |
| **STM32L053x8** |   STM32L053xx   |    64 |    8 |      2 |              20B |
| **STM32L062x8** |   STM32L062xx   |    64 |    8 |      2 |              20B |
| **STM32L063x8** |   STM32L063xx   |    64 |    8 |      2 |              20B |
| **STM32L071x8** |   STM32L071xx   |    64 |   20 |      6 |              20B |
| **STM32L071xB** |   STM32L071xx   |   128 |   20 |      6 |              20B |
| **STM32L071xZ** |   STM32L071xx   |   192 |   20 |      6 |              20B |
| **STM32L072x8** |   STM32L072xx   |    64 |   20 |      6 |              20B |
| **STM32L072xB** |   STM32L072xx   |   128 |   20 |      6 |              20B |
| **STM32L072xZ** |   STM32L072xx   |   192 |   20 |      6 |              20B |
| **STM32L073x8** |   STM32L073xx   |    64 |   20 |      6 |              20B |
| **STM32L073xB** |   STM32L073xx   |   128 |   20 |      6 |              20B |
| **STM32L073xZ** |   STM32L073xx   |   192 |   20 |      6 |              20B |
| **STM32L081xB** |   STM32L081xx   |   128 |   20 |      6 |              20B |
| **STM32L081xZ** |   STM32L081xx   |   192 |   20 |      6 |              20B |
| **STM32L082xB** |   STM32L082xx   |   128 |   20 |      6 |              20B |
| **STM32L082xZ** |   STM32L082xx   |   192 |   20 |      6 |              20B |
| **STM32L083x8** |   STM32L083xx   |    64 |   20 |      6 |              20B |
| **STM32L083xB** |   STM32L083xx   |   128 |   20 |      6 |              20B |
| **STM32L083xZ** |   STM32L083xx   |   192 |   20 |      6 |              20B |

## STM32L1 mapping

| Device:           | Maps to:        | FLASH | SRAM | EEPROM | Backup Registers |
| ----------------- | --------------- | :---: | :--: | :----: | :--------------: |
| **STM32L100x6**   |   STM32L100xB   |    32 |    4 |      2 |              20B |
| **STM32L100x6-A** |   STM32L100xBA  |    32 |    4 |      2 |              20B |
| **STM32L100x8**   |   STM32L100xB   |    64 |    8 |      2 |              20B |
| **STM32L100x8-A** |   STM32L100xBA  |    64 |    8 |      2 |              20B |
|   STM32L100xB     |   STM32L100xB   |   128 |   10 |      2 |              20B |
| **STM32L100xB-A** |   STM32L100xBA  |   128 |   16 |      2 |              20B |
|   STM32L100xC     |   STM32L100xC   |   256 |   16 |      4 |              20B |
| **STM32L151x6**   |   STM32L151xB   |    32 |   10 |      4 |              80B |
| **STM32L151x8**   |   STM32L151xB   |    64 |   10 |      4 |              80B |
|   STM32L151xB     |   STM32L151xB   |   128 |   16 |      4 |              80B |
|   STM32L151xC     |   STM32L151xC   |   256 |   32 |      8 |             128B |
|   STM32L151xD     |   STM32L151xD   |   384 |   48 |     12 |             128B |
|   STM32L151xE     |   STM32L151xE   |   512 |   80 |     16 |             128B |
| **STM32L151x6-A** |   STM32L151xBA  |    32 |   16 |      4 |              80B |
| **STM32L151x8-A** |   STM32L151xBA  |    64 |   32 |      4 |              80B |
| **STM32L151xB-A** |   STM32L151xBA  |   128 |   32 |      4 |              80B |
| **STM32L151xC-A** |   STM32L151xCA  |   256 |   32 |      8 |             128B |
| **STM32L151xD-X** |   STM32L151xDX  |   384 |   80 |     16 |             128B |
| **STM32L152x6**   |   STM32L152xB   |    32 |   10 |      4 |              80B |
| **STM32L152x8**   |   STM32L152xB   |    64 |   10 |      4 |              80B |
|   STM32L152xB     |   STM32L152xB   |   128 |   16 |      4 |              80B |
|   STM32L152xC     |   STM32L152xC   |   256 |   32 |      8 |             128B |
|   STM32L152xD     |   STM32L152xD   |   384 |   48 |     12 |             128B |
|   STM32L152xE     |   STM32L152xE   |   512 |   80 |     16 |             128B |
| **STM32L152x6-A** |   STM32L152xBA  |    32 |   16 |      4 |              80B |
| **STM32L152x8-A** |   STM32L152xBA  |    64 |   32 |      4 |              80B |
| **STM32L152xB-A** |   STM32L152xBA  |   128 |   32 |      4 |              80B |
| **STM32L152xC-A** |   STM32L152xCA  |   256 |   32 |      8 |             128B |
| **STM32L152xD-X** |   STM32L152xDX  |   384 |   80 |     16 |             128B |
|   STM32L162xC     |   STM32L162xC   |   256 |   32 |      8 |             128B |
| **STM32L162xC-A** |   STM32L162xCA  |   256 |   32 |      8 |             128B |
|   STM32L162xD     |   STM32L162xD   |   384 |   48 |     12 |             128B |
| **STM32L162xD-X** |   STM32L162xDA  |   384 |   80 |     16 |             128B |
|   STM32L162xE     |   STM32L162xE   |   512 |   80 |     16 |             128B |

## STM32L4 mapping

| Device:           | Maps to:        | FLASH | SRAM |
| ----------------- | --------------- | :---: | :--: |
| **STM32L412x8**   |   STM32L412xx   |    64 |   40 |
| **STM32L412xB**   |   STM32L412xx   |   128 |   40 |
| **STM32L422xB**   |   STM32L422xx   |   128 |   40 |
| **STM32L431xB**   |   STM32L431xx   |   128 |   64 |
| **STM32L431xC**   |   STM32L431xx   |   256 |   64 |
| **STM32L432xB**   |   STM32L432xx   |   128 |   64 |
| **STM32L432xC**   |   STM32L432xx   |   256 |   64 |
| **STM32L433xB**   |   STM32L433xx   |   128 |   64 |
| **STM32L433xC**   |   STM32L433xx   |   128 |   64 |
| **STM32L442xC**   |   STM32L442xx   |   256 |   64 |
| **STM32L443xC**   |   STM32L443xx   |   256 |   64 |
| **STM32L451xC**   |   STM32L451xx   |   256 |  160 |
| **STM32L451xE**   |   STM32L451xx   |   512 |  160 |
| **STM32L452xC**   |   STM32L452xx   |   256 |  160 |
| **STM32L452xE**   |   STM32L452xx   |   512 |  160 |
| **STM32L462xE**   |   STM32L462xx   |   512 |  160 |
| **STM32L471xE**   |   STM32L471xx   |   512 |  128 |
| **STM32L471xG**   |   STM32L471xx   |  1024 |  128 |
| **STM32L475xC**   |   STM32L475xx   |   256 |  128 |
| **STM32L475xE**   |   STM32L475xx   |   512 |  128 |
| **STM32L475xG**   |   STM32L475xx   |  1024 |  128 |
| **STM32L476xC**   |   STM32L476xx   |   256 |  128 |
| **STM32L476xE**   |   STM32L476xx   |   512 |  128 |
| **STM32L476xG**   |   STM32L476xx   |  1024 |  128 |
| **STM32L486xG**   |   STM32L486xx   |  1024 |  128 |
| **STM32L496xE**   |   STM32L496xx   |   512 |  320 |
| **STM32L496xG**   |   STM32L496xx   |  1024 |  320 |
| **STM32L4A6xG**   |   STM32L4A6xx   |  1024 |  320 |

## STM32L4+ mapping

| Device:           | Maps to:        | FLASH | SRAM |
| ----------------- | --------------- | :---: | :--: |
| **STM32L4R5xG**   |   STM32L4R5xx   |  1024 |  640 |
| **STM32L4R5xI**   |   STM32L4R5xx   |  2048 |  640 |
| **STM32L4S5xI**   |   STM32L4S5xx   |  2048 |  640 |
| **STM32L4R7xI**   |   STM32L4R7xx   |  2048 |  640 |
| **STM32L4S7xI**   |   STM32L4S7xx   |  2048 |  640 |
| **STM32L4R9xG**   |   STM32L4R9xx   |  1024 |  640 |
| **STM32L4R9xI**   |   STM32L4R9xx   |  2048 |  640 |
| **STM32L4S9xI**   |   STM32L4S9xx   |  2048 |  640 |

## STM32L5 mapping

| Device:           | Maps to:        | FLASH | SRAM |
| ----------------- | --------------- | :---: | :--: |
| **STM32L552xC**   |   STM32L552xx*  |   256 |  256 |
| **STM32L552xE**   |   STM32L552xx*  |   512 |  256 |
| **STM32L562xE**   |   STM32L562xx*  |   512 |  256 |

_\* Note: These devices are not yet released. The mapping is a guess based on the mapping available for the STM32L4 mappings._
