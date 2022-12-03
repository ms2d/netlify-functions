# netlify-functions
For some reason, this only works OUTSIDE of my npm monorepo. If I move it inside the repo and hoist its npm_modules, `npm run serve` gives the following error:

    ERROR in ... monorepo/node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js

    Module parse failed: Unexpected token (10:37)

To test this out,

    git clone https://github.com/ms2d/netlify-functions.git
    cd netlify-functions
    npm install
    npm run build

Then try moving it into a monorepo, using npm workspaces `npm run build` and... crash. Hmm...
