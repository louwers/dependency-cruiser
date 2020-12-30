const localNpmHelpers = require("./local-npm-helpers");

module.exports = {
  addLicenseAttribute(pModuleName, pBaseDirectory, pResolveOptions) {
    let lReturnValue = {};
    if (pResolveOptions.resolveLicenses) {
      const lLicense = localNpmHelpers.getLicense(
        pModuleName,
        pBaseDirectory,
        pResolveOptions
      );

      if (Boolean(lLicense)) {
        lReturnValue.license = lLicense;
      }
    }
    return lReturnValue;
  },
  stripToModuleName(pUnstrippedModuleName) {
    return pUnstrippedModuleName.split("!").pop();
  },
};
