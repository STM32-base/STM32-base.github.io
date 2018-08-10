---
title: "Guide: Changing the template code"
---

# {{ page.title }}

This small guide explains how you can change the code found in any of the templates. The goal of changing the code is to "blink" another pin than the standard pin `PC13`.

For this guide, we'll look at the template for STM32F0 devices:

```c
#include "STM32F0xx.h"

// Quick and dirty delay
static void delay (unsigned int time) {
    for (unsigned int i = 0; i < time; i++)
        for (volatile unsigned int j = 0; j < 2000; j++);
}

int main (void) {
    // Turn on the GPIOC peripheral
    RCC->AHBENR |= RCC_AHBENR_GPIOCEN;

    // Put pin 13 in general purpose output mode
    GPIOC->MODER |= GPIO_MODER_MODER13_0;

    while (1) {
        // Reset the state of pin 13 to output low
        GPIOC->BSRR = GPIO_BSRR_BR_13;

        delay(500);

        // Set the state of pin 13 to output high
        GPIOC->BSRR = GPIO_BSRR_BS_13;

        delay(500);
    }

    // Return 0 to satisfy compiler
    return 0;
}
```

## Step 0: Determine the new pin

The first step is to decide which pin should blink instead of the standard pin `PC13`.

## Step 1: Change the bank

GPIO pins on STM32 devices are grouped together in banks of 16 pins. Banks are indicated by the letters preceding the pin number. For example, the default pin is pin 13 located in bank C. You can skip this step if you want to "blink" a pin located in bank C. If you want to use a pin located in another bank, you must change some lines.

The following changes are an example of changing from bank C to bank A:

 - Line 11: `RCC->AHBENR |= RCC_AHBENR_GPIOAEN;`
 - Line 14: `GPIOA->MODER |= GPIO_MODER_MODER13_0;`
 - Line 18: `GPIOA->BSRR = GPIO_BSRR_BR_13;`
 - Line 23: `GPIOA->BSRR = GPIO_BSRR_BS_13;`

The changes made here come down to replacing every occurence of `GPIOC` with `GPIOA`.

## Step 2: Change pin number

If the pin number should change, you must also change some lines.

The following changes are an example of changing from pin 13 to pin 9:

 - Line 14: `GPIOC->MODER |= GPIO_MODER_MODER9_0;`
 - Line 18: `GPIOC->BSRR = GPIO_BSRR_BR_9;`
 - Line 23: `GPIOC->BSRR = GPIO_BSRR_BS_9;`

The changes made here come down to replacing every occurence of `13` with `9`.

## Step 3: Compile

At this point you should be able to compile your code. Note that the compiler won't warn you if you've missed a line. Double check your code before flashing your device!
