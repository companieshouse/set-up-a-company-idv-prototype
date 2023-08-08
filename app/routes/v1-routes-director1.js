const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ******* director-one-details javascript ******************************
router.get('/v1/idv/director-one/director-one-details', function (req, res) {
  // Set URl
  res.render('v1/idv/director-one/director-one-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-one/director-one-details', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var firstNameError = false
    var lastNameError = false
    var detailsError = false
    var dayHasError = false
    var monthHasError = false
    var yearHasError = false
  
    // Check if user has filled out first name
    if (req.session.data['firstNameOne'] === '') {
      // No value so add error to array
      firstNameError = true
      detailsError = true
      errors.push({
        text: 'Enter your first name in full',
        href: '#firstNameOne'
      })
    }
  
    // Check if user has filled out last name
    if (req.session.data['lastNameOne'] === '') {
      // No value so add error to array
      lastNameError = true
      detailsError = true
      errors.push({
        text: 'Enter your last name in full',
        href: '#lastNameOne'
      })
    }

      // Check if user has filled out a day
  if (req.session.data['Dob-day-one'] === '') {
    // No value so add error to array
    dayHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a day',
      href: '#Dob-day-one'
    })
  }

  // Check if user has filled out a month
  if (req.session.data['Dob-month-one'] === '') {
    // No value so add error to array
    monthHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a month',
      href: '#Dob-day-one'
    })
  }

  // Check if user has filled out a year
  if (req.session.data['Dob-year-one'] === '') {
    // No value so add error to array
    yearHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a year',
      href: '#Dob-day-one'
    })
  }

  // Check if eother filed not filled out
  if (detailsError) {
    // Re-show page with error value as true so errors will show
    res.render('v1/idv/director-one/director-one-details', {
      errorDirectorOneFirstName: firstNameError,
      errorDirectorOneLastName: lastNameError,
      errorDobDayOne: dayHasError,
      errorDobMonthOne: monthHasError,
      errorDobYearOne: yearHasError,
      errorDirectorOneDetails: detailsError,
      errorList: errors
    })
  } else {
    res.redirect('/v1/idv/director-one/director-one-uvid')
  }
  
})


// ******* uvid javascript ********************************
router.get('/v1/idv/director-one/director-one-uvid', function (req, res) {
  // Set URl
  res.render('v1/idv/director-one/director-one-uvid', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-one/director-one-uvid', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (typeof req.session.data['uvid-code-one'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if you have a Companies House personal code',
      href: '#uvid-code-one'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/idv/director-one/director-one-uvid', {
      errorUvidOne: true,
      errorList: errors
    })
  } else {
    if (req.session.data['uvid-code-one'] === 'yes') {
      res.redirect('/v1/idv/director-one/director-one-uvid')
    } else {
      // User inputted value so move to next page
      res.redirect('/v1/idv/director-one/verify-identity-link')
    } 
  }
})


// ******* verify-identity-link javascript ********************************
router.get('/v1/idv/director-one/verify-identity-link', function (req, res) {
  // Set URl
  res.render('v1/idv/director-one/verify-identity-link', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-one/verify-identity-link', function (req, res) {
  res.redirect('/v1/idv/director-dashboard')
})


// ******* statement javascript ********************************
router.get('/v1/idv/director-one/director-one-statement', function (req, res) {
  // Set URl
  res.render('v1/idv/director-one/director-one-statement', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-one/director-one-statement', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['verification-Statement-one'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Enter your Companies house personal code',
      href: '#verification-Statement-one'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/idv/director-one/director-one-statement', {
      errorStatementOne: true,
      errorList: errors
    })
  } else {
    res.redirect('/v1/idv/director-dashboard')
  }
})



// ******* provide-uvid javascript ********************************
router.get('/v1/idv/director-one/director-one-provide-uvid', function (req, res) {
  // Set URl
  res.render('v1/idv/director-one/director-one-provide-uvid', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-one/director-one-provide-uvid', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (req.session.data['provide-uvid-one'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your Companies House personal code',
      href: '#provide-uvid-one'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/idv/director-one/director-one-provide-uvid', {
      errorProvideUvidOne: true,
      errorList: errors
    })
  } else {
      res.redirect('/v1/idv/director-one/director-one-statement')
  }
})

// ****************************************************************


module.exports=router;

