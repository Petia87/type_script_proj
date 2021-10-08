export class List {
    _data:any[]
    constructor() {
        this._data = []
    }
    //test1
    add(value:any) {
        this._data.push(value)
    }

    //test2
    count() {
        return this._data.length
    }

    //test3
    addMany(...value:any) {
        this._data.push(...value)

    }

    //test4
    clear() {
        this._data = []
    }
    //test5
    get(index:number) {
        return this._data[index]
    }

    //test6
    includes(value:any) {
        return this._data.includes(value)
    }
    //test7
    reverse() {
        this._data.reverse()
    }
    //test8
    removeFirst(count:number) {
        this._data.slice(count)
    }
    //test9
    find(searchedNumber:any) {
        for (const element of this._data) {
            if (typeof element == "object") {
                if (element.number === searchedNumber) {
                    return element
                }
            } else {
                if (element === searchedNumber) {
                    return element
                }
            }
        }
    }
    //test 9a
    findBinary(searchedNumber:any) {
       // this.sort()
        let sortedArray = this._data
        let start = 0;
        let end = sortedArray.length - 1;

        while (start <= end) {
            let middle = Math.floor((start + end) / 2);

            if (sortedArray[middle] === searchedNumber) {
                // found the key
                return middle;
            } else if (sortedArray[middle] < searchedNumber) {
                // continue searching to the right
                start = middle + 1;
            } else {
                // search searching to the left
                end = middle - 1;
            }
        }
        // key wasn't found
        return -1;
    }




    //test 10

    sort(propertyName:string) {

        for (var i = 0; i < this._data.length; i++) {
            for (var j = 0; j < this._data.length; j++) { // this was missing
                const firstElement = this._data[j];
                const secondElement = this._data[j + 1];
                if (secondElement === undefined) {
                    break
                }
                if (typeof firstElement == "object") {
                    if (firstElement[propertyName] > secondElement[propertyName]) {
                        // swap
                        this._data[j] = secondElement
                        this._data[j + 1] = firstElement
                    }
                } else {
                    if (firstElement > secondElement) {
                        // swap
                        this._data[j] = secondElement
                        this._data[j + 1] = firstElement
                    }
                }
            }
        }
    }

}