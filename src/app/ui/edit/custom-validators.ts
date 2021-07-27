import { FormGroup, FormControl } from '@angular/forms';

export function checkPasswords(group: FormGroup) {
  const password = group.get('password').value;
  const confirmPassword = group.get('confirmPassword').value;
  const minLength = 8;
  console.log('check passwords', password === confirmPassword ? null : { notSame: true })

  if (!password || !confirmPassword || password.length < minLength || confirmPassword.length < minLength) {
    return null;
  }

  return password === confirmPassword ? null : { checkPasswords: 'Passwords not equal' }
}

export function validateDate(d: FormControl) {
  let date_regexp = /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d$/;

  return date_regexp.test(d.value) || !d.value ? null : {
    validateDate: {
      valid: false
    }
  };
}
