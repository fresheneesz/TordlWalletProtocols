# Offline Master Passphrase

Create a password in the same way specified in [Basic Master Passphrase](Basic-Master-Passphrase.md) with the following additional constraint:

* Make sure you *only* input the passphrase on offline machines. For example, you could input it directly on a hardware wallet's keyboard, but NEVER on your online laptop's keyboard. Note that for a device to be "offline", once you use the password on it, it must never go online again anytime in the future. In order for you to be truely sure your password won't get to an online machine tho, you really need to make sure that device is air-gapped, which is a tighter constraint. Whether you allow your device to communicate with other devices via something like a USB drive should depend on your assesment of the risks involved.

## Rationale

If you never use the passphrase on any online machine, the passphrase has no chance of being stolen via malicious software. The machine must never go online again, so that you can be sure the password wasn't recored for later transmission. Direct entry on a hardware wallet is ok, even for hardware wallets that connect via USB (and so aren't strictly airgapped) because its specifically built to separate the passphrase on an HSM from the rest of the device, including the USB functionality.

## Weaknesses

* One weakness over a Basic Master Passphrase is that the use of the password is obviously limited to only offline devices.