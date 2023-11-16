# 2-of-3 Multisig Wallet

Good for medium amounts (< $20,000).

## Variable parameters

* [`Offline Master Passphrase`](https://github.com/fresheneesz/TordlWalletProtocols/blob/master/passphraseMethods/Offline-Master-Passphrase.md)
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
  * `Device Configuration`. Devices and Keys Required for **normal use** (2 of 3):
    * `Mobile Wallet`
    * `HW Wallet`
    * `HW Wallet` + `Offline Master Passphrase`

## [Properties](../misc/propertiesKey.md)

* Loss Redundancy (with passphrase): **single**
* Loss Redundancy (no passphrase): **none**
* Compromise Resilience (passphrase not compromised): **double**
* Compromise Resilience (passphrase compromised): **single**
* About 60% more expensive than a basic wallet. This extra cost will disappear once schnorr signatures are implemented.
* **Recovery with passphrase** (2 of 3):
  * `Mobile Seed` 
  * `HW Seed`
  * `HW Seed` + `Offline Master Passphrase`
* **Recovery (no passphrase)**:
  * `Mobile Seed` + `HW Seed`

## [Weaknesses](../misc/risks.md#attacks)

* *Process Fatigue, Transaction Alteration*, Hostage Attack.
* More complex and cumbersome to use than a non-multisig wallet.

## Strengths

* Far more secure and resilient to backup loss than a Basic Hot Wallet.

* Not susceptible to: *Death / Incapa/citation, Memory Loss, Diaster, Remote Theft, Opportunistic Physical Theft, Targeted Physical Theft, Supply-chain Attack, $5 Wrench Attack, Social Engineering, Denial of Access*.

  

## Rationale

* No location has enough seeds to lead to theft of the wallet if any single location is compromised (as long as the passphrase isn't compromised).
* Normal use of the wallet requires only 2 of 3 keys because that increases the with-passphrase redundancy to double redundancy (from single redundancy if all keys were required).
* Uses 2 of 3 where the HW Seed is involved in 2 of the keys, so that in the case you lose your mobile seed and your mobile wallet, you can still recover funds (using just the contents of the safe deposit box).
* One of the three wallets is created with the same base-seed as another of the wallets, with the addition of a 25th word passphrase (the `Offline Master Passphrase`). The reason for this is to make the wallet easier to access and use by the owner, while not diminishing the compromise resilience of the wallet and still allowing passphraseless recovery (eg for inheritance). 
