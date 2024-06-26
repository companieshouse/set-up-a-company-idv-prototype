const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Show session data and URLs in the terminal  
router.use((req, res, next) => {  
  const log = {  
    method: req.method,  
    url: req.originalUrl,  
    data: req.session.data  
  }  
  console.log(JSON.stringify(log, null, 2))  
  next()  
}) 

// ******* Sign in email validation ********************************
router.get('/v2/1-initial-set-up/sign-in-email', function (req, res) {
  // Set URl
  res.render('v2/1-initial-set-up/sign-in-email', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/1-initial-set-up/sign-in-email', function (req, res) {
// Create empty array and set error variables to false
var errors = []

// Check if user has filled email
if (req.session.data['signin-email'] === '') {
  // No value so add error to array
  errors.push({
    text: 'Enter your email address',
    href: '#signin-email'
  })
}

if (req.session.data['signin-email'] === '') {
  // Re-show page with error value as true so errors will show
  res.render('v2/1-initial-set-up/sign-in-email', {
    errorSigninEmail: true,
    errorList: errors
  })
} else {
  // User inputted value so move to next page
  res.redirect('/v2/1-initial-set-up/sign-in-password')
}
})


// ******* Sign in password validation ********************************
router.get('/v2/1-initial-set-up/sign-in-password', function (req, res) {
// Set URl
res.render('v2/1-initial-set-up/sign-in-password', {
  currentUrl: req.originalUrl
})
})

router.post('/v2/1-initial-set-up/sign-in-password', function (req, res) {
// Create empty array and set error variables to false
var errors = []


// Check if user has filled out password
if (req.session.data['signin-password'] === '') {
  // No value so add error to array
  errors.push({
    text: 'Enter your password',
    href: '#signin-password'
  })
}

if (req.session.data['signin-password'] === '') {
  // Re-show page with error value as true so errors will show
  res.render('v2/1-initial-set-up/sign-in-password', {
    errorSigninPassword: true,
    errorList: errors
  })
} else {
  // User inputted value so move to next page
  res.redirect('/v2/1-initial-set-up/have-you-verified')
}
})

// ******* have-you-verified javascript ********************************
router.get('/v2/1-initial-set-up/have-you-verified', function (req, res) {
  // Set URl
  res.render('v2/1-initial-set-up/have-you-verified', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/1-initial-set-up/have-you-verified', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['haveVerified'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if all the directors have verified their identity',
      href: '#haveVerified'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/1-initial-set-up/have-you-verified', {
      errorHaveVerified: true,
      errorList: errors
    })
  } else {
    if (req.session.data['haveVerified'] === 'yes') {
      res.redirect('/v2/1-initial-set-up/starting-a-new-application')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/1-initial-set-up/verification-stop')
    }
  }
})

// ******* starting-a-new-application javascript ********************************
router.get('/v2/1-initial-set-up/starting-a-new-application', function (req, res) {
  // Set URl
  res.render('v2/1-initial-set-up/starting-a-new-application', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/1-initial-set-up/starting-a-new-application', function (req, res) {
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
    res.render('v2/1-initial-set-up/starting-a-new-application', {
      errorNew: true,
      errorList: errors
    })
  } else {
    if (req.session.data['newApplication'] === 'yes') {
      res.redirect('/v2/1-initial-set-up/check-before')
    } 
  }
})


