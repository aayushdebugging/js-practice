// Difference between maps an objects
// objects are unordered whereas maps are ordered
// map do not contain any ke by default
// Objects are not iterables where as maps are iterables
// you can attach functionality to an object whereas maps are restricted to just storing data

const map = new Map([['a', 1], ['b', 2]])
map.set('c', 3)
console.log(map.has('a'))
console.log(map.has(1))

for (const [key, value] of map) {
    console.log(`${key}:${value}`)
} 