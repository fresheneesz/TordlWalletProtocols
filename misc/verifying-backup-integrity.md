# Verify Backup Integrity

For a backup, verify that:

* The storage location is secured as expected (eg locks are in working order, etc).
* All things that are supposed to be stored at each location are still stored there.
* All contents are in good physical condition.
* Nothing looks tampered with. *Check your Backup Methods for how to do this*.
* There have been no attempted unauthorized accesses. *Check your Storage Location method for how to do this*.

If some of the contents are no longer in good physical condition, and you're sure this isn't the result of tampering, then replace those items. If anything else is wrong, use the instructions under **Storage Location Compromised** in your wallet protocol.

## Rationale

* Verifying the integrity of your backups periodically can prevent loss of backups and can catch attempted theft before its completed.
* When verifying backup integrity, you check to make sure everything is in order and doesn't seem tampered with in order to discover if an attacker has been trying to get at your funds, seeds, or other stored data. If they have, they may be close to having enough information to steal your funds, and so items that have been tampered with may indicate that the data on them has been stolen.