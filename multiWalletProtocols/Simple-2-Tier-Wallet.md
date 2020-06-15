# Simple Two-tiered Wallet

* Hot Wallet
  * Use [Basic Hot Wallet](../singleWalletProtocols/Basic-Hot-Wallet.md)
* Cold Wallet
  * Uses one of:
    * [2-of-3 Multisig Wallet](../singleWalletProtocols/2-of-3-Wallet.md)
    * [3-of-5 Redundancy-focused Multisig Wallet](../singleWalletProtocols/3-of-5-Redundancy-focused-Wallet.md)
    * [3-of-5 Security-focused Multisig Wallet.md](../singleWalletProtocols/3-of-5-Security-focused-Wallet.md)
* (Optional) If your choice of cold wallet is not resilient to the $5 wrench attack, optionally use some number of [Decoy Wallets](../singleWalletProtocols/Decoy-Wallet.md), where for each:
  * `Wallet Configuration` - Use the same configuration for this wallet as you chose for the cold wallet.
  * `Different Password` should be different than the `Offline Master Passphrase` you use. 

## Rationale

* A recommendation for the number of decoy wallets is not given so that an attacker who knows the victim used this specific wallet protocol won't know how many they might have, nor indeed if they have one at all.