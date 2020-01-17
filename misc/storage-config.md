# Storage Configuration

A list of which [storage location](../storageLocations) stores which seeds and devices. This should specify where the following items are stored:

* Seeds
* Devices
* Unencrypted information file

It should also specify an ordered priority for the storage locations. The locations with the highest priority would be the ones you go to most often, and the locations with the lowest priority are ones you would go to least often. In the case that your wallet setup requires you to access multiple storage locations, you would always go to as few locations as possible, and always the same locations if possible (as long as your higher priority locations haven't been compromised). 

## Rationale

* You should go to as few storage locations as possible because every access makes those locations less safe. An attacker might be following you and trying to determine how to steal from your storage locations. Or accidents can be triggered that result in loss of the things stored there.
* You should always go to the same storage locations, rather than varying which locations you go to, because if you vary which locations you go to, it gives an attacker the opportunity to get information about all your storage locations. Visiting the same ones for regular use means other rarely used storage locations are less likely to be compromised. 