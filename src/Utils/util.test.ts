

import { generateHash } from "./util"

describe("Util tests", () => {
    test("should generate generateHash properly", () => {
        const { publicKey } = generateHash;
        expect(publicKey).toEqual(process.env.REACT_APP_PUBLIC_KEY)
    })
});
