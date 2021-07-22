
  
import crypto from 'crypto';
import {ICryptoHash} from "./util.d"

/*a function to generate a hash to send along with API*/
export const generateHash = ((crypto):ICryptoHash => {
    const ts:string = Date.now().toString();
    const hash:crypto.Hash = crypto.createHash('md5');
    return {publicKey:process.env.REACT_APP_PUBLIC_KEY,ts,hash:hash.update(ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY).digest('hex')}
})(crypto);