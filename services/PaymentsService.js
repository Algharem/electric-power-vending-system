/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Process a payment
*
* inlineObject3 InlineObject3 
* returns Payment
* */
const processPayment = ({ inlineObject3 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject3,
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
  processPayment,
};
