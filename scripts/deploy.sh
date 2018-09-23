eosiocpp -o /opt/eosio/bin/contracts/agreement/agreement.wast  /opt/eosio/bin/contracts/agreement/agreement.cpp
eosiocpp -g /opt/eosio/bin/contracts/agreement/agreement.abi  /opt/eosio/bin/contracts/agreement/agreement.cpp

cleos wallet unlock --password `cat ./keys/masterpass.txt`

cleos set contract agreement /opt/eosio/bin/contracts/agreement/ -p agreement@active