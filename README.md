## wasabi-web-ui-skeleton

### Techs
* UI
   - [`React`](https://facebook.github.io/react/)
   - [`React-Bootstrap`](https://react-bootstrap.github.io/)
* State & Store   
    - [`Mobx`](https://github.com/mobxjs/mobx)
* Rest
    - [`Axios`](https://github.com/mzabriskie/axios)
* Test on `Electron
    - [`Mocha`](https://mochajs.org/)
    - [`Chai`](http://chaijs.com/)
    - [`Enzyme`](http://airbnb.io/enzyme/)
     
* Compiler
    - [typescript](https://www.typescriptlang.org/)

### Development

#### install requirements
* Download and install node (https://nodejs.org/en/download/) LTS last version.

#### Clone and Install Project

* git clone ....
*  install dependencies.
```bash
npm install
```
 
#### Start Development. 
Lift `Application`and `Mock Server`.

- Command
```bash
npm start
```
- The the `Application` starts on  `http://localhost:8080`.
- The `Mock Json Server` starts on `http://localhost:3000`.

#### Test 

- The `Mock Json Server` starts on `http://localhost:3002/`.
You can configure port `test:mock` which defined as `scripts` command in `package.json`
- Resources use global api url(`http://localhost:3002/`). 
You can configure port ( checks `tools/test/helper.ts`)
- Executes `all unit tests` in `__test__` folder.

```bash
npm test
```

##### For Debugging Tests
Executes `all unit tests` in `__test__` folder.
```bash
npm run testd
```

#### Build
- Export `Application Project` under `build` folder.

```bash
npm run build
```

#### All Commands.
You can check all commands in **package.json** for more detail.
```json
{
    "start": "node ./tools/start.js",
    "start:dev": "webpack-dev-server --port 8080 --config tools/app/dev/webpack.js --colors",
    "start:mock": "json-server --watch tools/app/dev/db.json  --port 3000 --static ./tools/app/dev/public",
    "test": "node ./tools/test.js",
    "testd": "node ./tools/testd.js",
    "test:electron:debug": "electron-mocha --renderer --interactive --opts ./tools/test/mocha.opts",
    "test:electron": "electron-mocha --renderer --opts ./tools/test/mocha.opts",
    "test:mock": "json-server --watch tools/test/db.json  --port 3002 --static ./tools/test/public",
    "build": "rimraf ./build && node ./tools/build.js",
    "build:app": "webpack --config tools/app/build/webpack.js --colors"
 }   
    
```   

