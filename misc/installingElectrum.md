# Installing Electrum

This page goes over how to install and verify electrum. *To learn why verifying the software is important, [read this](https://proprivacy.com/email/guides/digital-signature).*

2. Go to https://electrum.org/#download
3. Download the installer *and* associated signature.
4. Download ThomasV's public key from [electrum's github repository](https://raw.githubusercontent.com/spesmilo/electrum/master/pubkeys/ThomasV.asc) as indicated in the 'How to verify GPG signatures' section on the download page.
4. [Verify the installer against its GPG signature](verifying-a-gpg-signature.md) using the following things:
   1. `file` should be the electrum installer
   2. `signature` should be the installer's associated signature
   3. `public key` should be ThomasV's public key
5. Use the installer you just verified to install electrum.