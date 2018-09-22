eosiocpp -o /opt/eosio/bin/contracts/agreement/agreement.wast  /opt/eosio/bin/contracts/agreement/agreement.cpp
eosiocpp -g /opt/eosio/bin/contracts/agreement/agreement.abi  /opt/eosio/bin/contracts/agreement/agreement.cpp

cleos wallet create --file /opt/eosio/bin/keys/masterpass.txt
cleos create key --file /opt/eosio/bin/keys/userkeyactive.txt
cleos create key --file /opt/eosio/bin/keys/userkeyowner.txt

cleos wallet import --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3 # default private key of eosio

pbkeya="$(grep Public ./keys/userkeyactive.txt | awk '{print $3}')"
pvkeya="$(grep Private ./keys/userkeyactive.txt | awk '{print $3}')"
pbkeyo="$(grep Public ./keys/userkeyowner.txt | awk '{print $3}')"
pvkeyo="$(grep Private ./keys/userkeyowner.txt | awk '{print $3}')"


cleos wallet import --private-key ${pvkeya}
cleos wallet import --private-key ${pvkeyo}

cleos create account eosio agreement ${pbkeya} ${pbkeyo}

cleos set contract agreement /opt/eosio/bin/contracts/agreement/ -p agreement@active