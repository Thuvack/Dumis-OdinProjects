const ftoc = function(argToCe) {
 
  let convNum;
  let convNumStr;

  convNum = (((argToCe - 32)*5)/9);
  convNumStr = convNum.toString();

  if (convNumStr.includes(".") == false) {

    argToCe = Number.parseFloat(convNum).toFixed(0);

  } else {
    
    argToCe = Number.parseFloat(convNum).toFixed(1);

  }
  
  return Number(argToCe);
};

const ctof = function(argToFr) {
  let convNum;
  let convNumStr;

  convNum = ((argToFr*9)/5) + 32;
  convNumStr = convNum.toString();

  if (convNumStr.includes(".") == false) {

      argToFr = Number.parseFloat(convNum).toFixed(0);

  } else {

    argToFr = Number.parseFloat(convNum).toFixed(1);

  }

  return Number(argToFr);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
