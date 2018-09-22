# Create test accounts

mkdir -p ./keys/testkeys

for i in {a..g}
do
  cleos create key --file /opt/eosio/bin/keys/testkeys/testkeyactive$i.txt
  cleos create key --file /opt/eosio/bin/keys/testkeys/testkeyowner$i.txt

  pbkey="$(grep Public ./keys/testkeys/testkeyactive$i.txt | awk '{print $3}')"
  pvkey="$(grep Private ./keys/testkeys/testkeyowner$i.txt | awk '{print $3}')"

  cleos wallet import --private-key ${pvkey}

  cleos create account eosio test$i ${pbkey} ${pbkey}

done