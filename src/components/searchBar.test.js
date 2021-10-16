const searchBar = require("./searchBar")

// @ponicode
describe("onInputChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "George", "Michael"], ["Michael", "Michael", "Anas"], ["Edmond", "Michael", "George"]]
        inst = new searchBar.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.onInputChange("UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onInputChange("DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onInputChange("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onInputChange("DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onInputChange("UNLOCK TABLES;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onInputChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
