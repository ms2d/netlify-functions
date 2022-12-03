# netlify-functions
This only works if you comment out the line

    const mongodb = require('mongodb')

in `src/api.js`. No idea why.

To test this out:

    git clone https://github.com/ms2d/netlify-functions.git
    cd netlify-functions
    npm install
    npm run serve
