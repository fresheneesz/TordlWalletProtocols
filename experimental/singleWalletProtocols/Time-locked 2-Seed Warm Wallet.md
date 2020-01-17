# Time-locked Two-seed Warm Wallet

Good for wallets with a medium amount of funds (<= $20,000) you need use a couple times a month.

## Passphrases

* Basic Master Passphrase
* Offline Master Passphrase

## Devices and Seeds

* Mobile Wallet - Mobile Seed
* HW Wallet - HW Seed

## Storage locations

* Safe deposit box: HW Seed
* Home safe: Mobile Seed, HW Wallet
* On your person: Mobile Wallet

## Creation

* Devices and Keys Required for **normal use** (all of):
  * **1-day timelock**: Mobile Wallet + Basic Master Passphrase
* **Recovery with passphrase**:
  * **No timelock**: Mobile Seed + Basic Master Passphrase + HW Seed + Offline Master Passphrase
  * **1-day timelock**: Mobile Seed + Basic Master Passphrase *OR* HW Seed + Offline Master Passphrase
* **Recovery (no passphrase)**:
  * **3-month timelock**: Mobile Seed + HW Seed
  * **1-year timelock**: Mobile Seed *OR* HW Seed

## [Properties](../misc/propertiesKey.md)

* Redundancy (with passphrase): **single**
* Redundancy (no passphrase): **single**
* Security (passphrases not compromised): **double**
* Security (1 passphrase compromised): **double**
* Security (2 passphrases compromised): **double**
* Resilient to the [$5 wrench attack](https://xkcd.com/538/).
* Requires covenants, which are not available in bitcoin yet.

## Rationale

* Uses a 1-day timelock for normal use so that even if your passphrase is compromised, you likely would have 1 day to reverse the transactions and prevent theft of funds using the no-timelock transaction that requires both keys and passphrases.
* The recovery timelocks are longer the fewer seeds that are required to initiate a recovery transaction, because compromising more seeds is less likely.
* The 3-month and 1-year time locks are used as compromise between giving plenty of time to reverse theft attempts and making passphrase-less inheritance recovery take a reasonably short time.