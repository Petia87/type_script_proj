import { HashTable } from "../src/hashTable"
import { assert } from "chai"


describe("HashTable", function () {
    let ht:any;
    beforeEach(() => {
        ht = new HashTable()
    })


    it('set', function () {
        ht.set("petia", 94);
        assert.equal(ht.get("petia"), 94)



    })

    it('get', function () {
        ht.set("ani", 1);
        ht.set("ina", 1);
        assert.equal(ht.get("ani"), 1)
        assert.equal(ht.get("ina"), 1)

    })


})

