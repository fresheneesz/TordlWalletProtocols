![TORDL.png](TORDL.png)

# Tordl Wallet Protocols

**Version:** 0.4, **Status:** *Ready for Review*

The Tordl Wallet protocols are step-by-step guides for storing bitcoins in a secure self-managed be-your-own-bank way. There are a number of methods, each with their own trade offs. Some of the methods are able to securely store large amounts of money ($100,000+) for the long term. Following these protocols can give you the peace of mind that your funds are safe and can be accessed relatively easily when needed.

Security is something that should be done using well vetted methods, rather than rolling your own. Storing bitcoin can be error-prone and cumbersome for even tech savvy bitcoiners. The Tordl Wallet Protocols are intended to become a (hopefully well-vetted) standard anyone can use to safely and securely store and use their bitcoin.

This repository contains a number of open-source methods for backing up and storing bitcoin. These methods are built modularly out of sub-methods that can then be mixed and matched and are designed so many different products and services can refer to them as part of derived methods that are more specific to a particular product.

Note that the ratings for Loss Redundancy, Compromise Resilience, Security, etc are defined in the [Properties Key](misc/propertiesKey.md).

## Holistic Wallet Protocols

These are holistic protocols that, when followed completely, are intended to allow coins to be used safely, secure from theft, and resilient to loss or damage. **This is where you should start from; choose a single wallet or a tiered wallet**.

### Single Wallets

Each protocol in this section defines a protocol for setting up a single wallet and defines its properties. These can be thought of as a single "account".

* [Basic Hot Wallet](singleWalletProtocols/Basic-Hot-Wallet.md)
  * Good for small amounts (**< $500**).
  * Loss Redundancy: **inaccessible**/**none**, Compromise Resilience: **brute-force**/**single**.
  * Note: This protocol does not protect against memory loss or death.
* [2-of-3 Multisig Wallet Protocol](singleWalletProtocols/2-of-3-Wallet.md)
  * Good for medium amounts (**< $20,000**).
  * Loss Redundancy: **none**/**single**, Compromise Resilience: **single**/**double**.
* [Redundancy-focused 3-of-5 Multisig Wallet Protocol](singleWalletProtocols/3-of-5-Redundancy-focused-Wallet.md)
  * Good for large amounts (**> $20,000**).
  * Loss Redundancy: **single**/**double**, Compromise Resilience: **single**/**double**.
  * Resilient to the [$5 wrench attack](https://xkcd.com/538/).
* [Security-focused 3-of-5 Multisig Wallet Protocol](singleWalletProtocols/3-of-5-Security-focused-Wallet.md)
  * Good for large amounts (**> $20,000**).
  * Loss Redundancy: **none**/**single**, Compromise Resilience: **double**/**triple**.
  * Resilient to the [$5 wrench attack](https://xkcd.com/538/).

### Tiered Wallets

These multi-wallet setups are made to maximize both security and convenience by using convenience-wallets to store small amounts for frequent transactions and more secure but less-frequently-used wallets to store large amounts.

* [Two-Tiered Wallet](multiWalletProtocols/Simple-2-Tier-Wallet.md)
<!--* [Three-Tiered Wallet](multiWalletProtocols/Simple-3-Tier-Wallet.md)-->

## Wallet Methods

These are methods describing the creation and use of a type of wallet. Each of these protocols document 5 major actions a good wallet needs to perform: creation, receiving, spending, maintenance, and recovery.

* [Basic Wallet Protocol](singleWalletProtocols/Basic-Wallet-Protocol.md). 
* [Simple-Multisig Wallet Protocol](singleWalletProtocols/Simple-Multisig-Wallet-Protocol.md). 
* [3-of-5 Multisig Wallet Protocol](singleWalletProtocols/3-of-5-Wallet.md)
* [Decoy Wallet](singleWalletProtocols/Decoy-Wallet.md)

## Wallet Host Devices

These are methods that can hold a wallet containing a single seed, and can serve as a single wallet or a piece of a multi-signature wallet.

* [Hardware wallet](walletHostDevices/Hardware-Wallet.md). Cost: **~$60**, Security: **7/10**, Effort: **3/10**
* [Mobile wallet](walletHostDevices/Mobile-Wallet.md). Cost: **~$0**, Security: **3/10**, Effort: **1/10**

## Seed Backup Methods

These methods are for backing up a seed (which should usually be passphrase-protected).

* [Metal Backup](backupMethods/Stamped-Metal-Seed-Backup.md). Cost: **~$35**, Durability: **10/10**, Effort: **6/10**
* [Secured Paper Backup](backupMethods/Secured-Paper-Seed-Backup.md). Cost: **~$0**, Durability: **5/10**, Effort: **3/10**

## Storage Locations

* [Home Safe](storageLocations/Home-Safe.md). Cost: **~$30**, Security: **5/10**, Durability: **7/10**, Effort: **3/10**
* [Safe Deposit Box](storageLocations/Safe-Deposit-Box.md). Cost: **~$30**, Security: **5/10**, Durability: **5/10**, Effort: **7/10**
* [On your person](storageLocations/On-Your-Person.md). Cost: **$0**, Security: **3/10**, Durability: **3/10**, Effort: **variable**

## Passphrase Methods

These methods are protocols for creation of memorable passphrases that satisfy the "something you know" in the [three factors of authentication](http://www.pearsonitcertification.com/articles/article.aspx?p=1718488). These methods are intended to contain the steps to create a strong password, keep it secure once you have created it, and ensure it is remembered.

* [Offline Master Passphrase](passphraseMethods/Offline-Master-Passphrase.md). Security: **10/10**, Effort: **5/10**
* [Basic Master Passphrase](passphraseMethods/Basic-Master-Passphrase.md). Security: **5/10**, Effort: **3/10**
* [Non-master Password](passphraseMethods/Non-master-Password.md). Security: **3/10**, Effort: **2/10**
* [Non-critical Password](passphraseMethods/Non-critical-Password.md). Security: **2/10**, Effort: **2/10**

## See also

* For incomplete experimental methods, see [experimental/README.md](experimental/README.md).
* [Simple Inheritance Plan](inheritance/Simple Inheritance Plan.md)
* [Risks](misc/risks.md)

## Contribution

Please feel free to propose additional methods using github issues or as pull requests. Also feel free to use github issues as a forum for discussion of anything in this repository. If you'd like to be a co-owner of this repo, please send a message via github issues.

The process for adding a method or significant change to this repo:

1. Create a github issue proposing the change, and let any discussion that needs to happen, happen. 
2. A pull request can be created at any time, but it's recommended to wait to do that work until consensus on the issue has been reached.
3. After at least 2 weeks, if consensus has been reached, a pull request may be accepted into the repo.

## Disclaimer

All information in this repository is for general informational purposes only and does not constitute legal advice, establish any attorney-client relationship, or create any responsibility on the writers of this repository whatsoever.

## Change Log

* v0.4 - Added information on Loss Redundancy and Compromise Resilience. Added storage and backup basics. Other minor wording and presentation improvements.
* v0.3 - Adding inheritance information.
* v0.2 - Added and changed numerous methods and guidance. Things are still in flux. Added an experimental section for incomplete protocols.
* v0.1 - Created repository with a number of methods and protocols.