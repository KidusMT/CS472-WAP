class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

LinkedList.prototype.add = function (data) {
    let newNode = new Node(data);
    
    if (!this.head) {
        this.head = newNode;
        return this.head;
    }

    let tail = this.head;

    while (tail.next !== null) {
        tail = tail.next;
    }

    tail.next = newNode;
    return this.head;
}

LinkedList.prototype.remove = function (index) {
    if (!this.head) {
        this.head = new Node(data);
        return;
    }

    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
        return;
    }

    previous.next = previous.next.next;
    return this.head
}

LinkedList.prototype.print = function () {
    let items = [];
    let tail = this.head;
    items[0] = tail.data; // first item
    let count = 1;
    while (tail.next !== null) {
        tail = tail.next;
        items[count] = tail.data;
        count++;
    }
    return console.log(items);
}