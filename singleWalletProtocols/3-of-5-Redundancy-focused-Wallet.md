# 3-of-5 Redundancy-focused Multisig Wallet

This is a three-seed wallet that uses a passphrase to create 5 wallets in a multisig configuration that are stored in such a way to maximize loss redundancy (at the expense of compromise resilience). Good for large amounts (> $20,000).

## Variable parameters

* [`Offline Master Passphrase`](https://github.com/fresheneesz/TordlWalletProtocols/blob/master/passphraseMethods/Offline-Master-Passphrase.md)

## Creation

Use the [3-of-5 Multisig Wallet](3-of-5-Wallet.md).

* `Offline Master Passphrase`
* `Storage Configuration`:
  * Safe deposit box 1: `Mobile Seed`, `HW Seed 1`, `unencrypted data record`
  * Safe deposit box 2: `Mobile Seed`, `HW Seed 2`, `unencrypted data record`
  * Home safe: `HW Seed 1`, `HW Seed 2`, `HW Wallet 1`, `HW Wallet 2`, `unencrypted data record`
  * On your person: `Mobile Wallet`

## [Properties](../misc/propertiesKey.md)

* Loss Redundancy (with passphrase): **double**
* Loss Redundancy (no passphrase): **single**
* Compromise Resilience (passphrase not compromised): **double**
* Compromise Resilience (passphrase compromised): **single**

## Rationale

* No location has enough seeds to lead to theft of the wallet if any single location is compromised.
* The mobile wallet seed is stored in both safe deposit boxes, because if it was stored in the home safe, the HW Wallets couldn't be stored there without making that a potential single point of failure if the seed was able to be extracted from one of the hardware wallets.
* The HW Seeds are stored in the home safe even tho the HW wallets are there because the HW wallets are not durable enough to be considered a backup.
