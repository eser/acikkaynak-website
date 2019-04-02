# [acikkaynak-website](https://github.com/acikkaynak/acikkaynak-website)

Not documented yet.


## Contributing

Ensure that `node.js` is installed on your system first.

Clone the git repo and execute install dependencies from npm to get ready:

```sh
git clone https://github.com/acikkaynak/acikkaynak-website.git
cd acikkaynak-website
npm install
npm run dev
```

## NPM Tasks

Use `npm run <task>` command in project folder to execute tasks defined in `package.json`.

| Task                     | Description                                                                            |
|--------------------------|----------------------------------------------------------------------------------------|
| `bundle`                 | Builds the project, generates required files                                           |
| `bundle:prod`            | Builds the project, generates required files (production)                              |
| `start`                  | Starts SSR-enabled express server                                                      |
| `dev`                    | Enables live development environment powered by hot module reloading                   |
| `lint`                   | Executes linter to check codebase against linting errors                               |
| `test`                   | Runs tests to check codebase against unit testing scenerios                            |
| `containerize`           | Creates containerization files and gives instructions for docker                       |


## Directory Structure

| Path.                                           | Description                                                     |
|-------------------------------------------------|-----------------------------------------------------------------|
| `/src/`                                         | The folder for your source files                                |
| `/src/app/`                                     | Main Application                                                |
| `/src/app/assets/`                              | - Assets (images, fonts, stylesheets, etc.)                     |
| `/src/app/layouts/`                             | - Layouts / Templates                                           |
| `/src/app/pages/`                               | - Pages                                                         |
| `/src/app/appContainer.tsx`                     | - Main application router                                       |
| `/src/startup.ts`                               | The list and configuration of your mapped applications          |
| `/src/index.html`                               | The index file                                                  |
| `/public/`                                      | The folder for your static files will be on your webroot        |


## Todo List

See [GitHub Projects](https://github.com/acikkaynak/acikkaynak-website/projects) for more.


## Requirements

* node.js (https://nodejs.org/)


## Notes and Credits

Uses [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/) for embedding webfonts.


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/acikkaynak/acikkaynak-website/issues).
