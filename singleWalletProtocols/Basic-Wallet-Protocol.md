# Basic Wallet Protocol

This method uses a single seed and redundant backups.

## Variable parameters

* `Wallet Host Device`
* [`Seed Backup Method`](../backupMethods)
* [`Storage Configuration`](../misc/storage-config.md)

## Steps

1. Create your seed on the chosen `Wallet Host Device` using your preferred wallet program. Protect the seed with a passphrase. Use an [Offline Master Passphrase](../passphraseMethods/Offline-Master-Passphrase.md) if your device is a hardware wallet or air-gapped machine that allows direct entry of the password. If your device is a mobile device, you obviously can't use an offline passphrase, so use a [Basic Master Passphrase](../passphraseMethods/Basic-Master-Passphrase.md), ideally one that you only use on mobile devices and not on desktop machines (especially not windows machines).
2. Back up the seed some number of times using your chosen `Seed Backup Method` for each backup.
3. Decide where to store your wallet device. Note that if stored in the safe with a seed, it reduces redundancy (since both the device and the seed can be stolen at the same time).

## Example

1. Create a seed on a Trezor Model T with a 25th word Offline Master Passphrase.
2. Create two copies of the 24-word seed on two Blockplate 2.0s, Store one in a locked home safe where you keep both keys on your keychain, and store the other in a safe deposit box.
3. Also store the Trezor in the home safe when not in use.

This results in a setup with a single-redundancy, since there are only two locations that contain copies of your wallet seed.