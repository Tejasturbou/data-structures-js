class Node {
	constructor(val) {
		this.prev = null;
		this.next = null;
		this.val = val;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let node = new Node(val);
		if (this.length == 0) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length == 0) return null;
		let node = this.tail;
		if (this.length == 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
		}
		node.prev = null;
		this.length--;
		return node;
	}

	shift() {
		if (this.length == 0) return null;
		const node = this.head;
		if (this.length == 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			node.next = null;
		}
		node.next = null;
		this.length--;
		return node;
	}

	unshift(val) {
		const node = new Node(val);
		if (this.length == 0) {
			this.head = node;
			this.tail = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}

		this.length++;
		return this;
	}

	print() {
		if (this.length == 0) return null;
		let node = this.head;
		console.log("===========================");
		while (node !== null) {
			console.log(`Node ${node.val}`);
			node = node.next;
		}
		console.log("===========================");
	}

	get(index) {
		if (this.length == 0 || index >= this.length || index < 0) return null;
		if (index < Math.floor(this.length / 2)) {
			let node = this.head;
			while (index >= 0) {
				if (index == 0) return node;
				node = node.next;
				index--;
			}
		} else {
			let node = this.tail;
			index = this.length - 1 - index;
			while (index >= 0) {
				if (index == 0) return node;
				node = node.prev;
				index--;
			}
		}
	}

	set(index, val) {
		const node = this.get(index);
		if (!node) return false;
		node.val = val;
		return true;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index == 0) return !!this.unshift(val);
		if (index == this.length) return !!this.push(val);
		const node = this.get(index);
		const newNode = new Node(val);
		newNode.next = node;
		newNode.prev = node.prev;
		newNode.prev.next = newNode;
		node.prev = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		if (this.length == 0 || index > this.length - 1) return null;
		if (index == 0) return this.shift();
		if (index == this.length - 1) return this.pop();
		const node = this.get(index);
		node.prev.next = node.next;
		node.next.prev = node.prev;
		node.next = null;
		node.prev = null;
		this.length--;
		return node;
	}
}

const list = new DoublyLinkedList();
list.push(3);
list.push(5);
list.push(10);
list.push(87);
list.push(9);
list.push(29);
list.push(49);
list.push(19);
list.push(943);
list.push(91);
list.print();

list.pop();
list.print();

list.shift();
list.print();

list.unshift(35);
list.print();

console.log(list.get(4));

list.set(1, 999);
list.print();

list.insert(5, 1000000);
list.print();

console.log(list.remove(9));
