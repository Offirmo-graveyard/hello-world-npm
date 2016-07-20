
// for diagnostic of which version was picked
/// <reference path="../node_modules/@types/node/index.d.ts" />
console.log(`[hello-world-emo] Hello from ${__filename}`)

export function hello(target: string = 'World'): void
{
	console.log(`Hello, ${ target } :-(`)
}
