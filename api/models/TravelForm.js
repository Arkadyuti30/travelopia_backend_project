/**
 * TravelForm.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    place: {
      type: 'string',
      required: true
    },
    travellers: {
      type: 'number',
      required: true
    },
    budget: {
      type: 'string',
      required: true
    }
  },

  submitForm: (formData, cb) => {
    /* 
      Sample Form Data
      { 
        name: "Jacob", 
        email: "jacob123@gmail.com",
        place: "India",
        travellers: 3,
        budget: "3000-4000"
      }
    */

    if (!formData) {
      sails.log.error(`No form data found! Form data: ${formData}`)
      return cb({
        status: 400
      })
    }
    TravelForm.create(formData).exec((err) => {
      if (err) {
        sails.log.error(`Error storing form data ${JSON.stringify(formData)}`)
        return cb(err)
      }
      return cb(null)
    })
  }

};

