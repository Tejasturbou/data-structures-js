class MaxBinaryHeap {
	constructor(values = []) {
		this.values = values;
	}

	insert(value) {
		this.values.push(value);

		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			const parentElement = this.values[parentIndex];

			if (element <= parentElement) break;
			this.values[index] = parentElement;
			this.values[parentIndex] = element;
			index = parentIndex;
		}
	}

	removeMax() {
		if (this.values.length == 0) return null;
		let node = this.values[0];
		let newRoot = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = newRoot;
			this.sinkDown();
		}
		return node;
	}

	sinkDown() {
		let index = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;

			let leftChild, rightChild;
			let swap = null;

			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];
				if (leftChild > element) {
					swap = leftChildIndex;
				}
			}
			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if (
					(rightChild > element && swap === null) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIndex;
				}
			}
			if (swap === null) break;
			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
	}
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(34);
maxHeap.insert(67);
maxHeap.insert(15);
maxHeap.insert(69);
maxHeap.insert(169);
console.log(maxHeap.values);
console.log(maxHeap.removeMax(), maxHeap.values);
console.log(maxHeap.removeMax(), maxHeap.values);
console.log(maxHeap.removeMax(), maxHeap.values);
console.log(maxHeap.removeMax(), maxHeap.values);
console.log(maxHeap.removeMax(), maxHeap.values);
console.log(maxHeap.removeMax(), maxHeap.values);
