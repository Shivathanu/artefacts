class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // insert last
    insertLast(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
                this.size++;
            }

            current.next = node;
        }

        return;
    }

    // insert at index
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;

            count++;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current, previous;
        current = this.head;
    
        let count = 0;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                previous = current;
                count++;
                current = current.next
            }
        }

        previous.next = current.next;

        this.size--;
    }

    // get at index
    getAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let count = 0;
        let current = this.head;

        while (count < index) {
            current = current.next;
            count++;
        }

        console.log('get result:', current.data);
    }

    // print list data
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(400);
ll.insertLast(500);

// ll.insertAt(150, 3);
ll.removeAt(0);

ll.printListData();

ll.getAt(2);
