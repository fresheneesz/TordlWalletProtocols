# Basic Hot Wallet

Good for small amounts (< $1000).

## Parameters

* The Device: [a host device](../walletHostDevices)
* Storage Locations: A List of [storage locations](../storageLocations) other than on your person.
* The Seed: A wallet seed.

## Passphrases

* If The Device is offline (eg a HW wallet)
  * Offline Master Passphrase
* If The Device is online (eg a phone)
  * Basic Master Passphrase

## Devices and seeds

* The Device - The Seed

## Storage locations

* On your person: The Device
* Storage Locations: The Seed

## Creation

* Use the [Basic Wallet Protocol](Basic-Wallet-Protocol.md).
* Low amount (< $1000)
* Devices and Keys Required:
  * The Device + Passphrase
* Recovery (with passphrase):
  * The Seed + Passphrase
* Can be associated with a Lightning node.

## [Properties](../misc/propertiesKey.md)

* Redundancy (with passphrase): **none**
* Redundancy (no passphrase): **inaccessible**
* Security (no passphrase): **brute force**
* Security (with passphrase): **single**

## Weaknesses

* Low redundancy and low security.
* If the seed is found, the funds can be lost.
* This method will not make your key resilient to memory loss or death. If you forget the passphrase to your seed, you will not be able to recover funds. If you die, your heirs will not be able to recover funds.
* Funds can be stolen if the device designer, device manufacturer, cpu manufacturer, operating system designer, or device distributor is malicious.
* Funds can be stolen if the device is insecure. 
* [General Security Risks](../misc/risks.md)

## Strengths

* If only small amounts are kept in this wallet as recommended, it is somewhat safe from more extreme attacks, like the $5 wrench attack and hostage attack, simply because the amount stored probably isn't worth it.
* Funds cannot be stolen without the password being compromised.

## Recommendations

Its recommended to choose a mobile wallet for The Device, because if you have a hardware wallet or two, a 2-of-3 or 3-of-5 multsig wallet would be better.

Its recommended to pair this wallet with a multisig wallet, and use The Device as one of the devices in the multisig wallet protocol.

## Rationale

* Requires a passphrase, and thus is not resilient to memory loss, as a tradeoff between security and convenience vs redundancy. Redundancy against passphrase/memory loss is sacrificed in order to increase security, from theft being possible by compromise of either safe deposit box, to making it so compromise of the password is required to steal the hot wallet funds.

