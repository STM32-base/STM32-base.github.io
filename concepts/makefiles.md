---
title: "Makefiles"
---

# {{ page.title }}

STM32-base uses makefiles to automate the process of compiling C and C++ code. Makefiles are processed by a program called `make`. The programs that `make` will run are defined by so-called rules. These rules are defined in the makefiles.

The programs `make` runs are not different from those one could run by hand in a terminal window. However, due to the large amount of arguments that need to be passed to [GNU GCC](https://gcc.gnu.org/), it is less error prone to automate this process.

In addition to being less error prone, `make` is also able to detect changes made to (source) files. This enables `make` to only update those files that have been changed. To learn how `make` works, refer to the official [GNU `make` manual](https://www.gnu.org/software/make/manual/html_node/index.html). For more general information on `make`, visit the [GNU `make` website](https://www.gnu.org/software/make/).

## Common makefile

The `common.mk` makefile located in the `make` directory in the [STM32-base repository](https://github.com/STM32-base/STM32-base) contains all these so-called rules. This article will not explain how the STM32-base makefiles work line-by-line. It will, however, highlight some of the important parts of these makefiles and link to related documentation if appropriate.

### Variables

Most lines in the `common.mk` makefile have something to do with [variables](https://www.gnu.org/software/make/manual/html_node/Using-Variables.html). Most variables used in this makefile are also [set](https://www.gnu.org/software/make/manual/html_node/Setting.html) in this makefile. Some variables are set with the `=` operator. This operator just sets the variable to the given value.

Variables set with the `?=` operator are set, only if that variable has not yet been set at that point. This allows for setting these variables in another makefile. STM32-base uses this way of setting variables to allow the used to overwrite the value of these variables in their projects makefile. Refer to the [makefile options cheatsheet]({{ site.url }}/cheatsheets/makefile-options) to see which variabels can be set in a project makefile.

To [append](https://www.gnu.org/software/make/manual/html_node/Appending.html) values to variables, the `+=` operator is used. This operator is mostly used to append all arguments for GCC to single variable.

### Conditionals and including other makefiles

[Conditionals](https://www.gnu.org/software/make/manual/html_node/Conditionals.html) are used throughout the `common.mk` makefile. Conditionals can, for example, be used to conditionally set or append values to variables or to [include](https://www.gnu.org/software/make/manual/html_node/Include.html) other makefiles. For example, the series-specific makefiles are included based on the name of the device used.

### Rules

The rest of the makefile is made up by [rules](https://www.gnu.org/software/make/manual/html_node/Rule-Introduction.html). Rules tell `make` which files should be updated, how the files must be updated and in what order this must happen. Rules follow the following syntax:

```
targets : normal-prerequisites | order-only-prerequisites
    recipe
```

The target(s) tell `make` which file(s) should be updated. The [prerequisite(s)](https://www.gnu.org/software/make/manual/html_node/Prerequisite-Types.html) tell `make` which files will trigger an update of the target(s). The prerequisite(s) also determine the order in which the recipes will be invoked. The order only prerequisites do not force the target to be updated. The order only prerequisites are used for creating the `obj` and `bin` folders in a project.

The recipies in the `common.mk` makefile use some [automatic variables](https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html). The two automatic variables used here are the `$@` to get the filename(s) of the target(s) and the `$^` to get the name(s) of the prerequisite(s).

## Series-specific makefiles

In addition to the `common.mk` makefile, the STM32-base repository contains some additional makefiles. These makefiles are series-specific and are located in the subdirectories of the `make` directory. These makefiles are responsible for the mapping of a device name to a value that can be used by the official CMSIS. In addition to the mapping, these makefiles set some additional variables: `SERIES_CPU`, `SERIES_FOLDER`, and `MAPPED_DEVICE`.

### SERIES_CPU

This variable contains the name of the specific Cortex-M core that is present in the chosen series of microcontrollers. This value is passed directly to the compiler.

### SERIES_FOLDER

This variable contains the name of the series-specific folder. This variable is used to include the right startup code, linker scripts, and when used, CMSIS and HAL files.

### MAPPED_DEVICE

This variable contains the mapped device name. This name is used the include the right startup code and linker script. It is also passed to GCC as macro with the `-D` argument. For a complete overview of the device name mapping, see the [device name mapping page]({{ site.url }}/cheatsheets/device-name-mapping).
