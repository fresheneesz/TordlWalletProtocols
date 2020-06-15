The Setup Protocol is used to prepare hardware, and download and verify needed software & documentation.

The first thing we need to do is verify the integrity of the Glacier protocol document (the one you are reading) to ensure that it has not been tampered with. After verifying the document, we’ll print a hardcopy.

Printing is important, because a verified electronic copy will not be accessible at all times during protocol execution due to reboots and other changes to the computing environment. Printing a hardcopy ensures there is always a verified copy of the document available.

Find a computer which has Internet access, printer access, and which you have permission to install new software on. We’ll refer to this computer as the “SETUP 1” computer.
Review the errata for the version of Glacier you are using at https://github.com/GlacierProtocol/GlacierProtocol/releases.
Download the latest full release of Glacier (not just the protocol document) at https://github.com/GlacierProtocol/GlacierProtocol/releases.
If your browser does not automatically extract the ZIP file contents into a folder within your downloads directory, do so.
Rename the folder to “glacier.”
If you have used Glacier before, and you know you have the Glacier public key imported into a local GPG keyring, skip the next step. (If you don’t know, that’s fine; proceed as normal.)
Obtain the Glacier “public key,” used to cryptographically verify the protocol document.