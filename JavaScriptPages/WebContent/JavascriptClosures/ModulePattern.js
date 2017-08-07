var createCounter = function() {
	var counter = 0;
	function changeCounterVal(val) {
		counter = counter + val;
	}

	return {
		increment : function() {
			changeCounterVal(1);
		},
		decrement : function() {
			changeCounterVal(-1);
		},

		getValue : function() {
			return counter;
		}
	}

}();

createCounter.increment();
createCounter.increment();
console.log(createCounter.getValue());
createCounter.decrement();
console.log(createCounter.getValue());