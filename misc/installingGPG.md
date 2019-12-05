# Installing GPG

*Information is up to date as of 2019-11-30.*

This page goes over how to install and verify GPG.

If you're on linux, you can simply install it using your package manager, which should ensure the integrity of the installation automatically.

A. Ubuntu/Debian/etc: sudo apt install gnupg\
B. CentOS/Fedora/RHEL: sudo yum install gnupg

On Windows:

1. Download GPG from [www.gpg4win.org](https://www.gpg4win.org)
2. Compute a checksum by running `certutil -hashfile <gpg installer> sha256`. Example command: `certutil -hashfile gpg4win-3.1.7.exe sha256`.
3. Verify the checksum matches what's published on [gpg4win's package-integrity page](https://www.gpg4win.org/package-integrity.html)
4. Open the signature details on the installer file.
	1. Right click -> properties -> Digital Signatures.
	2. Select the signature in the list (there should be only one).
	3. Click 'Details'
	4. Select the countersignature in the list (there should be only one).
	5. Click 'View Certificate'
	6. Go to 'Details'
	4. Verify as much of the 'Code Signing Certificate' information from [gpg4win's package-integrity page](https://www.gpg4win.org/package-integrity.html) as you can. Note that you can ignore the sha1_fpr, md5_fpr, and first line of the Subject.

On a Mac:

*Todo*