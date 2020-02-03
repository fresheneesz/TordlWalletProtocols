# Time-locked One-seed Mobile Wallet

This is good for hot wallets that contain low amounts (<$1000) that you want to use regularly.

## Passphrases

* Basic Master Passphrase

## Devices and Seeds

* Mobile Wallet - Mobile Seed

## Storage locations

* Home Safe: Mobile Seed
* On your person: Mobile Wallet

## Creation

* Devices and Keys Required for **normal use** (all of):
  * **No timelock**: Mobile Wallet + Basic Master Passphrase
* **Recovery with passphrase**:
  * **No timelock**: Mobile Seed + Basic Master Passphrase
* **Recovery (no passphrase)**:
  * **2-month timelock**: Mobile Seed
* Can be associated with a Lightning node

## [Properties](../misc/propertiesKey.md)

* Redundancy (with passphrase): **none**
* Redundancy (no passphrase): **none**
* Security (passphrase not compromised): **double**
* Security (passphrase compromised): **single**
* Requires covenants, which are not available in bitcoin yet.

## Rationale

* This only uses one storage location because it only uses one seed. If you wanted to use more storage locations, like safe deposit boxes, you should probably protect the wallet with multiple seeds.
* Uses a mobile wallet for easy every-day use.
* Has a recovery mode that doesn't require a passphrase so the funds can be recovered in the case of memory loss (eg heirs can inherit the contained funds after death).
* Uses a 2-month timelock for recovery to ensure you have time to notice and reverse any illegitimate no-passphrase send attempt.