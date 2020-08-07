import { Rule } from 'antd/lib/form';
import i18n from '@/assets/i18n';

export const emailValid = /^(\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+)$/;
export const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[\w\d\S]{8,16}$/;

export const authRules = {
  email: [
    { required: true, max: 20, message: ''},
    {
      pattern: emailValid,
      message: '',
    },
  ] as Rule[],
  password: [
    { required: true, message: '' },
    {
      pattern: passwordValid,
      message: '',
    },
  ] as Rule[],
};

export const commissionRules = {
  ken: [{ required: true, message: '' }] as Rule[],
  rate: [
    { required: true, message: '' },
    () => ({
      validator(_, value) {
        const rate = Number(value);
        if ((1 <= rate && rate < 100) || !value) {
          return Promise.resolve();
        }
        return Promise.reject('');
      },
    }),
  ] as Rule[],
  content: [
    { required: true, message: '' },
  ] as Rule[],
  startDate: [
    { required: true, message: '' },
  ] as Rule[],
  endDate: [
    { required: true, message: '' },
  ] as Rule[],
};

export const validatePdf = () => {
  
};
