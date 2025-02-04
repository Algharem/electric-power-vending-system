/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a new customer
*
* inlineObject1 InlineObject1 
* returns Customer
* */
const createCustomer = ({ inlineObject1 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject1,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all customers
*
* returns List
* */
const getAllCustomers = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get customer by ID
*
* id String Customer ID
* returns Customer
* */
const getCustomerById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
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
  createCustomer,
  getAllCustomers,
  getCustomerById,
};
