# Properties Key

This page defines the properties used to describe wallet protocols.

## Security

A rough score of general resilience against theft relative to other protocols in the same category.

## Durability

A rough score of general resilience against damage relative to other protocols in the same category.

## Effort

A rough score of the general amount of effort and carefulness needed to use or set up a protocol relative to other protocols in the same category.

## Loss Redundancy

This property describes, in the case all devices are lost, how many storage locations can be totally lost (theft, damage, accidental loss, etc) without resulting in loss of funds. Another way to think about this is that it is the minimum number of storage locations that, if lost, would result in inability to recover funds from seeds alone, minus 1 (eg if losing some two storage locations would result in loss of funds, that is `2-1 = 1` = single redundancy).

For example:

* **Single** redundancy is when one location can be lost and the remaining seeds can still be used to recover funds.
* **Triple** redundancy is when three locations can be lost without losing the ability to recover funds from seeds.
* Redundancy of **none** is when there is one storage location that, if lost, would result in loss of funds.
* **Inaccessible** is when you cannot access funds even if no storage location is lost (eg if you lose your passphrase to a wallet that requires it).

## Compromise Resilience

This property describes how many storage locations can be compromised without resulting in theft of funds. In a security situation, devices can be used to recover (as opposed to devices being ignored for the Redundancy property). For example:

* **Single** security is when the compromise of one location could lead to loss of funds.
* **Triple** security is when at least three locations must be compromised to lead to loss of funds.

## Resilience to the $5 wrench attack

The [$5 wrench attack](https://xkcd.com/538/) is when an attacker forces you to reveal your password and other information under duress.

A wallet protocol qualifies as resistant to this attack if stealing the funds can be done quickly using things on the victim's person or in their home. For example, if theft requires traveling to a secure location (like a safe deposit box) or waiting periods of time (that would require the thief to keep the victim hostage), then the wallet is resilient to this attack.

## Resilience to hostage attacks

A hostage attack is where something or someone is held hostage by an attacker until their demands are met (eg sending money to them). This can't be prevented, but it can be made more difficult. For the purposes of these wallet protocols, a wallet protocol qualifies as resistant to hostage attacks if sending funds requires more than 1 week to finalize any sent funds. This isn't currently possible, but may become possible in the future.