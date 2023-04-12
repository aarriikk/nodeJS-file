const Parameter3Service = require("../services/Parameter3_service");


exports.createParameter3 = async(req,res,next)=>{
    try {
        const {userId,TipeBenda_C,UpTime_C,CycleTime_C,TargetQTY_C,RawMattGram_C,RawMattPrice_C} = req.body;

        let Parameter3 = await Parameter3Service.CreateParameter3(userId,TipeBenda_C,UpTime_C,CycleTime_C,TargetQTY_C,RawMattGram_C,RawMattPrice_C)
    
        res.json({status:true, success:Parameter3});
    
    } catch (error) {
        next(error);
    }
}
