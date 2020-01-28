# Mobile Wallet

Mobile wallets are somewhat more secure than a wallet on a desktop computer, because the process for installing programs and giving them permissions makes it much harder for malicious software to do things like spy on you or steal files controlled by other apps. A rooted phone might be a little easier to compromise, but still note quite as easy as a windows machine.

Mobile wallets should only be used to store small amounts of bitcoin (say up to $1000 worth), since it's relatively easy to steal someone's phone and pin. Finger print sensors can also be fooled by [3D printed fingerprint copies](https://www.businessinsider.com/samsung-galaxy-s10-fingerprint-sensor-tricked-using-3d-printer-2019-4).

## Security Proceedures

1. Always lock the whole phone with a PIN.
2. Use a fingerprint sensor, if available.
3. Use a [Basic Master Passphrase](../passphraseMethods/Basic-Master-Passphrase.md) to protect the wallet itself.

## Rationale

1. A PIN is another thing a theif needs to know in order to unlock your phone and steal your Bitcoins.
2. A fingerprint sensor minimizes the use of the PIN, making it less likely it will be observed by a thief.
3. An additional passphrase protecting your wallet means that a thief would also have had to observe that as well, which is used less often than a PIN and more secure than both a fingerprint or a PIN.

## Weaknesses

* Relatively easy to steal.