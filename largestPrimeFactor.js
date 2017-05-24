exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  
  for(var i = 2; i <= n / i; i++) {
  	while(n % i === 0) {
  		if(i > primeNumber) {
  			primeNumber = i;
  		}
  		n /= i;
  	}
  }
  
  if(n > 1) {
  	if(n > primeNumber) {
  		primeNumber = n;
  	}
  }

  return primeNumber;
};