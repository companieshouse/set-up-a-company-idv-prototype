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
      res.redirect('/v1/idv/company-relationship')
    } else {
      // User inputted value so move to next page
      res.redirect('/v1/idv/gov-gateway')
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
    if (relationship === 'secretary' || relationship === 'other') {
      res.redirect('/v1/idv/director-details')
    } else if (relationship === 'director') {
      // User inputted value so move to next page
      res.redirect('/v1/idv/add-another-director')
    }
  }
})


// ******* add-another-director javascript ********************************
router.get('/v1/idv/add-another-director', function (req, res) {
  // Set URl
  res.render('v1/idv/add-another-director', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/add-another-director', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['anotherDirector'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select yes if you need to add another director',
      href: '#anotherDirector'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/idv/add-another-director', {
      errorAnotherDirector: true,
      errorList: errors
    })
  } else {
    if (req.session.data['anotherDirector'] === 'yes') {
      res.redirect('/v1/idv/director-details')
    } else {
      // User inputted value so move to next page
      res.redirect('/v1/idv/director-control')
    }
  }
})


module.exports=router;

