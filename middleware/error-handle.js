const errorHandlerMiddleware =(err,req,res,next)=>{
   return res.status(500).json({msg:err.errors.name.message})
}

module.exports = errorHandlerMiddleware