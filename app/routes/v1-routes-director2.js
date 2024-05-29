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


// ******* director-two-details javascript ******************************
router.get('/v1/idv/director-two/director-two-details', function (req, res) {
  // Set URl
  res.render('v1/idv/director-two/director-two-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-two/director-two-details', function (req, res) {
    // Create empty array and set error variables to false
    var errors = []
    var firstNameError = false
    var lastNameError = false
    var detailsError = false
    var dayHasError = false
    var monthHasError = false
    var yearHasError = false
  
    // Check if user has filled out first name
    if (req.session.data['firstNameTwo'] === '') {
      // No value so add error to array
      firstNameError = true
      detailsError = true
      errors.push({
        text: 'Enter your first name in full',
        href: '#firstNameTwo'
      })
    }
  
    // Check if user has filled out last name
    if (req.session.data['lastNameTwo'] === '') {
      // No value so add error to array
      lastNameError = true
      detailsError = true
      errors.push({
        text: 'Enter your last name in full',
        href: '#lastNameTwo'
      })
    }

      // Check if user has filled out a day
  if (req.session.data['Dob-day-two'] === '') {
    // No value so add error to array
    dayHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a day',
      href: '#Dob-day-two'
    })
  }

  // Check if user has filled out a month
  if (req.session.data['Dob-month-two'] === '') {
    // No value so add error to array
    monthHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a month',
      href: '#Dob-month-two'
    })
  }

  // Check if user has filled out a year
  if (req.session.data['Dob-year-two'] === '') {
    // No value so add error to array
    yearHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a year',
      href: '#Dob-year-two'
    })
  }

  // Check if eother filed not filled out
  if (detailsError) {
    // Re-show page with error value as true so errors will show
    res.render('v1/idv/director-two/director-two-details', {
      errorDirectorTwoFirstName: firstNameError,
      errorDirectorTwoLastName: lastNameError,
      errorDobDayTwo: dayHasError,
      errorDobMonthTwo: monthHasError,
      errorDobYearTwo: yearHasError,
      errorDirectorTwoDetails: detailsError,
      errorList: errors
    })
  } else {
    res.redirect('/v1/idv/director-two/director-two-uvid')
  }
  
})


// ******* director-two-uvid javascript ********************************
router.get('/v1/idv/director-two/director-two-uvid', function (req, res) {
  // Set URl
  res.render('v1/idv/director-two/director-two-uvid', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-two/director-two-uvid', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (typeof req.session.data['uvid-code-two'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if you have the Companies house personal code for this director',
      href: '#uvid-code-two'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/idv/director-two/director-two-uvid', {
      errorUvidTwo: true,
      errorList: errors
    })
  } else {
    if (req.session.data['uvid-code-two'] === 'yes') {
      res.redirect('/v1/idv/director-two/director-two-statement')
    } else {
      // User inputted value so move to next page
      res.redirect('/v1/idv/director-two/director-two-contact')
    } 
  }
})


// ******* director-two-contact javascript ********************************
router.get('/v1/idv/director-two/director-two-contact', function (req, res) {
  // Set URl
  res.render('v1/idv/director-two/director-two-contact', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-two/director-two-contact', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (typeof req.session.data['contactDirector'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if you want us to contact the director',
      href: '#contactDirector'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/idv/director-two/director-two-contact', {
      errorContact: true,
      errorList: errors
    })
  } else {
    if (req.session.data['contactDirector'] === 'yes') {
      res.redirect('/v1/idv/director-two/director-two-emailed-director')
    } else {
      // User inputted value so move to next page
      res.redirect('/v1/idv/director-two/director-two-uvid')
    } 
  }
})


// ******* director-two-emailed-director javascript ******************************
router.get('/v1/idv/director-two/director-two-emailed-director', function (req, res) {
  // Set URl
  res.render('v1/idv/director-two/director-two-emailed-director', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-two/director-two-emailed-director', function (req, res) {
  res.redirect('/v1/idv/director-dashboard')
})


// ******* director-two-statement javascript ********************************
router.get('/v1/idv/director-two/director-two-statement', function (req, res) {
  // Set URl
  res.render('v1/idv/director-two/director-two-statement', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-two/director-two-statement', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['verification-Statement-two'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Confirm the verification statement',
      href: '#verification-Statement-two'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/idv/director-two/director-two-statement', {
      errorStatementTwo: true,
      errorList: errors
    })
  } else {
    res.redirect('/v1/idv/director-dashboard')
  }
})


// ******* provide-uvid javascript ********************************
router.get('/v1/idv/director-two/director-two-provide-uvid', function (req, res) {
  // Set URl
  res.render('v1/idv/director-two/director-two-provide-uvid', {
    currentUrl: req.originalUrl
  })
})

router.post('/v1/idv/director-two/director-two-provide-uvid', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (req.session.data['provide-uvid-two'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your Companies House user ID',
      href: '#provide-uvid-two'
    })

    // Re-show page with error value as true so errors will show
    res.render('v1/idv/director-two/director-two-provide-uvid', {
      errorProvideUvidOne: true,
      errorList: errors
    })
  } else {
      res.redirect('/v1/idv/director-two/director-two-statement')
  }
})



module.exports=router;

