# Hardware Wallet

A hardware wallet is a security device that stores and protects a seed and derived private keys from both physical and especially digital attacks. Derived private keys never leave the device, and the seed never leaves the device via a digital connection. A seed only leaves the device in some airgapped form, usually in the form of text displayed on a screen on the device, which happens when you first create the wallet so that you can back up the seed. At least one hardware wallet uses a microSD card as a backup method.

A hardware wallet should guarantee that your seed or private keys cannot be stolen digitally from the device. Also, a hardware wallet should make it very difficult to extract this information from the device itself using physical techniques (eg via a Scanning Electron Microscope).

Using a hardware wallet is far more secure than a wallet created on a desktop computer or even a mobile phone. It is the defacto standard for storing a wallet seed for regular use.

## PINs and Passphrases

It's usually very important to protect any generated private keys for any wallet (not just a hardware wallet) behind a passphrase. On a hardware wallet, this ensures that even if the seed backup is stolen or the seed is stolen from the device via physical methods, your wallet is still very difficult to access (because brute forcing a strong passphrase is difficult and/or expensive).

Hardware wallets often require a PIN to use the device. Users should be aware that a PIN is not a replacement for a passphrase and a PIN will not protect your seed backup in any way.

It is ideal for you to be able to input any passphrases or pins via an input method that is part of the hardware wallet itself. This is because you don't want to expose your passphrases or pins to any machine that might steal it for malicious use - especially not online machines that could send that information anywhere.

The Trezor One has a PIN input method that used a randomized keypad input via your desktop computer or mobile phone. This is secure, if slightly harder to use than direct entry. However, the passphrase used was input directly via the keyboard, which is substantially less secure than either the randomized keypad or direct entry on the hardware device (like the Trezor T supports).

## Purchasing

It's important to only purchase security hardware like a hardware wallet directly from the manufacturer. The more organizations involved in manufacturing and shipping it to you, the more organizations you're putting your trust in.

## Open Source

Open source hardware is a rather new phenonmenon, but it has all [the same benefits](https://www.channelfutures.com/open-source/open-source-hardware-what-it-means-and-why-it-matters) of open source software. The primary benefit is that there are more eyes on the design and therefore more people that can find and fix bugs and other issues. In the long run, the quality of open source security products will be higher.

## Weaknesses

* Hardware wallets are manufactured by a 3rd party, including the designers, component producers, product assembers, and shippers. Any of these 3rd parties could potentially add malicious things to the device.
* Perfect physical security is unattainable. There is no way to 100% prevent physically extracting information stored on the device (which is why it's important to use a passphrase, which isn't stored on device for longer than a few milliseconds after it has been input)