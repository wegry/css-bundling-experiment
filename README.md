# Webpack v. Rspack with `experiments: {css: true, outputModule: true}`

Webpack added the ability to natively support CSS in https://github.com/webpack/webpack/issues/14893. This repo contains a [webpack](https://github.com/webpack/webpack) and [rspack](https://github.com/web-infra-dev/rspack) config trying the two out against each other.

# Build

To build the webpack version:

```sh
pnpm webpack
```

To build the rspack version:

```sh
pnpm rspack
```

Both build into `dist`, so if you want to try one after the other, make sure to delete `dist`.
