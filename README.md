# Bitcoin Backup And Storage Methods

**Version:** 0.1

This repository contains a number of methods for backing up and storing bitcoin. These methods are built modularly out of sub-methods that can then be mixed and matched. These methods are intended to be made in such a way that many different products and services can refer to them as part of derived methods that are more specific to a particular product.

Please feel free to propose additional methods using github issues or as pull requests. Also feel free to use github issues as a forum for discussion of anything in this repository. If you'd like to be a co-owner of this repo, please contact me.

Note that in the following summaries and other summaries in this repo:

* The Security rating scores prevention of theft.
* The Durability rating scores prevention of loss.
* The Difficulty rating scores difficulty of use or setup.

## Wallet Creation and Use Protocols

These are holistic methods that, when followed completely, are intended to allow the wallet to be used safely, secure from theft, and resilient to loss or damage.

* [Basic Wallet Protocol](walletProtocols/Basic-Wallet-Protocol.md)
  * Durability: 3/10, Security: 6/10, Difficulty: 3/10
  * Note: This protocol does not protect against memory loss or death.
* [Multi-sig Wallet Protocol](walletProtocols/Multi-sig-Wallet-Protocol.md)
  * Durability: 3/10, Security: 8/10, Difficulty: 3/10
  * Note: This protocol does not protect against memory loss or death.
<!--
* [Federated Wallet Protocol](walletProtocols/)
  * Durability: 10/10, Security: 4/10, Difficulty: 6/10
* [Time-locked Federated Wallet Protocol](walletProtocols/)
  * Durability: 10/10, Security: 9/10, Difficulty: 10/10
-->

## Wallet Host Devices

These are methods that can hold a wallet containing a single seed, and can serve as a single wallet or a piece of a multi-signature wallet.

* [Hardware wallet](walletHostDevices/Hardware-Wallet.md)
  * Cost: ~$60, Security: 7/10, Setup Difficulty: 2/10, Usage Difficulty: 3/10
* [Mobile wallet](walletHostDevices/Mobile-Wallet.md)
  * Cost: ~$0, Security: 3/10, Setup Difficulty: 1/10, Usage Difficulty: 1/10
<!--
* [Airgapped Computer Wallet](walletHostDevices/Airgapped-Computer-Wallet.md)
  * Cost: ~$1, Security: 7/10, Setup Difficulty: 10/10, Usage Difficulty: 10/10
-->

## Seed Backup Methods

These methods are for backing up a seed (which should usually be passphrase-protected).

* [Metal Backup](seedBackupMethods/Stamped-Metal-Backup.md)
  * Cost: ~$30, Durability: 10/10, Difficulty: 6/10
* [Secured Paper Backup](seedBackupMethods/Secured-Paper-Backup.md)
  * Cost: ~$0, Durability: 5/10, Difficulty: 3/10

## Seed Backup Locations

* [Home Safe](seedBackupLocations/Home-Safe.md)
  * Cost: ~$30, Security: 5/10, Durability: 7/10, Difficulty: 3/10
* [Safety Deposit Box](seedBackupLocations/Safe-Deposit-Box.md)
  * Cost: ~$30, Security: 5/10, Durability: 5/10, Difficulty: 7/10

## Passphrase Methods

These methods are protocols for creation of memorable passphrases that satisfy the "something you know" in the [three factors of authentication](http://www.pearsonitcertification.com/articles/article.aspx?p=1718488). These methods are intended to contain the steps to create a strong password, keep it secure once you have created it, and ensure it is remembered.

* [Offline Master Passphrase](passphraseMethods/Offline-Master-Passphrase.md)
  * Security: 10/10, Difficulty: 5/10
* [Basic Master Passphrase](passphraseMethods/Basic-Master-Passphrase.md)
  * Security: 5/10, Difficulty: 3/10
* [Non-critical Password](passphraseMethods/Non-critical-Passphrase.md)
  * Security: 3/10, Difficulty: 2/10

# Change Log

* v0.1 - Created repository with a number of methods and protocols.