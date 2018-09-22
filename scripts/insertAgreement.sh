echo "Please enter the username of the requester"
read requester

echo "Please enter the username of the dataprovider"

read dataprovider

echo "Create new agreement, please enter file path"
read path

hashString="$(shasum -a 256 $path)"
hash="$(echo $hashString | cut -d' ' -f1)" # get hash without filename

cleos push action agreement sendagr '["'${requester}'", "'${dataprovider}'", "'${hash}'"]' -p $requester@active

echo "Get the rows"
cleos get table agreement agreement transfers