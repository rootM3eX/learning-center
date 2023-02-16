/**
 * Form validation
*/

const formValidation = (() => {

  const selector = 'needs-validation';

  window.addEventListener('load', () => {
    let forms = document.getElementsByClassName(selector);
    let validation = Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', (e) => {
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

export default formValidation;
