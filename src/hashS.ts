export class HashS {
    array: any[];
    
    constructor() {
        this.array = []

    }



    hash(key:string) {
        return key.toString().length % this.array.length;
    }



    setItem(key:string, value:any) {
        let index = this.hash(key);

        if (!this.array[index]) {
            this.array[index] = [];
        }

        this.array[index].push([key, value])
        return index
    }


    getItem(key:string) {
        let index = this.hash(key);

        if (!this.array[index]) {
            return null
        }

        for (let table of this.array[index]) {
            // key
            if (table[0] === key) {
                // value
                return table[1]
            }
        }
    }
}
