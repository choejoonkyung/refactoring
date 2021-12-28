function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}
function moreThanFiveLateDeliveries(aDriver) {
  return aDriver.numberOfLateDeliveries > 5;
}
function rating_refactor(aDriver) {
  aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}
function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerDate(lines, aCustomer);
  return lines;
}
function gatherCustomerDate(out, aCustoemr) {
  out.push(["name", aCustoemr.name]);
  out.push(["location", aCustoemr.location]);
}
function reportLines_refactor(aCustomer) {
  const lines = [];
  lines.push(["name", aCustoemr.name]);
  lines.push(["location", aCustoemr.location]);
  return lines;
}
