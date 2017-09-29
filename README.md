# Slatify

Minimal Markdown to HTML generator for beautiful documentations.

## Usage
  
1. Install package
    ```bash
    $ npm install -D slatify
    ```
2. Add run command to `package.json`
    ```json
    {
      ...
      "scripts": {
        "build-html": "node node_modules/lib/slatify-cli README.md index.html"
      },
      ...
    }
    ```
3. Build html

    ```bash
    $ npm run build-html
    ```

## License

MIT
