const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// ******* starting-a-new-application javascript ********************************
router.get('/v1/idv/starting-a-new-application', function (req, res) {
  // Set URl
  res.render('v1/idv/starting-a-new-application', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/starting-a-new-application', function (req, res) {
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
    res.render('v1/idv/starting-a-new-application', {
      errorNew: true,
      errorList: errors
    })
  } else {
    if (req.session.data['newApplication'] === 'yes') {
      res.redirect('/v1/idv/check-before')
    } else {
      // User inputted value so move to next page
      res.redirect('/v1/idv/gov-gateway')
    }
  }
})


// ******* check-before javascript ********************************
router.get('/v1/idv/check-before', function (req, res) {
  // Set URl
  res.render('v1/idv/check-before', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/check-before', function (req, res) {
  res.redirect('/v1/idv/card-or-paypal')
})


// ******* card-or-paypal javascript ********************************
router.get('/v1/idv/card-or-paypal', function (req, res) {
  // Set URl
  res.render('v1/idv/card-or-paypal', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/card-or-paypal', function (req, res) {
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
    res.render('v1/idv/card-or-paypal', {
      errorPaypal: true,
      errorList: errors
    })
  } else {
    if (req.session.data['paypal'] === 'yes') {
      res.redirect('/v1/idv/secure-register')
    } else {
      // User inputted value so move to next page
      res.redirect('/v1/idv/card-or-paypal-stop')
    }
  }
})


// ******* secure-register javascript ********************************
router.get('/v1/idv/secure-register', function (req, res) {
  // Set URl
  res.render('v1/idv/secure-register', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/secure-register', function (req, res) {
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
    res.render('v1/idv/secure-register', {
      errorSercure: true,
      errorList: errors
    })
  } else {
    if (req.session.data['secureRegister'] === 'yes') {
      res.redirect('/v1/idv/secure-register-stop')
    } else {
      // User inputted value so move to next page
      res.redirect('/v1/idv/company-relationship')
    }
  }
})


// ******* company-relationship javascript ********************************
router.get('/v1/idv/company-relationship', function (req, res) {
  // Set URl
  res.render('v1/idv/company-relationship', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/company-relationship', function (req, res) {
  // Create empty array
  var errors = []
  var relationship = req.session.data['companyRelationship']

  // Check if user has filled out a value
  if (typeof req.session.data['companyRelationship'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select your relationship to the company',
      href: '#companyRelationship'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/idv/company-relationship', {
      errorRelationship: true,
      errorList: errors
    })
  } else {
    if (relationship === 'secretary' || relationship === 'director' || relationship === 'other') {
      res.redirect('/v1/idv/sign-in')
    } else {
      // User inputted value so move to next page
      res.redirect('/v1/idv/gov-gateway')
    }
  }
})


// ******* Sign in validation ********************************
router.get('/v1/idv/sign-in', function (req, res) {
  // Set URl
  res.render('v1/idv/sign-in', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/sign-in', function (req, res) {
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
    res.render('v1/idv/sign-in', {
      errorEmail: emailHasError,
      errorPassword: passwordHasError,
      errorList: errors
    })
  } else {
    res.redirect('/v1/idv/directors-idv-guide')
  }
})

// ******* directors-idv-guide javascript ********************************
router.get('/v1/idv/directors-idv-guide', function (req, res) {
  // Set URl
  res.render('v1/idv/directors-idv-guide', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/directors-idv-guide', function (req, res) {
  res.redirect('/v1/idv/director-one/director-one-details')
})

// ******* director-dashboard javascript ********************************
router.get('/v1/idv/director-dashboard', function (req, res) {
  // Set URl
  res.render('v1/idv/director-dashboard', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-dashboard', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['addDirector'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if you need to add another director',
      href: '#addDirector'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/idv/director-dashboard', {
      errorAddDirector: true,
      errorList: errors
    })
  } else {
    if (req.session.data['addDirector'] === 'yes') {
      res.redirect('/v1/idv/director-two/director-two-details')
    } else {
      if (req.session.data['verification-Statement-one'] && req.session.data['verification-Statement-two']) {
        res.redirect('/v1/idv/continue-scrs')
      } else {
        // User inputted value so move to next page
        res.redirect('/v1/idv/stop-screen')
      }
      
    }
  }
})


// ******* directors-idv-guide javascript ********************************
router.get('/v1/idv/stop-screen', function (req, res) {
  // Set URl
  res.render('v1/idv/stop-screen', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/stop-screen', function (req, res) {
  res.redirect('/v1/idv/director-dashboard')
})




module.exports=router;

