## rails-angular-seed-app

A quick way to get an Rails API backend going with an Angular JS front end. The base Angular code was taken from the angular-seed project and modified.

### General Design Notes

The Angular and Rails 'apps' are treated as separate entities. Rails is used in API only mode and is expected to handle backend functionality through API calls made through the Angular front end. Both the Rails and Angular implementations have separate tests, environments and dependencies. Rails dependencies are handled by the Ruby bundler gem while the Angular dependencies are handled through Node and the Bower package manager.

### Getting Started

Run from Rails project root:

```
rails server
```
Assuming you have the Node package manager installed, run this from Angular project root /public:

```
npm install
```

Navigate to `http://localhost:3000` and check out your app.

### Testing

#### Testing Angular

The included Rails server will serve both Rails and the Angular app:

```
rails server
```

Run the included Unit Tests:


```
npm test
```

Run the included End to End tests:

```
npm run protractor  
```


### Contributing

* Fork it.
* Create a branch (git checkout -b branch-name)
* Commit your changes
* Push to the branch (git push origin branch-name)
* Create a pull request with description from your branch into develop


### License

The MIT License (MIT)

Copyright (c) 2015 GhostCake

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.