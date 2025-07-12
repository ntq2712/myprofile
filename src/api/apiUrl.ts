/********************************************************
 * Copyright 2025 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

const setPath = (path: string, sub: string) => {
  if (sub.startsWith("/")) {
    return `${path}${sub}`;
  }

  return `${path}/${sub}`;
};

const root = "api";

const apiUrl = {
  profile: {
    get: setPath(root, "MyProfile/GetProfile"),
    update: setPath(root, "MyProfile/UpdateProfile"),
  },
};

export default apiUrl;
