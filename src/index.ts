
// for diagnostic of which version was picked
console.log(`[hello-world-emo] Hello from ${__filename}`)

export default function hello(target: string = 'World'): void
{
	console.log(`hello, ${ target } :-(`)
}
