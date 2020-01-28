# 3-of-5 Security-focused Multisig Wallet

[3-of-5 Multisig Wallet](3-of-5 Wallet.md) with arguments:

## Storage Configuration

* Safe deposit box 1: HW Seed 1, HW Wallet 2
* Safe deposit box 2: HW Seed 2, HW Wallet 1
* Home safe: Mobile Seed
* On your person: Mobile Wallet

## [Properties](../misc/propertiesKey.md)

* Redundancy (with passphrase): **single**
* Redundancy (no passphrase): **none**
* Security (passphrase not compromised): **triple**
* Security (passphrase compromised): **double**
* Resilient to the [$5 wrench attack](https://xkcd.com/538/).

## Rationale

* Each location only has one seed so all three locations have to be compromised to steal from the wallet.
* The hardware wallets and their seeds are stored in the safe deposit boxes and not in the home safe so that multiple locations must be visited in order to use funds, even with the passphrase. This makes it significantly harder to successfuly execute the $5 wrench attack.

