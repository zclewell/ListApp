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
  	return function(a,b) {
  		if (a[key] < b[key])
    		return -1;
  		if (a[key] > b[key])
    		return 1;
  		return 0;
  	}
  },
  doubleCompare: function (first, second) {
  	return function(a,b) {
  		if (a[first] < b[first])
    		return -1;
  		if (a[first] > b[first])
    		return 1;
    	if (a[second] < b[second])
    		return -1;
  		if (a[second] > b[second])
    		return 1;
  		return 0;
  	}
  }
};