docker stop keosd
docker stop nodeos

docker rm keosd
docker rm nodeos

docker network rm eosdev

docker volume prune