// ******* check-before javascript ********************************
router.get('/v2/1-initial-set-up/check-before', function (req, res) {
  // Set URl
  res.render('v2/1-initial-set-up/check-before', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/1-initial-set-up/check-before', function (req, res) {
  res.redirect('/v2/1-initial-set-up/card-or-paypal')
})


// ******* card-or-paypal javascript ********************************
router.get('/v2/1-initial-set-up/card-or-paypal', function (req, res) {
  // Set URl
  res.render('v2/1-initial-set-up/card-or-paypal', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/1-initial-set-up/card-or-paypal', function (req, res) {
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
    res.render('v2/1-initial-set-up/card-or-paypal', {
      errorPaypal: true,
      errorList: errors
    })
  } else {
    if (req.session.data['paypal'] === 'yes') {
      res.redirect('/v2/1-initial-set-up/secure-register')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/1-initial-set-up/card-or-paypal-stop')
    }
  }
})


// ******* secure-register javascript ********************************
router.get('/v2/1-initial-set-up/secure-register', function (req, res) {
  // Set URl
  res.render('v2/1-initial-set-up/secure-register', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/1-initial-set-up/secure-register', function (req, res) {
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
    res.render('v2/1-initial-set-up/secure-register', {
      errorSercure: true,
      errorList: errors
    })
  } else {
    if (req.session.data['secureRegister'] === 'yes') {
      res.redirect('/v2/1-initial-set-up/secure-register-stop')
    } else {
      // User inputted value so move to next page
      res.redirect('/v2/2-company-details/company-relationship')
    }
  }
})


// ******* company-relationship javascript ********************************
router.get('/v2/2-company-details/company-relationship', function (req, res) {
  // Set URl
  res.render('v2/2-company-details/company-relationship', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/2-company-details/company-relationship', function (req, res) {
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
    res.render('v2/2-company-details/company-relationship', {
      errorRelationship: true,
      errorList: errors
    })
  } else {
    res.redirect('/v2/2-company-details/company-name')
  }
})


// ******* company-name javascript ******************************
router.get('/v2/2-company-details/company-name', function (req, res) {
  // Set URl
  res.render('v2/2-company-details/company-name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/2-company-details/company-name', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var nameError = false
    var nameEndingError = false
    var companyNameError = false
  
    // Check if user has filled out company name
    if (req.session.data['companyName'] === '') {
      // No value so add error to array
      nameError = true
      companyNameError = true
      errors.push({
        text: 'Enter the company name',
        href: '#companyName'
      })
    }
  
    // Check if user has filled out company ending
    if (typeof req.session.data['companyEnding'] === 'undefined') {
      // No value so add error to array
      nameEndingError = true
      companyNameError = true
      errors.push({
        text: 'Select the company ending',
        href: '#companyEnding'
      })
    }

  // Check if either values not filled out
  if (companyNameError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/2-company-details/company-name', {
      errorCompanyName: nameError,
      errorCompanyEnding: nameEndingError,
      errorCompanyName: companyNameError,
      errorList: errors
    })
  } else {
    res.redirect('/v2/2-company-details/company-contact')
  }
  
})


// ******* company-contact javascript ******************************
router.get('/v2/2-company-details/company-contact', function (req, res) {
  // Set URl
  res.render('v2/2-company-details/company-contact', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/2-company-details/company-contact', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var contactError = false
  
    // Check if user has filled out any contact details
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
    res.render('v2/2-company-details/company-contact', {
      errorCompanyContact: contactError,
      errorList: errors
    })
  } else {
    res.redirect('/v2/2-company-details/replacing')
  }
  
})


// ******* replacing javascript ********************************
router.get('/v2/2-company-details/replacing', function (req, res) {
  // Set URl
  res.render('v2/2-company-details/replacing', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/2-company-details/replacing', function (req, res) {
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
    res.render('v2/2-company-details/replacing', {
      errorReplacing: true,
      errorList: errors
    })
  } else {
    res.redirect('/v2/3-director/director-details')
  }
})


