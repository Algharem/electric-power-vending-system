/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Authenticate user
*
* inlineObject InlineObject 
* returns inline_response_200
* */
const authenticateUser = ({ inlineObject }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  authenticateUser,
};
