# Basic Wallet Protocol

This method uses a single seed and redundant backups.

* [Variable parameters](#variable-parameters)
* [Actions and Events](#actions-and-events)
  + [Creation](#creation)
  + [Receiving](#receiving)
  + [Spending](#spending)
  + [Maintenance](#maintenance)
  + [Recovery](#recovery)
* [Recommendations](#recommendations)
* [Example](#example)

## Variable parameters

* [`Host Device`](../walletHostDevices)
* [`Seed Backup Method`](../backupMethods)
* [`Storage Configuration`](../misc/storage-config.md)
* `Passphrase`
  * If `Host Device` is offline (eg a HW wallet), an [Offline Master Passphrase](../passphraseMethods/Offline-Master-Passphrase.md).
  * If `Host Device` is online (eg a phone), a [Basic Master Passphrase](../passphraseMethods/Basic-Master-Passphrase.md).

## Actions and Events

### Creation

1. Ensure you have an authentic version of Tordl by following the instructions at [Obtaining Tordl](misc/obtaining-tordl.md).
2. Choose your parameters above, using the *Recommendations* section below.
3. Choose a `name` for your seed.
4. Create an `Unencrypted Data Record` (either [digital](../backupMethods/Digital-Data-Record.md) or [paper](../backupMethods/Paper-Data-Record.md)) with the following information:
   * The date.
   * The version and name of the Tordl Wallet Protocol(s) you're using.
   * The information for each of the variable parameters you've chosen above.
5. In the next step, make sure to record the following things:
   * In your `Unencrypted Digital Data Record`:
     * The "derivation path" for your wallet and the `name` of the seed it goes with.
   * Using your chosen `Seed Backup Method`:
     * Your seed and its name.
6. Create your seed on the `Host Device` using your preferred wallet program. Protect the seed with your `Passphrase`. 
7. Create copies of your seed backups (using the `Seed Backup Method`) until the number of seed backups you have is the same as the number of storage locations in your `Storage Configuration`. Do the same with your `Unencrypted Data Record`. Note that these copies should be created in the same way as the originals.
8. Store the backups and copies of your `Unencrypted Data Record` according to your `Storage Configuration`.
9. Set a calendar event to remind you to execute the **Maintenance** instructions regularly. See item *B* in the *Recommendations* section below.

### Receiving

1. Open the wallet on your `Host Device`.
2. Get the next unused address from the wallet.
3. Communicate that address to the prospective sender.

### Sending

1. Open the wallet on your `Host Device`.
2. Create a transaction to your desired destination.

### Maintenance

1. Check for [protocol updates](../misc/protocol-updates).
2. [Verify your backup](../misc/verifying-backup-integrity.md).
3. Ensure your reminder for the next maintenance time is set.

### Recovery

These are instructions on how to recover from various wallet problems.

##### Unable To Access

If you're no longer able to access your wallet:

1. If the device looks like it may have been compromised, follow the instructions under *Device Storage Location Compromised*.
2. Get the seed from a storage location and create a new wallet on your `Host Device` or a new `Host Device` using the seed and your `Passphrase`. 
3. Put the seed back in its storage location.

##### Device Storage Location Compromised

If your device or a storage location looks like it has been tampered with, damaged, or have had things go missing:

* Create a new wallet using the *Creation* instructions with the additions laid out in the instructions in [Storage Location Compromised](storage-location-compromised.md).

## Recommendations

**A.** If your `Host Device` is a phone, ideally your passphrase should be one that you only use on mobile devices and not on desktop machines (especially not windows machines). 

**B.** For naming your seed, the name should not have any relationship to any of the seed words or passphrases. Something like "Seed 1" or "HW Seed" is a good name.

**C.** Its recommended that you Verify Backup Integrity **6 months** after the initial deposit and **once per year** thereafter.

## Example

1. Create a seed on a Trezor Model T with a 25th word Offline Master Passphrase.
2. Create two copies of the 24-word seed on two Blockplate 2.0s, Store one in a locked home safe where you keep both keys on your keychain, and store the other in a safe deposit box.
3. Also store the Trezor in the home safe when not in use.

This results in a setup with a single-redundancy, since there are only two locations that contain copies of your wallet seed.