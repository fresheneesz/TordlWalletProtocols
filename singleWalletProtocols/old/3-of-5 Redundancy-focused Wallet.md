# 3 of 5 Redundancy-focused Multisig Wallet

Good for medium to large amounts (> $1000).

## Passphrases

* Basic Master Passphrase
* Offline Master Passphrase

## Devices and seeds

* Mobile Wallet - Mobile Seed
* HW Wallet 1 - HW Seed 1
* HW Wallet 2 - HW Seed 2

## Storage locations

* Safe deposit box 1: Mobile Seed, HW Seed 1
* Safe deposit box 2: Mobile Seed, HW Seed 2
* Home safe: HW Seed 1, HW Seed 2, HW Wallet 1, HW Wallet 2
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

* Redundancy (with passphrase): **triple**
* Redundancy (no passphrase): **double**
* Security (passphrase not compromised): **double**
* Security (passphrase compromised): **single**

## Rationale

* No location has enough seeds to lead to theft of the wallet if any single location is compromised.
* The mobile wallet seed is stored in both safe deposit boxes, because if it was stored in the home safe, the HW Wallets couldn't be stored there without making that a potential single point of failure if the seed was able to be extracted from one of the hardware wallets.
* Normal use of the wallet requires only 3 of 5 keys because that increases the with-passphrase redundancy to triple redundancy (from double if all keys were required).

