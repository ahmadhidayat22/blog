const Account = require('../models/Account');
const bcrypt = require('bcrypt')

const login = async(req,res,next) => {
 try{

    const {username ,email, password} = req.body || null;
    const role = 'user'

    const foundAcc = await Account.findOne({username});

    if (!foundAcc) {
        return res.status(400).json({
          message: 'Bad credentials',
        })
      }
    const passOk = await bcrypt.compare(password, foundAcc.password)
    if (!passOk) {
    return res.status(400).json({
        message: 'Bad credentials',
    })
    }

    foundAcc.password = undefined
    delete foundAcc.password

    res.status(201).json({
        message: 'Succesfully login',
        data: foundAcc,
        
      })
 }
 catch(e){
    console.error(e);
    return res.status(500).send()
 }


}

module.exports = login
