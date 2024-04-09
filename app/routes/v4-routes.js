const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// ******* Sign in email validation ********************************
router.get('/v4/1-initial-set-up/sign-in-email', function (req, res) {
  // Set URl
  res.render('v4/1-initial-set-up/sign-in-email', {
    currentUrl: req.originalUrl
  })
})


// ******* have-you-verified javascript ********************************
router.get('/v4/1-initial-set-up/have-you-verified', function (req, res) {
  // Set URl
  res.render('v4/1-initial-set-up/have-you-verified', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/1-initial-set-up/have-you-verified', function (req, res) {
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
    res.render('v4/1-initial-set-up/have-you-verified', {
      errorHaveVerified: true,
      errorList: errors
    })
  } else {
    if (req.session.data['haveVerified'] === 'yes') {
      res.redirect('/v4/1-initial-set-up/starting-a-new-application')
    } else {
      // User inputted value so move to next page
      res.redirect('/v4/1-initial-set-up/verification-stop')
    }
  }
})

// ******* starting-a-new-application javascript ********************************
router.get('/v4/1-initial-set-up/starting-a-new-application', function (req, res) {
  // Set URl
  res.render('v4/1-initial-set-up/starting-a-new-application', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/1-initial-set-up/starting-a-new-application', function (req, res) {
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
    res.render('v4/1-initial-set-up/starting-a-new-application', {
      errorNew: true,
      errorList: errors
    })
  } else {
    if (req.session.data['newApplication'] === 'yes') {
      res.redirect('/v4/2-company-details/company-relationship')
    } 
  }
})


// ******* company-relationship javascript ********************************
router.get('/v4/2-company-details/company-relationship', function (req, res) {
  // Set URl
  res.render('v4/2-company-details/company-relationship', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/2-company-details/company-relationship', function (req, res) {
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
    res.render('v4/2-company-details/company-relationship', {
      errorRelationship: true,
      errorList: errors
    })
  } else {
    res.redirect('/v4/2-company-details/company-name')
  }
})


