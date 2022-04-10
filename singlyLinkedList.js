const Element = () => {
    let value = null;
    let next = null;
    return {
        getValue: () => {
            return value;
        },
        setValue: (val) => {
            value = val
        },
        setNext: (n) => {
            next = n;
        },
        getNext: () => {
            return next;
        }
    };
};

const LinkedList = () => {
    let size = 0;
    let head = null;

    function printFn() {
        if (!head) {
            console.log("Linkedlist is empty");
        }
        let ele = head;
        console.log("Linkedlist found is:");
        while (ele) {
            console.log(ele.getValue());
            ele = ele.getNext();
        }
    }
    function addFn(val) {
        const ele = Element();
        ele.setValue(val);
        if (!head) {
            head = ele;
            size++;
            return;
        }
        let _h = head;
        while (_h.getNext()) {
            _h = _h.getNext();
        }
        _h.setNext(ele);
        size++;
    }
    function sizeFn() {
        return size;
    }

    function addAtIndexFn(ind, val) {
        const ele = Element();
        ele.setValue(val);
        if (!head) {
            head = ele;
            size++;
            return;
        }


        if (ind == 0) {
            ele.setNext(head);
            head = ele;
            size++;
            return;
        }

        let temp = head;
        for (let i = 1; i < ind; i++) {
            temp = temp.getNext();
        }

        ele.setNext(temp.getNext());
        temp.setNext(ele);
        size++;
        return;
    }

    function removeAtIndexFn(ind){
        if(ind<0 || ind>(size-1)){
            return;
        }
        if(ind===0){
            head = head.getNext();
            size--;
            return;
        }
        let ref = null;
        for(let i=0;i<ind;i++){
            if(i===0){
                ref = head;
            }else{
                ref = ref.getNext();
            }
        }
        ref.setNext(ref.getNext().getNext());
        size--;
    }

    return {
        print: printFn,
        add: addFn,
        size: sizeFn,
        addAtIndex: addAtIndexFn,
        removeAtIndex: removeAtIndexFn
    };
};

const main = () => {
    const linkedlist = LinkedList();

    linkedlist.add(1);
    linkedlist.add(10);
    linkedlist.addAtIndex(0, 11);
    linkedlist.addAtIndex(1, 16);
    linkedlist.addAtIndex(3, 17);
    linkedlist.addAtIndex(5, 18);
    linkedlist.print();
    linkedlist.removeAtIndex(1);
    linkedlist.print();
}

main();