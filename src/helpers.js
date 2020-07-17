export function getDiferenceYear(year) {
  return new Date().getFullYear() - year;
}

//calc total to pay by brand
export function calcBrand(brand) {
  let increment;

  switch (brand) {
    case 'european':
      increment = 1.3;
      break;
    case 'american':
      increment = 1.15;
      break;
    case 'asian':
      increment = 1.05;
      break;
    default:
      break;
  }
  return increment;
}

//calc plan
export function getPlan(plan) {
  return plan === 'basic' ? 1.2 : 1.5;
}

// show first letter uppercase
export function firstLetterUppercase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
