const Parameter4Service = require("../services/Parameter4_service");


exports.createParameter4 = async(req,res,next)=>{
    try {
        const {TipeBenda_D,UpTime_D,CycleTime_D,TargetQTY_D,RawMattGram_D,RawMattPrice_D } = req.body;

        let Parameter4 = await Parameter4Service.CreateParameter4(TipeBenda_D,UpTime_D,CycleTime_D,TargetQTY_D,RawMattGram_D,RawMattPrice_D )
    
        res.json({status:true, success:Parameter4});
    
    } catch (error) {
        next(error);
    }
}
