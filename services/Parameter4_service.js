const Parameter4Model = require("../model/Parameter4")


class Parameter4Service{

    static async CreateParameter4(TipeBenda_D,UpTime_D,CycleTime_D,TargetQTY_D,RawMattGram_D,RawMattPrice_D ){

        const CreateParameter4 = new Parameter4Model({
            TipeBenda_D,UpTime_D,CycleTime_D,TargetQTY_D,RawMattGram_D,RawMattPrice_D 
        });
        return await CreateParameter4.save();

    }
}

module.exports = Parameter4Service;