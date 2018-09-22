eosiocpp -o /opt/eosio/bin/contracts/agreement/agreement.wast  /opt/eosio/bin/contracts/agreement/agreement.cpp
eosiocpp -g /opt/eosio/bin/contracts/agreement/agreement.abi  /opt/eosio/bin/contracts/agreement/agreement.cpp

cleos wallet create --file /opt/eosio/bin/keys/masterpass.txt
cleos create key --file /opt/eosio/bin/keys/userkey.txt