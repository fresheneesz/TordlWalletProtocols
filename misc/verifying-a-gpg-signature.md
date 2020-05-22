# Verifying a GPG Signature

*Information is up to date as of 2019-11-30.*

These instructions describe how to verify a `file` against a `signature` using a `public key`.

1. Ensure you have `gpg` installed. If not, follow the "*Installing GPG*" instructions below.
2. Ensure you have imported the `public key` into GPG before. If you haven't, do it by running `gpg --import <public key>`.
3. Run `gpg --verify <signature> <file>` to verify the `file`. An example command: `gpg --verify electrum-3.3.8-setup.exe.asc electrum-3.3.8-setup.exe`.
4. Ensure that it says it is a 'Good signature from "\<Name of Signer>...' in the output. Note that there will be a warning about the key not being certified with a trusted signature. This is expected if either you or the owner of the `public key` have not participated in the [Web of Trust](https://en.wikipedia.org/wiki/Web_of_trust) ([read this](https://security.stackexchange.com/questions/147447/gpg-why-is-my-trusted-key-not-certified-with-a-trusted-signature) for more info).
5. Save the `signature` somewhere safe, so you can use it again in the future (for unrelated things).

## Installing GPG

This section goes over how to install and verify GPG.

If you're on linux, you can simply install it using your package manager, which should ensure the integrity of the installation automatically.

**Ubuntu/Debian/etc**: sudo apt install gnupg

**CentOS/Fedora/RHEL**: sudo yum install gnupg

**On Windows**:

1. Download GPG from [www.gpg4win.org](https://www.gpg4win.org)
2. Compute a checksum by running `certutil -hashfile <gpg installer> sha256`. Example command: `certutil -hashfile gpg4win-3.1.7.exe sha256`.
3. Verify the checksum matches what's published on [gpg4win's package-integrity page](https://www.gpg4win.org/package-integrity.html)
4. Open the signature details on the installer file.
	1. Right click -> properties -> Digital Signatures.
	2. Select the signature in the list (there should be only one).
	3. Click 'Details'
	5. Click 'View Certificate'
	6. Go to the 'Details' tab
	4. Verify as much of the 'Code Signing Certificate' information from [gpg4win's package-integrity page](https://www.gpg4win.org/package-integrity.html) as you can. Note that you can ignore the sha1_fpr, md5_fpr, and first line of the Subject.

**On a Mac**:

*Todo*