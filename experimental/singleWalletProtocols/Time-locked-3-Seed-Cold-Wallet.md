# Time-locked Three-seed Cold Wallet

Good for wallets with a large amount of funds (> $20,000) that you normally only use a few times per year and never need the contained funds quickly.

## Passphrases

* Basic Master Passphrase
* Offline Master Passphrase

## Devices and Seeds

* Mobile Wallet - Mobile Seed
* HW Wallet 1 - HW Seed 1
* HW Wallet 2 - HW Seed 2

## Storage locations

* Safe deposit box 1: HW Seed 1, HW Wallet 2
* Safe deposit box 2: HW Seed 2
* Home safe: Mobile Seed, HW Wallet 1
* On your person: Mobile Wallet

## Creation

* Devices and Keys Required for **normal use**:
  * **2-week timelock**: Mobile Wallet + Basic Master Passphrase + (HW Wallet 1 *OR* HW Wallet 2) + Offline Master Passphrase
* **Recovery with passphrase**:
  * **1-week timelock**: Mobile Seed + Basic Master Passphrase + HW Seed 1 + HW Seed 2 + Offline Master Passphrase
  * **2-week timelock**: 2/3 of [Mobile Seed + Basic Master Passphrase, HW Seed 1, HW Seed 2] + Offline Master Passphrase
  * **3-month timelock**: 1/2 of [HW Seed 1, HW Seed 2] + Offline Master Passphrase
  * **5-month timelock**: Mobile Seed + Basic Master Passphrase
* **Recovery (no passphrase)**:
  * **3-month timelock**: 3/3 of [HW Seed 1, HW Seed 2, Mobile Seed]
  * **6-month timelock**: 2/3 of [HW Seed 1, HW Seed 2, Mobile Seed]
  * **2-year timelock**: 1/3 of [HW Seed 1, HW Seed 2, Mobile Seed]

## [Properties](../misc/propertiesKey.md)

* Redundancy (with passphrase): **double**
* Redundancy (no passphrase): **double**
* Security (passphrases not compromised): **triple**
* Security (1 passphrase compromised): **triple**
* Security (2 passphrases compromised): **double**
* Resilient to the [$5 wrench attack](https://xkcd.com/538/).
* Resilient to a hostage attack.
* Requires covenants, which are not available in bitcoin yet.

## Rationale

* The recovery timelocks are longer the fewer seeds that are required to initiate a recovery transaction, because compromising more seeds is less likely.
* Using all the seeds and passphrases has a 1-week timelock in order to give some buffer against a hostage attack. If the attacker can be found within 1 week of the transfer being initiated, funds can still be recovered.
* Compromise of one seed has a 2-year timelock to give someone not paying attention to their cold wallet tons of time to find out and reverse the transaction.
* A transfer is allowed with a single seed and no passphrase both to  maximize redundancy in inheritance cases. In addition this gives a low-risk honey pot to an attacker - the attacker may initiate a transaction hoping the victim won't notice for the timelock length, which can alert the victim that their seed has been compromised.
* There is one no-passphrase recovery method with a lower timelock than the recovery method using just the Mobile Seed and Basic Master Passphrase because that seed and passphrase are much more easily compromised than the HW Seed and Offline Master Passphrase. If someone steals the victim's Basic Master Passphrase and breaks into the victim's phone after death, heirs still have the possibility of recovering funds by using all the seeds.