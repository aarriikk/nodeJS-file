const Parameter2Model = require("../model/Parameter2")


class Parameter2Service{

    static async CreateParameter2(TipeBenda_B,UpTime_B,CycleTime_B,TargetQTY_B,RawMattGram_B,RawMattPrice_B){

        const CreateParameter2 = new Parameter2Model({
            TipeBenda_B,UpTime_B,CycleTime_B,TargetQTY_B,RawMattGram_B,RawMattPrice_B
        });
        return await CreateParameter2.save();

    }
}

module.exports = Parameter2Service;