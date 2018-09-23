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
        requester: {
            owner: extract("requesterkeyowner.txt"),
            active: extract("requesterkeyactive.txt")
        },
        dataProvider: {
            owner: extract("dataproviderkeyowner.txt"),
            active: extract("dataproviderkeyactive.txt")
        },
        user: {
            owner: extract("userkeyowner.txt"),
            active: extract("userkeyactive.txt")
        }
    };
};
