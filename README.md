# Recursive Flatten in Javascript

Currently configured to use `index.ts` in the `src/` directory. Change the `tsconfig.json` to change behavior.

## Example

```javascript
const data = [1, [2, 3, [4, 5], 6], 7, [8, 9, [[10]]]];
const flattened = flattenArray(data);
console.log(`flattened = [${flattened}]`);
// output>>> flattened = [1,2,3,4,5,6,7,8,9,10]
```

## Development w/ live-reload

```bash
yarn dev
```

## OR, you can build To JS w/o live-reload

```bash
yarn build
```
