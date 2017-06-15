var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(n) {
			return n*n;
		})
	},

	sum: function (arr) {
		return arr.reduce(function(acc, val, index, arr) {
    return acc + val;
  }
);

	},

	findDuplicates: function (arr) {
		var returnArray = [];
		var counts = {};

	  for (var i = 0; i < arr.length; i++) {
	     var item = arr[i];
	     counts[item] = (counts[item] >= 1) ? counts[item] + 1 : 1;
	     if (counts[item] === 2) {
	       returnArray.push(item);
	     }
	   }
	   return returnArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		for (var i = arr.length -1; i >= 0; i--) {
			if(arr[i] === valueToRemove) {
				arr.splice(i, 1);
			}
		}
		return arr;

	},

	findIndexesOf: function (arr, itemToFind) {
		var returnArray = [];
		arr.forEach(function(item, index, arr) {
			if(item === itemToFind) {
			returnArray.push(index);
			}
		})
		return returnArray;
	},

	// findIndexesOf: function (arr, itemToFind) {
	// 	var returnArray = [];
	// 	arr.map(function(item, index, arr) {
	// 		if(item === itemToFind) {
	// 		returnArray.push(index);
	// 		}
	// 	})
	// 	return returnArray;
	// },

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenArray = arr.filter(function(num) {
			return num % 2 === 0;
		});
		squareArray = this.square(evenArray);
		return this.sum(squareArray);
	}

}

module.exports = arrayTasks
