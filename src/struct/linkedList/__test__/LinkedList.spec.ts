import {LinkedList} from "@/struct/linkedList";


describe("Test Simple LinkedList", () => {

    test("empty LinkedList", () => {
        const list = new LinkedList<null>()

        expect(list.first).toBeNull()
        expect(list.last).toBeNull()
    })
})
