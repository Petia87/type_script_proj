import { List } from "../src/List.js "
import { assert } from "chai"
import { performance } from "perf_hooks";

describe("Array", function () {
    let list;
    beforeEach(() => {
        list = new List()
    })
    it('testA', function () {
        assert.equal(5, 5)
    })
    it('test1', function () {

        list.add(5)

        assert.equal(list.get(0), 5)
    })
    
    it('test2', function () {
        list.add(5)
        list.add(5)

        assert.equal(list.count(), 2)
    })
 

    it('test3', function () {
        list.addMany(5, 5, 5) 

        assert.equal(list.count(), 3)
    })
 

    it('test4', function () {
        list.add(5)
        list.clear() 
        assert.equal(list.count(), 0)
    })
   
    it('test5', function () {
        list.add(1)
        list.add(2)
        assert.equal(list.get(0), 1)
    })
 

    it('test6', function () {
        list.add(1)
        list.add(2)
        assert.ok(list.includes(2))
    })
  

    it('test7', function () {

        list.add(1)//arrange
        list.add(2)
        list.reverse()//act //no return
        assert.equal(list.get(0), 2)//assert
    })
  
    it('test8', function () {
        list.add(1)//arrange
        list.add(2)
        list.add(3)
        list.add(4)
        list.removeFirst(2)//act 
        assert.ok(list.includes(3))//assert
    })
   



    it("time", function () {

        list.addMany(1, 2, 3, 4, 5, 6)
        const t1 = performance.now()
        list.removeFirst(2)//act 
        const t2 = performance.now()
        const time = t2 - t1
        assert.isTrue(time < 15)
        console.log(time);
    })

    it('test9 object', function () {

        list.add({ number: 1 })//arrange
        list.add({ number: 2 })
        list.add({ number: 3 })
        list.add({ number: 4 })
        list.add({ number: 5 })
        list.add({ number: 6 })
        list.add({ number: 7 })
        list.add({ number: 8 })

        const t1 = performance.now()
        const result = list.find(2)
        const t2 = performance.now()
        const time = t2 - t1

        assert.isTrue(time < 20)
        console.log(time);
        assert.equal(result.number, 2)//assert

    })
    ///////////////////////
    /*it('test9', function () {

        list.addMany(1, 3, 2, 10, 20, 0)

        const t1 = performance.now()
        const result = list.find(2)
        const t2 = performance.now()
        const time = t2 - t1

        assert.isTrue(time < 20)
        console.log(time);
        assert.equal(result, 2)//assert

    })*/
    //////////////////////////////////
    it('test9a', function () {
     list.addMany(1, 3, 2, 10, 20, 0)
        list.sort()
        const t1 = performance.now()
        list.findBinary(1)
       
        const t2 = performance.now()
        const time = t2 - t1

        assert.isTrue(time < 20)
        console.log(time);
       assert.equal( list.findBinary(2), 2)
    })




   it("test 10", function () {
        list.addMany(1, 3, 2, 10, 20, 0)
         list.sort()
         assert.equal(list.get(4), 10)
      //list.addMany({ number: 1 }, { number: 2 }, { number: 3 })
       // list.sort("number")
       // assert.equal(list.get(0).number, 1)
    })
   
})