const fs = require("fs");

module.exports = function() {

    const privateKeyExpr = /^Private key: ([0-9a-zA-Z]{51})$/gm;
    const publicKeyExpr = /^Public key: (EOS[0-9a-zA-Z]{50})$/gm;

    const extract = function(fileName) {
        const content = fs.readFileSync(__dirname + "/../keys/" + fileName).toString();
        const privateKeyMatch = content.match(privateKeyExpr);
        const publicKeyMatch = content.match(publicKeyExpr);
        return {
            privateKey: privateKeyMatch[0],
            publicKey: publicKeyMatch[0]
        };
    };

    return {
        requesterOwner: extract("requesterkeyowner.txt"),
        requesterActive: extract("requesterkeyactive.txt"),
        dataProviderOwner: extract("dataproviderkeyowner.txt"),
        dataProviderActive: extract("dataproviderkeyactive.txt"),
        userOwner: extract("userkeyowner.txt"),
        userActive: extract("userkeyactive.txt")
    };
};