// ******* company-name javascript ******************************
router.get('/v4/2-company-details/company-name', function (req, res) {
  // Set URl
  res.render('v4/2-company-details/company-name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/2-company-details/company-name', function (req, res) {
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
    res.render('v4/2-company-details/company-name', {
      errorCompanyName: nameError,
      errorCompanyEnding: nameEndingError,
      errorCompanyName: companyNameError,
      errorList: errors
    })
  } else {
    res.redirect('/v4/3-director/director-details')
  }
  
})


// ******* director-details javascript ******************************
router.get('/v4/3-director/director-details', function (req, res) {
  // Set URl
  res.render('v4/3-director/director-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/3-director/director-details', function (req, res) {
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
    res.render('v4/3-director/director-details', {
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
    
    res.render('v4/3-director/director-details', {
      errorDirectorDobDay: true,
      errorDirectorDobMonth: true,
      errorDirectorDobYear: true,
      directorMatchError: true,
      errorDirectorDetails: true,
      errorList: errors
    })
  } // name mis-match
  else if (req.session.data['directorPersonalCode'] === '111-2222-3333') {
    res.redirect('/v4/3-director/director-why-this-name')
  } else {
    res.redirect('/v4/3-director/director-address')
  }
})


// ******* why-this-name javascript ********************************
router.get('/v4/3-director/director-why-this-name', function (req, res) {
  // Set URl
  res.render('v4/3-director/director-why-this-name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/3-director/director-why-this-name', function (req, res) {
  res.redirect('/v4/3-director/director-address')
})


// ******* director-address javascript ********************************
router.get('/v4/3-director/director-address', function (req, res) {
  // Set URl
  res.render('v4/3-director/director-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/3-director/director-address', function (req, res) {
  res.redirect('/v4/3-director/director-confirm-address')
})


// ******* confirm-address javascript ********************************
router.get('/v4/3-director/director-confirm-address', function (req, res) {
  // Set URl
  res.render('v4/3-director/director-confirm-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/3-director/director-confirm-address', function (req, res) {
  res.redirect('/v4/3-director/director-statement')
})


// ******* director-statement javascript ********************************
router.get('/v4/3-director/director-statement', function (req, res) {
  // Set URl
  res.render('v4/3-director/director-statement', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/3-director/director-statement', function (req, res) {
  // Create empty array
  var errors = []

  if (typeof req.session.data['directorStatement'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Confirm if the identity verification statement is correct',
      href: '#directorStatement'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/3-director/director-statement', {
      errorDirectorStatement: true,
      errorList: errors
    })
  } else {
      res.redirect('/v4/3-director/director-add')
  }
})


// ******* add-director javascript ********************************
router.get('/v4/3-director/director-add', function (req, res) {
  // Set URl
  res.render('v4/3-director/director-add', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/3-director/director-add', function (req, res) {
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
    res.render('v4/3-director/director-add', {
      errorAnotherDirector: true,
      errorList: errors
    })
  } else {
      // User inputted value so move to next page
      res.redirect('/v4/3-director/director-check-details')
    }
})


// ******* check-director-details javascript ******************************
router.get('/v4/3-director/director-check-details', function (req, res) {
  // Set URl
  res.render('v4/3-director/director-check-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/3-director/director-check-details', function (req, res) {
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
    res.render('v4/3-director/director-check-details', {
      errorConfirmDirectorAddress: directorConfirmAddressError,
      errorConfirmDirectorsAgree: directorConfirmAgreeError,
      errorDirectorCheck: directorDetailsError,
      errorList: errors
    })
  } else {
    res.redirect('/v4/4-shareholders/set-up-shareholders')
  }
  
})

// ******* set-up-shareholders javascript ******************************
router.get('/v4/4-shareholders/set-up-shareholders', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/set-up-shareholders', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/set-up-shareholders', function (req, res) {
  res.redirect('/v4/4-shareholders/is-a-shareholder')
})

// ******* add-shareholder javascript ********************************
router.get('/v4/4-shareholders/is-a-shareholder', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/is-a-shareholder', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/is-a-shareholder', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['isShareholder'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if they are a shareholder',
      href: '#isShareholder'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/4-shareholders/is-a-shareholder', {
      errorIsShareholder: true,
      errorList: errors
    })
  } else {
      // User inputted value so move to next page
      res.redirect('/v4/4-shareholders/shareholder-add')
    }
})


// ******* add-shareholder javascript ********************************
router.get('/v4/4-shareholders/shareholder-add', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/shareholder-add', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/shareholder-add', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['addShareholder'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if you want to add another shareholder',
      href: '#addShareholder'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/4-shareholders/shareholder-add', {
      errorAddShareholder: true,
      errorList: errors
    })
  } else if (req.session.data['addShareholder'] === 'yes') {
    res.redirect('/v4/4-shareholders/shareholder-type')
  } else {
    res.redirect('/v4/4-shareholders/check-shareholder-details')
  }
})


// ******* add-shareholder javascript ********************************
router.get('/v4/4-shareholders/shareholder-type', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/shareholder-type', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/shareholder-type', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['typeShareholder'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select the type of shareholder you would like to add',
      href: '#typeShareholder'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/4-shareholders/shareholder-type', {
      errorTypeShareholder: true,
      errorList: errors
    })
  }   else if (req.session.data['typeShareholder'] === 'person') {
    res.redirect('/v4/4-shareholders/shareholder-name')
  } else {
    res.redirect('/v4/4-shareholders/corporate-shareholder-name')
  }
})


// ******* shareholder-name javascript *********************
router.get('/v4/4-shareholders/shareholder-name', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/shareholder-name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/shareholder-name', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];
  var firstNameError = false
  var lastNameError = false
  var shareholderNameError = false

  if (req.session.data['shareholderFirstName'] === '') {
    firstNameError = true
    shareholderNameError = true
    errors.push({
      text: 'Enter the first name',
      href: '#shareholderFirstName'
    })
  }

  if (req.session.data['shareholderLastName'] === '') {
    lastNameError = true
    shareholderNameError = true
    errors.push({
      text: 'Enter the last name',
      href: '#shareholderLastName'
    })
  }

  if (shareholderNameError) {
  res.render('v4/4-shareholders/shareholder-name', {
    errorShareholderFirstName: firstNameError,
    errorShareholderLastName: lastNameError,
    errorShareholderName: shareholderNameError,
    errorList: errors
  })
  } else {
      res.redirect('/v4/4-shareholders/shareholder-address')
    }
})


// ******* shareholder-address javascript ********************************
router.get('/v4/4-shareholders/shareholder-address', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/shareholder-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/shareholder-address', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['shareholderAddress'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select the address of the shareholder',
      href: '#shareholderAddress'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/4-shareholders/shareholder-address', {
      errorShareholderAddress: true,
      errorList: errors
    })
  }   else if (req.session.data['shareholderAddress'] === 'address') {
    res.redirect('/v4/4-shareholders/shareholder-add')
  } else {
    res.redirect('/v4/4-shareholders/shareholder-address-2')
  }
})


