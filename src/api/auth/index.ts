/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import Helper from "@/utils/Helper";
import apiUrl from "../apiUrl";
import ApiService from "../config";
import { ResgiterVisitor } from "@/react-form/formOpts/resgiterVisitor";

async function getPublicKey() {
  const publicKey = await ApiService.instance
    .get<ApiResponse<string>>(apiUrl.auth.getPublicKey, {})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("err get key:", err);
      return "";
    });

  return publicKey;
}

export async function signIn(payload: { userName: string; password: string }) {
  try {
    const key = await getPublicKey();
    const pw = Helper.encryptPkcs1Base64(payload.password, key);

    const res = await ApiService.instance.post<ApiResponse<string>>(
      apiUrl.auth.signIn,
      {
        userName: payload.userName,
        password: pw,
      }
    );
    return res;
  } catch (err) {
    console.log(err);
    return {} as ApiResponse<string>;
  }
}

export function signInVisitor(payload: { userName: string; password: string }) {
  return ApiService.instance.post<ApiResponse<Visitor>>(
    apiUrl.auth.signInVisitor,
    {
      account: payload.userName,
      password: payload.password,
    }
  );
}

export function regiterVisitor(payload: ResgiterVisitor & { avatar: string }) {
  return ApiService.instance.post<ApiResponse<Visitor>>(
    apiUrl.auth.registerVisitor,
    payload
  );
}

export const getAllUser = () => {
  return ApiService.instance.get<ApiResponse<User[]>>(
    `${apiUrl.user.getAll}?pageSize=99999&pageIndex=1`
  );
};
