# Artificial Social Network Generator (ASNG)
A JavasScript implementation of the [ASNG model](http://www.politybuilder.com/asng) by Andrew Reilly.


## Getting Started
```bash
$ git clone git://github.com/Rkaede/ASNG.git
$ npm install
```

## Testing
Chrome Canary will be required to run the tests as Chrome has a [performance issue](https://github.com/karma-runner/karma-chrome-launcher/issues/44). This will be changed to Chrome Stable once the --disable-background-timer-throttling flag is available.
```bash
$ npm test
```
