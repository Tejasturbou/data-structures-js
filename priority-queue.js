class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

export class PriorityQueue {
	constructor(values = []) {
		this.values = values;
	}

	enqueue(value, priority) {
		const node = new Node(value, priority);
		this.values.push(node);

		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			const parentElement = this.values[parentIndex];

			if (element.priority >= parentElement.priority) break;
			this.values[index] = parentElement;
			this.values[parentIndex] = element;
			index = parentIndex;
		}
	}

	dequeue() {
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
				if (leftChild.priority < element.priority) {
					swap = leftChildIndex;
				}
			}
			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];
				if (
					(rightChild.priority < element.priority && swap === null) ||
					(swap !== null && rightChild.priority < leftChild.priority)
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

// const priorityQueue = new PriorityQueue();

// priorityQueue.enqueue(3, 0);
// priorityQueue.enqueue(54, 3);
// priorityQueue.enqueue(41, 1);
// priorityQueue.enqueue(21, 1);
// priorityQueue.enqueue(2351, 1);
// console.log(priorityQueue.values);
// priorityQueue.dequeue();
// console.log(priorityQueue.values);
// priorityQueue.dequeue();
// console.log(priorityQueue.values);
