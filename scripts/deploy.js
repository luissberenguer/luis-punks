const deploy = async () => {
    // El deployer nos permite desplegar el CI a la red que tengamos configurada
    const [deployer] = await ethers.getSigners(); // Llenado automaticamente con la informacion de nuestra configuracion

    console.log("Deploying contract with the account: ", deployer.address);
    //Toma la informacion del cache de configuracion y nos trae la infomacion que necesita para desplega los metodos
    const LuisPunks = await ethers.getContractFactory("LuisPunks");
    const deployed = await LuisPunks.deploy();

    console.log("LuisPunks is deployed at: ", deployed.address)
};

// Una vez que se complete cierre el proceso
deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
