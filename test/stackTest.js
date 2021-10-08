import { Stack } from "../src/Stack.js"
import { assert } from "chai"


describe("Stack", function () {
    let stack;
    beforeEach(() => {
        stack = new Stack()
    })

    it('push', function () {
        stack.push(5)
        assert.equal(stack.peek(0), 5)

    })
    it('pop', function () {
        stack.pop()
        assert.equal(stack.length(0), 0)

    })

    it('lenght', function () {
        stack.push(1)
        stack.push(2)
        assert.equal(stack.length(2), 2);

    })
    it('peek', function () {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        assert.equal(stack.peek(), 3)

    })
    it('isEmpty', function () {
        stack.push(1)
        stack.pop()     
        assert.isTrue(stack.isEmpty())

    })
    it('toString', function () {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        assert.equal(stack.toString(), "1,2,3")

    })

})