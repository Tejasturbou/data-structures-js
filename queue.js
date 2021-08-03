class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

export class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const node = new Node(val);
		if (this.size == 0) {
			this.first = node;
			this.last = node;
		} else {
			node.next = this.first;
			this.first = node;
		}
		this.size++;
		return node;
	}

	dequeue() {
		if (this.size == 0) return null;
		let node = this.first;
		if (this.size == 1) {
			this.first = null;
			this.last = null;
			this.size--;
			return node;
		}
		while (node.next !== this.last) {
			node = node.next;
		}

		node.next = null;
		this.last = node;
		this.size--;
		return node;
	}

	print() {
		if (this.size == 0) return null;
		console.log("================");
		let node = this.first;
		while (node) {
			console.log(`Node ${node.val}`);
			node = node.next;
		}
		console.log("================");
	}
}

const queue = new Queue();

queue.enqueue(4);
queue.enqueue(6);
queue.enqueue(4421);
queue.print();

queue.dequeue();
queue.dequeue();
queue.print();
queue.dequeue();
console.log(queue.size);
