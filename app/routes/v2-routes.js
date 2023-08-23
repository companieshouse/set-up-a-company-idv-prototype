const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// ******* starting-a-new-application javascript ********************************
router.get('/v2/starting-a-new-application', function (req, res) {
  // Set URl
  res.render('v2/starting-a-new-application', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/starting-a-new-application', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['newApplication'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select yes if you are starting a new application',
      href: '#newApplication'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/starting-a-new-application', {
      errorNew: true,
      errorList: errors
    })
  } else {
    if (req.session.data['newApplication'] === 'yes') {
      res.redirect('/v2/check-before')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/sign-in')
    }
  }
})


// ******* check-before javascript ********************************
router.get('/v2/check-before', function (req, res) {
  // Set URl
  res.render('v2/check-before', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/check-before', function (req, res) {
  res.redirect('/v2/card-or-paypal')
})


// ******* card-or-paypal javascript ********************************
router.get('/v2/card-or-paypal', function (req, res) {
  // Set URl
  res.render('v2/card-or-paypal', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/card-or-paypal', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['paypal'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select yes if you are able to use a card or PayPal',
      href: '#paypal'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/card-or-paypal', {
      errorPaypal: true,
      errorList: errors
    })
  } else {
    if (req.session.data['paypal'] === 'yes') {
      res.redirect('/v2/secure-register')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/card-or-paypal-stop')
    }
  }
})


// ******* secure-register javascript ********************************
router.get('/v2/secure-register', function (req, res) {
  // Set URl
  res.render('v2/secure-register', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/secure-register', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['secureRegister'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select yes if you are able to use a card or PayPal',
      href: '#secureRegister'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/secure-register', {
      errorSercure: true,
      errorList: errors
    })
  } else {
    if (req.session.data['secureRegister'] === 'yes') {
      res.redirect('/v2/secure-register-stop')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/sign-in')
    }
  }
})


// ******* Sign in validation ********************************
router.get('/v2/sign-in', function (req, res) {
  // Set URl
  res.render('v2/sign-in', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/sign-in', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []
  var emailHasError = false
  var passwordHasError = false
  var relationship = req.session.data['companyRelationship']

  // Check if user has filled out a email
  if (req.session.data['emailAddress'] === '') {
    // No value so add error to array
    emailHasError = true
    errors.push({
      text: 'Enter your email address',
      href: '#emailAddress'
    })
  }

  // Check if user has filled out a password
  if (req.session.data['password'] === '') {
    // No value so add error to array
    passwordHasError = true
    errors.push({
      text: 'Enter your password',
      href: '#password'
    })
  }

  // Check if eother filed not filled out
  if (emailHasError || passwordHasError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/sign-in', {
      errorEmail: emailHasError,
      errorPassword: passwordHasError,
      errorList: errors
    })
  } else 
  {
      // User inputted value so move to next page
      res.redirect('/v2/company-relationship')
    }
})


// ******* company-relationship javascript ********************************
router.get('/v2/company-relationship', function (req, res) {
  // Set URl
  res.render('v2/company-relationship', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/company-relationship', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['companyRelationship'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select your relationship to the company',
      href: '#companyRelationship'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/company-relationship', {
      errorRelationship: true,
      errorList: errors
    })
  } else {
    res.redirect('/v2/company-name')
  }
})


// ******* company-name javascript ******************************
router.get('/v2/company-name', function (req, res) {
  // Set URl
  res.render('v2/company-name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/company-name', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var nameError = false
    var nameEndingError = false
    var companyNameError = false
  
    // Check if user has filled out first name
    if (req.session.data['name'] === '') {
      // No value so add error to array
      nameError = true
      companyNameError = true
      errors.push({
        text: 'Enter the company name',
        href: '#name'
      })
    }
  
    // Check if user has filled out last name
    if (typeof req.session.data['companyEnding'] === 'undefined') {
      // No value so add error to array
      nameEndingError = true
      companyNameError = true
      errors.push({
        text: 'Select the company ending',
        href: '#companyEnding'
      })
    }

  // Check if eother filed not filled out
  if (companyNameError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/company-name', {
      errorName: nameError,
      errorCompanyEnding: nameEndingError,
      errorCompanyName: companyNameError,
      errorList: errors
    })
  } else {
    res.redirect('/v2/company-contact')
  }
  
})


// ******* company-contact javascript ******************************
router.get('/v2/company-contact', function (req, res) {
  // Set URl
  res.render('v2/company-contact', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/company-contact', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var contactError = false
  
    // Check if user has filled out first name
    if (req.session.data['companyNumber'] === '' &&
        req.session.data['companyEmail'] === '' &&
        req.session.data['companyOtherNumber'] === '' ) {
      // No value so add error to array
      contactError = true
      errors.push({
        text: 'Give us one or more ways to contact the company',
        href: '#companyNumber'
      })
    }

  // Check if eother filed not filled out
  if (contactError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/company-contact', {
      errorCompanyContact: contactError,
      errorList: errors
    })
  } else {
    res.redirect('/v2/replacing')
  }
  
})


// ******* replacing javascript ********************************
router.get('/v2/replacing', function (req, res) {
  // Set URl
  res.render('v2/replacing', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/replacing', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['replacingBusiness'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select yes if the new company is replacing another business',
      href: '#replacingBusiness'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/replacing', {
      errorReplacing: true,
      errorList: errors
    })
  } else {
    if (req.session.data['replacingBusiness'] === 'no') {
      res.redirect('/v2/verification-interrupt')
    }
  }
})


// ******* verification-interrupt javascript ********************************
router.get('/v2/verification-interrupt', function (req, res) {
  // Set URl
  res.render('v2/verification-interrupt', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/verification-interrupt', function (req, res) {
  res.redirect('/v2/director-one/director-one-details')
})


// ******* add-director javascript ********************************
router.get('/v2/add-director', function (req, res) {
  // Set URl
  res.render('v2/add-director', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/add-director', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['anotherDirector'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if you want to add another director',
      href: '#anotherDirector'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/add-director', {
      errorAnotherDirector: true,
      errorList: errors
    })
  } else {
    if (req.session.data['anotherDirector'] === 'yes') {
      res.redirect('/v2/director-two/director-two-details')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/check-director-details')
    }
  }
})


// ******* check-director-details javascript ******************************
router.get('/v2/check-director-details', function (req, res) {
  // Set URl
  res.render('v2/check-director-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/check-director-details', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var directorDetailsError = false
  
    // Check if user has filled out first name
    if (typeof req.session.data['directorOneConfrimAddress'] === 'undefined') {
      // No value so add error to array
      directorConfirmAddressError = true
      directorDetailsError = true
      errors.push({
        text: 'Confirm where the director lives',
        href: '#directorOneConfrimAddress'
      })
    }

    // Check if user has filled out first name
    if (typeof req.session.data['directorsConfirmAgree'] === 'undefined') {
      // No value so add error to array
      directorConfirmAgreeError = true
      directorDetailsError = true
      errors.push({
        text: 'Confirm all persons agree to becoming directors of the company',
        href: '#directorsConfirmAgree'
      })
    }

  // Check if eother filed not filled out
  if (directorDetailsError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/check-director-details', {
      errorConfirmDirectorOneAddress: directorConfirmAddressError,
      errorConfirmDirectorsAgree: directorConfirmAgreeError,
      errorDirectorDetails: directorDetailsError,
      errorList: errors
    })
  } else {
    res.redirect('/v2/online-filing-authorisation')
  }
  
})




module.exports=router;

