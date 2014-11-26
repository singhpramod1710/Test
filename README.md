Mobile Angular Ionic Express app
================================

This is an addon starter mobile application template using the [Ionic Framework](http://ionicframework.com/), as well as [Angular UI Router](http://angular-ui.github.io/ui-router/), [Angular-UI-Bootstrap](http://angular-ui.github.io/), [Express JS](http://expressjs.com/).

## How to use this template mobile app
Pull this code into an empty directory.
```bash
$ sudo npm install -g ionic cordova gulp express nodemon
$ npm install
$ bower install
$ cd /server
$ node server.js
```
Unless you have a PORT environment variable set, you'll find your app sitting at ````localhost:3030````

## Updating Ionic

To update to a new version of Ionic, open bower.json and change the version listed there.

For example, to update from version `1.0.0-beta.4` to `1.0.0-beta.5`, open bower.json and change this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.4"
```

To this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.5"
```

After saving the update to bower.json file, run `gulp install`.

Alternatively, install bower globally with `npm install -g bower` and run `bower install`.
