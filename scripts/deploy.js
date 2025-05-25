async function main() {
  //Show Info of the Signer Address
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  //Deploy Math library
  const Math = await ethers.getContractFactory("Math");
  const libMath = await Math.deploy();
  await libMath.waitForDeployment();

  console.log("Math deployed to:", await libMath.getAddress());
  const libMathAddress = await libMath.getAddress();

  //Deploy YueCrypto contract
  const YUEContract = await ethers.getContractFactory("YueCrypto", {
    libraries: {
      Math: libMathAddress,
    },
  });

  yueContract = await YUEContract.deploy();
  await yueContract.waitForDeployment();

  console.log("YUE TOKEN Address:", await yueContract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
