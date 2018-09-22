const fs = require("fs");

module.exports = function() {

    const extract = function(fileName) {
        const privateKeyExpr = /^Private key: ([0-9a-zA-Z]{51})$/gm;
        const publicKeyExpr = /^Public key: (EOS[0-9a-zA-Z]{50})$/gm;

        const content = fs.readFileSync(__dirname + "/../keys/" + fileName).toString();
        const privateKeyMatch = privateKeyExpr.exec(content);
        const publicKeyMatch = publicKeyExpr.exec(content);
        return {
            privateKey: privateKeyMatch[1],
            publicKey: publicKeyMatch[1]
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
