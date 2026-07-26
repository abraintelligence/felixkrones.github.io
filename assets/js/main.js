// Contact form: builds a mailto link so no backend is needed yet.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var message = form.elements.message.value.trim();
    var body = message + '\n\n' + name + '\n' + email;
    var href = 'mailto:' + form.dataset.mailto +
      '?subject=' + encodeURIComponent(form.dataset.subject) +
      '&body=' + encodeURIComponent(body);
    window.location.href = href;
  });
});
