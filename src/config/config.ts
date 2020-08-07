if (!process.env.APP_ENV) {
  window.alert(
    'Please config .env! (copy .env.example to .env in root project folder!)',
  );
}

const configDev = {
  API_DOMAIN: '',
};
const configStaging = {
  API_DOMAIN: '',
};
const configProd = {
  API_DOMAIN: '',
};

const env = process.env.APP_ENV;
const configs =
  env === 'prod' ? configProd : env === 'staging' ? configStaging : configDev;

export default configs;
