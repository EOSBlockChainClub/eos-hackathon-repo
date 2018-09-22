#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>

using namespace eosio;

class agreement : public contract {
    public:

        using contract::contract;

        // @ abi action
        void test() {
            print("Test");
        }        
};

EOSIO_ABI(agreement, (test))