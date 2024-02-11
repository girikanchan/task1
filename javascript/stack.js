class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
        this.MAX_SIZE = 100;
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.MAX_SIZE - 1;
    }

    push(val) {
        if (this.isFull()) {
            alert("Stack Overflow");
            return false;
        }
        this.arr[++this.top] = val;
        this.displayStack();
        alert("Pushed element: " + val);
        return true;
    }

    pop() {
        if (this.isEmpty()) {
            alert("Stack Underflow");
            return null;
        }
        const popped = this.arr[this.top--];
        this.displayStack();
        alert("Popped element: " + popped);
        return popped;
    }

    peek() {
        if (this.isEmpty()) {
            alert("Stack is empty");
            return null;
        }
        return this.arr[this.top];
    }

    displayStack() {
        const stackItems = document.getElementById('items');
        stackItems.innerHTML = '';
        for (let i = this.top; i >= 0; i--) {
            const listItem = document.createElement('li');
            listItem.textContent = this.arr[i];
            stackItems.appendChild(listItem);
        }
    }
}

const stack = new Stack();

document.getElementById('push').addEventListener('click', function(event) {
    event.preventDefault();
    const itemInput = document.getElementById('item');
    const item = itemInput.value;
    if (item.trim() !== '') {
        stack.push(item);
        itemInput.value = '';
    }
});

document.getElementById('pop').addEventListener('click', function(event) {
    event.preventDefault();
    stack.pop();
});
