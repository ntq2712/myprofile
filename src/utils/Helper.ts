/* eslint-disable @typescript-eslint/no-explicit-any */
/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import NodeRSA from "node-rsa";

class Helper {
  static encryptPkcs1Base64(data: any, keyData: string) {
    try {

        console.log('keyData: ', keyData)
        
      const rsa = new NodeRSA(keyData, "pkcs1-public", {
        encryptionScheme: "pkcs1",
      });
      return rsa.encrypt(data, "base64");
    } catch (error) {
      console.log(error);
      return "";
    }
  }
  static stringToBase64(str: string) {
    return Buffer.from(str).toString("base64");
  }
}

export default Helper;
