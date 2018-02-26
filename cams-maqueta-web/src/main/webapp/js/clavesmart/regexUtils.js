function moduleRegexUtil(){
	
	var regexUtils = {
		REGEX_ONLY_NUMBERS: "^([0-9])+",
		REGEX_DATE: "^([0-2]\\d?|[3][0-1]?)(?:\\/([0]\\d?|[1][0-2]?)?(?:\\/\\d{0,4})?)?",
		REGEX_ALPHANUMERIC: "^([a-zA-Z0-9])+",
		REGEX_ALPHANUMERIC_SPACE: "^([a-zA-Z0-9\\s])+",
		REGEX_EMAIL: "^([a-zA-Z0-9@.])+",
		FORMAT :{
			DECIMALS_TBK: /(\d)(?=(\d{3})+(?!\d))/g
		}
	}
	
	regexUtils.regexInsensitive = function(strRegex){
		return new RegExp(strRegex,"i");
	}
	
	regexUtils.regexGlobal = function(strRegex){
		return new RegExp(strRegex,"g");
	}
	
	return regexUtils;
}