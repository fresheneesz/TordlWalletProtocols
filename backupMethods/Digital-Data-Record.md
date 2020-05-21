# Digital Data Record

This is a semi-durable storage method good for storing information digitally. 

## Variable Parameters

* `storage medium`
* `content`

## Instructions

### Creation

1. If the data is sensitive, consider creating the data on an air-gapped machine and encrypting the data using an [Offline Master Passphrase](../passphraseMethods/Offline-Master-Passphrase). Then the encrypted data can be written to its final `storage medium`. 
2. Write the data to a `storage medium`. For example:
   * To an optical disc built for long term durability, like the [M-Disc](https://en.wikipedia.org/wiki/M-DISC).
   * To a drive that has a redundant backup.

### Accessing the Data

1. If the data is encrypted, decrypt it. If the data was created on an air-gapped machine, only decrypt it on an air-gapped machine.
2. Otherwise, just simply access it however you like.

## Recommendations

* If the passphrase has 6 or more words, it can safely be transferred to a disk on a networked computer. If it has less than 6 words, make sure the storage medium is at most very rarely accessible on an online machine or that leaking the data is only semi-sensitive (eg not valuable enough for someone to go through lots of effort to steal).
* If you're writing to an optical disk, append to a write-once disk that's kept open for appending more data. That way you can be sure the data won't be overwritten but you can still add more data when necessary. 

## Rationale

* Optical discs are recommended because they have longer data retention and aren't susceptible to electro-magnetic disturbances like electro magnetic pulses, unlike alternatives like SD cards, hard drives, or flash drives.
* The M-Disc is recommended because it is rated to last hundreds of years and has been shown to be in multiple studies to be superior to at least some optical media competitors. 