---
title: "Guide: Flashing"
---

# {{ page.title }}

When your code successfully compiles, you need a way of "uploading" the compiled code to your device. This process is called flashing. This guide assumes you've already set up the STM32-base project and you're able to successfully compile the code found in any one of the templates. If not, please see the [Setup Guide]({{ site.url }}/guides/setup).

## Checklist

Before flashing code on your device, there are some things to be checked first. The device name should be set properly, you might need to change the "blinking" pin, or you might even need to connect an LED. Refer to the following sub-sections for more information on the things to check before flashing your device.

### Device name

Each template contains a make file located at the root of the template and is called `Makefile`. This make file contains a variable called `DEVICE`. This variable should contain the name of the device you want to compile your code for. You should format the name of your device like this: `STM32____x_`, where the "_" should be replaced by characters from the actual name (uppercase!) and the "x" is fixed. There are some exceptions to this naming scheme for STM32F4 devices, see the [Device name mapping page]({{ site.url }}/cheatsheets/device-name-mapping) for more information.

### Flashing tool

There are different interfaces (serial, I2C, SPI, SWD, etc.) and programs you can use to flash code to your device. If you want to use [stm32flash](https://github.com/stm32duino/stm32flash), in your makefile set the variables`FLASHING_TOOL` to 'stm32flash' and `FLASHING_SERIAL_PORT` to the name of the serial port to which your device is connected.

### Connect an LED

This step is optional. You should not have to do this if your board already has an LED built-in.

If you connect an external LED to your development board, connect:

 - the anode (+ side, long leg) to the 3.3V source of your development board;
 - the cathode (- side, short leg) to a resistor (100Ω should be fine);
 - the other side of the resistor to a GPIO port of your choice.

### Change the GPIO pin

The templates assume you've got a LED connected to pin `PC13` of your device. This works for the famous [Blue Pill]({{ site.url }}/boards/STM32F103C8T6-Blue-Pill), but there are a lot more [boards]({{ site.url }}/boards) out there. If your development board has a built-in LED connected to another pin or you have connected an LED yourself (to another pin), you must change the pin being "blinked". Refer to the [Changing template code guide]({{ site.url }}/guides/changing-template-code) for more information on how to do that.

### Connecting your device

You must have your device connected to a debugger. For more information on how to do this, refer to the [Connecting your debugger guide]({{ site.url }}/guides/connecting-your-debugger).

### Put your device in programming mode

Most development boards come with jumpers or (DIP-)switches to set the BOOT-mode. You should set BOOT0 to "1" and BOOT1 (if present) to "0". Then you should reset your device. At this point, your device waits for the programmer to do somthing.

## Flashing

Before flashing your device, make sure to have done all the things on this checklist:

 - Make sure to change the `DEVICE` variable value in the make file to the name of your device;
 - If you are using `stm32flash`, make sure to set the `FLASHING_TOOL` variable to that name and `FLASHING_SERIAL_PORT` to the name of your serial port;
 - Make sure to have changed the pin to "blink" if the LED on your development board is not connected to pin `PC13`;
 - Optionally, make sure to connect an LED to your development board if your development board does not have one built-in;
 - Make sure that you have properly connected the debugger to your development board;
 - Make sure that your device is in programming mode.

If you've checked all these things, flashing is really simple and straight forward. Just run:

```
> make flash
```

Now your device should be flashed with the code you've just compiled.
