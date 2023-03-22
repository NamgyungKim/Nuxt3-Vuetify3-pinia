// AES256 에서는  32 Byte를 사용 하여야 한다.
import CryptoJS from 'crypto-js';
const iv = 'abcdefghijklmnop';
const env = runtimeConfig();
const key = env.public.cryptoKey;

const cfg = {
  iv: CryptoJS.enc.Utf8.parse(iv),
  padding: CryptoJS.pad.Pkcs7,
  mode: CryptoJS.mode.CBC,
};
const cryptoKey = CryptoJS.enc.Utf8.parse(key);

const cripto = {
  getCrypto: (data) => CryptoJS.AES.encrypt(data, cryptoKey, cfg).toString(),
  deCrypto: (data) => CryptoJS.AES.decrypt(data, cryptoKey, cfg).toString(CryptoJS.enc.Utf8),
};

export default cripto;
