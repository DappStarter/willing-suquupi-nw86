require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note soccer purchase install process bottom gauge'; 
let testAccounts = [
"0x0a0e9663658a6e3a1e9298135e477e63e2dfb30ef641852da476db9093defaa4",
"0x374f337daa92daccb0066d1b75dc2e6112dfa1f462e04c45ac573c60e9db8a13",
"0x78a3beff0b55a6ad9a8efc87406bd7bc835e080feaa70f65684e0c1a31c886ea",
"0x54332b4536afcb58b962ac1460a64d5a3cee73c1811a40cedc4c572813fb8ae4",
"0xa97f15a11784eb7a953882f46a0ec88d1b2a9036daa4a21668cfb1562816d610",
"0xc95e75ca299b64c77c880eab096aa5719ae84a5a154f31348600a716a1abbd10",
"0x891935998b9918ddfe6e7db79231b8f69151a7409fc591136eef0fd2b009fb9d",
"0x0ed838b2575dbea3106f026a03ddb3cc3bca697ca8e45c576006d658094b59d5",
"0x6baa3cc9c800810cc2f342e51f3d9179aec832fc786ce7315ed1f5b04669934d",
"0x4d459a882db81b30ef9722a54e6ac64b9c74be8dc6a5eb5b9351af8edaa42309"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


