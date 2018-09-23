# Create test accounts

mkdir -p ./keys/testkeys

for i in {a..i}
do
  cleos create key --file /opt/eosio/bin/keys/testkeys/testkeyactive$i.txt
  cleos create key --file /opt/eosio/bin/keys/testkeys/testkeyowner$i.txt

  pbkeya="$(grep Public ./keys/testkeys/testkeyactive$i.txt | awk '{print $3}')"
  pvkeya="$(grep Private ./keys/testkeys/testkeyactive$i.txt | awk '{print $3}')"

  cleos wallet import --private-key ${pvkeya}

  pbkeyo="$(grep Public ./keys/testkeys/testkeyowner$i.txt | awk '{print $3}')"
  pvkeyo="$(grep Private ./keys/testkeys/testkeyowner$i.txt | awk '{print $3}')"

  cleos wallet import --private-key ${pvkeyo}

  cleos create account eosio test$i ${pbkeya} ${pbkeyo}

done