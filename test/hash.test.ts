import { HashS } from "../src/hashS"
import { assert } from "chai"


describe("HashS", function () {
    let ht:any;
    beforeEach(() => {
        ht = new HashS()
    })

    it('setItem', function () {
        ht.setItem("petia",10);
        ht.setItem("ina",1);
        let result = ht.getItem("petia")
        assert.equal(result, 10)
       
    })

    it('getItem', function () {
        ht.setItem("ani",1);
        let result = ht.getItem("ani")
        assert.equal(result, 1)
       
    })
    
})
