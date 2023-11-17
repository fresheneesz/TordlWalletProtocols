# 3-of-5 Security-focused Multisig Wallet

This is  a three-seed wallet that uses a passphrase to create 5 wallets in a multisig configuration that are stored in such a way to maximize compromise resilience (at the expense of loss redundancy). Good for large amounts (> $20,000).

## Variable parameters

* [`Offline Master Passphrase`](https://github.com/fresheneesz/TordlWalletProtocols/blob/master/passphraseMethods/Offline-Master-Passphrase.md)

## Creation

Use the [3-of-5 Multisig Wallet](3-of-5-Wallet.md).

* `Offline Master Passphrase`
* `Storage Configuration`:
  * Safe deposit box 1: `HW Seed 1`, `HW Wallet 2`, `unencrypted data record`
  * Safe deposit box 2: `HW Seed 2`, `HW Wallet 1`, `unencrypted data record`
  * Home safe: `Mobile Seed`, `unencrypted information file`
  * On your person: `Mobile Wallet`

## [Properties](../misc/propertiesKey.md)

* Loss Redundancy (with passphrase): **single**
* Loss Redundancy (no passphrase): **none**
* Compromise Resilience (passphrase not compromised): **triple**
* Compromise Resilience (passphrase compromised): **double**
* Resilient to the [$5 wrench attack](https://xkcd.com/538/).

## Rationale

* Each location only has one seed so all three locations have to be compromised to steal from the wallet.
* The hardware wallets and their seeds are stored in the safe deposit boxes and not in the home safe so that multiple locations must be visited in order to use funds, even with the passphrase. This makes it significantly harder to successfully execute the $5 wrench attack.

