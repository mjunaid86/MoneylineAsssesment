'use strict';
 
module.exports = (sequelize, DataTypes) => {
  var UserFeatures = sequelize.define('UserFeatures', {
    featureName: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    enable: {
      type: DataTypes.BOOLEAN
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  }); 
  return UserFeatures;
}
