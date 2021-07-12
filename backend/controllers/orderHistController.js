const OrderHistory = require('../models/orderHist');
exports.getAllOrderHistory= async (req,res,next)=>{
    const item= await OrderHistory.findAll();;
   res.status(200).json(item)
}
exports.getByUserName= async (req,res,next)=>{
  try{
    console.log(req.params.username)
    const user=await OrderHistory.findByUserName(req.params.username)
    res.status(200).json(user);
  }catch(err){
   next(err);
  }    
}
exports.save= async (req,res,next)=>{
  try{
    console.log('this test for order history save')
    console.log(req.body)
     await OrderHistory.save(req.body) 
    res.status(200).json(req.body); 
  }catch(err){
      next(err)
  }
 
}

exports.delete= async (req,res,next)=>{
  try{
    await OrderHistory.clearHistory(req.params.id)
    res.status(200).json({deleted:"successfully"})
  }catch(err){
     next(err)
  }
}

