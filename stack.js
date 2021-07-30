class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const node = new Node(val);
		if (this.size == 0) {
			this.first = node;
			this.last = node;
		} else {
			node.next = this.first;
			this.first = node;
		}

		this.size++;
		return this;
	}

	pop() {
		if (this.size == 0) return null;
		const node = this.first;
		if (this.size == 1) {
			this.last = null;
		}
		this.first = node.next;
		this.size--;
		node.next = null;
		return node;
	}

	print() {
		if (this.size == 0) return null;
		let node = this.first;
		console.log("================");
		while (node) {
			console.log(`Node ${node.val}`);
			node = node.next;
		}
		console.log("================");
	}
}

const stack = new Stack();

stack.push(3);
stack.push(443);
stack.push(23);
stack.print();

stack.pop();
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
