#!/usr/bin/env node

const Eos = require("eosjs");
const allKeys = require("./pickKeys.js")();

const requesterAcc = "requester";
const dataProviderAcc = "dataprovider";

const hashString = "Hahash";

const eos = Eos({
    keyProvider: allKeys.requesterOwner.privateKey
});

eos.contract("agreement")
    .then(agreement => agreement.sendagr(
        { 
            requester: requesterAcc,
            dataprovider: dataProviderAcc,
            hash: hashString
        },
        {
            scope: "agreement",
            authorization: [{
                actor: requesterAcc,
                permission: 'active',
            }]
        }))
    .then(console.log)
    .catch(console.error);