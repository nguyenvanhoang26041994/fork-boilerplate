class Auth {
  setLogin() {
    store.displacu
  }
}

import instantAPIAxiso from '';
import { getToken, clearToken, triggerUserChange, onEventUserChange } from 'auth';
import { renderSync } from 'node-sass';

API.get = (endpoiunt, callback, redirectURL) => {
  instantAPIAxiso.setHeader('Autho', getToken());
  instantAPIAxiso.getPost(endpoiunt, function(res) {
    if (res.code === 401) {
      clearToken(); // clear cookie || localStora
      triggerUserChange({ isLogin: false });

      window.PushManager(`/login.do?redirectURL=${redirectURL}`)
    }
    callback(res);
  })
}

API.get('getUserList.do', function(res) {
  setState();
})

onEventUserChange(function(user) {
  if (user.isLogin) {
    return setLogin(user)
  }
  return setLogout(false)
})