// ******* director-details javascript ******************************
router.get('/v2/3-director/director-details', function (req, res) {
  // Set URl
  res.render('v2/3-director/director-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/3-director/director-details', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []
  var firstNameError = false
  var lastNameError = false
  var differentNameError = false
  var nationalityError = false
  var dayHasError = false
  var monthHasError = false
  var yearHasError = false
  var jobTitleError = false
  var codeHasError = false

  var detailsError = false

  // Check if user has filled out first name
  if (req.session.data['directorFirstName'] === '') {
    // No value so add error to array
    firstNameError = true
    detailsError = true
    errors.push({
      text: 'Enter your first name in full',
      href: '#directorFirstName'
    })
  }

  // Check if user has filled out last name
  if (req.session.data['directorLastName'] === '') {
    // No value so add error to array
    lastNameError = true
    detailsError = true
    errors.push({
      text: 'Enter your last name in full',
      href: '#directorLastName'
    })
  }

    // Check if user has filled out a value
  if (typeof req.session.data['directorDifferentName'] === 'undefined') {
    differentNameError = true
    detailsError = true
    errors.push({
      text: 'Select if the director has used a different name for business purposes in the last 20 years',
      href: '#directorDifferentName'
    })
  }

  // Check if user has filled nationality
  if (req.session.data['directorNationality'] === '') {
    // No value so add error to array
    nationalityError = true
    detailsError = true
    errors.push({
      text: 'Enter the directors nationality',
      href: '#directorNationality'
    })
  }

  // Check if user has filled out job title
  if (req.session.data['directorJobTitle'] === '') {
    // No value so add error to array
    jobTitleError = true
    detailsError = true
    errors.push({
      text: 'Enter the directors job title',
      href: '#directorJobTitle'
    })
  }

    // Check if user has filled out a day
  if (req.session.data['directorDob-day'] === '') {
    // No value so add error to array
    dayHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a day',
      href: '#directorDob-day'
    })
  }

  // Check if user has filled out a month
  if (req.session.data['directorDob-month'] === '') {
    // No value so add error to array
    monthHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a month',
      href: '#directorDob-day'
    })
  }

  // Check if user has filled out a year
  if (req.session.data['directorDob-year'] === '') {
    // No value so add error to array
    yearHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a year',
      href: '#directorDob-day'
    })
  }

  // Check if user has filled out personal code
  if (req.session.data['directorPersonalCode'] === '') {
    // No value so add error to array
    codeHasError = true
    detailsError = true
    errors.push({
      text: 'Enter the directors Companies House personal code',
      href: '#directorPersonalCode'
    })
  }

  // Check if eother filed not filled out
  if (detailsError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/3-director/director-details', {
      errorDirectorFirstName: firstNameError,
      errorDirectorLastName: lastNameError,
      errorDirectorDifferentName: differentNameError,
      errorDirectorNationality: nationalityError,
      errorDirectorDobDay: dayHasError,
      errorDirectorDobMonth: monthHasError,
      errorDirectorDobYear: yearHasError,
      errorDirectorJobTitle: jobTitleError,
      errorDirectorPersonalCode: codeHasError,
      errorDirectorDetails: detailsError,
      errorList: errors
    })
  } // dob code mis-match
  else if (req.session.data['directorPersonalCode'] === '444-5555-6666') {
    errors.push({
    text: 'You have entered incorrect verification details for this person. Check the date of birth and Companies House personal code, and try again.',
    href: '#directorPersonalCode'
    })
    
    res.render('v2/3-director/director-details', {
      errorDirectorDobDay: true,
      errorDirectorDobMonth: true,
      errorDirectorDobYear: true,
      directorMatchError: true,
      errorDirectorDetails: true,
      errorList: errors
    })
  } // name mis-match
  else if (req.session.data['directorPersonalCode'] === '111-2222-3333') {
    res.redirect('/v2/3-director/director-why-this-name')
  } else {
    res.redirect('/v2/3-director/director-address')
  }
})


