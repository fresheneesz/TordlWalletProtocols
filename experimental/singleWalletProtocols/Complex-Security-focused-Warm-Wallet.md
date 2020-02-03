# Complex Security-focused Multisig Hot Wallet

[Complex Multisig Warm Wallet](Complex Warm Wallet.md) with arguments:

## Storage Configuration

* Safe deposit box 1: HW Seed 1
* Safe deposit box 2: HW Seed 2
* Home safe: HW Wallet 1, HW Wallet 2, Mobile Seed
* On your person: Mobile Wallet

# Properties

* Redundancy (with passphrase): **double**
* Redundancy (no passphrase): **none**
* Security (passphrase not compromised): **double**
* Security (passphrase compromised): **single**

## Rationale

* Each backup storage location only has one seed in order to boost security (at the expense of redundancy). No two bare seeds are stored in the same location so that no location compromised on its own can lead to theft of the cold wallet.