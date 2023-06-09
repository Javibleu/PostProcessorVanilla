// module.exports = {
//   plugins: [
//     require('cssnano')({
//         preset: 'default',
//     }),
//   ],
// }

const cssnano = require('cssnano');
const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require('autoprefixer');

module.exports = {
      plugins: [
        // cssnano({ preset: 'default'}),
        postcssPresetEnv({ stage: 1}),
        autoprefixer(),
      ],
    }
    

