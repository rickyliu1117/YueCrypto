const LIBRARY_MATH_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const YUE_CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const ACCOUNT_ADDRESS = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

async function main() {
  const YUEContract = await ethers.getContractFactory("YueCrypto", {
    libraries: {
      Math: LIBRARY_MATH_ADDRESS,
    },
  });

  const yueContract = YUEContract.attach(YUE_CONTRACT_ADDRESS);

  console.log("Balance:", await yueContract.balanceOf(ACCOUNT_ADDRESS));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
