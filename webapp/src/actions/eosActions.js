const Eos = require("eosjs");
const allKeys = require("./pickKeys.js")();

const agreementContractName = "agreement";

export const INSERT_AGREEMENT = 'INSERT_AGREEMENT';
/*
example info = { 
    requesterActiveAcc: "requester",
    requesterOwnerName: "requesterOwner",
    dataproviderAcc: "dataprovider",
    hash: hashString
}
*/
export const insertAgreement = (info) => {
    return function(dispatch) {
        const eos = Eos({
                keyProvider: allKeys[info.requesterOwnerName].privateKey
            });
        return eos.contract(agreementContractName)
            .then(agreement => agreement.sendagr(
                { 
                    requester: info.requesterActiveAcc,
                    dataprovider: info.dataProviderAcc,
                    hash: info.hash
                },
                {
                    scope: agreementContractName,
                    authorization: [{
                        actor: info.requesterActiveAcc,
                        permission: 'active',
                    }]
                }))
            .then(
                result => {
                    console.log(JSON.stringify(result));
                    if (result.processed.receipt.status == "executed") {
                        dispatch({
                            type: INSERT_AGREEMENT,
                            status: "success"
                        });
                    } else {
                        dispatch({
                            type: INSERT_AGREEMENT,
                            status: "error",
                            error: "Was not executed\n" + JSON.stringify(result, null, 4)
                        });
                    }
                },
                error => dispatch({
                    type: INSERT_AGREEMENT,
                    status: "error",
                    error: "Failed to send\n" + error.message
                }));
        };
};
