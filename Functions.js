function compare(key) {
	return function(a,b) {
  		if (a[key] < b[key])
    		return -1;
  		if (a[key] > b[key])
    		return 1;
  		return 0;
	}
}

module.exports = {
  singleCompare: function (key) {
  	return compare(key)
  },
  doubleCompare: function (first, second) {
  	firstVal = compare(first)
  	if (firstVal) {
  		return firstVal
  	} else {
  		return compare(second)
  	}
  }
};