/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

class ApiServece {
  static _instance: ApiServece;
  private baseUrl = "http://localhost:5297";
  private token = "";

  constructor() {}

  static get instance() {
    if (!this._instance) {
      this._instance = new ApiServece();
    }

    return this._instance;
  }

  setToken(value: string) {
    this.token = value;
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const res = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
          ...(options?.headers || {}),
        },
        ...options,
      });

      if (!res.ok) {
        const errorText = res.text();

        throw new Error(`GET ${endpoint} failed: ${res.status} - ${errorText}`);
      }

      return res.json();
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
      const res = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
          ...(options?.headers || {}),
        },
        ...options,
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
      const res = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token,
          ...(options?.headers || {}),
        },
        ...options,
      });

      if (!res.ok) {
        const errorText = res.text();

        throw new Error(`PUT ${endpoint} failed: ${res.status} - ${errorText}`);
      }

      return res.json();
    } catch (err) {
      console.error("PUT error:", err);
      throw err;
    }
  }
}

export default ApiServece;
