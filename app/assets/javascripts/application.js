//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

// Complete checked rows by adding visually hidden tags
function show_hide() {
  // get div to hide / reveal
  var id = document.getElementById('showHide');

  if (id.classList.contains('govuk-visually-hidden')) {
    id.classList.remove('govuk-visually-hidden');
  } else {
    id.classList.add('govuk-visually-hidden');
  }
}