---
title: "Getting Started with PlatformIO"
---

# {{ page.title }}


Welcome to an introductory guide on taking the first steps with programming the STM32 microcontrollers within the PlatformIO ecosystem. The goal of this tutorial is to demonstrate how simple it is to set up PlatformIO with Visual Studio Code and use it to compile, upload, and debug STM32Cube-based application on the `STM32 Nucleo-F401RE` board.

## What is PlatformIO?

[PlatformIO](https://platformio.org/?utm_source=stm32-base) is a professional collaborative platform for embedded development that includes lots of instruments for the most common development tasks. It has out-of-the-box support for STM32 microcontrollers and allows working with low-level libraries like CMSIS, STM32Cube, and LibOpenCM3 as well as with popular high-level frameworks like Arduino, Mbed, or Zephyr without changing your usual development environment.

A detailed overview of the PlatformIO ecosystem and its philosophy can be found in [the official documentation](https://docs.platformio.org/en/latest/what-is-platformio.html).

## Installation

Before diving into the development process, we need to install some required software. In this tutorial, we will use Visual Studio Code as the editor. The most up-to-date and detailed installation instructions can be found in the official [PlatformIO IDE for VSCode documentation](https://docs.platformio.org/en/latest/integration/ide/vscode.html#installation).

Once the PlatformIO IDE is ready, we can install the [ST STM32 development platform](https://docs.platformio.org/en/latest/platforms/ststm32.html). This way PlatformIO will do all the heavy lifting for us by installing everything that is needed (toolchain, framework, etc) automatically. The easiest way to install any development platform is the PlatformIO Home App:

![Getting Started with PlatformIO Installation]({{ site.url }}/assets/img/guides/platformio/platformio-install-1.png)
{: style="text-align: center;"}

When all installation steps are completed, a dialog window will pop up to tell you that the `ststm32` platform has been installed.

## Creating a project

In the first step, we need to create a new project using the same PlatformIO Home App:

![Getting Started with PlatformIO Home]({{ site.url }}/assets/img/guides/platformio/setting-up-project-1.png)
{: style="text-align: center;"}


In the next step, we need to select `ST Nucleo-F401RE` as the development board, `STM32Cube` as the framework, and a path to the project location (or use the default one):

![Getting Started with PlatformIO Project Init]({{ site.url }}/assets/img/guides/platformio/setting-up-project-2.png)
{: style="text-align: center;"}

##### Please note:

Processing the selected project may take a considerable amount of time (PlatformIO will download and install all required packages) and after these steps, we have a fully configured project that is ready for developing code with the STM32Cube framework.

Now we can add some actual code to the project. Firstly, we create a new file `main.c` in the `src` folder. Right click on the src in the project window:

![Getting Started with PlatformIO New File]({{ site.url }}/assets/img/guides/platformio/setting-up-project-3.png)
{: style="text-align: center;"}

with the following contents:

```c
#include "stm32f4xx_hal.h"

#define LED_PIN                                GPIO_PIN_5
#define LED_GPIO_PORT                          GPIOA
#define LED_GPIO_CLK_ENABLE()                  __HAL_RCC_GPIOA_CLK_ENABLE()

void LED_Init();

int main(void) {
  HAL_Init();
  LED_Init();

  while (1)
  {
    HAL_GPIO_TogglePin(LED_GPIO_PORT, LED_PIN);
    HAL_Delay(1000);
  }
}

void LED_Init() {
  LED_GPIO_CLK_ENABLE();
  GPIO_InitTypeDef GPIO_InitStruct;
  GPIO_InitStruct.Pin = LED_PIN;
  GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
  GPIO_InitStruct.Pull = GPIO_PULLUP;
  GPIO_InitStruct.Speed = GPIO_SPEED_HIGH;
  HAL_GPIO_Init(LED_GPIO_PORT, &GPIO_InitStruct);
}

void SysTick_Handler(void) {
  HAL_IncTick();
}
```

After this step, we have a basic project that is ready for compiling and uploading.

## Compiling and Uploading the Firmware

Now we can build the project. To compile the final firmware we can use the following options: Build option on the `Project Tasks` menu, Build button on PlatformIO Toolbar, using Command Palette `View: Command Palette > PlatformIO: Build`, using the Task Menu `Tasks: Run Task... > PlatformIO: Build` or via the `cmd-alt-b / ctrl-alt-b` hotkeys:

![Getting Started with PlatformIO Build]({{ site.url }}/assets/img/guides/platformio/setting-up-project-4.png)
{: style="text-align: center;"}

If everything went well, we should see the successful result in the terminal window:

![Getting Started with PlatformIO]({{ site.url }}/assets/img/guides/platformio/setting-up-project-5.png)
{: style="text-align: center;"}

If you see errors, please check your typing carefully and try again.

To upload the firmware to the board we can use following options: Upload option on the `Project Tasks` menu, Upload button on PlatformIO Toolbar, using Command Palette `View: Command Palette > PlatformIO: Upload`, using Task Menu `Tasks: Run Task... > PlatformIO: Upload` or via the `cmd-alt-u / ctrl-alt-u` hotkeys:

![Getting Started with PlatformIO Upload]({{ site.url }}/assets/img/guides/platformio/setting-up-project-6.png)
{: style="text-align: center;"}

After successful uploading, the green LED2 should start blinking.

## Debugging the Firmware

PlatformIO offers the easiest way to debug your applications. To start a debugging session you can use the `Start Debugging` option in the `PlatformIO Quick Access` menu, `Debug: Start debugging` from the top menu, or the hotkey button `F5`:

![Getting Started with PlatformIO Debug Initialization]({{ site.url }}/assets/img/guides/platformio/setting-up-project-7.png)
{: style="text-align: center;"}

We need to wait some time while PlatformIO is initializing a debug session and when the first line after the `main` function is highlighted we are ready to debug:

![Getting Started with PlatformIO Debug Session]({{ site.url }}/assets/img/guides/platformio/setting-up-project-8.png)
{: style="text-align: center;"}

We can walk through the code using control buttons, set breakpoints, see peripheral registers, add variables to the `Watch` window:

![Getting Started with PlatformIO Debug Features]({{ site.url }}/assets/img/guides/platformio/setting-up-project-9.png)
{: style="text-align: center;"}

## Conclusion

Now we have a project template for the `STM32 Nucleo-F401RE` board that we can use as a boilerplate for the next projects.

## Next steps

Here are some useful links for exploring the PlatformIO ecosystem:

- Try [other frameworks](https://docs.platformio.org/en/latest/platforms/ststm32.html#frameworks) that can be used with the STM32 microcontrollers
- Learn more about [integrations with other IDEs/Text Editors](https://docs.platformio.org/en/latest/integration/ide/index.html)
- Check out additional [tutorials](https://docs.platformio.org/en/latest/platforms/ststm32.html#tutorials) and [examples](https://github.com/platformio/platform-ststm32/tree/develop/examples)
- Get help from the [PlatformIO community](https://community.platformio.org/)
