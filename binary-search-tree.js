class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		const node = new Node(val);
		if (this.root == null) {
			this.root = node;
			return this;
		}
		let traversingNode = this.root;
		while (true) {
			if (val == traversingNode.value) return null;
			if (val < traversingNode.value) {
				if (traversingNode.left == null) {
					traversingNode.left = node;
					return this;
				}
				traversingNode = traversingNode.left;
			} else if (val > traversingNode.value) {
				if (traversingNode.right == null) {
					traversingNode.right = node;
					return this;
				}
				traversingNode = traversingNode.right;
			}
		}
	}

	find(value) {
		if (this.root == null) return false;
		let node = this.root;

		while (node) {
			if (value == node.value) return node;
			if (value < node.value) {
				if (node.left == null) return false;
				node = node.left;
			} else if (value > node.value) {
				if (node.right == null) return false;
				node = node.right;
			}
		}

		return false;
	}

	traverseBFS() {
		if (this.root == null) return null;
		const queue = [];
		const checkedNodes = [];
		queue.push(this.root);
		let node = this.root;
		while (queue.length) {
			node = queue.shift();
			checkedNodes.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return checkedNodes;
	}

	traverseDFSPreOrder() {
		if (this.root == null) return null;
		let traveresedNodes = [];
		helper(this.root);
		function helper(node) {
			traveresedNodes.push(node.value);
			if (node.left) helper(node.left);
			if (node.right) helper(node.right);
		}

		return traveresedNodes;
	}

	traverseDFSPostOrder() {
		if (this.root == null) return null;
		let traveresedNodes = [];
		helper(this.root);
		function helper(node) {
			if (node.left) helper(node.left);
			if (node.right) helper(node.right);
			traveresedNodes.push(node.value);
		}

		return traveresedNodes;
	}

	traverseDFSInOrder() {
		if (this.root == null) return null;
		let traveresedNodes = [];
		helper(this.root);
		function helper(node) {
			if (node.left) helper(node.left);
			traveresedNodes.push(node.value);
			if (node.right) helper(node.right);
		}

		return traveresedNodes;
	}
}

const tree = new BinarySearchTree();
tree.insert(4);
tree.insert(2);
tree.insert(142);
tree.insert(122);
tree.insert(2);
console.log(tree.insert(1));
console.log(tree.find(143));
console.log(tree.traverseBFS());
console.log(tree.traverseDFSPreOrder());
console.log(tree.traverseDFSPostOrder());
console.log(tree.traverseDFSInOrder());
