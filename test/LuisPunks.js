const { expect } = require('chai');

describe('Luis Punks Contract', () => {
    const setup = async ({ maxSupply = 10000}) => {
        const [owner] = await ethers.getSigners(); // Llenado automaticamente con la informacion de nuestra configuracion
        const LuisPunks = await ethers.getContractFactory("LuisPunks");
        const deployed = await LuisPunks.deploy(maxSupply);

        return {
            owner,
            deployed,
        }
    }
    
    describe('Deployment', () => {

        it('Sets max supply to passed params', async () =>{
            const maxSupply = 4000;

            const { deployed } = await setup({ maxSupply });

            const returnedMaxSupply = await deployed.maxSupply();
            expect(maxSupply).to.equal(returnedMaxSupply);
        })
    })

    describe('Minting', () => {
        it('Mints a new token and assigns it to owner', async () => {
            const { owner, deployed } = await setup({});

            await deployed.mint();

            const ownerOfMinted = await deployed.ownerOf(0);

            expect(ownerOfMinted).to.equal(owner.address);

        })

        it("Has a minting limit", async () => {
            const maxSupply = 2;
            const { deployed } = await setup({ maxSupply });

            // Mint all tokens
            await Promise.all([deployed.mint(),deployed.mint()]);

            // Asserts the last miniting
            await expect(deployed.mint()).to.be.revertedWith("No LuisPunks left :(")

        })
    })

    describe("tokenURI", () => {
        it("returns a valid metadata", async () => {
            const { deployed } = await setup({});

            await deployed.mint();

            const tokenURI = await deployed.tokenURI(0)
 
        })
    } )
})