const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ******* director-one-details javascript ******************************
router.get('/v2/director-one/director-one-details', function (req, res) {
  // Set URl
  res.render('v2/director-one/director-one-details', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/director-one/director-one-details', function (req, res) {
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
    if (req.session.data['firstNameOne'] === '') {
      // No value so add error to array
      firstNameError = true
      detailsError = true
      errors.push({
        text: 'Enter the directors first name in full',
        href: '#firstNameOne'
      })
    }
  
    // Check if user has filled out last name
    if (req.session.data['lastNameOne'] === '') {
      // No value so add error to array
      lastNameError = true
      detailsError = true
      errors.push({
        text: 'Enter the directors last name in full',
        href: '#lastNameOne'
      })
    }

      // Check if user has filled out a value
    if (typeof req.session.data['differentName'] === 'undefined') {
      differentNameError = true
      detailsError = true
      errors.push({
        text: 'Select if the director has used a different name for business purposes in the last 20 years',
        href: '#differentName'
      })
    }

    // Check if user has filled out last name
    if (req.session.data['nationality'] === '') {
      // No value so add error to array
      nationalityError = true
      detailsError = true
      errors.push({
        text: 'Enter the directors nationality',
        href: '#nationality'
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

    // Check if user has filled out last name
    if (req.session.data['jobTitle'] === '') {
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
    res.render('v2/director-one/director-one-details', {
      errorDirectorOneFirstName: firstNameError,
      errorDirectorOneLastName: lastNameError,
      errorDifferentName: differentNameError,
      errorNationality: nationalityError,
      errorDobDayOne: dayHasError,
      errorDobMonthOne: monthHasError,
      errorDobYearOne: yearHasError,
      errorJobTitle: jobTitleError,
      errorDirectorOneDetails: detailsError,
      errorList: errors
    })
  } else {
    res.redirect('/v2/director-one/director-one-uvid')
  }
  
})


// ******* uvid javascript ********************************
router.get('/v2/director-one/director-one-uvid', function (req, res) {
  // Set URl
  res.render('v2/director-one/director-one-uvid', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/director-one/director-one-uvid', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (req.session.data['uvid-code-one'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your Companies House user ID',
      href: '#uvid-code-one'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/director-one/director-one-uvid', {
      errorUvidOne: true,
      errorList: errors
    })
  } else {
      // User inputted value so move to next page
      res.redirect('/v2/director-one/director-one-address')
    }
})


// ******* director-one-address javascript ********************************
router.get('/v2/director-one/director-one-address', function (req, res) {
  // Set URl
  res.render('v2/director-one/director-one-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/director-one/director-one-address', function (req, res) {
  // Create empty array and set error variables to false
  var errors = [];

  // Check if user has filled out a email
  if (req.session.data['postcode'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your postcode',
      href: '#postcode'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/director-one/director-one-address', {
      errorDirectorOneAddress: true,
      errorList: errors
    })
  } else {
      // User inputted value so move to next page
      res.redirect('/v2/director-one/director-one-confirm-address')
  }
})


// ******* director-one-confirm-address javascript ********************************
router.get('/v2/director-one/director-one-confirm-address', function (req, res) {
  // Set URl
  res.render('v2/director-one/director-one-confirm-address', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/director-one/director-one-confirm-address', function (req, res) {
  res.redirect('/v2/director-one/director-one-reminders')
})


// ******* director-one/director-one-reminders javascript ********************************
router.get('/v2/director-one/director-one-reminders', function (req, res) {
  // Set URl
  res.render('v2/director-one/director-one-reminders', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/director-one/director-one-reminders', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (typeof req.session.data['reminders'] === 'undefined') {
    // No value so add error to array
    errors.push({
      text: 'Select if the director wants to recieve filing reminders',
      href: '#reminders'
    })

    // Re-show page with error value as true so errors will show
    res.render('v2/director-one/director-one-reminders', {
      errorReminders: true,
      errorList: errors
    })
  } else {
      res.redirect('/v2/add-director')
  }
})


module.exports=router;

