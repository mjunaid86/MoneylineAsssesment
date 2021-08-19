const logger = require('../utils/logger');
const constants = require('../common/constant');
const FeatureService = require('../services/featureservice');
class FeatureController {
    constructor() {
        this.featureService = new FeatureService();
    }

    getFeature = async (req, res, next) => {

        try {
            const email = req.query.email;
            const featureName = req.query.featureName;

            if (!email || !featureName) {
                const err = new Error();
                err.code = 'PARAM_MISSING';
                throw err;
            }
            let result = await this.featureService.getFeatureByEmail(email, featureName);
            res.json(result);
        }
        catch (error) {
            this.errorHandling(res, error);
        }
    }


    updateUserFeatures = async (req, res, next) => {
        try {
            const email = req.body.email;
            const featureName = req.body.featureName;
            const enable = req.body.enable;
            if (!email || !featureName) {
                const err = new Error();
                err.code = 'PARAM_MISSING';
                throw err;
            }
            let result = await this.featureService.updateUserFeatures(email, featureName, enable);
            res.json();
        }
        catch (error) {
            this.errorHandling(res, error);
        }
    }

    errorHandling(res, error) {
        logger.error(error);
        if (error.code) {
            res.status(constants.ERROR_CODES[error.code].HTTP_CODE)
                .json(constants.ERROR_CODES[error.code].MESSAGE);
        }
        else {
            res.status(constants.ERROR_CODES.UNEXPECTED_ERROR.HTTP_CODE)
                .json(error.message);
        } 
    }

}
module.exports = FeatureController;

