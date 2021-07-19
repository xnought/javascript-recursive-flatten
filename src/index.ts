import recursiveFlatten from "./recursiveFlatten";

function main() {
	const data = [1, [2, 3, [4, 5], 6], 7, [8, 9, [[10]]]];
	const flattened = recursiveFlatten(data);
	console.log(`flattened = [${flattened}]`);
	// output>>> flattened = [1,2,3,4,5,6,7,8,9,10]
}

main();
