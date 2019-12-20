const router = require('express').Router();
const account_controller = require('../controllers/accountdata');


router.post('/create',(req,res,next)=>{
    account_controller.createaccount(req,res,next)
});

router.get('/get',(req,res,next) => {
    account_controller.getaccount(req,res,next)
});

router.get('/get/:id',(req,res,next) => {
    account_controller.getoneaccount(req,res,next)
})

module.exports = router;