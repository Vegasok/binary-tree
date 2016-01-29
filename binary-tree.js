'use strict';

class BinaryTree {
	constructor() {
		this.root = null;		
	}	

	contains(data) {
		var found = false,
			current = this.root;

		if( this.isEmpty() ) return false;

		while(!found && current){
			if (data < current.data){
				current = current.left;
			} else if (data > current.data) {
				current = current.right;
			} else {
				found = true;
			}
		}

		return found;
	}


	insert(data) {

		var node = new Node(data, null, null), 

			current;

		if ( this.isEmpty() ) {
			
			this.root = node;
			return;
		} else {
			current = this.root;

			while(true){

				if (data < current.data){
					if (current.left === null) {
						current.left = node;
						
						break;
					} else {
						current = current.left;
					}
				} else if (data > current.data){
					if (current.right === null){
						current.right = node;
						
						break;
					} else {
						current = current.right;
					}
				} else {
					break;
				}
			}
		}
	}


	remove(data) {
		
		if (this.root == null){
			return false;
		}

		this.removeNode(this.root, data);

	}        	

	getMin(node){

		if (node.left == null) {
			return node;
		} else {
			return this.getMin(node.left);
		}

	}
	
	removeNode(node, data){

		if (this.root.left == null && this.root.right == null) {
			this.root = null;
		}

		if (node == null) {			
			return null;
		}

		if (data == false) {
			return;
		}

		if (data == node.data) {
			
			if (node.left == null && node.right == null) {				
				return null;
			}

			if (node.left == null) {
				return node.right;
			}

			if (node.right == null) {
				return node.left;
			}

			var tempNode = this.getMin(node.right);

			node.data = tempNode.data;
			node.right = this.removeNode(node.right, tempNode.data);
			return node;

		} else if (data < node.data){
			node.left = this.removeNode(node.left, data);
			return node;
		} else {
			node.right = this.removeNode(node.right, data);
			return node;
		}
	}

	
	

	size() {

		if(this.root === null) return 0;

		var length = 0;

		this.traverse(function(node){
			length++;
		});
		
		return length;
			
	}

	traverse(process){
		function inOrder(node){
            if (node){

                if (node.left !== null){
                    inOrder(node.left);
                } 

                process.call(this, node);

                if (node.right !== null){
                    inOrder(node.right);
                }
            }
        }

        inOrder(this.root);
	}
	
	isEmpty() {
		return this.root === null;
	}

}
