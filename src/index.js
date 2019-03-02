// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
	let obj = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};
	let arr =[];
	if (currency > 10000) {
		return error;
	} else if (currency<0 || currency==0) {
		return {};
	};

		for (x in obj) {
			if (currency % obj[x] == 0) {
				arr.push(currency/obj[x]);
				break;
			} else {
				let first = currency % obj[x];
				let second = currency - first;
				if (second == 0) {
					arr.push(0);
					continue;
				} else {
					let finish = second / obj[x];
					arr.push(finish);
					currency%=obj[x];
				}
			}
		}
		let resultObj = {};
		let c = 0;
		for (x in obj) {
			if (arr[c]) {
				resultObj[x] = arr[c];
				c++;	
			} else {
				c++;
				continue;
			}
			
		}
		return resultObj;
	}
