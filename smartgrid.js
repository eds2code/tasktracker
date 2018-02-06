const smartgrid = require('smart-grid');

const settings = {
  filename: 'grid',
  outputStyle: 'scss',
  oldStyleSize: false,

  container: {
    maxWidth: '1240px',
    fileds: '30px'
  },
  breakPoints: {
    lg: {
      width: '1140px',
      fields: '30px'
    },
    md: {
      width: '960px',
      fields: '15px'
    },
    sm: {
      width: '768px',
      fields: '15px'
    },
    xs: {
      width: '576px',
      fields: '15px'
    }
  }
};

smartgrid('./src/styles/assets', settings);