// ******* shareholder-address2 javascript ********************************
router.get('/v4/4-shareholders/shareholder-address-2', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/shareholder-address-2', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/shareholder-address-2', function (req, res) {
    res.redirect('/v4/4-shareholders/shareholder-confirm-address')
})


// ******* confirm-address javascript ********************************
router.get('/v4/4-shareholders/shareholder-confirm-address', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/shareholder-confirm-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/shareholder-confirm-address', function (req, res) {
  res.redirect('/v4/4-shareholders/shareholder-add')
})


// ******* corporate-shareholder-name javascript *********************
router.get('/v4/4-shareholders/corporate-shareholder-name', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/corporate-shareholder-name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/corporate-shareholder-name', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];
  var nameError = false

  if (req.session.data['shareholderCorporateName'] === '') {
    nameError = true
    errors.push({
      text: 'Enter the corporate shareholders name',
      href: '#shareholderCorporateName'
    })
  }

  if (nameError) {
  res.render('v4/4-shareholders/corporate-shareholder-name', {
    errorShareholderCorporateName: nameError,
    errorList: errors
  })
  } else {
      res.redirect('/v4/4-shareholders/corporate-shareholder-name-warning')
    }
})


// ******* confirm-address javascript ********************************
router.get('/v4/4-shareholders/corporate-shareholder-name-warning', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/corporate-shareholder-name-warning', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/corporate-shareholder-name-warning', function (req, res) {
  res.redirect('/v4/4-shareholders/corporate-shareholder-address')
})



// ******* corporate-shareholder-address javascript ********************************
router.get('/v4/4-shareholders/corporate-shareholder-address', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/corporate-shareholder-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/corporate-shareholder-address', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['corporateShareholderAddress'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select the address of corporate shareholder',
      href: '#corporateShareholderAddress'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/4-shareholders/corporate-shareholder-address', {
      errorCorporateShareholderAddress: true,
      errorList: errors
    })
  }   else if (req.session.data['corporateShareholderAddress'] === 'address') {
    res.redirect('/v4/4-shareholders/corporate-shareholder-person')
  } else {
    res.redirect('/v4/4-shareholders/corporate-shareholder-address-2')
  }
})


// ******* corporate-shareholder-address2 javascript ********************************
router.get('/v4/4-shareholders/corporate-shareholder-address-2', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/corporate-shareholder-address-2', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/corporate-shareholder-address-2', function (req, res) {
    res.redirect('/v4/4-shareholders/corporate-shareholder-confirm-address')
})


