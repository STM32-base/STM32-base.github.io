WORK IN PROGRESS

title
STM32F407ZET6 - STM32_F4XX board
{{ page.title }}

![STM32_F4XX board]({{ site.url }}/assets/img/boards/STM32F407ZET6-STM32_F4xx_1.jpg)
Overview
Board 	Name 	STM32_F4XX
Brand 	Unknown
Origin 	China
Microcontroller 	Part 	STM32F407ZET6
(Can also come with      STM32F407ZGT6)
Package 	LQFP144
Core 	Cortex-M4
FLASH 	512KB (1024KB)
SRAM 	192KB:
  112KB + 16KB SRAM 
  64KB Core Coupled memory (CCM)
4KB backup SRAM
Max. Clock Speed 	168MHz
Crystals 	HSE (High Speed External) 	8MHz
LSE (Low Speed External) 	32.768kHz
Power 	Sources 	Any +3.3V pin (+3.3V)
Any +5V pin (+5V)
USB connector (+5V)
Regulator manufacturer 	Advanced Monolithic Systems Inc.
Regulator part number 	AMS1117
Regulator package 	SOT223
Output 	+3.3V @ 1000mA
Battery holder 	Yes
Connectivity 	Headers 	2x 2x30 male dupont (2.54mm)
Specific 	TFT (2x16 female dupont (2.54mm))
NRF2401 (2x4 female dupont (2.54mm))
Debug 	JTAG (20-pin IDC)
USB 	Mini
Micro SDcard
I/O 	LEDs 	Power LED (D3, +3.3V)
User LED (D1, PF9, active low)
User LED (D2, PF10, active low)
Buttons, switches and jumpers 	Reset button (REST, NRST, active low)
2-way jumper (BOOT0) to 3.3V or GND
Jumper (BOOT1) to 3.3V
User button (K0, PE4, active low)
User button (K1, PE3, active low)
User button (WK_UP, PA0, active high)
Other devices 	Winbond W25Q16JV (16Mb FLASH)
PCB 	Colour 	Black
Size 	95mm x 74mm
Mounting 	4x mounting hole (M2)
Remarks 	

    Warning: The +5V pins on this board are directly connected to the +5V pin of the USB connector. There is no protection in place. Do not power this board through USB and an external power supply at the same time.

Pictures

![F103ZE board]({{ site.url }}/assets/img/boards/STM32F103ZET6_F103ZE_Board-1.jpg)

![F103ZE board Top view]({{ site.url }}/assets/img/boards/STM32F103ZET6_F103ZE_Board-2.jpg)

![F103ZE board Bottom view]({{ site.url }}/assets/img/boards/STM32F103ZET6_F103ZE_Board-3.jpg)
Header 1
Pin 	Connected to
PB8 	PB8
PB9 	PB9
PB6 	PB6
PB7 	PB7
PB4 	PB4
PB5 	PB5
PG15 	PG15
PB3 	PB3
PG13 	PG13
PG14 	PG14
PG11 	PG11
PG12 	PG12
PG9 	PG9
PG10 	PG10
PD6 	PD6
PD7 	PD7
PD4 	PD4
PD5 	PD5
PD2 	PD2
PD3 	PD3
PD0 	PD0
PD1 	PD1
PC11 	PC11
PC12 	PC12
PA15 	PA15
PC10 	PC10
PA13 	PA13
PA14 	PA14
PA11 	PA11
PA12 	PA12
PA9 	PA9
PA10 	PA10
PC9 	PC9
PA8 	PA8
PC7 	PC7
PC8 	PC8
PG8 	PG8
PC6 	PC6
PG6 	PG6
PG7 	PG7
PG4 	PG4
PG5 	PG5
PG2 	PG2
PG3 	PG3
PD14 	PD14
PD15 	PD15
PD12 	PD12
PD13 	PD13
PD10 	PD10
PD11 	PD11
PD8 	PD8
PD9 	PD9
PB14 	PB14
PB15 	PB15
PB12 	PB12
PB13 	PB13
GND 	Ground plane
3V3 	+3.3V rail
GND 	Ground plane
5V 	+5V rail
Header 2
Pin 	Connected to
3V3 	+3.3V rail
3V3 	+3.3V rail
BT0 	BOOT0
BT1 	BOOT1
GND 	Ground plane
GND 	Ground plane
PB11 	PB11
PB10 	PB10
PE15 	PE15
PE14 	PE14
PE13 	PE13
PE12 	PE12
PE11 	PE11
PE10 	PE10
PE9 	PE9
PE8 	PE8
PE7 	PE7
PG1 	PG1
PG0 	PG0
PF15 	PF15
PF14 	PF14
PF13 	PF13
PF12 	PF12
PF11 	PF11
PB2 	PB2
PB1 	PB1
PB0 	PB0
PC5 	PC5
PC4 	PC4
PA6 	PA6
PA5 	PA5
PA4 	PA4
PA3 	PA3
PA2 	PA2
PA1 	PA1
PA0 	PA0
PC3 	PC3
PC2 	PC2
PC1 	PC1
PC0 	PC0
PF10 	PF10
PF9 	PF9
PF8 	PF8
PF7 	PF7
PF6 	PF6
PF5 	PF5
PF4 	PF4
PF3 	PF3
PF2 	PF2
PF1 	PF1
PF0 	PF0
PC13 	PC13
PE6 	PE6
PE5 	PE5
PE4 	PE4
PE3 	PE3
PE2 	PE2
PE1 	PE1
PE0 	PE0
USB
Pin 	Connected to
VCC 	+5V rail
D- 	PA11
D+ 	PA12
ID 	N.C.
GND 	Ground plane
JTAG
Pin 	Connected to 	JTAG 	SWD
1 	+3.3V rail 	VCC 	-
2 	+3.3V rail 	VCC 	-
3 	PB4 	TRST 	-
4 	Ground plane 	GND 	-
5 	PA15 	TDI 	-
6 	Ground plane 	GND 	-
7 	PA13 	TMS 	SWDIO
8 	Ground plane 	GND 	-
9 	PA14 	TCLK 	SWCLK
10 	Ground plane 	GND 	-
11 	N.C. 	RTCK 	-
12 	Ground plane 	GND 	-
13 	PB3 	TDO 	SWO
14 	Ground plane 	GND 	-
15 	NRST 	RESET 	-
16 	Ground plane 	GND 	-
17 	N.C. 	N.C. 	-
18 	Ground plane 	GND 	-
19 	N.C. 	N.C. 	-
20 	Ground plane 	GND 	-
TFT
Pin 	Connected to
	NRST
	Ground plane
	PD9
	PD10
	PE15
	PD8
	PE13
	PE14
	PE11
	PE12
	PE9
	PE10
	PE7
	PE8
	PD0
	PD1
	PD14
	PD15
	PD5
	PD4
	PG12
	PG0
	PB2
	PB1
	PF8
	PF9
	N.C.
	N.C.
	VBAT
	Ground plane
	+3.3V rail
	Ground plane
NRF2401
Pin 	Connected to
GND 	Ground plane
VCC 	+3.3V rail
CE 	PG6
CSN 	PG7
SCK 	PB13
MOSI 	PB15
MISO 	PB14
IRQ 	PG8
IC - Winbond W25Q16JV (16Mb FLASH)
Pin 	Connected to
/CS 	+3.3V rail via 10kΩ resistor
DO 	PB14
IO2 	+3.3V rail
GND 	Ground plane
DI 	PB15
CLK 	PB13
IO3 	+3.3V rail
VCC 	+3.3V rail

    © 2019 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

