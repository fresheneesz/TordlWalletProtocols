# 3-of-5 Redundancy-focused Multisig Wallet

[3-of-5 Multisig Wallet](3-of-5 Wallet.md) with arguments:

## Storage Configuration

* Safe deposit box 1: Mobile Seed, HW Seed 1
* Safe deposit box 2: Mobile Seed, HW Seed 2
* Home safe: HW Seed 1, HW Seed 2, HW Wallet 1, HW Wallet 2
* On your person: Mobile Wallet

## [Properties](../misc/propertiesKey.md)

* Redundancy (with passphrase): **double**
* Redundancy (no passphrase): **single**
* Security (passphrase not compromised): **double**
* Security (passphrase compromised): **single**

## Rationale

* No location has enough seeds to lead to theft of the wallet if any single location is compromised.
* The mobile wallet seed is stored in both safe deposit boxes, because if it was stored in the home safe, the HW Wallets couldn't be stored there without making that a potential single point of failure if the seed was able to be extracted from one of the hardware wallets.
