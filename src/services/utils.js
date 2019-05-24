const utility = {

	setDataToStorage: (key, value) => {
		localStorage[key] = JSON.stringify(value);
	},

	getDataFromStorage: (key) => {
		return localStorage[key] ? JSON.parse(localStorage[key]) : null;
	},

	deleteDataFromStorage: (key) => {
		localStorage.removeItem(key);
	},

	updateObject: (oldObject, updatedProperties) => {
		return {
			...oldObject,
			...updatedProperties
		};
	},

	isEmptyObject: (obj) => {
		for(var key in obj) {
			if(obj.hasOwnProperty(key))
				return false;
		}
		return true;
	},

	isJson: (str) => {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}
};

export default utility;