#include <eosiolib/eosio.hpp>
#include <string>
#include <eosiolib/print.hpp>

using namespace eosio;
using namespace std;

class agreement : public contract {
    private:

        ///@abi table transfers
        struct agreedstruct {
            uint64_t prim_key;

            account_name requester;
            account_name dataprovider;
            std::string agreement;
            std::string data;

            uint64_t primary_key() const { return prim_key; }
        };

        eosio::multi_index< N(transfers), agreedstruct> transfers;

    public:

        agreement(account_name self): contract(self), transfers(self, self) {}

        // @ abi action
        void sendagr(account_name requester, account_name dataprovider, string hash);

        // @ abi action
        void senddata(account_name dataprovider, uint64_t prim_key, string datahash);


};

void agreement::sendagr(account_name requester, account_name dataprovider, string hash) {
    require_auth(requester);

    transfers.emplace(requester, [&](auto& agreed) {

        agreed.prim_key = transfers.available_primary_key();

        agreed.requester = requester;
        agreed.dataprovider = dataprovider;
        agreed.agreement = hash;
    });
}

void agreement::senddata(account_name dataprovider, uint64_t prim_key, string datahash) {
    require_auth(dataprovider);

    auto itr = transfers.find(prim_key);

    eosio_assert(itr != transfers.end(), "Agreement not found");
    eosio_assert(itr->dataprovider == dataprovider, "Data provider not allowed");
    eosio_assert(itr->data.size() == 0, "Data already provided");

    transfers.modify(itr, dataprovider, [&](auto& agreed) {
        agreed.data = datahash;
    });
}


EOSIO_ABI(agreement, (sendagr)(senddata))