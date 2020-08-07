import logger from 'dva-logger';

export const dva = {
  config: {
    onError(err: any) {
      err.preventDefault();
      console.error(err.message);
    },
  },
  plugins: [logger({ collapsed: true })],
};