// ******* why-this-name javascript ********************************
router.get('/v2/3-director/director-why-this-name', function (req, res) {
  // Set URl
  res.render('v2/3-director/director-why-this-name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/3-director/director-why-this-name', function (req, res) {
  res.redirect('/v2/3-director/director-address')
})


// ******* director-address javascript ********************************
router.get('/v2/3-director/director-address', function (req, res) {
  // Set URl
  res.render('v2/3-director/director-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/3-director/director-address', function (req, res) {
  res.redirect('/v2/3-director/director-confirm-address')
})


// ******* confirm-address javascript ********************************
router.get('/v2/3-director/director-confirm-address', function (req, res) {
  // Set URl
  res.render('v2/3-director/director-confirm-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/3-director/director-confirm-address', function (req, res) {
  res.redirect('/v2/3-director/director-reminders')
})


// ******* director-reminders javascript ********************************
router.get('/v2/3-director/director-reminders', function (req, res) {
  // Set URl
  res.render('v2/3-director/director-reminders', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/3-director/director-reminders', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['reminders'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if the director wants to receive filing reminders',
      href: '#reminders'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/3-director/director-reminders', {
      errorReminders: true,
      errorList: errors
    })
  } else {
      res.redirect('/v2/3-director/director-statement')
  }
})


// ******* psc-statement javascript ********************************
router.get('/v2/3-director/director-statement', function (req, res) {
  // Set URl
  res.render('v2/3-director/director-statement', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/3-director/director-statement', function (req, res) {
  // Create empty array
  var errors = []

  if (typeof req.session.data['directorStatement'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Confirm if the identity verification statement is correct',
      href: '#directorStatement'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/3-director/director-statement', {
      errorDirectorStatement: true,
      errorList: errors
    })
  } else {
      res.redirect('/v2/3-director/director-add')
  }
})


// ******* add-director javascript ********************************
router.get('/v2/3-director/director-add', function (req, res) {
  // Set URl
  res.render('v2/3-director/director-add', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/3-director/director-add', function (req, res) {
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
    res.render('v2/3-director/director-add', {
      errorAnotherDirector: true,
      errorList: errors
    })
  } else {
      // User inputted value so move to next page
      res.redirect('/v2/3-director/director-check-details')
    }
})


// ******* check-director-details javascript ******************************
router.get('/v2/3-director/director-check-details', function (req, res) {
  // Set URl
  res.render('v2/3-director/director-check-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/3-director/director-check-details', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var directorDetailsError = false
  
    // Check if user has filled a value
    if (typeof req.session.data['directorConfirmAddress'] === 'undefined') {
      // No value so add error to array
      directorConfirmAddressError = true
      directorDetailsError = true
      errors.push({
        text: 'Confirm where the director lives',
        href: '#directorConfrimAddress'
      })
    }

    // Check if user has filled out a value
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
    res.render('v2/3-director/director-check-details', {
      errorConfirmDirectorAddress: directorConfirmAddressError,
      errorConfirmDirectorsAgree: directorConfirmAgreeError,
      errorDirectorCheck: directorDetailsError,
      errorList: errors
    })
  } else {
    res.redirect('/v2/4-psc/set-up-pscs')
  }
  
})

// ******* set-up-pscs javascript ******************************
router.get('/v2/4-psc/set-up-pscs', function (req, res) {
  // Set URl
  res.render('v2/4-psc/set-up-pscs', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/4-psc/set-up-pscs', function (req, res) {
  res.redirect('/v2/4-psc/psc-previous-answers')
})


// ******* psc-previous-answers javascript ******************************
router.get('/v2/4-psc/psc-previous-answers', function (req, res) {
  // Set URl
  res.render('v2/4-psc/psc-previous-answers', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/4-psc/psc-previous-answers', function (req, res) {
  res.redirect('/v2/4-psc/psc-right-to-appoint')
})


// ******* psc-right-to-appoint javascript ********************************
router.get('/v2/4-psc/psc-right-to-appoint', function (req, res) {
  // Set URl
  res.render('v2/4-psc/psc-right-to-appoint', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/4-psc/psc-right-to-appoint', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['rightAppoint'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if the PSC has the right to appoint or remove directors',
      href: '#rightAppoint'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/4-psc/psc-right-to-appoint', {
      errorRightAppoint: true,
      errorList: errors
    })
  } else {
    if (typeof req.session.data['pscFirstName'] === 'undefined')
       res.redirect('/v2/4-psc/psc-check-details')
    else
      res.redirect('/v2/4-psc/psc-Statement')
    }
})


// ******* add-psc javascript ********************************
router.get('/v2/4-psc/psc-add', function (req, res) {
  // Set URl
  res.render('v2/4-psc/psc-add', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/4-psc/psc-add', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['addPsc'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select what type of PSC you would like to add',
      href: '#addPsc'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/4-psc/psc-add', {
      errorAddPsc: true,
      errorList: errors
    })
  } else {
    if (req.session.data['addPsc'] === 'psc') {
      res.redirect('/v2/4-psc/psc-details')
    } 
    }
})


// ******* check-director-details javascript ******************************
router.get('/v2/4-psc/psc-check-details', function (req, res) {
  // Set URl
  res.render('v2/4-psc/psc-check-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/4-psc/psc-check-details', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var directorDetailsError = false
  
    if (typeof req.session.data['pscConfirmAddress'] === 'undefined') {
      // No value so add error to array
      pscConfirmAddressError = true
      pscDetailsError = true
      errors.push({
        text: 'Confirm where the person in control lives',
        href: '#pscConfirmAddress'
      })
    }

    if (typeof req.session.data['pscStatements'] === 'undefined') {
      // No value so add error to array
      pscStatementsError = true
      pscDetailsError = true
      errors.push({
        text: 'Confirm all persons have verified their identity',
        href: '#pscStatements'
      })
    }

  // Check if eother filed not filled out
  if (pscDetailsError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/4-psc/psc-check-details', {
      errorConfirmPscAddress: pscConfirmAddressError,
      errorConfirmPscAgree: pscConfirmAgreeError,
      errorPscStatements: pscStatementsError,
      errorPscCheck: pscDetailsError,
      errorList: errors
    })
  } else {
    res.redirect('/v2/4-psc/set-up-pscs')
  }
  
})


// ******* psc-details javascript ******************************
router.get('/v2/4-psc/psc-details', function (req, res) {
  // Set URl
  res.render('v2/4-psc/psc-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/4-psc/psc-details', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var firstNameError = false
    var lastNameError = false
    var nationalityError = false
    var dayHasError = false
    var monthHasError = false
    var yearHasError = false
    var codeHasError = false

    var detailsError = false
  
    // Check if user has filled out first name
    if (req.session.data['pscFirstName'] === '') {
      // No value so add error to array
      firstNameError = true
      detailsError = true
      errors.push({
        text: 'Enter the first name in full',
        href: '#pscFirstName'
      })
    }
  
    // Check if user has filled out last name
    if (req.session.data['pscLastName'] === '') {
      // No value so add error to array
      lastNameError = true
      detailsError = true
      errors.push({
        text: 'Enter the last name in full',
        href: '#pscLastName'
      })
    }

    // Check if user has filled nationality
    if (req.session.data['pscNationality'] === '') {
      // No value so add error to array
      nationalityError = true
      detailsError = true
      errors.push({
        text: 'Enter the nationality',
        href: '#pscNationality'
      })
    }

      // Check if user has filled out a day
    if (req.session.data['pscDob-day'] === '') {
      // No value so add error to array
      dayHasError = true
      detailsError = true
      errors.push({
        text: 'The date must include a day',
        href: '#pscDob-day'
      })
    }

    // Check if user has filled out a month
    if (req.session.data['pscDob-month'] === '') {
      // No value so add error to array
      monthHasError = true
      detailsError = true
      errors.push({
        text: 'The date must include a month',
        href: '#pscDob-day'
      })
    }

  // Check if user has filled out a year
  if (req.session.data['pscDob-year'] === '') {
    // No value so add error to array
    yearHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a year',
      href: '#pscDob-day'
    })
  }


  // Check if user has filled out personal code
  if (req.session.data['pscPersonalCode'] === '') {
    // No value so add error to array
    codeHasError = true
    detailsError = true
    errors.push({
      text: 'Enter the Companies House personal code',
      href: '#pscPersonalCode'
    })
  }

  // Check if eother filed not filled out
  if (detailsError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/4-psc/psc-details', {
      errorPscFirstName: firstNameError,
      errorPscLastName: lastNameError,
      errorPscNationality: nationalityError,
      errorPscDobDay: dayHasError,
      errorPscDobMonth: monthHasError,
      errorPscDobYear: yearHasError,
      errorPscPersonalCode: codeHasError,
      errorPscDetails: detailsError,
      errorList: errors
    })
  } // dob code mis-match
  else if (req.session.data['pscPersonalCode'] === '444-5555-6666') {
    errors.push({
    text: 'You have entered incorrect verification details for this person. Check the date of birth and Companies House personal code, and try again.',
    href: '#PscPersonalCode'
    })
    
    res.render('v2/4-psc/psc-details', {
      errorPscDobDay: true,
      errorPscDobMonth: true,
      errorPscDobYear: true,
      pscMatchError: true,
      errorPscDetails: true,
      errorList: errors
    })
  } // name mis-match
  else if (req.session.data['pscPersonalCode'] === '111-2222-3333') {
    res.redirect('/v2/4-psc/psc-why-this-name')
  } else {
    res.redirect('/v2/4-psc/psc-address')
  }
})


