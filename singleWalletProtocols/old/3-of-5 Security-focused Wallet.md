# 3 of 5 Security-focused Multisig Wallet

Good for medium to large amounts (> $1000).

## Passphrases

* Basic Master Passphrase
* Offline Master Passphrase

## Devices and seeds

* Mobile Wallet - Mobile Seed
* HW Wallet 1 - HW Seed 1
* HW Wallet 2 - HW Seed 2

## Storage locations

* Safe deposit box 1: HW Seed 1, HW Wallet 2
* Safe deposit box 2: HW Seed 2, HW Wallet 1
* Home safe: Mobile Seed
* On your person: Mobile Wallet

## Creation

* Use the [Multisig Wallet Protocol](walletProtocols/Multisig-Wallet-Protocol.md).
* Devices and Keys Required for **normal use** (3 of 5):
  * Mobile Wallet
  * HW Wallet 1
  * HW Wallet 1 + Offline Master Passphrase
  * HW Wallet 2
  * HW Wallet 2 + Offline Master Passphrase
* **Recovery with passphrase** (3 of 5):
  * Mobile Seed
  * HW Seed 1
  * HW Seed 1 + Offline Master Passphrase
  * HW Seed 2
  * HW Seed 2 + Offline Master Passphrase
* **Recovery (no passphrase)**:
  * Mobile Seed + HW Seed 1 + HW Seed 2

## [Properties](../misc/propertiesKey.md)

* Redundancy (with passphrase): **double**
* Redundancy (no passphrase): **single**
* Security (passphrase not compromised): **triple**
* Security (passphrase compromised): **double**
* Resilient to the [$5 wrench attack](https://xkcd.com/538/).

## Rationale

* Each location only has one seed so all three locations have to be compromised to steal from the wallet.
* The hardware wallets and their seeds are stored in the safe deposit boxes and not in the home safe so that multiple locations must be visited in order to use funds, even with the passphrase. This makes it significantly harder to successfuly execute the $5 wrench attack.
* Normal use of the wallet requires only 3 of 5 keys because that increases the with-passphrase redundancy to double redundancy (from single if all keys were required).

