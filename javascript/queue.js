class Queue {
    constructor() {
        this.arr = [];
        this.front = -1;
        this.rear = -1;
        this.MAX_SIZE = 100;
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return (this.rear + 1) % this.MAX_SIZE === this.front;
    }

    enqueue(val) {
        if (this.isFull()) {
            alert("Queue Overflow");
            return false;
        }
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.rear = (this.rear + 1) % this.MAX_SIZE;
        }
        this.arr[this.rear] = val;
        this.displayQueue();
        alert("Enqueued element: " + val);
        return true;
    }

    dequeue() {
        if (this.isEmpty()) {
            alert("Queue Underflow");
            return null;
        }
        const dequeued = this.arr[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.MAX_SIZE;
        }
        this.displayQueue();
        alert("Dequeued element: " + dequeued);
        return dequeued;
    }

    displayQueue() {
        const queueItems = document.getElementById('items'); // Changed 'queue-items' to 'items'
        queueItems.innerHTML = '';
        if (this.isEmpty()) return;
        let index = this.front;
        while (index !== this.rear) {
            const listItem = document.createElement('li');
            listItem.textContent = this.arr[index];
            queueItems.appendChild(listItem);
            index = (index + 1) % this.MAX_SIZE;
        }
        const lastItem = document.createElement('li');
        lastItem.textContent = this.arr[this.rear];
        queueItems.appendChild(lastItem);
    }
}

const queue = new Queue();

document.getElementById('enqueue').addEventListener('click', function(event) {
    event.preventDefault();
    const itemInput = document.getElementById('item'); // Changed 'enqueue-item' to 'item'
    const item = itemInput.value;
    if (item.trim() !== '') {
        queue.enqueue(item);
        itemInput.value = '';
    }
});

document.getElementById('dequeue').addEventListener('click', function(event) {
    event.preventDefault();
    queue.dequeue();
});
