# Complex Multisig Warm Wallet

Good for medium amounts (< $10,000) that you use once or twice per week. Better than the Basic Hot Wallet because it's resilient to memory loss. More convenient than a basic multisig wallet, in that transactions can be made with just your mobile phone, whereas a multisig wallet requires you to use multiple devices. Comes with the tradeoff of being more expensive to use.

Note that there is currently no easy way to create and use a wallet like this. The setup requires an output script that isn't directly supported by popular wallets.

## Parameters

* Storage Configuration: A map of storage locations to which seeds and devices are stored in each location.

## Passphrases

* Basic Master Passphrase
* Offline Master Passphrase

## Devices and seeds

* Mobile Wallet - Mobile Seed
* HW Wallet 1 - HW Seed 1
* HW Wallet 2 - HW Seed 2

## Creation

* Use the [Multi-sig Wallet Protocol](walletProtocols/Multi-sig-Wallet-Protocol.md).
* Devices and Keys Required for **normal use**:
  * Mobile Wallet + Basic Master Passphrase
* Recovery:
  * **Recovery with passphrase**:
    * Mobile Seed + Basic Master Passphrase
    * HW Seed 1 + HW Seed 2 + Basic Master Passphrase
  * **Recovery (no passphrase)**:
    * Mobile Seed + 1/2 of [HW Seed 1, HW Seed 2]
* Can potentially be associated with a Lightning node

## [Properties](../misc/propertiesKey.md)

* Spending is probably about 200% more expensive than a basic wallet. This extra cost will decrease to something around 50% more expensive once taproot is implemented.
* + The Properties of the Storage Configuration.

## Weaknesses

* 

## Rationale

* Normal use of the cold wallet requires only 1/2 hardware wallets to increase the redundancy with passphrase by 1 (vs if both were required).



