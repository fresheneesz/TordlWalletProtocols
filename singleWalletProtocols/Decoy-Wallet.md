# Hidden Wallet

A decoy wallet is one that you give away in a duress situation, where an attacker is threatening you for your money (sometimes known as a $5 wrench attack). The idea is that if they're demanding you give them all your coins, you can trick them into thinking you have done that by giving them coins in a decoy wallet that looks plausibly like your main wallet (the hidden wallet), but actually contains less funds than your main wallet.

This guide will turn your normal wallet into a decoy wallet, and the wallet created with this guide will be the hidden wallet.

## Variable parameters

* `Wallet Configuration` - The methods used to create and use the wallet acting as decoy for this wallet. The only thing that should be different is the passphrase you use.
* `Different Passphrase` - An alternate passphrase used to generate the hidden wallet.

## Creation

* Ensure the wallet that becomes the decoy wallet for this hidden wallet does not have an on-chain record of substantially more funds than you plan on storing in the decoy wallet.
* Use the same `Wallet Configuration` you used for the wallet that will be the decoy wallet.
* The same seeds and configuration should be used to create the wallet EXCEPT that one passphrase required must be swapped for a `Different Passphrase` (in order to generate a different wallet).
* During setup, OMIT any record of any data specific to the hidden wallet from the storage location most likely to be accessible to a $5 wrench attacker. That storage location is almost certainly your home safe.
  * This includes the `Different Passphrase`.
  * In the case of a multisig wallet, it also includes the master public keys that are derived from any cosigner wallet derived using the `Different Passphrase`.
* Put more funds in the decoy wallet than your Hot Wallet, but less than your hidden wallet. A reasonable recommendation might be to store 20% of your funds in your decoy wallet(s), and the other 80% in the hidden wallet you're distracting from.
