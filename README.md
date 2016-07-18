# Hello world (npm)

A hello world npm module whose main purpose is to experiment a 'modern' (typescript / ES6)
module declaration and its consumption by various environments, including legacy.

This module is aiming at having optimal consumption by :
* typescript 1 & 2
  * https://www.typescriptlang.org/docs/handbook/modules.html
  * https://blog.oio.de/2014/01/31/an-introduction-to-typescript-module-system/
  * https://github.com/basarat/ts-npm-module-consume
  * http://stackoverflow.com/questions/12687779/how-do-you-produce-a-d-ts-typings-definition-file-from-an-existing-javascript
  * https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html
* ES6
  * mainly for rollup tree-shaking (jsnext)
    * https://github.com/rollup/rollup
* node 6, 4 and legacy
* browser
  * UMD and minification
 

References :
* https://medium.com/@tarkus/how-to-build-and-publish-es6-modules-today-with-babel-and-rollup-4426d9c7ca71#.5pxa9u2l1
* https://ponyfoo.com/articles/why-i-write-plain-javascript-modules
* http://www.2ality.com/2015/12/bundling-modules-future.html
* https://www.smashingmagazine.com/2016/02/writing-next-generation-reusable-javascript-modules/
* https://medium.com/@mweststrate/how-to-create-strongly-typed-npm-modules-1e1bda23a7f4#.74ko6tal3
