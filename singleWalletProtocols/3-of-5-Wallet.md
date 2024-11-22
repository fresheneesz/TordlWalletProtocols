# 3-of-5 Multisig Wallet

Good for medium to large amounts (> $1000).

## Variable parameters

* [`Offline Master Passphrase`](https://github.com/fresheneesz/TordlWalletProtocols/blob/master/passphraseMethods/Offline-Master-Passphrase.md)
* `Storage Configuration`: A list of which storage location stores which seeds and devices.

## Creation

* Use the [Simple Multisig Wallet Protocol](Simple-Multisig-Wallet-Protocol.md).
  * `Host Devices`: 
    * `Mobile Wallet` 
    * `HW Wallet 1`
    * `HW Wallet 2`
  * `M`: `3`
  * `Storage Configuration`
  * `Device Configuration`. Devices and Keys Required for **normal use** (3 of 5):
    * `Mobile Wallet`
    * `HW Wallet 1`
    * `HW Wallet 1` + `Offline Master Passphrase`
    * `HW Wallet 2`
    * `HW Wallet 2` + `Offline Master Passphrase`

## [Properties](../misc/propertiesKey.md)

* About 120% more expensive than a basic wallet. This extra cost will disappear once schnorr signatures are implemented.
* The Properties of the `Storage Configuration`.
* **Recovery with passphrase** (3 of 5) can be done with storage locations containing any of the following combinations:
  * `Mobile Seed`
  * `HW Seed 1`
  * `HW Seed 1` + `Offline Master Passphrase`
  * `HW Seed 2`
  * `HW Seed 2` + `Offline Master Passphrase`
* **Recovery (no passphrase)** is possible with storage locations containing:
  * `Mobile Seed` + `HW Seed 1` + `HW Seed 2`


## Rationale

* Normal use of the wallet requires only 3 of 5 keys because that increases the with-passphrase redundancy by one.
* Two of the five wallets are created with the same base-seed as another two wallets, with the addition of a 25th word passphrase (the `Offline Master Passphrase`). The reason for this is to make the wallet easier to access and use by the owner, while not diminishing the compromise resilience of the wallet and still allowing passphraseless recovery (eg for inheritance). Basically, this set up is pretty much as easy to use as a passphrase-less 2-of-3 multisig wallet, but more secure or redundant. 
