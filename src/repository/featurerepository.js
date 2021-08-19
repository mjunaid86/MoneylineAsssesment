const db = require('../models');

class FeatureRepository {
    constructor() {
    }


    async getFeatureByEmail(email, featureName) {
        try {
            let result =db.UserFeatures.findOne({
                attributes: [
                   "enable"
                ],
                where: {
                    featureName: featureName,
                    email: email
                } 
            });
            return result;
        }
        catch (error) {
            error.code = 'FAILED_READ_DATABASE';
            throw error; 
        }

    }

    async isFeatureExistByEmailAndStatus(email, featureName,enable) {
        try {
            let count =db.UserFeatures.count({
                where: {
                    featureName: featureName,
                    email: email,
                    enable: enable
                } 
            });
            return count;
        }
        catch (error) {
            error.code = 'FAILED_READ_DATABASE';
            throw error; 
        }

    }
    
    async upsertUserFeature(email, featureName,enable) {
        const transaction = await db.sequelize.transaction();
        try { 
            let dataToUpsert = {};
            dataToUpsert.email = email;
            dataToUpsert.featureName = featureName;
            dataToUpsert.enable = enable;
            dataToUpsert.updatedAt = Date.now();  

            await db.UserFeatures.upsert(dataToUpsert, { transaction: transaction });
            transaction.commit();
        } catch (ex) {
            transaction.rollback(); 
            ex.code = 'FAILED_UPDATE_DATABASE';
            throw ex; 
        }
    }

}
module.exports = FeatureRepository;