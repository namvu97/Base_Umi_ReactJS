import Cookies from 'js-cookie';
import { message } from 'antd';
import { login } from '../api/authentication';
import { LogInPayload } from '@/types/interfaces';
import { history } from 'umi';

export default {
  namespace: 'authentication',
  state: {},
  reducers: {},
  effects: {
    *login(action: any) {
      try {
        const payload = action.payload as LogInPayload;
        const { username, password, remember } = payload;
        if (username === 'admin' && password === '123456') {
          Cookies.set('token', password, {
            expires: remember ? 999999 : undefined,
          });
          history.push('/');
        } else {
          message.error('Username or password is invalid!');
        }
      } catch (e) {
        message.error('Cannot connect to server!');
      }
    },
    logout() {
      Cookies.remove('token');
      history.push('/login');
    },
  },
};
