const Account = require('../models/Account');
const bcrypt = require('bcrypt')

const regis = async(req,res,next) => {
 try{

    const {username ,email, password} = req.body || null;
    const role = 'user'

    const existingAcc = await Account.findOne({username});

    if (existingAcc) {
        return res.status(400).json({
          error: username,
          message: 'An account already exists with that "username"',
        })
    }
    // // Encrypt password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)


    const newAccount = new Account({username, password : hash, email, role})
    await newAccount.save()

    newAccount.password = undefined
    delete newAccount.password
    
    res.status(201).json({
        message: 'Succesfully registered',
        data: newAccount,
        
      })
 }
 catch(e){
    console.error(e);
    return res.status(500).send()
 }


}

module.exports = regis
