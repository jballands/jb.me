// Stolen from:
//	https://github.com/catalinmiron/react-typical
//	https://github.com/camwiegert/typical

import { useEffect, useRef } from 'react';

async function type(node: Element, speed: number, ...args: any) {
	for (const arg of args) {
		switch (typeof arg) {
			case 'string':
				await edit(node, speed, arg);
				break;
			case 'number':
				await wait(arg);
				break;
			case 'function':
				await arg(node, speed, ...args);
				break;
			default:
				await arg;
		}
	}
}

async function edit(node: Element, speed: number, text: string) {
	const overlap = getOverlap(node.textContent, text);
	await perform(
		node,
		[...deleter(node.textContent ?? '', overlap), ...writer(text, overlap)],
		speed
	);
}

async function wait(ms: number) {
	await new Promise(resolve => setTimeout(resolve, ms));
}

async function perform(node: Element, edits: any, speed: number) {
	for (const op of editor(edits)) {
		op(node);
		await wait(speed + speed * (Math.random() - 0.5));
	}
}

function* editor(edits: any) {
	for (const edit of edits) {
		yield (node: Element) =>
			requestAnimationFrame(() => (node.textContent = edit));
	}
}

function* writer(text: string, startIndex = 0, endIndex = text.length) {
	const seperated = [...text];

	while (startIndex < endIndex) {
		yield seperated.slice(0, ++startIndex).join('');
	}
}

function* deleter(text: string, startIndex = 0, endIndex = text.length) {
	const seperated = [...text];

	while (endIndex > startIndex) {
		yield seperated.slice(0, --endIndex).join('');
	}
}

function getOverlap(start: any, [...end]: string) {
	return [...start, NaN].findIndex((char, i) => end[i] !== char);
}

function useTyping(
	strings: string[],
	speed: number = 60,
	pause: number = 1000
) {
	const typicalRef = useRef<HTMLElement>(null);

	const steps = strings.reduce(
		(acc: Array<string | number>, string) => acc.concat([string, pause]),
		[]
	);

	useEffect(() => {
		const current = typicalRef.current!;
		const cancel = type(current, speed, ...steps, type);
	});

	return typicalRef;
}

export default useTyping;
