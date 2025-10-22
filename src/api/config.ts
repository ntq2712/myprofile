/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

// quinguyen.click
// localhost:5297
"use client";
class ApiService {
  static _instance: ApiService;
  private baseUrl = "http://quinguyen.click";
  private token = "";

  constructor() {}

  static get instance() {
    if (!this._instance) {
      this._instance = new ApiService();
    }

    return this._instance;
  }

  setToken(value: string) {
    this.token = value;
  }

  private async callApi<T>(
    endpoint: string,
    method: "POST" | "GET" | "PUT" | "DELETE",
    options?: RequestInit,
    body?: unknown
  ): Promise<T> {
    try {
      const res = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: method,
        ...(body ? { body: JSON.stringify(body) } : {}),
        headers: {
          "Content-Type": "application/json",
          ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
          ...(options?.headers || {}),
        },
        ...options,
      });

      if (!res.ok) {
        // const errorText = res.text();

        // if (res.status === 401) {
        //   if (typeof window !== "undefined") {
        //     window.location.href = "/";
        //   }
        // }

        // throw new Error(`GET ${endpoint} failed: ${res.status} - ${errorText}`);
      }

      return res.json();
    } catch (err) {
      console.error("GET error:", err);
      throw err;
    }
  }

  async get<T>(endpoint: string, params?: object, options?: RequestInit): Promise<T> {
    try {

      let _endpoint = endpoint
      const _params = params ? Object.entries(params) : undefined

      if(params){ 
        let paramsValue = ''
        _params?.map(([key, value]) => {
          paramsValue =paramsValue ? `${paramsValue}&${key}=${value}` : `${key}=${value}`
        })

        _endpoint = `${_endpoint}?${paramsValue}`
      }

      const res = await this.callApi<T>(_endpoint, "GET", options);

      return res;
    } catch (err) {
      console.error("GET error:", err);
      throw err;
    }
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      try {
        const res = await this.callApi<T>(endpoint, "DELETE", options);

        return res;
      } catch (err) {
        console.error("GET error:", err);
        throw err;
      }
    } catch (err) {
      console.error("GET error:", err);
      throw err;
    }
  }

  async post<T>(
    endpoint: string,
    body: unknown,
    options?: RequestInit
  ): Promise<T> {
    try {
      const res = await this.callApi<T>(endpoint, "POST", options, body);

      return res;
    } catch (err) {
      console.error("GET error:", err);
      throw err;
    }
  }

  async uploadFile<T>(endpoint: string, body: FormData): Promise<T> {
    try {
      const res = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: "POST",
        body: body,
        headers: {},
      });

      if (!res.ok) {
        const errorText = res.text();

        throw new Error(
          `POST ${endpoint} failed: ${res.status} - ${errorText}`
        );
      }

      return res.json();
    } catch (err) {
      console.error("POST error:", err);
      throw err;
    }
  }

  async put<T>(
    endpoint: string,
    body: unknown,
    options?: RequestInit
  ): Promise<T> {
    try {
      const res = await this.callApi<T>(endpoint, "PUT", options, body);

      return res;
    } catch (err) {
      console.error("GET error:", err);
      throw err;
    }
  }
}

export default ApiService;
