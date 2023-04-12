const Parameter1Service = require("../services/Parameter1_service");


exports.createParameter1 = async(req,res,next)=>{
    try {
        const {TipeBenda_A,UpTime_A,CycleTime_A,TargetQTY_A,RawMattGram_A,RawMattPrice_A} = req.body;

        let Parameter1 = await Parameter1Service.CreateParameter1(TipeBenda_A,UpTime_A,CycleTime_A,TargetQTY_A,RawMattGram_A,RawMattPrice_A)
    
        res.json({status:true, success:Parameter1});
    
    } catch (error) {
        next(error);
    }
}
