const router = require('express').Router();
const FeatureController = require('../controller/feature');
const feature = new FeatureController();
router.route('/feature').get(feature.getFeature);
router.route('/feature').post(feature.updateUserFeatures);


module.exports= router;