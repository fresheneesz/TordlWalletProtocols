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

1. Ensure you have an authentic version of Tordl by following the instructions at [Obtaining Tordl](../misc/obtaining-tordl.md).
2. Choose your parameters above, using the *Recommendations* section below.
3. Choose a `name` for your seed.
4. Create an `Unencrypted Data Record` (either [digital](../backupMethods/Digital-Data-Record.md) or [paper](../backupMethods/Paper-Data-Record.md)) with the following information:
   * The date.
   * The version and name of the Tordl Wallet Protocol(s) you're using.
   * The information for each of the variable parameters you've chosen above.
5. In the next step, make sure to record the following things:
   * In your `Unencrypted Data Record`:
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

**Periodic Maintenance**

1. Check for [protocol updates](../misc/protocol-updates).
2. [Verify your backup](../misc/verifying-backup-integrity.md).
3. Ensure your reminder for the next maintenance time is set. (See item C in *Recommendations*).

##### Storage Location Migration

There are two options:

**A.** Simply move the seed to its new storage location. Have the storage location prepared before moving the seed (eg don't let your seed sit around on your desk or in some interim place if possible). Keep an eye on your seed and make sure its safe the entire time until it ends up in the new storage location. If traveling with it, keep it hidden and ideally behind a lock (eg in a car's lockable glove compartment, or in a locked safe you're transporting as well). Barring that, putting it somewhere difficult to get at would be helpful, like deep inside a bag with other items and putting that bag behind or underneath all your other bags.

**B.** Move the coins to a new wallet. 

1. Create a new wallet using the **Creation** steps above.
2. Create an address (or addresses) to sweep the funds from the compromised wallet into. Write them down somewhere temporarily.
3. Use the **Spending** steps to send from your old wallet to your new wallet.

### Recovery

These are instructions on how to recover from various wallet problems. If you have a problem and need to recover, remember **DO NOT RUSH**. Rushing causes mistakes. Think through all the steps before taking the first step. Keep a clear head and things will be ok.

##### Lost Device and Device or Storage Location May be Compromised

If the device or the location its stored in looks like it may have been tampered with, damaged, or have had things go missing:

1. If you think your device might be compromised, get a new device.
2. Create a new wallet using the *Creation* instructions with the additions laid out in the instructions in [Storage Location Compromised](../misc/storage-location-compromised.md).
3. Create an address (or addresses) to sweep the funds from the compromised wallet into. Write them down somewhere temporarily.
4. Send your funds from your old wallet to the new wallet.
   1. If you have a non-compromised device already configured with your old seed, use that to send.
   2. Otherwise, on a new non-compromised device (can be the same "new device" as the one from step 1.0), restore your seed from the security location that is least-likely to have been compromised. Then use that new device to send to the address(es) from step 3.0.

##### Device erased

If you erased your device:

1. Get the device from its storage location.
2. Go to the highest priority storage location that contains the seed backup for the lost or erased device.
3. While at the storage location, Restore the seed onto that device.
4. Return the device to its storage location.

##### Inheritance after Memory loss or Death

This wallet doesn't support inheritance if you have lost the password in any way. 

## Recommendations

**A.** If your `Host Device` is a phone, ideally your passphrase should be one that you only use on mobile devices and not on desktop machines (especially not windows machines). 

**B.** For naming your seed, the name should not have any relationship to any of the seed words or passphrases. Something like "Seed 1" or "HW Seed" is a good name.

**C.** Its recommended that you Verify Backup Integrity **6 months** after the initial deposit and **once per year** thereafter.

## Example

1. Create a seed on a Trezor Model T with a 25th word Offline Master Passphrase.
2. Create two copies of the 24-word seed on two Blockplate 2.0s, Store one in a locked home safe where you keep both keys on your keychain, and store the other in a safe deposit box.
3. Also store the Trezor in the home safe when not in use.

This results in a setup with a single-redundancy, since there are only two locations that contain copies of your wallet seed.