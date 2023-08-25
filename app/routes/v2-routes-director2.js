const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ******* director-one-details javascript ******************************
router.get('/v2/director-two/director-two-details', function (req, res) {
  // Set URl
  res.render('v2/director-two/director-two-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/director-two/director-two-details', function (req, res) {
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

    var detailsError = false
  
    // Check if user has filled out first name
    if (req.session.data['firstNameTwo'] === '') {
      // No value so add error to array
      firstNameError = true
      detailsError = true
      errors.push({
        text: 'Enter the directors first name in full',
        href: '#firstNameTwo'
      })
    }
  
    // Check if user has filled out last name
    if (req.session.data['lastNameTwo'] === '') {
      // No value so add error to array
      lastNameError = true
      detailsError = true
      errors.push({
        text: 'Enter the directors last name in full',
        href: '#lastNameTwo'
      })
    }

      // Check if user has filled out a value
    if (typeof req.session.data['differentNameTwo'] === 'undefined') {
      differentNameError = true
      detailsError = true
      errors.push({
        text: 'Select if the director has used a different name for business purposes in the last 20 years',
        href: '#differentName'
      })
    }

    // Check if user has filled out last name
    if (req.session.data['nationalityTwo'] === '') {
      // No value so add error to array
      nationalityError = true
      detailsError = true
      errors.push({
        text: 'Enter the directors nationality',
        href: '#nationality'
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
        href: '#Dob-day-two'
      })
    }

  // Check if user has filled out a year
  if (req.session.data['Dob-year-two'] === '') {
    // No value so add error to array
    yearHasError = true
    detailsError = true
    errors.push({
      text: 'The date must include a year',
      href: '#Dob-day-two'
    })
  }

    // Check if user has filled out last name
    if (req.session.data['jobTitleTwo'] === '') {
      // No value so add error to array
      jobTitleError = true
      detailsError = true
      errors.push({
        text: 'Enter the directors job title',
        href: '#jobTitle'
      })
    }

  // Check if eother filed not filled out
  if (detailsError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/director-two/director-two-details', {
      errorDirectorTwoFirstName: firstNameError,
      errorDirectorTwoLastName: lastNameError,
      errorDifferentNameTwo: differentNameError,
      errorNationalityTwo: nationalityError,
      errorDobDayTwo: dayHasError,
      errorDobMonthTwo: monthHasError,
      errorDobYearTwo: yearHasError,
      errorJobTitleTwo: jobTitleError,
      errorDirectorTwoDetails: detailsError,
      errorList: errors
    })
  } else {
    res.redirect('/v2/director-two/director-two-uvid')
  }
  
})


// ******* uvid javascript ********************************
router.get('/v2/director-two/director-two-uvid', function (req, res) {
  // Set URl
  res.render('v2/director-two/director-two-uvid', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/director-two/director-two-uvid', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (req.session.data['uvid-code-two'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your Companies House user ID',
      href: '#uvid-code-two'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/director-two/director-two-uvid', {
      errorUvidTwo: true,
      errorList: errors
    })
  } else {
      // User inputted value so move to next page
      res.redirect('/v2/director-two/director-two-address')
    }
})


// ******* director-two/director-two-address javascript ********************************
router.get('/v2/director-two/director-two-address', function (req, res) {
  // Set URl
  res.render('v2/director-two/director-two-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/director-two/director-two-address', function (req, res) {
      res.redirect('/v2/director-two/director-two-confirm-address')
})


// ******* director-two/director-two-confirm-address javascript ********************************
router.get('/v2/director-one/director-two/director-two-confirm-address', function (req, res) {
  // Set URl
  res.render('v2/director-two/director-two-confirm-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/director-two/director-two-confirm-address', function (req, res) {
  res.redirect('/v2/director-two/director-two-reminders')
})


// ******* director-two/director-two-reminders javascript ********************************
router.get('/v2/director-two/director-two-reminders', function (req, res) {
  // Set URl
  res.render('v2/director-two/director-two-reminders', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/director-two/director-two-reminders', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['remindersTwo'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if the director wants to receive filing reminders',
      href: '#remindersTwo'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/director-two/director-two-reminders', {
      errorRemindersTwo: true,
      errorList: errors
    })
  } else {
      res.redirect('/v2/add-director')
  }
})



module.exports=router;

