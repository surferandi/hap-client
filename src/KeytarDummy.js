import { Observable } from 'rxjs';

let keytarStore = {};

const KeytarDummy = {
  getPassword: function(service, account) {
    let password = keytarStore[`${service}/${account}`];
    if (!password) password = '';
    return Promise.resolve(password);
  },

  setPassword: function(service, account, password) {
    keytarStore[`${service}/${account}`] = password;
    return Promise.resolve(password);
  }
};

export {
  KeytarDummy as default
}
