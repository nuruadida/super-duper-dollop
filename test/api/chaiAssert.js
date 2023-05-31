const {expect} = require('chai')
const request = require('supertest')
const DATA = require('../../data/userData.js')

describe ('Post Request Example', () => {
    const response = request('https://petstore.swagger.io/v2')
        .post('/user')
        .send(DATA.CREATE_USER_DATA)

    it('response status equal to 200', async () => {
        //Check response status harus sama dengan 200
        expect((await response).status).to.equal(200)
    })
    it('response status equal to 200', async () => {
        //Expect dalam body responseterdapat value 'masssage'
        expect((await response).body).to.haveOwnProperty('message')
    })
    //Reporting in mochawesome
})
