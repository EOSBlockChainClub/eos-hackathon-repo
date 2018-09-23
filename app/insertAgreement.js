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
    .then(result => console.log(JSON.stringify(result)))
    .catch(console.error);

/*
{
    "broadcast": true,
    "transaction": {
        "compression": "none",
        "transaction": {
            "expiration": "2018-09-23T03:34:12",
            "ref_block_num": 13433,
            "ref_block_prefix": 1145594939,
            "max_net_usage_words": 0,
            "max_cpu_usage_ms": 0,
            "delay_sec": 0,
            "context_free_actions": [],
            "actions": [
                {
                    "account": "agreement",
                    "name": "sendagr",
                    "authorization": [
                        {
                            "actor": "requester",
                            "permission": "active"
                        }
                    ],
                    "data": "0000b82a63a5adba7055729bde6ab24906486168617368"
                }
            ],
            "transaction_extensions": []
        },
        "signatures": [
            "SIG_K1_JxZH6r1LyxL3Khs6soEhFNKJfyMc9vDqL8LQBSwb26GkuvY9guETgnimdrfgvByGi8U4Q8XpfwpvMiZhZQ3PNbK57hXTS2"
        ]
    },
    "transaction_id": "a23856bef8a4fb84d9ee98c5da64c321f7f1e342c116d1dc0fc01013f181bfb2",
    "processed": {
        "id": "a23856bef8a4fb84d9ee98c5da64c321f7f1e342c116d1dc0fc01013f181bfb2",
        "receipt": {
            "status": "executed",
            "cpu_usage_us": 3108,
            "net_usage_words": 15
        },
        "elapsed": 3108,
        "net_usage": 120,
        "scheduled": false,
        "action_traces": [
            {
                "receipt": {
                    "receiver": "agreement",
                    "act_digest": "fd13f814866e535eaa4fd2ad68e8ac1c6c40c5702f1e3d8036d280c371295fab",
                    "global_sequence": 13443,
                    "recv_sequence": 4,
                    "auth_sequence": [
                        [
                            "requester",
                            4
                        ]
                    ],
                    "code_sequence": 1,
                    "abi_sequence": 1
                },
                "act": {
                    "account": "agreement",
                    "name": "sendagr",
                    "authorization": [
                        {
                            "actor": "requester",
                            "permission": "active"
                        }
                    ],
                    "data": {
                        "requester": "requester",
                        "dataprovider": "dataprovider",
                        "hash": "Hahash"
                    },
                    "hex_data": "0000b82a63a5adba7055729bde6ab24906486168617368"
                },
                "elapsed": 2937,
                "cpu_usage": 0,
                "console": "",
                "total_cpu_usage": 0,
                "trx_id": "a23856bef8a4fb84d9ee98c5da64c321f7f1e342c116d1dc0fc01013f181bfb2",
                "inline_traces": []
            }
        ],
        "except": null
    }
}
*/