const Parameter2Service = require("../services/Parameter2_service");


exports.createParameter2 = async(req,res,next)=>{
    try {
        const {TipeBenda_B,UpTime_B,CycleTime_B,TargetQTY_B,RawMattGram_B,RawMattPrice_B} = req.body;

        let Parameter2 = await Parameter2Service.CreateParameter2(TipeBenda_B,UpTime_B,CycleTime_B,TargetQTY_B,RawMattGram_B,RawMattPrice_B)
    
        res.json({status:true, success:Parameter2});
    
    } catch (error) {
        next(error);
    }
}
