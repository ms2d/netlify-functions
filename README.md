# netlify-functions
For some reason, this only works OUTSIDE of my npm monorepo. If I move it inside the repo and hoist its npm_modules, `npm run serve` gives the following error:

    ERROR in ... monorepo/node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js

    Module parse failed: Unexpected token (10:37)

No idea why...
