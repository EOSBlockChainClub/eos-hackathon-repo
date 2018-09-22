echo "Please enter the username of the dataprovider"
read dataprovider

echo "Please enter the primary key of transaction"

read key

echo "Create new agreement, please enter data file path"
read path

hashString="$(shasum -a 256 $path)"

hash="$(echo $hashString | cut -d' ' -f1)" # get hash without filename

cleos push action agreement senddata '["'${dataprovider}'", '$key', "'${hash}'"]' -p $dataprovider@active

echo "Get the rows"
cleos get table agreement agreement transfers