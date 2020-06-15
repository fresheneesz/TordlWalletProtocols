# Decoy Wallet

A decoy wallet is one that you give away in a duress situation, where an attacker is threatening you for your money. This is sometimes known as a $5 wrench attack. The idea is that if they're demanding you give them all your coins, you can trick them into thinking you have done that by giving them coins in a decoy wallet that looks plausibly like your main wallet, but actually contains less funds than your main wallet.

## Variable parameters

* `Wallet Configuration` - The methods used to create and use the wallet this is a decoy for. The only thing that should be different is the passphrase you use.
* `Different Passphrase` - An alternate passphrase used to generate the decoy wallet.

## Creation

* Use the same `Wallet Configuration` you used for the wallet you want to distract an attacker from with this decoy wallet.
* The same seeds and configuration should be used to create the wallet EXCEPT that one passphrase required must be swapped for a `Different Passphrase` (in order to generate a different wallet).
* During setup, OMIT any record of any data specific to the decoy wallet from the storage location most likely to be accessible to a $5 wrench attacker. That storage location is almost certainly your home safe.
  * This includes the `Different Passphrase`.
  * In the case of a multisig wallet, it also includes the master public keys that are derived from any cosigner wallet derived using the `Different Passphrase`.
* Put more funds in this wallet than your Hot Wallet, but less than your Cold Wallet. A reasonable recommendation might be to store 30% of your funds in your decoy wallet(s), and the other 70% in the main wallet you're distracting from.
