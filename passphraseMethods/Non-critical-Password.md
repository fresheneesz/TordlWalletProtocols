# Non-critical Password

This method is for creating and using a password that, if lost, does not result in permanent loss of data or an account. Most passwords fall under this category if they're used on a website where you can recover your account if you forget your password. 

PINs for something like a hardware wallet can also fall into this category, since the seed used for the hardware wallet should be backed up somewhere safe. Even if loss of the PIN bricks the hardware wallet (like in a Coldcard mk3), loss of the hardware wallet should not result in loss of funds. 

1. Choose a password manager to store the passphrase in. This should ideally be an open source piece of software like (like [Passbolt, KeePass](https://password-managers.bestreviews.net/best-open-source-password-managers/), or [BitWarden](https://www.cnet.com/news/best-password-managers-for-2020/)). Storing non-critical passwords in chrome is also usually ok, tho not recommended for financial accounts. If your password manager is secured with a passphrase, use a [Basic Master Passphrase](Basic-Master-Passphrase.md) for that.
2. Choose a unique password. You should not use the same password for any two different accounts. For a usual passphrase, choose a random sequence of 8-15 letters and numbers with random capitalization. For a PIN, 4-8 numbers should be ok. Don't bother trying to remember it. A good password manager should be available on your phone as well as on a desktop computer.
3. Ensure that the password manager database is backed up in multiple locations. Some password managers do this for you.

## Rationale

1. Password managers protect many passwords behind a single master password allows you to have strong unique passwords for each website and service you use without having to remember them. You only need to remember your master password. The more important a password, the more careful you should be with it.
2. Unique passwords are important because many companies don't properly store passwords in a way that keeps them safe. Companies are often hacked and have customers' data stolen. Companies often store passwords in plain text, or store them in another insecure way that allows the data-thieves to access an account from another companies, if you use the same password for that other account.
3. Passwords with random letters and numbers are recommended because it makes it more secure (harder to crack if the website you use it for improperly stores your passwords) and since you don't need to remember it, it can be complex without downside.
4. 8-15 character passwords is recommended because its almost certainly secure enough (if its random enough), but not so long that it would be a pain to type in by hand on a phone.
5. 4-8 number PINs are ok because PINs are usually used in cases where you also have a physical object that goes along with it (eg a debit card, hardware wallet, etc). If the PIN does not have a physical security item that goes with it, its not really a PIN as assumed here, its something else (so be wary). 