#include <eosiolib/eosio.hpp>
#include <string>
#include <eosiolib/print.hpp>

using namespace eosio;
using namespace std;

class agreement : public contract {
    private:

        struct agreedstruct {
            account_name requester;
            account_name dataprovider;
            std::string agreement;
            std::string data;
        };

    public:

        using contract::contract;

        // @ abi action
        void sendagreement(string hash);

        // @ abi action
        void senddata(string hash);

};

void agreement::sendagreement(string hash) {
    
}

void agreement::senddata(string hash) {

}

EOSIO_ABI(agreement, (senddatahash)(sendagreementhash))