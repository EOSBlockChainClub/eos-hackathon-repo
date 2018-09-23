cleos wallet unlock --password PW5K2g2HyZxm44Vu74aSL9x3GoB354YDMTUXENhcEaP9ykYVU9DZK

### User Pool ####
users=()
for i in {a..i}
do
    users+=(test$i)
done


data="data1"
agreement="agreement"

rnd=$RANDOM
data="$(echo $rnd | shasum -a 256 | cut -d' ' -f1)"


### Path 1 START ### 
# A -> B 
requester=${users[1]}
dataprovider=${users[0]}
key=0

# Insert agreement
cleos push action agreement sendagr '["'${requester}'", "'${dataprovider}'", "'${agreement}'"]' -p $requester@active
# Insert data
cleos push action agreement senddata '["'${dataprovider}'", '$key', "'${data}'"]' -p $dataprovider@active

rnd=$RANDOM
data="$(echo $rnd | shasum -a 256 | cut -d' ' -f1)"


# Path B -> C
requester=${users[2]}
dataprovider=${users[1]}
key=1


# Insert agreement
cleos push action agreement sendagr '["'${requester}'", "'${dataprovider}'", "'${agreement}'"]' -p $requester@active
# Insert data
cleos push action agreement senddata '["'${dataprovider}'", '$key', "'${data}'"]' -p $dataprovider@active

# Path C -> E
requester=${users[4]}
dataprovider=${users[2]}
key=2

rnd=$RANDOM
data="$(echo $rnd | shasum -a 256 | cut -d' ' -f1)"


# Insert agreement
cleos push action agreement sendagr '["'${requester}'", "'${dataprovider}'", "'${agreement}'"]' -p $requester@active
# Insert data
cleos push action agreement senddata '["'${dataprovider}'", '$key', "'${data}'"]' -p $dataprovider@active

# Path E -> F
requester=${users[5]}
dataprovider=${users[4]}
key=3

rnd=$RANDOM
data="$(echo $rnd | shasum -a 256 | cut -d' ' -f1)"


# Insert agreement
cleos push action agreement sendagr '["'${requester}'", "'${dataprovider}'", "'${agreement}'"]' -p $requester@active
# Insert data
cleos push action agreement senddata '["'${dataprovider}'", '$key', "'${data}'"]' -p $dataprovider@active

# Path F -> G
requester=${users[6]}
dataprovider=${users[5]}
key=4

rnd=$RANDOM
data="$(echo $rnd | shasum -a 256 | cut -d' ' -f1)"


# Insert agreement
cleos push action agreement sendagr '["'${requester}'", "'${dataprovider}'", "'${agreement}'"]' -p $requester@active
# Insert data
cleos push action agreement senddata '["'${dataprovider}'", '$key', "'${data}'"]' -p $dataprovider@active

# Path C -> D
requester=${users[3]}
dataprovider=${users[2]}
key=5

rnd=$RANDOM
data="$(echo $rnd | shasum -a 256 | cut -d' ' -f1)"

# Insert agreement
cleos push action agreement sendagr '["'${requester}'", "'${dataprovider}'", "'${agreement}'"]' -p $requester@active
# Insert data
cleos push action agreement senddata '["'${dataprovider}'", '$key', "'${data}'"]' -p $dataprovider@active

# Path D -> H
requester=${users[7]}
dataprovider=${users[3]}
key=6

rnd=$RANDOM
data="$(echo $rnd | shasum -a 256 | cut -d' ' -f1)"


# Insert agreement
cleos push action agreement sendagr '["'${requester}'", "'${dataprovider}'", "'${agreement}'"]' -p $requester@active
# Insert data
cleos push action agreement senddata '["'${dataprovider}'", '$key', "'${data}'"]' -p $dataprovider@active

# Path H -> I
requester=${users[8]}
dataprovider=${users[7]}
key=7

rnd=$RANDOM
data="$(echo $rnd | shasum -a 256 | cut -d' ' -f1)"


# Insert agreement
cleos push action agreement sendagr '["'${requester}'", "'${dataprovider}'", "'${agreement}'"]' -p $requester@active
# Insert data
cleos push action agreement senddata '["'${dataprovider}'", '$key', "'${data}'"]' -p $dataprovider@active



# Print the table rows
echo "Table:"
cleos get table agreement agreement transfers --limit 100