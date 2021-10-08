import { Queues } from "../src/Queues.js"
import { assert } from "chai"


describe("Queues", function () {
    let queues;
    beforeEach(() => {
        queues = new Queues()
    })

    it('enqueue', function () {
        queues.enqueue(5)
        assert.isFalse(queues.isEmpty())
        //assert.equal({},5)

    })
    it('dequeue', function () {
        queues.enqueue(1)
        queues.enqueue(2)
        queues.dequeue()
        queues.dequeue()
        assert.isTrue(queues.isEmpty())


    })

    it('isEmpty', function () {
        assert.isTrue(queues.isEmpty())

    })


})