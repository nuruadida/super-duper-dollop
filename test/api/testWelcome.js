const assert = require('chai').assert;
const app = require('../../assert')

//Assert
//cara Assert menggunakan chai
describe ('welcome Test', function (){
    it('app should return welcome message', function () {
        assert.equal(app(),"welcome to QA course at mySkill" )
    })
})
