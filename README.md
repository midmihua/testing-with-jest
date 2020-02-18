> ## [JEST](https://jestjs.io/docs/en/getting-started)

You can run Jest directly from the CLI (if it's globally available in your PATH, e.g. by yarn global add jest or npm install jest --global) with a variety of useful options.

Here's how to run Jest on files matching my-test, using config.json as a configuration file and display a native OS notification after the run:

```sh
jest my-test --notify --config=config.json
```

