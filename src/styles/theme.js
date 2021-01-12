import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans:400,700:latin', 'Prompt:400,700,200:latin'],
  },
  timeout: 2000,
});

const theme = {
  // -- colors
  darkGreen: '#3F4531',
  orange: '#FFA600',
  green: '#95BF47',
  crimson: '#D7263D',

  // -- fonts
  headerFont: 'Prompt',
  textFont: 'Open Sans',
};

export default theme;
