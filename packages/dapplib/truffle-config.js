require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note predict upgrade inflict clock oil twin'; 
let testAccounts = [
"0x70c9af0b70cc8700a3a1b9a109ede3adb38dd18794cb768d20d236179ede4ff7",
"0xef690ee80fc857447fe34a40cdc4bebe2979f015f09d2e9baa5def25a95181bd",
"0x232ef9867977a870b54bafec2f71866c6bee269de0689addde66555f6b2cc311",
"0xc83afe17038bafc673d72d1ab2fa5b69ab230f5c857cd625da88549c65c98054",
"0x18e849e00250e95140488fade6d9d8abaed353d82a37dc31315d23a1ad530abf",
"0xa69f48b79c378f61b2325474c28a8d950199953a75de827999862a1e02de2a3d",
"0x8eb73199e4cac2777d5c980db6264cf1bb6ed64c6c65c7b36b44dd1d2b8adcfa",
"0xe904bfda171173c8bfb89a6624aae6522bebeb6974b092ef6fea967e6135f109",
"0xe25e58bf76fab42f260cc5ebb7c9c57ef29b747cb4b3cef90f4e8379ce63b246",
"0x4e4b7d7163cf5e47c2b85f739c2534c1cdcc1b5fe9f3878fe0c606f9413f819b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

