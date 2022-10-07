import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://hackathon.lsp.team/hk',
    timeout: 15000,
});

export const api = {
    /* создание кошелька */
    async createWallet() {
        window.alert('NO!!!')
        return
        const {
            privateKey,
            publicKey
        } =  await axios.post('/v1/wallets/new')

        return {
            privateKey,
            publicKey
        }
    },
    /* метод перевода Matic с кошелька на кошелек
    - `fromPrivateKey` - приватный ключ кошелька отправителя
    - `toPublicKey` - публичный ключ (адрес) кошелька получателя
    - `amount` - сумма перевода валюты
    * */
    async transferMatic({fromPrivateKey, toPublicKey, amount}) {
        const {
            transactionHash
        } = await axios.post(`/v1/transfers/matic`, {
            fromPrivateKey,
            toPublicKey,
            amount
        })

        return { transactionHash }
    },
    /* метод перевода Ruble с кошелька на кошелек
    - `fromPrivateKey` - приватный ключ кошелька отправителя
    - `toPublicKey` - публичный ключ (адрес) кошелька получателя
    - `amount` - сумма перевода валюты
    * */
    async transferRuble({ fromPrivateKey, toPublicKey, amount }) {
        const {
            transactionHash
        } = await axios.post(`/v1/transfers/ruble`, {
            fromPrivateKey,
            toPublicKey,
            amount
        })

        return { transactionHash }
    },
    /* метод перевода NFT с кошелька на кошелек
    - `fromPrivateKey` - приватный ключ кошелька отправителя
    - `toPublicKey` - публичный ключ (адрес) кошелька получателя
    - `tokenId` - идентификатор NFT
    * */
    async transferNft({ fromPrivateKey, toPublicKey, tokenId }) {
        const {
            transactionHash
        } = await axios.post(`/v1/transfers/nft`, {
            fromPrivateKey,
            toPublicKey,
            tokenId
        })
        // `v1/transfers/nft`
    },
    /* метод статуса выполнения транзакции */
    async transferStatus() {
        // `/v1/transfers/status/{transactionHash}`
    },
    /* метод получения баланса по кошельку */
    async walletBalance(){
        // `/v1/wallets/{publicKey}/balance`
    },
    /* метод получения баланса NFT-коллекций по кошельку */
    async walletNftBalance(){
        // `/v1/wallets/{publicKey}/nft/balance`
    },
    /* метод генерации NFT-коллекций на кошелек */
    async generateNft() {
        // `/v1/nft/generate`
    },
    /* метод получения списка сгенерированных NFT */
    async listNft() {
        //`/v1/nft/generate/{transactionHash}`
    },
    /* метод получения информации по NFT */
    async statusNft() {
        // `/v1/nft/{tokenId}`
    },
    /* метод получения истории транзакций по кошельку */
    async walletHistory(){
        // `/v1/wallets/{publicKey}/history`
    }
}

