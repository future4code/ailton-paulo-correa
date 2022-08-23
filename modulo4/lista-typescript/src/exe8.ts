const exe8 = (birthday: string, issueDate: string): boolean => {
  const currentYear: Date = new Date();
  const ageUser: number = Math.abs(
    currentYear.getFullYear() - new Date(birthday).getFullYear()
  );  
  const timeIdentity: number = Math.abs(
    currentYear.getFullYear() - new Date(issueDate).getFullYear()
  );
  return (
    (ageUser <= 20 && timeIdentity >= 5) ||
    (ageUser > 20 && ageUser <= 50 && timeIdentity >= 10) ||
    (ageUser > 50 && timeIdentity >= 15)
  );
};
console.log(exe8("11/10/1995", "01/05/2013"));