// ******* pscwhy-this-name javascript ********************************
router.get('/v2/4-psc/psc-why-this-name', function (req, res) {
  // Set URl
  res.render('v2/4-psc/psc-why-this-name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/4-psc/psc-why-this-name', function (req, res) {
  res.redirect('/v2/4-psc/psc-address')
})


// ******* psc-address javascript ********************************
router.get('/v2/4-psc/psc-address', function (req, res) {
  // Set URl
  res.render('v2/4-psc/psc-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/4-psc/psc-address', function (req, res) {
  res.redirect('/v2/4-psc/psc-confirm-address')
})


// ******* psc-confirm-address javascript ********************************
router.get('/v2/4-psc/psc-confirm-address', function (req, res) {
  // Set URl
  res.render('v2/4-psc/psc-confirm-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/4-psc/psc-confirm-address', function (req, res) {
  res.redirect('/v2/4-psc/psc-right-to-appoint')
})


// ******* psc-statement javascript ********************************
router.get('/v2/4-psc/psc-statement', function (req, res) {
  // Set URl
  res.render('v2/4-psc/psc-statement', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/4-psc/psc-statement', function (req, res) {
  // Create empty array
  var errors = []

  if (typeof req.session.data['pscStatement'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Confirm if the identity verification statement is correct',
      href: '#pscStatement'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/4-psc/psc-statement', {
      errorPscStatement: true,
      errorList: errors
    })
  } else {
      res.redirect('/v2/4-psc/psc-check-details')
  }
})

module.exports=router;