// ******* corporate-confirm-address javascript ********************************
router.get('/v4/4-shareholders/corporate-shareholder-confirm-address', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/corporate-shareholder-confirm-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/corporate-shareholder-confirm-address', function (req, res) {
  res.redirect('/v4/4-shareholders/corporate-shareholder-person')
})


// ******* corporate-shareholder-person javascript *********************
router.get('/v4/4-shareholders/corporate-shareholder-person', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/corporate-shareholder-person', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/corporate-shareholder-person', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];
  var firstNameError = false
  var lastNameError = false
  var shareholderNameError = false

  if (req.session.data['corporatePersonFirstName'] === '') {
    firstNameError = true
    shareholderNameError = true
    errors.push({
      text: 'Enter the first name',
      href: '#corporatePersonFirstName'
    })
  }

  if (req.session.data['corporatePersonLastName'] === '') {
    lastNameError = true
    shareholderNameError = true
    errors.push({
      text: 'Enter the last name',
      href: '#corporatePersonLastName'
    })
  }

  if (shareholderNameError) {
  res.render('v4/4-shareholders/corporate-shareholder-person', {
    errorCorporatePersonFirstName: firstNameError,
    errorCorporatePersonlastName: lastNameError,
    errorCorporatePerson: shareholderNameError,
    errorList: errors
  })
  } else {
      res.redirect('/v4/4-shareholders/shareholder-add')
    }
})


// ******* check-shareholder-details javascript ********************************
router.get('/v4/4-shareholders/check-shareholder-details', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/check-shareholder-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/check-shareholder-details', function (req, res) {
  res.redirect('/v4/4-shareholders/share-type')
})



// ******* share-type javascript ********************************
router.get('/v4/4-shareholders/share-type', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/share-type', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/share-type', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['shareType'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if you want to use the most common type of share',
      href: '#shareType'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/4-shareholders/share-type', {
      errorShareType: true,
      errorList: errors
    })
  } else 
    res.redirect('/v4/4-shareholders/share-number')
})


// ******* share-number javascript ********************************
router.get('/v4/4-shareholders/share-number', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/share-number', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/share-number', function (req, res) {
  res.redirect('/v4/4-shareholders/share-value')
})


// ******* share-type javascript ********************************
router.get('/v4/4-shareholders/share-value', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/share-value', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/share-value', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['shareValue'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select the share value',
      href: '#shareValue'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/4-shareholders/share-value', {
      errorShareValue: true,
      errorList: errors
    })
  } else 
    res.redirect('/v4/4-shareholders/check-shares')
})


