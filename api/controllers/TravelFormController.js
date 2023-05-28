/**
 * TravelFormController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  submitForm: (req, res) => {
    if (!req.body) {
        sails.log.error(`Error in TravelFormController.submitForm. Missing request body! Body ${req.body}`)
        return res.badRequest()
    }

    /***** Sample Body *****/
    /* 
        { 
            name: "Jacob", 
            email: "jacob123@gmail.com",
            place: "India",
            travellers: 3,
            budget: "3000-4000"
        }
    */

    const formData = req.body
    formData.date = new Date()

    TravelForm.submitForm(formData, (err) => {
        if (err) {
            sails.log.error(`Error submitting form data for email ${req.body.email}`)
            return res.negotiate(err)
        }
        return res.ok()
    })
  },

  getAllFormData: (req, res) => {
    TravelForm.find({}).exec((err, allFormData) => {
        if (err) {
            sails.log.error(`Error in finding form data, error: ${JSON.stringify(err)}`)
            return res.negotiate(err)
        }
        return res.json(allFormData)
    })
  }
};

