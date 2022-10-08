import Axios from "axios";

const baseUrl = "http://localhost:4000"
const axios = Axios.create({
  baseURL: baseUrl,
  timeout: 15000,
});

export const api = {
  /* создание кошелька */
  async createWallet() {
    window.alert("NO!!!");
    return;
    const { privateKey, publicKey } = await axios.post("/v1/wallets/new");

    return {
      privateKey,
      publicKey,
    };
  },
  /* метод перевода Matic с кошелька на кошелек
    - `fromPrivateKey` - приватный ключ кошелька отправителя
    - `toPublicKey` - публичный ключ (адрес) кошелька получателя
    - `amount` - сумма перевода валюты
    * */
  async transferMatic({ fromPrivateKey, toPublicKey, amount }) {
    const { transactionHash } = await axios.post(`/v1/transfers/matic`, {
      fromPrivateKey,
      toPublicKey,
      amount,
    });

    return { transactionHash };
  },
  /* метод перевода Ruble с кошелька на кошелек
    - `fromPrivateKey` - приватный ключ кошелька отправителя
    - `toPublicKey` - публичный ключ (адрес) кошелька получателя
    - `amount` - сумма перевода валюты
    * */
  async transferRuble({ fromPrivateKey, toPublicKey, amount }) {
    const { data: { transactionHash } } = await axios.post(`/v1/transfers/ruble`, {
      fromPrivateKey,
      toPublicKey,
      amount,
    });

    return { transactionHash };
  },
  /* метод перевода NFT с кошелька на кошелек
    - `fromPrivateKey` - приватный ключ кошелька отправителя
    - `toPublicKey` - публичный ключ (адрес) кошелька получателя
    - `tokenId` - идентификатор NFT
    * */
  async transferNft({ fromPrivateKey, toPublicKey, tokenId }) {
    const { transactionHash } = await axios.post(`/v1/transfers/nft`, {
      fromPrivateKey,
      toPublicKey,
      tokenId,
    });

    return { transactionHash };
  },
  /* метод статуса выполнения транзакции
    - transactionHash - идентификатор транзакции в блокчейне
    * */
  async transferStatus({ transactionHash }) {
    const { status } = await axios.post(
      `/v1/transfers/status/${transactionHash}`
    );

    return { status };
  },
  /* метод получения баланса по кошельку */
  async walletBalance({ publicKey }) {
    const { data: { maticAmount, coinsAmount } } = await Axios.get(
      `https://hackathon.lsp.team/hk/v1/wallets/${publicKey}/balance`
    );

    return { maticAmount, coinsAmount };
  },
  /* метод получения баланса NFT-коллекций по кошельку
    publicKey - публичный ключ (адрес) кошелька, по которому отправляется запрос
    * */
  async walletNftBalance({ publicKey }) {
    const {
      data: {balance}
      /*
                - `uri` - унифицированный (единообразный) идентификатор ресурса, сопряженный с NFT-коллекцией
                - `tokens` - массив NFT. Т.е. 5,3,4,6 - уникальные идентификаторы отдельного NFT в NFT-коллекции
             */
       // Array<{uri: string, tokens: Array<number> }>
    } = await axios.get(`/v1/wallets/${publicKey}/nft/balance`);

    return { balance };
  },
  /* метод генерации NFT-коллекций на кошелек
    - `toPublicKey` - публичный ключ кошелька Polygon
    - `uri` - унифицированный (единообразный) идентификатор ресурса, сопряженный с NFT-коллекцией
    - `nftCount` - количество генерируемых NFT в коллекции
    * */
  async generateNft({ toPublicKey, uri, nftCount }) {

    const { data: { transaction_hash } } = await axios.post(`/v1/nft/generate`, {
      toPublicKey,
      uri,
      nftCount,
    });

    return {transaction_hash};

  },
  /* метод получения списка сгенерированных NFT */
  async listNft({ transactionHash }) {
    const { wallet_id, tokens } = await axios.get(
      `/v1/nft/generate/${transactionHash}`
    );

    return {
      wallet_id,
      tokens,
    };
  },
  /* метод получения информации по NFT
    tokenId - идентификатор NFT
    * */
  async statusNft({ tokenId }) {
    const { uri, publicKey } = await axios.get(`/v1/nft/${tokenId}`);

    return {
      tokenId,
      uri,
      publicKey,
    };
  },
  /* метод получения истории транзакций по кошельку */
  async walletHistory({ publicKey }) {
    //
    const {
      history /* Array<{
                        "blockNumber": number,
                        "timeStamp": number,
                        "contractAddress": string,
                        "from": string,
                        "to": string,
                        "value": number,
                        "tokenName": string,
                        "tokenSymbol": string,
                        "gasUsed": number,
                        "confirmations": number
                    }> */,
    } = await axios.get(`/v1/wallets/${publicKey}/history`);

    return {
      history,
    };
  },
};

try {
  window.api = api;
} catch {}
