## See https://developers.eos.io/eosio-nodeos/docs/docker-quickstart


# Create containers

docker network create eosdev

docker run --name nodeos -d -p 8888:8888 --network eosdev \
--mount type=bind,src="$(pwd)"/contracts,dst=/opt/eosio/bin/contracts \
--mount type=bind,src="$(pwd)"/keys,dst=/opt/eosio/bin/keys \
eosio/eos-dev:v1.2.5  \
/bin/bash -c "nodeos -e -p eosio --plugin eosio::producer_plugin \
--plugin eosio::history_plugin --plugin eosio::chain_api_plugin \
--plugin eosio::history_api_plugin \
--plugin eosio::http_plugin -d /mnt/dev/data \
--config-dir /mnt/dev/config \
--http-server-address=0.0.0.0:8888 \
--access-control-allow-origin=* --contracts-console --http-validate-host=false"

docker run -d --name keosd --network=eosdev -p 9876:9876 \
-i eosio/eos-dev:v1.2.5 /bin/bash -c "keosd --http-server-address=0.0.0.0:9876"


# Create aliases

IPADDRESS="$(docker network inspect eosdev | jq -r '.[].Containers[] | select(.Name=="keosd").IPv4Address')"
alias cleos='docker exec -it nodeos /opt/eosio/bin/cleos --url http://localhost:8888 --wallet-url http://${IPADDRESS%/*}:9876'
alias eosiocpp='docker exec nodeos eosiocpp'


# Create accounts

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

## Create keys for account A

cleos create key --file /opt/eosio/bin/keys/Akeyactive.txt
cleos create key --file /opt/eosio/bin/keys/Akeyowner.txt


## Create keys for account B
cleos create key --file /opt/eosio/bin/keys/Bkeyactive.txt
cleos create key --file /opt/eosio/bin/keys/Bkeyowner.txt

## Import Keys

pbkeya="$(grep Public ./keys/requesterkeyactive.txt | awk '{print $3}')"
pvkeya="$(grep Private ./keys/requesterkeyactive.txt | awk '{print $3}')"
pbkeyo="$(grep Public ./keys/requesterkeyowner.txt | awk '{print $3}')"
pvkeyo="$(grep Private ./keys/requesterkeyowner.txt | awk '{print $3}')"

cleos wallet import --private-key ${pvkeya}
cleos wallet import --private-key ${pvkeyo}

## Create account requester

cleos create account eosio requester ${pbkeya} ${pbkeyo}

pbkeya="$(grep Public ./keys/dataproviderkeyactive.txt | awk '{print $3}')"
pvkeya="$(grep Private ./keys/dataproviderkeyactive.txt | awk '{print $3}')"
pbkeyo="$(grep Public ./keys/dataproviderkeyowner.txt | awk '{print $3}')"
pvkeyo="$(grep Private ./keys/dataproviderkeyowner.txt | awk '{print $3}')"

cleos wallet import --private-key ${pvkeya}
cleos wallet import --private-key ${pvkeyo}

## Create account dataprovider

cleos create account eosio dataprovider ${pbkeya} ${pbkeyo}