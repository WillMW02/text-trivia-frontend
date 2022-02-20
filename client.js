/*
  REST and fetching
*/
const contentType = 'application/json';
const baseApiUrl = 'https://api.arthur.jarv.io';

const endpoints = {
  csrf: () => ['/csrf', 'GET', false],
  clientLogin: () => ['/v1/auth/login', 'POST', true],
  clientLogout: () => ['/v1/auth/logout', 'POST', true],
  getGlobalScores: () => ['/v1/score', 'GET', false],
  getScore: (id) => [`/v1/score/${id}`, 'GET', false],
  getSelf: () => ['/v1/user', 'GET', false],
  getUser: () => [`/v1/user/${id}`, 'GET', false],
  createUser: () => ['/v1/user/create', 'POST', true],
  setUserPhone: () => ['/v1/user/set-phone', 'POST', true]
};

let serverDisconnected = false;

async function restFetch(
  endpoint,
  method,
  setCsrfHeader,
  queryParams = {},
  body = undefined
) {
  let url = baseApiUrl + endpoint;
  const queryKeys = queryParams ? Object.keys(queryParams) : [];
  if (queryKeys.length > 0) {
    url += '?' + queryKeys.map((key) => `${key}=${queryParams[key]}`).join('&');
  }

  const opts = {
    method,
    headers: {},
    body: body ? JSON.stringify(body) : undefined,
  };
  if (body) {
    opts.headers['Content-Type'] = contentType;
  }
  /*
  if (setCsrfHeader) {
    let xsrf = getCookie('XSRF-TOKEN');
    if (!xsrf) {
      await restFetch(...endpoints.csrf());
      xsrf = getCookie('XSRF-TOKEN');
    }
    opts.headers['CSRF-Token'] = xsrf;
  }
*/
  try {
    response = await fetch(url, opts);
    if (serverDisconnected) {
      // If you want some function to notify the user when the server comes back online
      //notifyUser('Reconnected!');
      serverDisconnected = false;
    }
  } catch {
    serverDisconnected = true;
    return { ok: false, data: { message: 'Server Timeout' } };
  }
  let responseContentType = response.headers.get('content-type') ?? '';

  let data =
    responseContentType.indexOf(contentType) === -1
      ? {}
      : await response.json();
  /*
    if (
    setCsrfHeader &&
    response.status === 403 &&
    data.message &&
    data.message.indexOf('CSRF') !== -1
  ) {
    await restFetch(...endpoints.csrf());
    opts.headers['CSRF-Token'] = getCookie('XSRF-TOKEN');

    // Retry request
    try {
      response = await fetch(url, opts);
    } catch {
      serverDisconnected = true;
      return { ok: false, data: { message: 'Server Timeout' } };
    }
    responseContentType = response.headers.get('content-type') ?? '';
    data =
      responseContentType.indexOf(contentType) === -1
        ? {}
        : await response.json();
  }
  */
  return { ok: response.ok, status: response.status, data };
}

/*
  Get a cookie by name
  https://stackoverflow.com/questions/10730362/get-cookie-by-name?page=1&tab=votes#tab-top
*/
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}