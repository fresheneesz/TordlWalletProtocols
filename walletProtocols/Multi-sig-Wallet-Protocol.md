# Multi-sig Wallet Protocol

This method uses a multiple seeds and redundant backups.

Variable parameters:

* Wallet Host Device
* Number of seeds
* Number of backups
* Seed Backup Method(s)
* Backup locations

## Steps


1. Choose your wallet host devices. These devices should be as different as possible. For example, don't use two hardware wallets manufactured by the same company.
2. Create your seed on the chosen wallet host devices using your preferred wallet program. Protect the seed with a passphrase. Use an [Offline Master Passphrase](../passphraseMethods/Offline-Master-Passphrase.md) if your device is a hardware wallet or airgapped machine that allows direct entry of the password. If your device is a mobile device, you obviously can't use an offline passphrase, so use a [Basic Master Passphrase](../passphraseMethods/Basic-Master-Passphrase.md), ideally one that you only use on mobile devices and not on desktop machines (especially not windows machines).
3. Back up the seed some number of times using your chosen Seed Backup Method for each backup. Note that the locations of your backups should be as different as possible. For example if you want 2 backups, storing one in a home safe and another in a safety deposit box is more durable than storing each in two separate home safes in the same building.
4. Decide where to store your wallet devices. Note that if stored in the safe with a seed, it reduces redundancy (since both the device and the seed can be stolen at the same time).

## Weaknesses

* This method will not make your key resilient to memory loss or death. If you forget the passphrase to your seed, you will not be able to recover funds. If you die, your heirs will not be able to recover funds.
* This method potentially exposes the seeds once per backup, which could be a problem if you chose a passphrase that isn't strong enough.

## Example

1. Create a seed with a 25th word Offline Master Passphrase on:
  * A Trezor Model T
  * A Coldcard
  * A smartphone
2. Create two copies of each 24-word seed on Blockplate 2.0. Store one (for each seed) in a locked home safe where you keep both keys on your keychain, and store the other (for each seed) in a safe deposit box.
3. Create a 3-of-3 multi-sig wallet [with Electrum](https://bitcoinelectrum.com/creating-a-multisig-wallet/) using those three devices.
4. Store the Trezor and Coldcard in the home safe when not in use.

This results in a setup with a single-redundancy, since at least one seed has only two locations that contain it (home safe and safe deposit box). It also protects you from a malicious hardware wallet, since the attacker would have had to compromise your Trezor, your Coldcard, and your mobile phone.


