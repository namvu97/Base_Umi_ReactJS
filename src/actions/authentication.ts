import { LogInPayload } from '@/types/interfaces';
import Authentication from '@/types/actions/authentication';

export const login = (payload: LogInPayload) => ({
  type: Authentication.LOGIN,
  payload,
});

export const logout = () => ({ type: Authentication.LOGOUT });
