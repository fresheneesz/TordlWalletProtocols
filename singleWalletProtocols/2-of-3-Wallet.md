# 2-seed Multisig Wallet

Good for medium amounts (< $20,000).

## Variable parameters

* `Offline Master Passphrase`
* `Seed Backup Configuration`: A list of what [backup method](../backupMethods) is used for each seed.

## Creation

* Use the [Simple Multisig Wallet Protocol](Simple-Multisig-Wallet-Protocol.md).
  * `Host Devices`: 
    * `Mobile Wallet` 
    * `HW Wallet`
  * `M`: `2`
  * `Seed Backup Configuration`
  * `Storage Configuration`: 
    * Safe deposit box: `HW Seed`, `unencrypted information file`
    * Home safe: `Mobile Seed`, `HW Wallet`, `unencrypted information file`
    * On your person: `Mobile Wallet`
  * `Device Configuration`. Devices and Keys Required for **normal use** (2 of 4):
    * `Mobile Wallet`
    * `HW Wallet`
    * `HW Wallet` + `Offline Master Passphrase`
    * `HW Wallet` + `Offline Master Passphrase`

## [Properties](../misc/propertiesKey.md)

* Loss Redundancy: **0 - 1.7**
* Compromise Resilience: **1 - 2**
* About 60% more expensive than a basic wallet. This extra cost will disappear once schnorr signatures are implemented.
* **Recovery with passphrase** (2 of 4):
  * `Mobile Seed` 
  * `HW Seed`
  * `HW Seed` + `Offline Master Passphrase`
  * `Mobile Seed` + `Offline Master Passphrase`
* **Recovery (no passphrase)**:
  * `Mobile Seed` + `HW Seed`

## [Weaknesses](../misc/risks.md#attacks)

* *Process Fatigue, Transaction Alteration, $5 Wrench Attack, Hostage Attack*, *Supply-chain Attack*.
* More complex and cumbersome to use than a non-multisig wallet.
* Does not protect against a compromised hardware wallet.

## Strengths

* Far more secure and resilient to backup loss than a Basic Hot Wallet.
* Not susceptible to: 
  * *Death / Incapacitation, Memory Loss, Disaster, Remote Theft, Opportunistic Physical Theft, Targeted Physical Theft, Denial of Access*.
  * *Social Engineering* - Only you can access your funds with your password, so there's no one else who could be tricked into giving access to your funds (eg like there can be on a web wallet).

## Rationale

* No location has enough seeds to lead to theft of the wallet if any single location is compromised (as long as the passphrase isn't compromised).
* Normal use of the wallet requires only 2 of 4 keys because that increases the with-passphrase redundancy to double redundancy (from single redundancy if 3 of 4 or 4 of 4 were required).
* Uses 2 of 4 where the HW Seed is involved in 2 of the keys, so that in the case you lose your `mobile seed`, you can still recover funds (using just the contents of the safe deposit box). Similarly for the use of the password on the `HW Seed`
* One of the four wallets is created with the same base-seed as another of the wallets, with the addition of a 25th word passphrase (the `Offline Master Passphrase`). The reason for this is to make the wallet easier to access and use by the owner, while not diminishing the compromise resilience of the wallet and still allowing passphraseless recovery (eg for inheritance). 
