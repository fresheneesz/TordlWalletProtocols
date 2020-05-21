# Simple Multisig Wallet Protocol

This method uses a multiple seeds and redundant backups.

  * [Variable parameters](#variable-parameters)
  * [Actions and Events](#actions-and-events)
    + [Creation](#creation)
    + [Receiving](#receiving)
    + [Spending](#spending)
    + [Check your balance and history](#check-your-balance-and-history)
    + [Maintenance](#maintenance)
    + [Recovery](#recovery)
  * [Recommendations](#recommendations)
  * [Example](#example)
  * [Rationale](#rationale)

## Variable parameters

* [`Host Devices`](../walletHostDevices)
* `M`: The number of keys that need to sign a transaction for the multisig wallet. This is the "M" in "M-of-N".
* `Seed Backup Configuration`: A list of what [backup method](../backupMethods) is used for each seed.
* [`Storage Configuration`](../misc/storage-config.md)
* `Device Configuration`: A list of which combinations of devices and (potentially) passphrase are used to make the wallets that can sign a transaction for the multisig wallet. The length of this list is the "N" in "M-of-N". 

## Actions and Events

### Creation

1. Ensure you have an authentic version of Tordl by following the instructions at [Obtaining Tordl](misc/obtaining-tordl.md).
2. Choose your parameters above, using the *Recommendations* section below.
3. Choose a `name` for each of your seeds. This name should not have any relationship to any of the seed words or passphrases. Something like "Seed 1" or "HW Seed" is a good name.
4. Create an `Unencrypted Data Record` ([digital](../backupMethods/Digital-Data-Record.md) recommended, but [paper](../backupMethods/Paper-Data-Record.md) is ok too) with the following information:
   * The date.
   * The version and name of the Tordl Wallet Protocol(s) you're using.
   * The information for each of the variable parameters you've chosen above.
5. In the next step, make sure to record the following things:
   * In your `Unencrypted Data Record`:
     * The "derivation path" for each wallet and the `name` of the seed it goes with.
   * On the chosen media in your `Seed Backup Configuration`:
     * Each seed and its name.
6. Create one seed on each of the `Host Devices` using your preferred wallet program.
7. Using your preferred wallet program, create a wallet on each of your `Host Devices` according to your `Device Configuration`.
8. Create the multisig wallet by using each of those wallets, using `M` for `m` and the number of wallets in your `Device Configuration` for `n`.
9. Record the master public key from each wallet in your `Unencrypted Data Record`.
10. Verify the wallet works by sending a small amount of funds to it (using the [Receiving](#Receiving) instructions below), and then once received (see the [Checking your balance](#Checking-your-balance-and-history) instructions below), sending those funds back (using the [Spending](#Spending) instructions below).
11. Follow the instructions in the *Setup* section of [Simple Inheritance Plan](../inheritancePlans/Simple Inheritance Plan.md).
12. Create any copies of your seed backups and `Unencrypted Data Record` that you need for your `Storage Configuration`. Note that these copies should be created in the same way as the originals.
13. Store everything as determined in the `Storage Configuration`.
14. Set a calendar event to remind you to execute the **Maintenance** instructions regularly. See item *D* in the *Recommendations* section below.

### Receiving

1. Open the multisig wallet on one of your `Host Devices`.
2. Get the next unused address from the wallet.
3. Communicate that address to the prospective sender.

### Sending

For large transactions, send a small amount first to verify your procedure works correctly, then send the rest. For very large transactions, send the rest in a number of chunks.

1. Open the multisig wallet on one of your `Host Devices`.
2. Create an unsigned transaction to your desired destination.
3. Go to as few of the highest priority storage locations as you can in order to fully sign the transaction. For each device in each storage location:
   1. Start the process to sign the transaction with those devices.
   2. Verify that the address and amount for the transaction displayed on the device match what you expect.
   3. Then sign the transaction.
4. Once the transaction is signed, go back to your main chosen computer (away from any remote storage location) and broadcast the transaction.

### Maintenance

1. Check your wallet's balance and history and ensure it's like you expect.
2. Check for [protocol updates](../misc/protocol-updates).
4. Go to each backup in priority order and [verify each one](../misc/verifying-backup-integrity.md).
5. For any key held by someone other than you, follow the **Verify Third Party Key** instructions.
6. While you do that, also use the **Spending** protocol to send a small amount of funds somewhere and verify the transaction works. If anything goes unexpectedly here, go to the instructions **Storage Location Compromised**. 
7. Ensure your reminder for the next maintenance time is set.

##### Verify Third Party Key

These instructions verify that a third party still has access to a key.

1. Create a single-use random number. Button mashing is ok for this (since its single-use and used close to creation time).
2. Ask the person, organization, or  service to sign that random number.
3. Verify the signature.

##### Storage Location Migration

There are three options for this:

**A**. Move the contents of storage locations to their new destinations in small groups. Each group should not contain enough information for the funds to be stolen from you if that group is stolen from you. Ideally each group is the contents of a single storage location, keeping all other storage contents in their storage locations while transferring the contents of that one storage location.

**B**. Move the coins to a new wallet:

   1. Create a new wallet using the **Creation** steps above.
   2. Use the **Spending** steps to send from your old wallet to your new wallet.

**C**. Some combination of the above two (eg take one group to your destinations and recreate new seeds, etc to replace the rest of the groups).

### Recovery

##### Storage Location Compromised

Use the steps in **Storage Location Migration** option **B** with the additions laid out in the instructions in [Storage Location Compromised](storage-location-compromised.md).

#### Inheritance after Memory loss or Death

Use the instructions in the *Inheritance* section of [Simple Inheritance Plan](../inheritance/Simple Inheritance Plan.md).

## Recommendations

**A.** The `Host Devices` should be as different as possible. For example, don't use two hardware wallets manufactured by the same company.

**B.** When choosing the `Storage Configuration`, the locations of your backups should be as different as possible. For example if you want 2 backups, storing one in a home safe and another in a safety deposit box is more durable than storing each in two separate home safes in the same building. If stored in the safe with a seed, it slightly reduces redundancy (since both the device and the seed can be stolen at the same time). Note that this reduced redundancy isn't reflected by the [redundancy property](../misc/propertiesKey.md) used to evaluate some of the wallet methods, since that excludes fragile things like devices from counting toward redundancy.

**C.** For choosing passphrases, generally:

   * Use an [Offline Master Passphrase](../passphraseMethods/Offline-Master-Passphrase.md) if your device is a hardware wallet or air-gapped machine that allows direct entry of the password.
   * If your device is a mobile device, you obviously can't use an offline passphrase, so use a [Basic Master Passphrase](../passphraseMethods/Basic-Master-Passphrase.md), ideally one that you only use on mobile devices and not on desktop machines (especially not windows machines).

**D.** Its recommended that you go through the *Maintenance* steps **6 months** after the initial deposit and **once per year** thereafter.

## Example

1. Create a seed with a 25th word Offline Master Passphrase on:
  * A Trezor Model T
  * A Coldcard
  * A smartphone
2. Create two copies of each 24-word seed on Blockplate 2.0. Store one (for each seed) in a locked home safe where you keep both keys on your keychain, and store the other (for each seed) in a safe deposit box.
3. Create a 3-of-3 multi-sig wallet [with Electrum](https://bitcoinelectrum.com/creating-a-multisig-wallet/) using those three devices.
4. Store the Trezor and Coldcard in the home safe when not in use.

This results in a setup with a single-redundancy, since at least one seed has only two locations that contain it (home safe and safe deposit box). It also protects you from a malicious hardware wallet, since the attacker would have had to compromise your Trezor, your Coldcard, and your mobile phone.

## Rationale

* An `Unencrypted Data Record` is used to store any non-sensitive information that may be required to restore funds in the case something goes wrong, including in the case of inheritance after death. Digital is recommended for ease of copying and less likelihood of copying errors vs hand writing.
* Spending large amounts should be done in chunks so that, in case a mistake is made with one chunk or something else goes wrong, only one chunk is lost and the rest are safe.
* When spending, verifying the destination and amount are correct on the device itself is necessary to protect against the scenario where malicious software sends a different transaction to your device that steals your funds.
* Running through the *Maintenance* steps more quickly after initial deposit (6 months) than you will subsequently (once per year) is done so that you can verify that you can do it correctly, but if something goes wrong, you're more likely to remember what mistake you might have made (6 months prior).