// ******* check-shares javascript ********************************
router.get('/v4/4-shareholders/check-shares', function (req, res) {
  // Set URl
  res.render('v4/4-shareholders/check-shares', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/4-shareholders/check-shares', function (req, res) {
  res.redirect('/v4/5-psc/set-up-pscs')
})


// ******* set-up-pscs javascript ******************************
router.get('/v4/5-psc/set-up-pscs', function (req, res) {
  // Set URl
  res.render('v4/5-psc/set-up-pscs', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/set-up-pscs', function (req, res) {
  res.redirect('/v4/5-psc/director-psc/psc-previous-answers')
})


// ******* director-psc/psc-previous-answers javascript ******************************
router.get('/v4/5-psc/director-psc/psc-previous-answers', function (req, res) {
  // Set URl
  res.render('v4/5-psc/director-psc/psc-previous-answers', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/director-psc/psc-previous-answers', function (req, res) {
  res.redirect('/v4/5-psc/director-psc/psc-right-to-appoint')
})


// ******* director-psc/psc-right-to-appoint javascript ********************************
router.get('/v4/5-psc/director-psc/psc-right-to-appoint', function (req, res) {
  // Set URl
  res.render('v4/5-psc/director-psc/psc-right-to-appoint', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/director-psc/psc-right-to-appoint', function (req, res) {
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
    res.render('v4/5-psc/director-psc/psc-right-to-appoint', {
      errorRightAppoint: true,
      errorList: errors
    })
  } else {
      res.redirect('/v4/5-psc/individual-psc/psc-previous-answers')
    }
})


// ******* individual-psc/psc-previous-answers javascript ******************************
router.get('/v4/5-psc/individual-psc/psc-previous-answers', function (req, res) {
  // Set URl
  res.render('v4/5-psc/individual-psc/psc-previous-answers', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/individual-psc/psc-previous-answers', function (req, res) {
  res.redirect('/v4/5-psc/individual-psc/psc-details')
})


// ******* individual-psc/psc-right-to-appoint javascript ********************************
router.get('/v4/5-psc/individual-psc/psc-right-to-appoint', function (req, res) {
  // Set URl
  res.render('v4/5-psc/individual-psc/psc-right-to-appoint', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/individual-psc/psc-right-to-appoint', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['individualRightAppoint'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if the PSC has the right to appoint or remove directors',
      href: '#individualRightAppoint'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/5-psc/individual-psc/psc-right-to-appoint', {
      errorIndividualRightAppoint: true,
      errorList: errors
    })
  } else {
      res.redirect('/v4/5-psc/individual-psc/psc-statement')
    }
})


// ******* psc-statement javascript ********************************
router.get('/v4/5-psc/individual-psc/psc-statement', function (req, res) {
  // Set URl
  res.render('v4/5-psc/individual-psc/psc-statement', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/individual-psc/psc-statement', function (req, res) {
  // Create empty array
  var errors = []

  if (typeof req.session.data['pscStatement'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Confirm if the identity verification statement is correct',
      href: '#pscStatement'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/5-psc/individual-psc/psc-statement', {
      errorPscStatement: true,
      errorList: errors
    })
  } else {
      res.redirect('/v4/5-psc/corporate-psc/rle-previous-answers')
  }
})


// ******* psc-details javascript ******************************
router.get('/v4/5-psc/individual-psc/psc-details', function (req, res) {
  // Set URl
  res.render('v4/5-psc/individual-psc/psc-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/individual-psc/psc-details', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var firstNameError = false
    var lastNameError = false
    var nationalityError = false
    var dayHasError = false
    var monthHasError = false
    var yearHasError = false

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

  // Check if eother filed not filled out
  if (detailsError) {
    // Re-show page with error value as true so errors will show
    res.render('v4/5-psc/individual-psc/psc-details', {
      errorPscFirstName: firstNameError,
      errorPscLastName: lastNameError,
      errorPscNationality: nationalityError,
      errorPscDobDay: dayHasError,
      errorPscDobMonth: monthHasError,
      errorPscDobYear: yearHasError,
      errorPscDetails: detailsError,
      errorList: errors
    })
  } // dob code mis-match
  else if (req.session.data['pscPersonalCode'] === '444-5555-6666') {
    errors.push({
    text: 'You have entered incorrect verification details for this person. Check the date of birth and Companies House personal code, and try again.',
    href: '#PscPersonalCode'
    })
    
    res.render('v4/5-psc/individual-psc/psc-details', {
      errorPscDobDay: true,
      errorPscDobMonth: true,
      errorPscDobYear: true,
      pscMatchError: true,
      errorPscDetails: true,
      errorList: errors
    })
  } // name mis-match
  else if (req.session.data['pscPersonalCode'] === '111-2222-3333') {
    res.redirect('/v4/5-psc/individual-psc/psc-why-this-name')
  } else {
    res.redirect('/v4/5-psc/individual-psc/psc-right-to-appoint')
  }
})


// ******* corporate-psc/psc-previous-answers javascript ******************************
router.get('/v4/5-psc/corporate-psc/psc-previous-answers', function (req, res) {
  // Set URl
  res.render('v4/5-psc/corporate-psc/psc-previous-answers', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/corporate-psc/psc-previous-answers', function (req, res) {
  res.redirect('/v4/5-psc/corporate-psc/rle-details')
})





// ******* add-psc javascript ********************************
router.get('/v4/5-psc/psc-add', function (req, res) {
  // Set URl
  res.render('v4/5-psc/psc-add', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/psc-add', function (req, res) {
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
    res.render('v4/5-psc/psc-add', {
      errorAddPsc: true,
      errorList: errors
    })
  } else {
    if (req.session.data['addPsc'] === 'psc') {
      res.redirect('/v4/5-psc/psc-details')
    } else if (req.session.data['addPsc'] === 'rle') {
      res.redirect('/v4/5-psc/corporate-psc/rle-name')
    }
    }
})


// ******* check-director-details javascript ******************************
router.get('/v4/5-psc/psc-check-details', function (req, res) {
  // Set URl
  res.render('v4/5-psc/psc-check-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/psc-check-details', function (req, res) {
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
    res.render('v4/5-psc/psc-check-details', {
      errorConfirmPscAddress: pscConfirmAddressError,
      errorConfirmPscAgree: pscConfirmAgreeError,
      errorPscStatements: pscStatementsError,
      errorPscCheck: pscDetailsError,
      errorList: errors
    })
  } else {
    res.redirect('/v4/5-psc/set-up-pscs')
  }
  
})



// ******* pscwhy-this-name javascript ********************************
router.get('/v4/5-psc/psc-why-this-name', function (req, res) {
  // Set URl
  res.render('v4/5-psc/psc-why-this-name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/psc-why-this-name', function (req, res) {
  res.redirect('/v4/5-psc/psc-address')
})


// ******* psc-address javascript ********************************
router.get('/v4/5-psc/psc-address', function (req, res) {
  // Set URl
  res.render('v4/5-psc/psc-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/psc-address', function (req, res) {
  res.redirect('/v4/5-psc/psc-confirm-address')
})


// ******* psc-confirm-address javascript ********************************
router.get('/v4/5-psc/psc-confirm-address', function (req, res) {
  // Set URl
  res.render('v4/5-psc/psc-confirm-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/psc-confirm-address', function (req, res) {
  res.redirect('/v4/5-psc/psc-right-to-appoint')
})



// ******* individual-psc/psc-previous-answers javascript ******************************
router.get('/v4/5-psc/corporate-psc/rle-previous-answers', function (req, res) {
  // Set URl
  res.render('v4/5-psc/corporate-psc/rle-previous-answers', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/corporate-psc/rle-previous-answers', function (req, res) {
  res.redirect('/v4/5-psc/corporate-psc/rle-details')
})


// ******* rle-details javascript ******************************
router.get('/v4/5-psc/corporate-psc/rle-details', function (req, res) {
  // Set URl
  res.render('v4/5-psc/corporate-psc/rle-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/corporate-psc/rle-details', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var rleTypeError = false
    var governingLawError = false
    var registerError = false
    var registrationNumberError = false

    var detailsError = false
  
    // Check if user has filled out input
    if (req.session.data['rleType'] === '') {
      // No value so add error to array
      rleTypeError = true
      detailsError = true
      errors.push({
        text: 'Enter the legal form or corporate identity',
        href: '#rleType'
      })
    }
  
    // Check if user has filled out input
    if (req.session.data['governingLaw'] === '') {
      // No value so add error to array
      governingLawError = true
      detailsError = true
      errors.push({
        text: 'Enter the governing law',
        href: '#governingLaw'
      })
    }

    // Check if user has filled input
    if (req.session.data['rleRegister'] === '') {
      // No value so add error to array
      registerError = true
      detailsError = true
      errors.push({
        text: 'Enter the register',
        href: '#rleRegister'
      })
    }


    // Check if user has filled out input
    if (req.session.data['rleNumber'] === '') {
      // No value so add error to array
      registrationNumberError = true
      detailsError = true
      errors.push({
        text: 'Enter the registration number',
        href: '#rleNumber'
      })
    }

  // Check if eother filed not filled out
  if (detailsError) {
    // Re-show page with error value as true so errors will show
    res.render('v4/5-psc/corporate-psc/rle-details', {
      errorRleType: rleTypeError,
      errorGoverningLaw: governingLawError,
      errorRleRegister: registerError,
      errorRleNumber: registrationNumberError,
      errorRleDetails: detailsError,
      errorList: errors
    })
  } else {
    res.redirect('/v4/5-psc/corporate-psc/rle-registered')
  }
})



// ******* rle-registered javascript ********************************
router.get('/v4/5-psc/corporate-psc/rle-registered', function (req, res) {
  // Set URl
  res.render('v4/5-psc/corporate-psc/rle-registered', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/corporate-psc/rle-registered', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['rleRegistered'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if the corperate body is registered in the UK',
      href: '#rleRegistered'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/5-psc/corporate-psc/rle-registered', {
      errorRleRegistered: true,
      errorList: errors
    })
  } else {
       res.redirect('/v4/5-psc/corporate-psc/rle-corporate-body')}
})


// ******* rle-corporate-body javascript ********************************
router.get('/v4/5-psc/corporate-psc/rle-corporate-body', function (req, res) {
  // Set URl
  res.render('v4/5-psc/corporate-psc/rle-corporate-body', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/corporate-psc/rle-corporate-body', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['rleCorporate'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select the type of corporate body',
      href: '#rleCorporate'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/5-psc/corporate-psc/rle-corporate-body', {
      errorRleCorporate: true,
      errorList: errors
    })
  } else {
       res.redirect('/v4/5-psc/corporate-psc/rle-right-to-appoint')}
})



// ******* psc-right-to-appoint javascript ********************************
router.get('/v4/5-psc/corporate-psc/ro-right-to-appoint', function (req, res) {
  // Set URl
  res.render('v4/5-psc/corporate-psc/ro-right-to-appoint', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/corporate-psc/rle-right-to-appoint', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['rleRightAppoint'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if the RLE has the right to appoint or remove directors',
      href: '#rleRightAppoint'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/5-psc/corporate-psc/rle-right-to-appoint', {
      errorRleRightAppoint: true,
      errorList: errors
    })
  } else {
      res.redirect('/v4/5-psc/corporate-psc/ro-have-details')
    }
})



// ******* ro-have-details javascript *********************
router.post('/v4/5-psc/corporate-psc/ro-have-details', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['roHaveDetails'] === 'undefined') {
    // No value so add error to array
    errors.push({
      html: "Select yes if you have the details of the relevant legal entity's relevant officer",
      href: '#roHaveDetails'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/5-psc/corporate-psc/ro-have-details', {
      errorRoHaveDetails: true,
      errorList: errors
    })
  } else {
    if (req.session.data['roHaveDetails'] === 'yes') {
      res.redirect('/v4/5-psc/corporate-psc/ro-details')
    } else {
      // User inputted value so move to next page
      res.redirect('/v4/5-psc/psc-check-details')
    }
  }
})



// ******* ro-details javascript *********************
router.get('/v4/5-psc/corporate-psc/ro-details', function (req, res) {
  // Set URl
  res.render('v4/5-psc/corporate-psc/ro-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/corporate-psc/ro-details', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];
  var firstNameError = false
  var lastNameError = false
  var dobDayError = false
  var dobMonthError = false
  var dobYearError = false
  var roPersonalCodeError = false
  var roDetailsError = false

  var roDetailsError = false

  if (req.session.data['roFirstName'] === '') {
    firstNameError = true
    roDetailsError = true
    errors.push({
      text: 'Enter the first name',
      href: '#firstName'
    })
  }

  if (req.session.data['roLastName'] === '') {
    lastNameError = true
    roDetailsError = true
    errors.push({
      text: 'Enter the last name',
      href: '#lastName'
    })
  }

  if (req.session.data['roDob-day'] === '') {
    dobDayError = true
    roDetailsError = true
    errors.push({
      text: 'Enter the day of birth',
      href: '#dob'
    })
  }
  
  if (req.session.data['roDob-month'] === '') {
    dobMonthError = true
    roDetailsError = true
    errors.push({
      text: 'Enter the month of birth',
      href: '#dob'
    })
  }
  
  if (req.session.data['roDob-year'] === '') {
    dobYearError = true
    roDetailsError = true
    errors.push({
      text: 'Enter the year of birth',
      href: '#dob'
    })
  }

  if (req.session.data['roPersonalCode'] === '') {
    roPersonalCodeError = true
    roDetailsError = true
    errors.push({
      text: 'Enter the personal code',
      href: '#roPersonalCode'
    })
  }

  if (roDetailsError) {
  res.render('v4/5-psc/corporate-psc/ro-details', {
    errorRoFirstName: firstNameError,
    errorRoLastName: lastNameError,
    errorRoDobDay: dobDayError,
    errorRoDobMonth: dobMonthError,
    errorRoDobYear: dobYearError,
    errorRoPersonalCode: roPersonalCodeError,
    roDetailsError: roDetailsError,
    errorList: errors
  })
  } else {
    // name mis-match
    if (req.session.data['roPersonalCode'] === '111-2222-3333') {
      res.redirect('/v4/5-psc/corporate-psc/ro-why-this-name')
    } 
    // dob code mis-match
    else if (req.session.data['roPersonalCode'] === '444-5555-6666') {
      errors.push({
      text: 'The details you entered don’t match what we have on record. Check the date of birth and Companies House personal code, and try again.',
      href: '#roPersonalCode'
      })
      
      res.render('v4/5-psc/corporate-psc/ro-details', {
        errorRoDobDay: true,
        errorRoDobMonth: true,
        errorRoDobYear: true,
        rleMatchError: true,
        roDetailsError: true,
        errorList: errors
      })
    } else {
      res.redirect('/v4/5-psc/corporate-psc/ro-director')
    }
  }
})


// ******* ro-director javascript *********************
router.get('/v4/5-psc/corporate-psc/ro-director', function (req, res) {
  // Set URl
  res.render('v4/5-psc/corporate-psc/ro-director', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/corporate-psc/ro-director', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];
  
  // Check if user has filled out a value
  if (typeof req.session.data['roDirector'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if the relevant officer is a director',
      href: '#roDirector'
    })

    // Re-show page with error value as true so errors will show
    res.render('v4/5-psc/corporate-psc/ro-director', {
      errorDirector: true,
      errorList: errors
    })
  } else {
    if (req.session.data['roDirector'] === 'yes') {
      res.redirect('/v4/5-psc/corporate-psc/ro-statements')
    } else {
      // User inputted value so move to next page
      res.redirect('/v4/5-psc/corporate-psc/not-director-stop')
    }
  }
})



// ******* ro-why-this-name javascript ********************************
router.get('/v4/5-psc/corporate-psc/ro-why-this-name', function (req, res) {
  // Set URl
  res.render('v4/5-psc/corporate-psc/ro-why-this-name', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/corporate-psc/ro-why-this-name', function (req, res) {
  res.redirect('/v4/5-psc/corporate-psc/ro-director')
})


// ******* ro-statements javascript ********************************
router.get('/v4/5-psc/corporate-psc/ro-statements', function (req, res) {
  // Set URl
  res.render('v4/5-psc/corporate-psc/ro-statements', {
    currentUrl: req.originalUrl
  })
})

router.post('/v4/5-psc/corporate-psc/ro-statements', function (req, res) {
  res.redirect('/v4/5-psc/psc-check-details')
})



module.exports=router;

