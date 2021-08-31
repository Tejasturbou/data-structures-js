export class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(firstVertex, secondVertex, weight) {
		if (!this.adjacencyList[firstVertex] || !this.adjacencyList[secondVertex])
			return null;

		if (
			!this.adjacencyList[firstVertex]?.includes({ node: secondVertex, weight })
		) {
			this.adjacencyList[firstVertex].push({ node: secondVertex, weight });
			this.adjacencyList[secondVertex].push({ node: firstVertex, weight });
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

// const graph = new WeightedGraph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");
// graph.addVertex("G");

// graph.addEdge("A", "B", 5);
// graph.addEdge("A", "C", 6);
// graph.addEdge("B", "D", 5);
// graph.addEdge("C", "E", 2);
// graph.addEdge("D", "E", 1);
// graph.addEdge("D", "F", 5);
// graph.addEdge("E", "F", 6);
// graph.addEdge("F", "G", 2);

// console.log(graph.adjacencyList);
// console.log(graph.traverseDFSRecursive("A"));
// console.log(graph.traverseDFSIterative("A"));
// console.log(graph.traverseBFS("A"));
