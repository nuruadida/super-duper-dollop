const request = require('supertest')
const baseurl = require('../../env')

describe('Post Request example', () => {
    it('Succes create user ', async () =>{
        const response = request(baseurl())
            .post('/user')
            .send({
            "id": 123,
            "username": "myskill",
            "firstName": "my",
            "lastName": "skill",
            "email": "myskill@mailsac.com",
            "password": "P@ssw0rd",
            "phone": "085123804197",
            "userStatus": 1
        } )
        console.log((await response).status)
        console.log((await response).body)
    })
})
