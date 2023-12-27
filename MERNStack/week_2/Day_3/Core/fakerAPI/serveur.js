
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');


const createProduct = () => {
    return {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
};

const user = () => {
    return {
        userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    };
};

app.get("/api/users/new", (req, res) => {
    const newUser=user()
    return res.json(newUser)
});
app.get( "/api/companies/new",(req,res)=>{
    const newFakeProduct = createProduct();
    return res.json(newFakeProduct)

})

app.get( "/api/users/companies/new",(req,res)=>{
        const newFakeProduct = createProduct();
        const newUser=user()
        const responseData = {
            fakeProduct: newFakeProduct,
            newUser: newUser  
        };
        return res.json(responseData)
    
    
    })

app.listen(port, () => console.log(`Listening on port: ${port}`));