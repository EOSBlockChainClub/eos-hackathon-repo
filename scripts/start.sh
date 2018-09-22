## See https://developers.eos.io/eosio-nodeos/docs/docker-quickstart


docker network create eosdev

docker run --name nodeos -d -p 8888:8888 --network eosdev \
--mount type=bind,src="$(pwd)"/contracts,dst=/opt/eosio/bin/contracts \
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


IPADDRESS="$(docker network inspect eosdev | jq -r '.[].Containers[] | select(.Name=="keosd").IPv4Address')"

alias cleos='docker exec -it nodeos /opt/eosio/bin/cleos --url http://localhost:8888 --wallet-url http://${IPADDRESS%/*}:9876'
alias eosiocpp='docker exec nodeos eosiocpp'