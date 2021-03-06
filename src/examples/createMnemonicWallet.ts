import { networks, generateMnemonic } from "../index"

async function main() {
  const network = networks.testnet
  const mnemonic = generateMnemonic()
  const password = "covfefe"

  const wallet = await network.fromMnemonic(mnemonic, password)

  console.log("mnemonic:", mnemonic)
  console.log("public address:", wallet.address)
  console.log("private key (WIF):", wallet.toWIF())
}

main().catch((err) => console.log(err))

/*
Output Example:

mnemonic: hold struggle ready lonely august napkin enforce retire pipe where avoid drip
public address: qLUHmrFGexxpyHwQphLpE1czZNFE5m1xmV
private key (WIF): cNQKccYYQyGX9G9Qxq2DJev9jHygbZpb2UG7EvUapbtDx5XhkhYE
 */
