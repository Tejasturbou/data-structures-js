class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(val) {
		let node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length == 0) return "Linked List is empty";
		let node = this.head;
		if (this.length == 1) {
			this.head = null;
			this.tail = null;
			this.length--;
			return node;
		}

		while (node) {
			if (node.next == this.tail) {
				const tailNode = this.tail;
				node.next = null;
				this.tail = node;
				this.length--;
				return tailNode;
			}
			node = node.next;
		}
	}

	shift() {
		if (this.length == 0) return "Linked list is empty";
		let node = this.head;
		if (this.length == 1) {
			this.head = null;
			this.tail = null;
			this.length--;
			return node;
		}

		this.head = node.next;
		node.next = null;
		this.length--;
		return node;
	}

	unshift(val) {
		let node = new Node(val);
		if (this.length == 0) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index >= this.length || index < 0) {
			return null;
		}
		let node = this.head;
		while (index != -1) {
			if (index == 0) return node;
			else node = node.next;
			index--;
		}
		return null;
	}

	set(index, value) {
		let node = this.get(index);
		if (node) {
			node.val = value;
			return true;
		}
		return false;
	}

	insert(index, value) {
		if (index > this.length || index < 0) return false;
		if (index == 0) return !!this.unshift(value);
		if (index == this.length) return !!this.push(value);
		let node = new Node(value);
		let foundNode = this.get(index - 1);
		node.next = foundNode.next;
		foundNode.next = node;
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return false;
		if (index == 0) return this.shift();
		if (index == this.length - 1) return this.pop();

		let prevNode = this.get(index - 1);
		let node = prevNode.next;
		prevNode.next = node.next;
		this.length--;
		return node;
	}

	print() {
		if (this.length == 0) console.log("List is empty");
		let node = this.head;
		const arr = [];
		while (node) {
			arr.push(node);
			node = node.next;
		}
		console.log(arr);
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let prevNode = null;
		let nextNode = null;
		for (let index = 0; index < this.length; index++) {
			nextNode = node.next;
			node.next = prevNode;
			prevNode = node;
			node = nextNode;
		}

		return this;
	}
}

const list = new SinglyLinkedList();
// console.log(list.shift());
// list.push(1);
// list.push(2);
// list.unshift(4);
// console.log(list);
// console.log(list.get(2));
// list.shift();
// console.log(list);
// list.pop();
// console.log(list);
// console.log(list.get(0));
// list.set(0, 100);
// console.log(list);
list.push(6);
list.push(7);
list.push(8);
// console.log(list);
// console.log(list.insert(0, 1000));
// console.log(list);
// console.log(list.get(2));
// console.log(list.remove(2));
list.reverse();
list.print();
