# Three-tiered Single-owner Time-locked Wallet Strategy

Passphrases:

* Basic Master Passphrase 1 (BMP1)
* Offline Master Passphrase 1 (OMP1)
* Offline Master Passphrase 2 (OMP2)

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
* Home safe: HWW1, HWW2, Seed 1, Seed 3
* On your person: MW

Wallets:

* One hot wallet for every-day use.
  * Use the [Basic Wallet Protocol](../walletProtocols/Basic-Wallet-Protocol.md).
  * Low amount (<= $1000)
  * Devices and Keys Required (all of):
    * MW + BMP1
  * Recovery:
    * Direct recovery (with passphrase):
      * Seed 3 + BMP1
    * Indirect recovery (witout passphrase):
      * Seed 3: 6-month timelock
  * Probably associated with a Lightning node
* One warm wallet for occasional use
  * Medium amount (<= $20,000)
  * 1-day time-locked multi-sig hardware wallet
  * Devices and Keys Required (all of):
    * MW + BMP1
    * HWW1 + OMP1 or HWW2 + OMP1
  * Recovery:
    * Direct recovery (with passphrase):
      * Seed 1 + Seed 3 + OMP1
    * Indirect recovery (witout passphrase):
      * 1/2 of [Seed 1, Seed 3]: 1-year timelock
      * 2/2 of [Seed 1, Seed 3]: 3-month timelock
      * Seed 3 + OMP1: 5-month timelock
      * Seed 1 + OMP1: 1-month timelock
* One cold wallet for rare use
  * Large amount (> $20,000)
  * 2-week time-locked multi-sig hardware wallet
  * Devices and Keys Required for normal use (all of):
    * MW + BMP1
    * HWW1 + OMP2
    * HWW2 + OMP2
  * Recovery:
    * Direct recovery (with passphrase):
      * Seed 1 + Seed 2 + Seed 3 + OMP2
    * Indirect recovery (witout passphrase):
      * 1/3 of [Seed 1, Seed 2, Seed 3]: 2-year timelock
      * 2/3 of [Seed 1, Seed 2, Seed 3]: 6-month timelock
      * 3/3 of [Seed 1, Seed 2, Seed 3]: 3-month timelock
      * Seed 3 + OMP2: 5-month timelock
      * 1/2 of [Seed 1, Seed 2] + OMP2: 3-month timelock
      * Seed 3 + 1/2 of [Seed 1, Seed 2] + OMP2: 1-week timelock

## Rationale

* The recovery timelocks are longer the fewer seeds that are required to initiate a recovery transaction, because compromising more seeds is less likely.
* The recovery timelocks are longer the less warmer the wallet because less value will be stored in warmer wallets, and thus protecting them with long timeouts isn't quite as important.