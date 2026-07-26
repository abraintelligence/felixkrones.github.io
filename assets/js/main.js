// Shows the success note after the form service redirects back with ?sent=1.
document.addEventListener('DOMContentLoaded', function () {
  var success = document.querySelector('.form-success');
  if (success && window.location.search.indexOf('sent=1') !== -1) {
    success.hidden = false;
    success.scrollIntoView({ block: 'center' });
  }
});
