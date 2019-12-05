# Installing Electrum

This page goes over how to install and verify electrum. *To learn why verifying the software is important, [read this](https://proprivacy.com/email/guides/digital-signature).*

1. Ensure you have gpg installed. If not, see the [GPG installation instructions](installingGPG.md).
2. Go to https://electrum.org/#download
3. Download the installer *and* associated signature.
4. Download ThomasV's public key from [electrum's github repository](https://raw.githubusercontent.com/spesmilo/electrum/master/pubkeys/ThomasV.asc) as indicated in the 'How to verify GPG signatures' section on the download page.
5. Import ThomasV's public key into GPG by running `gpg --import ThomasV.asc`
6. Run `gpg --verify <electrum signature> <electrum installer>` to verify the installer. An example command: `gpg --verify electrum-3.3.8-setup.exe.asc electrum-3.3.8-setup.exe`.
7. Ensure that it says it is a 'Good signature from "Thomas Veogtlin...' in the output. Note that there will be a warning about the key not being certified with a trusted signature. This is expected if you have not participated in the [Web of Trust](https://en.wikipedia.org/wiki/Web_of_trust) ([read this](https://security.stackexchange.com/questions/147447/gpg-why-is-my-trusted-key-not-certified-with-a-trusted-signature) for more info).
8. Save ThomasV's signature somewhere safe, so you can use it again another time (unrelated to this installation).
9. Use the installer you just verified to install electrum.