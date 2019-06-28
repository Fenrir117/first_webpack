import image from 'rollup-plugin-img';

export default {
  entry: './assets/images',
  dest: './public/images',
  plugins: [
    image({
      limit: 10000,
      extensions: /\.(png|jpg|jpeg|gif|svg)$/, 
      exclude: 'node_modules/**'
    })
  ]
};