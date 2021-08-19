
const FeatureRepository = require('../repository/featurerepository');
class FeatureService {
    constructor() {
        this.featureRepository = new FeatureRepository();
    }


    async getFeatureByEmail(email, featureName) {
        try {
            let result = await this.featureRepository.getFeatureByEmail(email, featureName);
            return { "canAccess": !result ? false : result.enable };

        }
        catch (error) {
            throw error;
        }

    }


    async updateUserFeatures(email, featureName, enable) {
        try {
            let isFeatureExist= await this.featureRepository.isFeatureExistByEmailAndStatus(email, featureName, enable);
            if(isFeatureExist && isFeatureExist>0)
            {
                const err = new Error();
                err.code = 'STATUS_NOT_MODIFIED';
                throw err;
            }
            return await this.featureRepository.upsertUserFeature(email, featureName, enable);

        } catch (ex) { 
            throw ex;
        }
    }

}
module.exports = FeatureService;