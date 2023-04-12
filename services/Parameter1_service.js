const Parameter1Model = require("../model/Parameter1")


class Parameter1Service{

    static async CreateParameter1(TipeBenda_A,UpTime_A,CycleTime_A,TargetQTY_A,RawMattGram_A,RawMattPrice_A ){

        const CreateParameter1 = new Parameter1Model({
            TipeBenda_A,UpTime_A,CycleTime_A,TargetQTY_A,RawMattGram_A,RawMattPrice_A
        });
        return await CreateParameter1.save();

    }
}

module.exports = Parameter1Service;