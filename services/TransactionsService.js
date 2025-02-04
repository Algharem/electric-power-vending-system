/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a new transaction
*
* inlineObject2 InlineObject2 
* returns Transaction
* */
const createTransaction = ({ inlineObject2 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject2,
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
  createTransaction,
};
