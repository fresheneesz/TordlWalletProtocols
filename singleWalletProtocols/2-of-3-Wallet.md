# 2-of-3 Multisig Wallet

Good for medium amounts (< $20,000).

Variable parameters:

* `Seed Backup Configuration`

## Passphrases

* `Basic Master Passphrase`
* `Offline Master Passphrase`

## Devices and seeds

* `Mobile Wallet` - `Mobile Seed`
* `HW Wallet` - `HW Seed`

## `Storage Configuration`

* **Safe deposit box**: `HW Seed`
* **Home safe**: `Mobile Seed`, `HW Wallet`
* **On your person**: `Mobile Wallet`

## Creation

* Use the [Simple Multisig Wallet Protocol](Simple-Multisig-Wallet-Protocol.md).
* `Device Configuration`: Devices and Keys Required for **normal use** (2 of 3):
  * 2 of 3:
  * `Mobile Wallet`
  * `HW Wallet`
  * `HW Wallet + Offline Master Passphrase`
* **Recovery with passphrase**:
  * 2 of 3:
    * `Mobile Seed` + `Basic Master Passphrase`
    * `HW Seed`
    * `HW Seed` + `Offline Master Passphrase`
* **Recovery (no passphrase)**:
  * `Mobile Seed` + `HW Seed`

## [Properties](../misc/propertiesKey.md)

* Redundancy (with passphrase): **single**
* Redundancy (no passphrase): **none**
* Security (passphrase not compromised): **double**
* Security (passphrase compromised): **single**
* About 60% more expensive than a basic wallet. This extra cost will disappear once schnorr signatures are implemented.

## Weaknesses

## Rationale

* No location has enough seeds to lead to theft of the wallet if any single location is compromised (as long as the passphrase isn't compromised).
* Normal use of the wallet requires only 2 of 3 keys because that increases the with-passphrase redundancy to double redundancy (from single redundancy if all keys were required).
* Uses 2 of 3 where the HW Seed is involved in 2 of the keys, so that in the case you lose your mobile seed and your mobile wallet, you can still recover funds (using just the contents of the safe deposit box).

