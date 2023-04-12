const Parameter3Model = require("../model/Parameter3")


class Parameter3Service{

    static async CreateParameter3(userId,TipeBenda_C,UpTime_C,CycleTime_C,TargetQTY_C,RawMattGram_C,RawMattPrice_C){

        const CreateParameter3 = new Parameter3Model({
            userId,TipeBenda_C,UpTime_C,CycleTime_C,TargetQTY_C,RawMattGram_C,RawMattPrice_C
        });
        return await CreateParameter3.save();

    }
}

module.exports = Parameter3Service;