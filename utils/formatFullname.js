module.exports = (fullName) => {
  if (!fullName || typeof fullName !== 'string' || fullName.split(' ').length !== 2) return 'Error';
  const [firstName, lastName] = fullName.split(' ');
  if (!firstName || !lastName) return 'Error';
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
