---
title: Makefile options
---

# {{ page.title }}

By default, the STM32-base project requires very little configuration. There are only two required variables that should be set in a project's makefile. In addition to these two variables, there are many more variables that can be set to configure the way STM32-base works.

This page provides a list of all variables that can be set in a project's makefile to configure STM32-base.

## Required variables

### DEVICE - _required_

The `DEVICE` variable must be set so that the main makefile can figure out which files should be included. For a list of possible values, see the [device name mapping cheatsheet]({{ site.url }}/cheatsheets/device-name-mapping).

### FLASH - _required_

The `FLASH` variable must be set to define where in the FLASH memory the binary should be flashed. This value is usually set to `0x08000000`.

## Configurable paths and folders

### STM32_BASE_PATH

_Defaults to: `./STM32-base`_

The `STM32_BASE` variable can be set to define a non-standard location for the STM32-base repository folder.

### STM32_CUBE_PATH

_Defaults to: `./STM32-base-STM32Cube`_

The `STM32_CUBE` variable can be set to define a non-standard location for the STM32-base-STM32Cube repository folder.

### TOOLCHAIN_PATH

_Defaults to: `../../tools/bin`_

The `TOOLCHAIN_PATH` variable can be set to define a non-standard location for the toolchain. With setting this variable, it is also possible to use different versions of the toolchain for different projects. By default, this variable is set to use the tools located at the in the setup guide recommended place. To use the globally installed tools, set the `TOOLCHAIN_PATH` to undefined in your projects makefile like this: `TOOLCHAIN_PATH =`.

### BIN_FOLDER

_Defaults to: `./bin`_

The `BIN_FOLDER` variable can be set to specify another target folder for the compiled binary.

### OBJ_FOLDER

_Defaults to: `./obj`_

The `OBJ_FOLDER` variable can be set to specify another target folder for the object files.

### SRC_FOLDER

_Defaults to: `./src`_

The `SRC_FOLDER` variable can be set to specify another target folder for the source files to include.

### INC_FOLDER

_Defaults to: `./inc`_

The `INC_FOLDER` variable can be set to specify another target folder for the include (header) files.

### ELF_FILE_NAME

_Defaults to: `stm32_executable.elf`_

The `ELF_FILE_NAME` variable can be set to specify another name for the ELF output file. Note that the name also includes the file extention.

### BIN_FILE_NAME

_Defaults to: `stm32_bin_image.bin`_

The `BIN_FILE_NAME` variable can be set to specify another name for the binary output file. Note that the name also includes the file extention.

### OBJ_FILE_NAME

_Defaults to: `startup_$(MAPPED_DEVICE).o`_

The `OBJ_FILE_NAME` variable can be set to specify another name for the startup object file. Note that the name also includes the file extention.

## Compiler flags

### GCC_FLAGS

The `GCC_FLAGS` variable can be used to pass arguments to the `arm-none-eabi-gcc` call. For more information on the default value of this variable, see the [`common.mk` file](https://github.com/STM32-base/STM32-base/blob/master/make/common.mk).

### SRC

_Defaults to: `$(SRC_FOLDER)/*.c`_

Other source locations can be added to this variable in addition to the default value.

## CMSIS and HAL support

### USE_ST_CMSIS

_Defaults to: undefined_

The `USE_ST_CMSIS` variable should be set when using the CMSIS located in the STM32-base-STM32Cube repository.

### USE_ST_HAL

_Defaults to: undefined_

The `USE_ST_HAL` variable should be set when using the HAL located in the STM32-base-STM32Cube repository. When this variable is set, the makefile act like the `USE_ST_CMSIS` is also set.

