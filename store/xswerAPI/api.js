import axios from "axios";
const xswerAPI = axios.create({
  baseURL: "https://xswer-3.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return xswerAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_login_create(payload) {
  return xswerAPI.post(`/api/v1/login/`, payload);
}

function api_v1_signup_create(payload) {
  return xswerAPI.post(`/api/v1/signup/`, payload);
}

function api_v1_xcds_list(payload) {
  return xswerAPI.get(`/api/v1/xcds/`);
}

function api_v1_xcds_create(payload) {
  return xswerAPI.post(`/api/v1/xcds/`, payload);
}

function api_v1_xcds_retrieve(payload) {
  return xswerAPI.get(`/api/v1/xcds/${payload.id}/`);
}

function api_v1_xcds_update(payload) {
  return xswerAPI.put(`/api/v1/xcds/${payload.id}/`, payload);
}

function api_v1_xcds_partial_update(payload) {
  return xswerAPI.patch(`/api/v1/xcds/${payload.id}/`, payload);
}

function api_v1_xcds_destroy(payload) {
  return xswerAPI.delete(`/api/v1/xcds/${payload.id}/`);
}

function rest_auth_login_create(payload) {
  return xswerAPI.post(`/rest-auth/login/`, payload);
}

function rest_auth_logout_retrieve(payload) {
  return xswerAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return xswerAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return xswerAPI.post(`/rest-auth/password/change/`, payload);
}

function rest_auth_password_reset_create(payload) {
  return xswerAPI.post(`/rest-auth/password/reset/`, payload);
}

function rest_auth_password_reset_confirm_create(payload) {
  return xswerAPI.post(`/rest-auth/password/reset/confirm/`, payload);
}

function rest_auth_registration_create(payload) {
  return xswerAPI.post(`/rest-auth/registration/`, payload);
}

function rest_auth_registration_verify_email_create(payload) {
  return xswerAPI.post(`/rest-auth/registration/verify-email/`, payload);
}

function rest_auth_user_retrieve(payload) {
  return xswerAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return xswerAPI.put(`/rest-auth/user/`, payload);
}

function rest_auth_user_partial_update(payload) {
  return xswerAPI.patch(`/rest-auth/user/`, payload);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_xcds_list,
  api_v1_xcds_create,
  api_v1_xcds_retrieve,
  api_v1_xcds_update,
  api_v1_xcds_partial_update,
  api_v1_xcds_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};