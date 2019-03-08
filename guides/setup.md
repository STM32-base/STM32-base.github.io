---
title: "Guide: Setup"
---

# {{ page.title }}

Before you can start coding for your STM32 device, you must set up the STM32-base project and some additional software. This guide assumes you are using a machine running a Linux Debian derivative (Debian, Ubuntu, Mint, to name a few). You will probably be able to follow this guide using any other Unix-based system. Some of the steps may be a bit different on other systems, though.

## Step 0: Create a workspace folder

This step is optional, but recommended, especially for unexperienced users. The workspace folder will keep all the STM32-base related stuff together.

Create a folder named `STM32-base`. You can put this folder anywhere you like on your system. I personally like to have a `projects` folder in my home directory (`~` on Linux) to put these kind of projects in.

Then move into this folder and create the following folders:

 - `libraries`: for storing any libraries you might use
 - `projects`: for storing your STM32 projects
 - `templates`: for storing the STM32-base templates
 - `tools`: for storing tools related to the STM32-base toolchain

When you're done creating these folders, the folder structure should look something like this:

```
─┬ STM32
 ├─ libraries
 ├─ projects
 ├─ templates
 └─ tools
```

## Step 1: Install required software

The second step is all about installing any missing software on your system. You can skip any of the substeps if you've already got that particular piece of software installed.

### Install `git`

See [this guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for installation instructions.

### Install `make`

For Debian based systems, use the following command:

```
> sudo apt-get install build-essentials
```

### Install the GNU ARM Embedded Toolchain

> The GNU Arm Embedded toolchains are integrated and validated packages featuring the Arm Embedded GCC compiler, libraries and other GNU tools necessary for bare-metal software development on devices based on the Arm Cortex-M and Cortex-R processors.

_- [ARM](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm)_

The GNU ARM Embedded Toolchain can be installed through `apt-get`, however, this version seems to be outdated as it does not support Cortex-M7 processors. Therefore it is recommended to use download the GNU ARM Embedded Toolchain [directly from ARM, here](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads).

It is recommended to extract the contents of the downloaded archive to the `tools` folder we created earlier. This results in the following folder structure:

```
─┬ STM32
 ├─ libraries
 ├─ projects
 ├─ templates
 └┬ tools
  ├─ arm-none-eabi
  ├─ bin
  ├─ lib
  └─ share
```

### Install the open-source alternative for ST-link

Install the open-source alternative for ST-link. See [their Github page](https://github.com/texane/stlink#installation) for installation instructions. This tool will be used to flash the device with an ST-link, both clones and official ST-links. It also provides a way to debug your device using GDB.

## Step 2: Clone the STM32-base and STM32-base-STM32Cube repositories

Move back to you workspace folder. Clone the [STM32-base](https://github.com/STM32-base/STM32-base) and [STM32-base-STM32Cube](https://github.com/STM32-base/STM32-base-STM32Cube) repositories to your workspace folder.

```
> git clone git@github.com:STM32-base/STM32-base.git
> git clone git@github.com:STM32-base/STM32-base-STM32Cube.git
```

This results in the following folder structure:

```
─┬ STM32
 ├─ libraries
 ├─ projects
 ├─ STM32-base
 ├─ STM32-base-STM32Cube
 ├─ templates
 └┬ tools
  ├─ arm-none-eabi
  ├─ bin
  ├─ lib
  └─ share
```

## Step 3: Clone any of the template repositories

The fourth step is to clone a template repository. A template can be used as starting point for a project based on the STM32-base project. Currently, the following templates are available:

 * [STM32-base-F0-template](https://github.com/STM32-base/STM32-base-F0-template)
 * [STM32-base-F1-template](https://github.com/STM32-base/STM32-base-F1-template)
 * [STM32-base-F2-template](https://github.com/STM32-base/STM32-base-F2-template)
 * [STM32-base-F3-template](https://github.com/STM32-base/STM32-base-F3-template)
 * [STM32-base-F4-template](https://github.com/STM32-base/STM32-base-F4-template)
 * [STM32-base-F7-template](https://github.com/STM32-base/STM32-base-F7-template)

Move into the `templates` folder and clone one or more applicable template(s).

```
> git clone git@github.com:STM32-base/STM32-base-F0-template.git
> git clone git@github.com:STM32-base/STM32-base-F1-template.git
> git clone git@github.com:STM32-base/STM32-base-F2-template.git
> git clone git@github.com:STM32-base/STM32-base-F3-template.git
> git clone git@github.com:STM32-base/STM32-base-F4-template.git
> git clone git@github.com:STM32-base/STM32-base-F7-template.git
```

This results in the following folder structure:

```
─┬ STM32
 ├─ libraries
 ├─ projects
 ├─ STM32-base
 ├┬ templates
 │├─ STM32-base-F0-template
 │├─ STM32-base-F1-template
 │├─ STM32-base-F2-template
 │├─ STM32-base-F3-template
 │├─ STM32-base-F4-template
 │└─ STM32-base-F7-template
 └┬ tools
  ├─ arm-none-eabi
  ├─ bin
  ├─ lib
  └─ share
```

## Step 4: Test your setup

Move into one of the template projects. Create a symbolic link to the STM32-base and STM32-base-STM32Cube repositories in there.

```
> ln -s ../../STM32-base
> ln -s ../../STM32-base-STM32Cube
```

When you've created the symbolic links, you should be able to compile the example code in the template. You can compile this code by simply running the following command:

```
> make
```

If compilation comleted without any errors, you have successfully installed the STM32-base project and one or more of its templates. Congratulations!

But wait, now what? The next thing you might want to do is flashing your device. Read the [Flashing Guide]({{ site.url }}/guides/flashing) to see how that works.
