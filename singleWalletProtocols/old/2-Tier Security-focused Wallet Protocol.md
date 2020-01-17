# Two-Tier Security-focused Wallet Protocol

Passphrases:

* Basic Master Passphrase
* Offline Master Passphrase

Devices and seeds:

* Mobile Wallet - Mobile Seed
* HW Wallet 1 - HW Seed 1
* HW Wallet 2 - HW Seed 2

Storage locations:

* Safe deposit box 1: HW Seed 1, HW Wallet 2
* Safe deposit box 2: HW Seed 2, HW Wallet 1
* Home safe: Mobile Seed
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
  * Redundancy (with passphrase): **single**
  * Redundancy (no passphrase): **none**
  * Security (no passphrase): **brute force**
  * Security (with passphrase): **single** *(Compromise of the home safe can result in loss of funds).*
* Cold wallet
  * Redundancy (with passphrase): **double**
  * Redundancy (no passphrase): **single**
  * Security (no passphrase): **triple** *(All three storage locations must be compromised to result in loss of funds).*
  * Security (with passphrase): **double** *(Compromise of any two storage locations can result in loss of funds).*
  * Resilient against the [$5 wrench attack](https://xkcd.com/538/).

## Rationale

* Each location only has one seed so all three locations have to be compromised to steal from the cold wallet.
* The hardware wallets and their seeds are stored in the safe deposit boxes and not in the home safe so that multiple locations must be visited in order to use funds, even with the passphrase. This makes it much harder to successfuly execute the $5 wrench attack.
* The hardware wallets are not stored with their own seed to increase redundancy.
* Normal use of the cold wallet requires only 3 of 5 keys because that increases the with-passphrase redundancy to double redundancy (from single if all keys were required).
* The hot wallet requires a passphrase, and thus is not resilient to memory loss, as a tradeoff between security and convenience vs redundancy. Redundancy against passphrase/memory loss is sacrificed in order to increase security, from theft being possible by compromise of either safe deposit box, to making it so compromise of the password is required to steal the hot wallet funds.


