
## Reporting bugs and suggestions

1. Make sure both your **browser** and **OneeChan** are up to date.
2. Disable your other extensions & scripts to identify conflicts.
3. If your issue persists, open a [new issue](https://github.com/Nebukazar/OneeChan/issues) with the following information:
  1. Precise steps to reproduce the problem, with the expected and actual results.
  2. Console errors, if any.
  3. Browser version.

Open your console with:
- `Ctrl + Shift + J` on Chrome.
- `Ctrl + Shift + K` on Firefox.

## Development & Contribution

### Get started

- Install [node.js](http://nodejs.org/).
- Install [Grunt's CLI](http://gruntjs.com/) with `npm install -g grunt-cli`.
- Clone OneeChan.
- `cd` into it.
- Install/Update OneeChan dependencies with `npm install`.

### Build

- Build with `grunt`.

### Release

- Update the version with `grunt patch`, `grunt minor` or `grunt major`.
- Release with `grunt release`.

Note: this is only used to release new OneeChan versions, and is **not** needed or wanted in pull requests.

### Contribute

- Edit the sources.
- Open a pull request to merge branch.
