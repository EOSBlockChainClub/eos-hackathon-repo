eosiocpp -o /opt/eosio/bin/contracts/agreement/agreement.wast  /opt/eosio/bin/contracts/agreement/agreement.cpp
eosiocpp -g /opt/eosio/bin/contracts/agreement/agreement.abi  /opt/eosio/bin/contracts/agreement/agreement.cpp

cleos set contract agreement /opt/eosio/bin/contracts/agreement/ -p agreement@active