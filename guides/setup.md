---
title: "Setting up STM32-base"
---

# {{ page.title }}

This guide will help you set up STM32-base on your system. This guide assumes you are using an Unix based system. All tools STM32-base depends on should be available for most major Unix systems.

## Step 0: Create a workspace directory

This first step is optional, but recommended for beginners. Create a directory named `STM32-base`. You can create this directory anywhere you like. The rest guide assumes it is located at `~/Projects/STM32-base`.

```
mkdir STM32-base
```

Now move into the `STM32-base` directory. Create the following directories: `libraries`,
`projects`, `templates`, and `tools`.

```
cd STM32-base
mkdir libraries
mkdir projects
mkdir templates
mkdir tools
```

This should result in this directory structure:

```
─┬ STM32-base
 ├─ libraries
 ├─ projects
 ├─ templates
 └─ tools
```

## Step 1: Install required software

The next thing to do is installing any missing software on your system. You can skip the substeps for software that is already installed on your system.

### Install `git`

Check if you have git installed on your system by running the following command:

```
git --version
```

If git is not installed, follow [this guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install `git` on your system.

### Install `make`

Check if you have `make` installed on your system by running the following command:

```
make --version
```

If `make` is not installed, install it. To install `make` on a Debian, Ubuntu, Linux Mint, or openSUSE system you can run the following command:

```
sudo apt-get install make
```

For Fedora systems, run:

```
sudo yum install make
```

For macOS systems, `make` is included in the XCode command line developer tools. To install these tools, run:

```
xcode-select --install
```

### Download the GNU ARM Embedded Toolchain

> The GNU Arm Embedded toolchains are integrated and validated packages featuring the Arm Embedded GCC compiler, libraries and other GNU tools necessary for bare-metal software development on devices based on the Arm Cortex-M and Cortex-R processors.

_- [ARM](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm)_

You can install the GNU Arm Embedded Toolchain using your systems' package manager in many cases. Although this is the easiest way to install the toolchain, you might end up with an outdated version. It is therefore recommended to download the GNU Arm Embedded Toolchain [directly from Arm](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads).

Extract the downloaded archive and copy its contents to the `tools` directory.

```
cd ~/Downloads
tar xjf gcc-arm-none-eabi-8-2018-q4-major-linux.tar.bz2
mv gcc-arm-none-eabi-8-2018-q4-major-linux/* ~/projects/STM32/tools
```

This should result in this directory structure:

```
─┬ STM32
 ├─ libraries
 ├─ projects
 ├─ templates
 └┬ tools
  ├┬ arm-none-eabi
  │└─ ...
  ├┬ bin
  │└─ ...
  ├┬ lib
  │└─ ...
  └┬ share
   └─ ...
```

### Install open-source ST-Link Tools

Install the open-source alternative for ST-Link Tools. Refer to the [stlink Github page](https://github.com/texane/stlink#installation) for installation instructions.

## Step 2: Clone the STM32-base and STM32-base-STM32Cube repositories

Clone the [STM32-base](https://github.com/STM32-base/STM32-base) and the [STM32-base-STM32Cube](https://github.com/STM32-base/STM32-base-STM32Cube) repositories in the `STM32-base` directory.

```
cd ~/projects/STM32-base
git clone git@github.com:STM32-base/STM32-base.git
git clone git@github.com:STM32-base/STM32-base-STM32Cube.git
```

This should result in this directory structure:

```
─┬ STM32
 ├─ libraries
 ├─ projects
 ├┬ STM32-base
 │└─ ...
 ├┬ STM32-base-STM32Cube
 │└─ ...
 ├─ templates
 └┬ tools
  ├─ arm-none-eabi
  ├─ bin
  ├─ lib
  └─ share
```

## Step 3: Clone the template repositories

Clone (one of) the template repositories. A template can be used as starting point for a project based on STM32-base. The following templates are currently available:

 * [STM32-base-F0-template](https://github.com/STM32-base/STM32-base-F0-template)
 * [STM32-base-F1-template](https://github.com/STM32-base/STM32-base-F1-template)
 * [STM32-base-F2-template](https://github.com/STM32-base/STM32-base-F2-template)
 * [STM32-base-F3-template](https://github.com/STM32-base/STM32-base-F3-template)
 * [STM32-base-F4-template](https://github.com/STM32-base/STM32-base-F4-template)
 * [STM32-base-F7-template](https://github.com/STM32-base/STM32-base-F7-template)

Clone (one of) the template repositories inside the `templates` directory:

```
cd templates
git clone git@github.com:STM32-base/STM32-base-F0-template.git
git clone git@github.com:STM32-base/STM32-base-F1-template.git
git clone git@github.com:STM32-base/STM32-base-F2-template.git
git clone git@github.com:STM32-base/STM32-base-F3-template.git
git clone git@github.com:STM32-base/STM32-base-F4-template.git
git clone git@github.com:STM32-base/STM32-base-F7-template.git
```

This should result in this directory structure:

```
─┬ STM32
 ├─ libraries
 ├─ projects
 ├─ STM32-base
 ├┬ templates
 │├┬ STM32-base-F0-template
 ││└─ ...
 │├┬ STM32-base-F1-template
 ││└─ ...
 │├┬ STM32-base-F2-template
 ││└─ ...
 │├┬ STM32-base-F3-template
 ││└─ ...
 │├┬ STM32-base-F4-template
 ││└─ ...
 │└┬ STM32-base-F7-template
 │ └─ ...
 └┬ tools
  ├─ arm-none-eabi
  ├─ bin
  ├─ lib
  └─ share
```

## Step 4: Test the setup

You can use a template project to test your STM32-base setup. Before you do that, you must create a symbolic link to both the `STM32-base` and `STM32-base-STM32Cube` directories.

```
cd STM32-base-F1-template
ln -s ../../STM32-base
ln -s ../../STM32-base-STM32Cube
```

You should now be able to compile the example code in the template. You can do this by simply running `make`.

```
make
```

Congratulations! You have successfully set up STM32-base on your system.
