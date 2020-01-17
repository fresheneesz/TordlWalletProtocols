# Two-tier Hot/Cold Wallet Protocol



## Definition

Passphrases:

* Basic Master Passphrase (BMP)
* Offline Master Passphrase (OMP)

Seeds:

* Seed 1
* Seed 2

Devices:

* Mobile Wallet (MW) - Seed 1
* HW Wallet (HWW) - Seed 2

Storage locations:

* Safe deposit box 1: Seed 1, Seed 2
* Home safe: HWW, Seed 1, Seed 2
* On your person: MW

Wallets:

* One hot wallet for every-day use.
  * Use the [Basic Wallet Protocol](walletProtocols/Basic-Wallet-Protocol.md).
  * Small amount (< $1000)
  * Normal use:
    * MW + BMP
  * Recovery:
    * Direct recovery (with passphrase):
      * Seed 1 + BMP
* One cold wallet for rare use.
  * Use the [Multisig Wallet Protocol](walletProtocols/Multisig-Wallet-Protocol.md).
  * Large amount (< $10,000)
  * Normal use:
    * HWW + OMP
  * Recovery:
    * Direct recovery (with passphrase):
      * Seed 2 + OMP

## Properties

* The hot wallet is protected by 1 seed and 1 Basic Master Passphrase. It has double redundancy. There is no chance of recovery without the passphrase.
* The warm wallet and cold wallet are both protected by 1 seed and 1 Offline Master Passphrase. Both have single redundancy. There is no chance of recovery for either without the passphrase.


## Risks

* Because neither wallet can be accessed without a password, this protocol isn't resilient to memory loss or death. For example, heirs cannot inherit the money in the case of unexpected death.

## Rationale

* Uses a mobile device for the hot wallet for convenient use wheree