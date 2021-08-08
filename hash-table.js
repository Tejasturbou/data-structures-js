class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		const index = this._hash(key);
		if (!this.keyMap[index]) this.keyMap[index] = [];
		const insertIndex = this.keyMap[index].findIndex((elem) => elem[0] === key);
		if (insertIndex >= 0) this.keyMap[index][insertIndex][1] = value;
		else this.keyMap[index].push([key, value]);
	}

	get(key) {
		const index = this._hash(key);
		if (!this.keyMap[index]) return undefined;
		let count = 0;
		while (count !== this.keyMap[index].length) {
			if (this.keyMap[index][count][0] == key)
				return this.keyMap[index][count][1];
			count++;
		}
		return undefined;
	}

	keys() {
		if (this.keyMap.length == 0) return [];
		return this.keyMap.flatMap((elem) => {
			if (elem.length !== 0) {
				return elem.map((nestedElem) => nestedElem[0]);
			}
		});
	}

	values() {
		if (this.keyMap.length == 0) return [];
		return this.keyMap.flatMap((elem) => {
			if (elem.length !== 0) {
				return elem.map((nestedElem) => nestedElem[1]);
			}
		});
	}
}

const hashTable = new HashTable();
hashTable.set("pink", 4);
hashTable.set("cyan", 32);
hashTable.set("cyan", 73);
console.log(hashTable.keyMap);
console.log(hashTable.get("cyan"));
console.log(hashTable.keys());
console.log(hashTable.values());
