# Obtaining Tordl

This page goes over how to obtain and verify a release of the Tordl Wallet Protocols.

1. Download the latest release at https://github.com/fresheneesz/TordlWalletProtocols/releases, which should be a zip file named something like `tordl-release-bundle-vX.Y.Z.zip` (where `X.Y.Z` will be the release version).

2. If you have never imported `fresheneesz's public key`, download it at https://keybase.io/fresheneesz.

   1. Click the string of letters and numbers next to the key icon.
   2. In the pop-up that appears, locate the link reading “this key”.
   3. Right-click the link and select “Save Link As…” or “Download Linked File As…”
   4. Name the file “`fresheneesz.asc`”.

3. Extract the two files inside the release zip file:

   * A file named something like "`tordl-wallet-protocols-vX.Y.Z.zip`" is the  `Tordl Protocols Zip File`,

   *  A file named something like "`tordl-wallet-protocols-vX.Y.Z.zip.sig`" is the `Tordl Protocols Signature File`.

4. [Verify the authenticity of the release's zip file](verifying-a-gpg-signature) using the following things:

   * `file` should be the `Tordl Protocols Zip File`,
   * `signature` should be the `Tordl Protocols Signature File`, and
   * `public key` should be `fresheneesz's public key` (contained in the "`fresheneesz.asc`" from keybase).

5. Extract the zip file into a folder and start using the protocol by opening the main README.md file. 

## Recommendations

* I recommend using [Typora](https://typora.io/) to read the files. You can ctrl-click on links to open them. 