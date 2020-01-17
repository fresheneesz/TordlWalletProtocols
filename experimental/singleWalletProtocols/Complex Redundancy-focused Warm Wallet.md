# Complex Redundancy-focused Multisig Warm Wallet

[Three-Seed Complex Multisig Warm Wallet](Complex Warm Wallet.md) with arguments:

## Storage Configuration

* Safe deposit box 1: HW Seed 1, Mobile Seed
* Safe deposit box 2: HW Seed 2, Mobile Seed
* Home safe: HW Wallet 1, HW Wallet 2, HW Seed 1, HW Seed 2
* On your person: Mobile Wallet

# Properties

* Redundancy (with passphrase): **double**
* Redundancy (no passphrase): **single**
* Security (passphrase not compromised): **single**
* Security (passphrase compromised): **single**

## Rationale

* Each backup storage location has two seeds in order to boost redundancy (at the expense of security).
* 