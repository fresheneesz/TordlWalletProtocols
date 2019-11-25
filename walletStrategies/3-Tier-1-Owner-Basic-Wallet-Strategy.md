# Three-tiered Single-owner Basic Wallet Strategy

Passphrases:

* Basic Master Passphrase 1 (BMP1)
* Offline Master Passphrase 1 (OMP1)
* Offline Master Passphrase 2 (OMP2)

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
  * Low amount (<= $1000)
  * Devices and Keys Required:
    * MW + BMP1
  * Recovery:
    * Direct recovery (with passphrase):
      * Seed 1 + BMP1
* One warm wallet for occasional use.
  * Use the [Basic Wallet Protocol](walletProtocols/Basic-Wallet-Protocol.md).
  * Medium amount (<= $20,000)
  * Devices and Keys Required:
    * HWW + OMP1
  * Recovery:
    * Direct recovery (with passphrase):
      * Seed 2 + OMP1
* One cold wallet for rare use.
  * Use the [Multi-sig Wallet Protocol](walletProtocols/Multi-sig-Wallet-Protocol.md).
  * Medium to Large amount (> $20,000)
  * Devices and Keys Required for normal use:
    * HWW + OMP2
  * Recovery:
    * Direct recovery (with passphrase):
      * Seed 2 + OMP2

# Properties

* The hot wallet is protected by 1 seed and 1 Basic Master Passphrase. It has double redundancy. There is no chance of recovery without the passphrase.
* The warm wallet and cold wallet are both protected by 1 seed and 1 Offline Master Passphrase. Both have single redundancy. There is no chance of recovery for either without the passphrase.

## Rationale
