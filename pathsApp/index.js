Eos = require('eosjs')

const masterKey = process.env.master_key;

const eos = Eos({
    keyProvider: masterKey
});

eos.getTableRows({
    code: 'agreement',
    scope: "agreement",
    table: 'transfers',
    json: true
}).then((rows) => {
    console.log(rows);
});
