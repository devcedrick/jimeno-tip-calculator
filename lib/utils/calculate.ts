const calcTipAmount = (
  billAmount: string,
  people: string,
  selectedTip: number,
  customTip: string
): number => {
  const sanitizedBillAmount = billAmount.trim();
  const sanitizedPeople = people.trim();
  const sanitizedCustomTip = customTip.trim();

  const peopleCount = parseInt(sanitizedPeople, 10);
  if (!Number.isInteger(peopleCount) || peopleCount <= 0) {
    return 0;
  }

  // Validate and parse bill amount
  const billAmountFloat = parseFloat(sanitizedBillAmount);
  if (!Number.isFinite(billAmountFloat) || billAmountFloat < 0) {
    return 0;
  }

  // Determine tip percentage with validation
  let tipPercent: number;
  if (selectedTip > 0) {
    tipPercent = selectedTip;
  } else {
    const customTipFloat = parseFloat(sanitizedCustomTip);
    if (!Number.isFinite(customTipFloat) || customTipFloat < 0) {
      return 0;
    }
    tipPercent = customTipFloat;
  }

  // Validate tip percentage range (0-100%)
  if (tipPercent < 0 || tipPercent > 100) {
    return 0;
  }

  // Convert to cents for precise arithmetic, then back to dollars
  const billAmountCents = Math.round(billAmountFloat * 100);
  const tipTotalCents = Math.round(billAmountCents * (tipPercent / 100));
  const tipPerPersonCents = Math.floor(tipTotalCents / peopleCount);
  
  // Convert back to dollars with proper precision
  return tipPerPersonCents / 100;
};

const calcTotalPerPerson = (
  billAmount: string,
  people: string,
  tipAmountPerPerson: number
): number => {
  // Input validation and sanitization
  const sanitizedBillAmount = billAmount.trim();
  const sanitizedPeople = people.trim();

  // Validate and parse people count
  const peopleCount = parseInt(sanitizedPeople, 10);
  if (!Number.isInteger(peopleCount) || peopleCount <= 0) {
    return 0;
  }

  // Validate and parse bill amount
  const billAmountFloat = parseFloat(sanitizedBillAmount);
  if (!Number.isFinite(billAmountFloat) || billAmountFloat < 0) {
    return 0;
  }

  // Validate tip amount per person
  if (!Number.isFinite(tipAmountPerPerson) || tipAmountPerPerson < 0) {
    return 0;
  }

  // Convert to cents for precise arithmetic
  const billAmountCents = Math.round(billAmountFloat * 100);
  const billPerPersonCents = Math.floor(billAmountCents / peopleCount);
  const tipPerPersonCents = Math.round(tipAmountPerPerson * 100);
  
  // Calculate total per person in cents, then convert back to dollars
  const totalPerPersonCents = billPerPersonCents + tipPerPersonCents;
  
  return totalPerPersonCents / 100;
};

export { calcTipAmount, calcTotalPerPerson };