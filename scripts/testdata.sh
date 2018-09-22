
agreementPath=/agreement.txt
dataPath=/data.txt

agreementHashString="$(shasum -a 256 $agreementPath)"
agreementHash="$(echo $agreementHashString | cut -d' ' -f1)"

dataHashString="$(shasum -a 256 $dataPath)"
dataHash="$(echo $dataHashString | cut -d' ' -f1)"

for i in a..j
do
    requester=testacc$i
    dataprovider=DATA$i
    key=1

    # Insert agreement
    cleos push action agreement sendagr '["'${requester}'", "'${dataprovider}'", "'${agreementHash}'"]' -p $requester@active

    # Insert data
    cleos push action agreement senddata '["'${dataprovider}'", '$key', "'${dataHash}'"]' -p $dataprovider@active
done





# Print the table rows
echo "Table:"
cleos get table agreement agreement transfers