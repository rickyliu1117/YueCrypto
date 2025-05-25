```shell
npx hardhat help

#Compile
npx hardhat compile

#Test
npx hardhat test
REPORT_GAS=true npx hardhat test

#Deploy
npx hardhat node
npx hardhat run --network localhost scripts/deploy.js

#Interact with smart contract
#Get the token name
npx hardhat run --network localhost scripts/name.js
