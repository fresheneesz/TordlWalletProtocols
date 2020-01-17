# Two-Tier Redundancy-focused Wallet Protocol

Passphrases:

* Basic Master Passphrase
* Offline Master Passphrase

Devices and seeds:

* Mobile Wallet - Mobile Seed
* HW Wallet 1 - HW Seed 1
* HW Wallet 2 - HW Seed 2

Storage locations:

* Safe deposit box 1: Mobile Seed, HW Seed 1
* Safe deposit box 2: Mobile Seed, HW Seed 2
* Home safe: HW Seed 1, HW Seed 2, HW Wallet 1, HW Wallet 2
* On your person: Mobile Wallet

Wallets:

* One hot wallet for every-day use.
  * Use the [Basic Wallet Protocol](walletProtocols/Basic-Wallet-Protocol.md).
  * Low amount (< $1000)
  * Devices and Keys Required:
    * Mobile Wallet + Basic Master Passphrase
  * Recovery (with passphrase):
    * Mobile Seed + Basic Master Passphrase
  * Can be associated with a Lightning node.
* One cold wallet for rare use.
  * Use the [Multisig Wallet Protocol](walletProtocols/Multisig-Wallet-Protocol.md).
  * Medium to Large amount (> $1000)
  * Devices and Keys Required for normal use (3 of 5):
    * Mobile Wallet
    * HW Wallet 1
    * HW Wallet 1 + Offline Master Passphrase
    * HW Wallet 2
    * HW Wallet 2 + Offline Master Passphrase
  * Recovery with passphrase (3 of 5):
    * Mobile Seed
    * HW Seed 1
    * HW Seed 1 + Offline Master Passphrase
    * HW Seed 2
    * HW Seed 2 + Offline Master Passphrase
  * Recovery without passphrase:
  	* Mobile Seed + HW Seed 1 + HW Seed 2

# Properties

* Hot wallet
  * Redundancy (with passphrase): **double**
  * Redundancy (no passphrase): **none**
  * Security (no passphrase): **brute force**
  * Security (with passphrase): **single** *(Compromise of either safe deposit box can result in loss of funds).*
* Cold wallet
  * Redundancy (with passphrase): **triple**
  * Redundancy (no passphrase): **double**
  * Security (no passphrase): **double** *(Compromise of any two storage locations can result in loss of funds).*
  * Security (with passphrase): **single** *(Compromise of any storage location can result in loss of funds).*

## Rationale

* No location has enough seeds to lead to theft of the cold wallet if any single location is compromised.
* The mobile wallet seed is stored in both safe deposit boxes, because if it was stored in the home safe, the HW Wallets couldn't be stored there without making that a potential single point of failure if the seed was able to be extracted from one of the hardware wallets.
* Normal use of the cold wallet requires only 3 of 5 keys because that increases the with-passphrase redundancy to triple redundancy (from double if all keys were required).
* The hot wallet requires a passphrase, and thus is not resilient to memory loss, as a tradeoff between security and convenience vs redundancy. Redundancy against passphrase/memory loss is sacrificed in order to increase security, from theft being possible by compromise of either safe deposit box, to making it so compromise of the password is required to steal the hot wallet funds.


