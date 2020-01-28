![TORDL.png](TORDL.png)

# Tordl Wallet Protocols

**Version:** 0.1, **Status:** *WIP*

Security is something that should be done using well vetted methods, rather than rolling your own. Storing bitcoin can be error-prone and cumbersome for even tech savvy bitcoiners. The Tordl Wallet Protocols are intended to become a (hopefully well-vetted) standard anyone can use to safely and securely store and use their bitcoin.

This repository contains a number of open-source methods for backing up and storing bitcoin. These methods are built modularly out of sub-methods that can then be mixed and matched and are designed so many different products and services can refer to them as part of derived methods that are more specific to a particular product.

See the Contribution section below for how you can contribute to this repository.

Note that in the following summaries and other summaries in this repo:

* The *Security* score rates prevention of theft.
* The *Durability* score rates prevention of loss.
* The *Difficulty* score rates difficulty of use or setup.

## Holistic Wallet Protocols

These are holistic methods that, when followed completely, are intended to allow the wallet to be used safely, secure from theft, and resilient to loss or damage. These consist of multiple wallets used for different purposes.

### Single Wallets

Each protocol in this section defines a protocol for setting up a single wallet and defines its properties. These can be thought of as a single account.

* [Basic Hot Wallet](singleWalletProtocols/Basic-Hot-Wallet.md)
* [2-of-3 Multisig Wallet Protocol](singleWalletProtocols/2-of-3-Wallet.md)
* [Redundancy-focused 3-of-5 Multisig Wallet Protocol](singleWalletProtocols/3-of-5-Redundancy-focused-Wallet.md)
* [Security-focused 3-of-5 Multisig Wallet Protocol](singleWalletProtocols/3-of-5-Security-focused-Wallet.md)

### Tiered Wallets

These are multi-wallet setups made to support real-world use in a way that strikes a balance between security and convenience in a way that maximizes both by using convenience wallets to store small amounts for frequent transactions and more secure but less frequently used wallets to store large amounts.

* [Simple Two-Tiered Wallet](multiWalletProtocols/Simple-2-Tier-Wallet.md)
<!--* [Simple Three-Tiered Wallet](multiWalletProtocols/Simple-3-Tier-Wallet.md)-->

## Wallet Protocols

These are methods that describe the creation and use of one of the holistic wallet protocols.

Each of these protocols document 4 major actions a good wallet needs to perform: deposit, withdrawal, maintenance, and recovery.

* [Basic Wallet Protocol](singleWalletProtocols/Basic-Wallet-Protocol.md)
  * Durability: 3/10, Security: 6/10, Difficulty: 3/10
  * Note: This protocol does not protect against memory loss or death.
* [Simple-Multisig Wallet Protocol](singleWalletProtocols/Simple-Multisig-Wallet-Protocol.md)
  * Durability: 3/10, Security: 8/10, Difficulty: 3/10
  * Note: This protocol does not protect against memory loss or death.
* [3-of-5 Multisig Wallet Protocol](singleWalletProtocols/3-of-5-Wallet.md)
* [Decoy Wallet](singleWalletProtocols/Decoy-Wallet.md)

## Wallet Host Devices

These are methods that can hold a wallet containing a single seed, and can serve as a single wallet or a piece of a multi-signature wallet.

* [Hardware wallet](walletHostDevices/Hardware-Wallet.md)
  * Cost: ~$60, Security: 7/10, Setup Difficulty: 2/10, Usage Difficulty: 3/10
* [Mobile wallet](walletHostDevices/Mobile-Wallet.md)
  * Cost: ~$0, Security: 3/10, Setup Difficulty: 1/10, Usage Difficulty: 1/10

## Seed Backup Methods

These methods are for backing up a seed (which should usually be passphrase-protected).

* [Metal Backup](backupMethods/Stamped-Metal-Seed-Backup.md)
  * Cost: ~$35, Durability: 10/10, Difficulty: 6/10
* [Secured Paper Backup](backupMethods/Secured-Paper-Seed-Backup.md)
  * Cost: ~$0, Durability: 5/10, Difficulty: 3/10

## Storage Locations

* [Home Safe](storageLocations/Home-Safe.md)
  * Cost: ~$30, Security: 5/10, Durability: 7/10, Difficulty: 3/10
* [Safe Deposit Box](storageLocations/Safe-Deposit-Box.md)
  * Cost: ~$30, Security: 5/10, Durability: 5/10, Difficulty: 7/10
* [On your person](storageLocations/On-Your-Person.md)
  * Cost: $0, Security: 3/10, Durability: 3/10, Difficulty: variable

### Additional notes

There are three important properties a backup should have:

1. It should be verifiable, ie you should be able to easily verify that the backup still exists and hasn't been lost, damaged, or corrupted.
2. It should be tamper-evident, meaning it should be likely that you'll notice if someone has broken into or tampered with your backup or its storage location.
3. It should be theft-resistant and damage-resistant.

## Passphrase Methods

These methods are protocols for creation of memorable passphrases that satisfy the "something you know" in the [three factors of authentication](http://www.pearsonitcertification.com/articles/article.aspx?p=1718488). These methods are intended to contain the steps to create a strong password, keep it secure once you have created it, and ensure it is remembered.

* [Offline Master Passphrase](passphraseMethods/Offline-Master-Passphrase.md)
  * Security: 10/10, Difficulty: 5/10
* [Basic Master Passphrase](passphraseMethods/Basic-Master-Passphrase.md)
  * Security: 5/10, Difficulty: 3/10
* [Non-critical Password](passphraseMethods/Non-critical-Password.md)
  * Security: 3/10, Difficulty: 2/10
* [Non-master Password](passphraseMethods/Non-master Password.md)

## Experimental Methods

For incomplete experimental methods, see [experimental/README.md](experimental/README.md).

# Contribution

Please feel free to propose additional methods using github issues or as pull requests. Also feel free to use github issues as a forum for discussion of anything in this repository. If you'd like to be a co-owner of this repo, please send a message via github issues.

The process for adding a method or significant change to this repo:

1. Create a github issue proposing the change, and let any discussion that needs to happen, happen. 
2. A pull request can be created at any time, but it's recommended to wait to do that work until consensus on the issue has been reached.
3. After at least 2 weeks, if consensus has been reached, a pull request may be accepted into the repo.

# Todo

* Inheritance setup information.

# Change Log

* v0.2 - Added and changed numerous methods and guidance. Things are still in flux. Added an experimental section for incomplete protocols.
* v0.1 - Created repository with a number of methods and protocols.