# Basic Wallet Protocol

This method uses a single seed and redundant backups.

Variable parameters:

* Wallet Host Device
* Number of backups
* Seed Backup Method(s)
* Backup locations

## Steps

1. Create your seed on the chosen wallet host device using your preferred wallet program. Protect the seed with a passphrase. Use an [Offline Master Passphrase](../passphraseMethods/Offline-Master-Passphrase.md) if your device is a hardware wallet or airgapped machine that allows direct entry of the password. If your device is a mobile device, you obviously can't use an offline passphrase, so use a [Basic Master Passphrase](../passphraseMethods/Basic-Master-Passphrase.md), ideally one that you only use on mobile devices and not on desktop machines (especially not windows machines).
2. Back up the seed some number of times using your chosen Seed Backup Method for each backup. Note that the locations of your backups should be as different as possible. For example if you want 2 backups, storing one in a home safe and another in a safety deposit box is more durable than storing each in two separate home safes in the same building.
3. Decide where to store your wallet device. Note that if stored in the safe with a seed, it reduces redundancy (since both the device and the seed can be stolen at the same time).

## Weaknesses

* This method will not make your key resilient to memory loss or death. If you forget the passphrase to your seed, you will not be able to recover funds. If you die, your heirs will not be able to recover funds.
* This method potentially exposes the seed once per backup, which could be a problem if you chose a passphrase that isn't strong enough.
* If the device you're using or the software it runs was built by or compromised by an attacker, that attacker could steal your funds.

## Example

1. Create a seed on a Trezor Model T with a 25th word Offline Master Passphrase.
2. Create two copies of the 24-word seed on two Blockplate 2.0s, Store one in a locked home safe where you keep both keys on your keychain, and store the other in a safe deposit box.
3. Also store the Trezor in the home safe when not in use.

This results in a setup with a single-redundancy, since there are only two locations that contain copies of your wallet seed.