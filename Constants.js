const prod = {
  url: {
    API_URL: [
      'https://blooming-reef-21992.herokuapp.com/',
      'http://localhost:5173',
    ],
  },
};
const dev = {
  url: {
    API_URL: ['http://localhost:5173', 'http://localhost:5174'],
  },
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

module.exports = config;
