# Basic Hot Wallet

Good for small amounts (< $500).

## Parameters

* `The Device`: [a host device](../walletHostDevices)
* [`Seed Backup Method`](../backupMethods)
* `Storage Locations`: A List of [storage locations](../storageLocations) other than on your person.
* `The Seed`: A wallet seed.

## Passphrases

One `Passphrase`.

* If `The Device` is offline (eg a HW wallet)
  * Offline Master Passphrase
* If `The Device` is online (eg a phone)
  * Basic Master Passphrase

## Devices and seeds

* `The Device` - `The Seed`

## Storage locations

* On your person: `The Device`
* `Storage Locations`: `The Seed`

## Creation

* Use the [Basic Wallet Protocol](Basic-Wallet-Protocol.md).
* Low amount (< $1000)
* Devices and Keys Required:
  * `The Device` + `Passphrase`
* Recovery (with passphrase):
  * `The Seed` + `Passphrase`
* Can be associated with a Lightning node.

## [Properties](../misc/propertiesKey.md)

* Loss Redundancy (with passphrase): **none**
* Loss Redundancy (no passphrase): **inaccessible**
* Compromise Resilience (no passphrase): **brute force**
* Compromise Resilience (with passphrase): **single**

## [Weaknesses](../misc/risks.md#attacks)

* *Death / Incapacitation, Memory Loss, Supply-chain Attack, Unknown security threats, $5 Wrench Attack*
* *Targeted Physical Theft*. If your seed and passphrase are both compromised, your funds can be stolen. This could be as simple as seeing you put in your pin and passphrase, and then stealing your phone. 
* *Remote Theft*. If you're using a phone, this is not likely unless your phone is rooted, but still isn't out of the question. If your device is a desktop computer, the likelihood of this is much higher.
* How weak it is to *Disaster* and *Data rot* depend on the `Seed Backup Method` and `Storage locations`.

## Strengths

* Funds cannot be stolen without the password being compromised.
* If only small amounts are kept in this wallet as recommended, it is somewhat safe from more extreme attacks, like the $5 wrench attack and hostage attack, simply because the amount stored probably isn't worth it.
* Not susceptible to:

## Recommendations

Its recommended to choose a mobile wallet for `The Device`, because if you have a hardware wallet or two, a 2-of-3 or 3-of-5 multsig wallet would be better.

Its recommended to pair this wallet with a multisig wallet, and use `The Device` as one of the devices in the multisig wallet protocol.

## Rationale

* Requires a passphrase, and thus is not resilient to memory loss, as a tradeoff between security and convenience vs redundancy. Redundancy against passphrase/memory loss is sacrificed in order to increase security, from theft being possible by compromise of either safe deposit box, to making it so compromise of the password is required to steal the hot wallet funds.

