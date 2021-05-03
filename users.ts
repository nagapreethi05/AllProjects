import express from 'express';
import mongoose from 'mongoose';
import User from './user';
const usersRouter = express.Router()

usersRouter.get('/login', async(req:any,res:any) => {
const username=req.query.username;
const password=req.query.password;
if(username && password){
    try{
        const user=await User.findOne({username:username,password:password});
        if(user){
            res.json(true);
        }else{
            res.json(false);
        }
        
    }
    catch(err){
        res.send("Error "+err);
    } 
}}
);
usersRouter.get('/', async(req:any,res:any) => {
    
    try{
           const user = await User.find({});
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }

})
usersRouter.post('/registration', async(req:any,res:any) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
        address: req.body.address       
    })
    try{
        const u1 =  await newUser.save() 
        res.json(u1)
    }catch(err){
        res.send('Error...')
    }
})
// usersRouter.get('/login', async(req:any,res:any) => {
//     // const newUser = new User({
//     //     email: req.body.email,
//     //     password: req.body.password,
//     //     confirmPassword: req.body.confirmPassword
//     // })
//     // try{
//     //     const u1 =  await newUser.save() 
//     //     res.json(u1)
//     // }catch(err){
//     //     res.send('Error...')
//     // }
// })
// usersRouter.put('/:id',async(req:any,res:any)=> {
//     try{
//         const books = await User.findById(req.params.id) 
//         books.title = req.body.title,
//         books.author = req.body.author,
//         books.price = req.body.price,
//         books.rating = req.body.rating,
//         books.pages=req.body.pages
//         const a1 = await books.save()
//         res.json(a1)   
//     }catch(err){
//         res.send('Error')
//     }

// })
// usersRouter.delete('/:id',async(req:any,res:any)=> {
//     try{
//         const books = await User.findById(req.params.id)      
//         const a1 = await books.remove()
//         res.json(a1)   
//     }catch(err){
//         res.send('Error')
//     }
// })

module.exports = usersRouter