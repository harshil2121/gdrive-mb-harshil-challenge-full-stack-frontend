import { api, handleResponse, handleError } from "./apiServices";

export const googleAuthCheckApi = (data) =>
  api().post("/api/auth/google", data).then(handleResponse).catch(handleError);

export const googleCallbackApi = (data, payload) =>
  api()
    .post(`/api/auth/google/callback?code=${data}`, payload)
    .then(handleResponse)
    .catch(handleError);

export const accessRevoke = (data) =>
  api()
    .post("/api/auth/revoke-access", data)
    .then(handleResponse)
    .catch(handleError);
