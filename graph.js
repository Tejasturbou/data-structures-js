class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(firstVertex, secondVertex) {
		if (!this.adjacencyList[firstVertex] || !this.adjacencyList[secondVertex])
			return null;

		if (!this.adjacencyList[firstVertex]?.includes(secondVertex)) {
			this.adjacencyList[firstVertex].push(secondVertex);
			this.adjacencyList[secondVertex].push(firstVertex);
		}
	}

	removeEdge(firstVertex, secondVertex) {
		if (!this.adjacencyList[firstVertex] || !this.adjacencyList[secondVertex])
			return null;

		if (this.adjacencyList[firstVertex]?.includes(secondVertex)) {
			this.adjacencyList[firstVertex] = this.adjacencyList[firstVertex].filter(
				(vertex) => vertex !== secondVertex
			);
			this.adjacencyList[secondVertex] = this.adjacencyList[
				secondVertex
			].filter((vertex) => vertex !== firstVertex);
		}
	}

	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return null;

		while (this.adjacencyList[vertex].length) {
			const removedVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(removedVertex, vertex);
		}
		delete this.adjacencyList[vertex];
	}

	traverseDFSRecursive(vertex) {
		if (!vertex) return null;
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		traverse(vertex);
		function traverse(node) {
			if (visited[node]) return null;
			result.push(node);
			visited[node] = true;

			adjacencyList[node].forEach((neighbor) => {
				if (!visited[neighbor]) {
					traverse(neighbor);
				}
			});
		}

		return result;
	}

	traverseDFSIterative(vertex) {
		const stack = [];
		const result = [];
		stack.push(vertex);
		const visited = {};

		while (stack.length !== 0) {
			let node = stack.pop();
			if (!visited[node]) {
				result.push(node);
				visited[node] = true;
				this.adjacencyList[node].forEach((element) => {
					stack.push(element);
				});
			}
		}

		return result;
	}

	traverseBFS(vertex) {
		const queue = [vertex];
		const result = [];
		const visited = {};

		while (queue.length) {
			const node = queue.shift();

			if (!visited[node]) {
				result.push(node);
				visited[node] = true;
				this.adjacencyList[node].forEach((element) => {
					queue.push(element);
				});
			}
		}

		return result;
	}
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
graph.addEdge("F", "G");

console.log(graph.adjacencyList);
console.log(graph.traverseDFSRecursive("A"));
console.log(graph.traverseDFSIterative("A"));
console.log(graph.traverseBFS("A"));
