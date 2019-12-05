# Two-tiered Single-owner Basic Multi-Sig Wallet Strategy

Passphrases:

* Basic Master Passphrase 1 (BMP1)
* Offline Master Passphrase 1 (OMP1)

Seeds:

* Seed 1
* Seed 2
* Seed 3

Devices:

* HW Wallet 1 (HWW1) - Seed 1
* HW Wallet 2 (HWW2) - Seed 2
* Mobile Wallet (MW) - Seed 3

Storage locations:

* Safe deposit box 1: Seed 3, Seed 1
* Safe deposit box 2: Seed 3, Seed 2
* Home safe: HWW1, HWW2, Seed 1, Seed 2
* On your person: MW

Wallets:

* One hot wallet for every-day use.
  * Use the [Basic Wallet Protocol](walletProtocols/Basic-Wallet-Protocol.md).
  * Low amount (<= $5000)
  * Devices and Keys Required:
    * MW + BMP1
  * Recovery:
    * Direct recovery (with passphrase):
      * Seed 3 + BMP1
  * Probably associated with a Lightning node
* One cold wallet for rare use.
  * Use the [Multi-sig Wallet Protocol](walletProtocols/Multi-sig-Wallet-Protocol.md).
  * Medium to Large amount (> $5000)
  * Devices and Keys Required for normal use (all of):
    * HWW1 + OMP1
    * HWW2 + OMP1
  * Recovery:
    * Direct recovery (with passphrase):
      * Seed 1 + Seed 2 + OMP1

# Properties

* The hot wallet is protected by 1 seed and 1 Basic Master Passphrase or by 2 seeds. It has double redundancy if you remember your password and no redundancy if you don't. The hot wallet can be stolen if either of the two safe deposit boxes are compromised.
* The cold wallet is protected by 2 seeds and 1 Basic Master Passphrase and one Offline Master Passphrase or by 3 seeds. It has double redundancy if you remember your passphrase, and no redundancy if you don't.

## Rationale

* No two bare seeds are stored in the same location so that no location compromised on its own can lead to theft of the cold wallet.
* Normal use of the cold wallet requires only 1/2 hardware wallets to increase the redundancy with passphrase to double (from single if both were required)