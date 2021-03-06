/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 1717,
	ipWhitelist: ["128.0.0.1", "::ffff:127.0.0.1", "::1", "90.22.128.227", "159.50.174.36"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "fr",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "clock",
			position: "top_center",
			config: {
				displaySeconds: false
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Paris",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "9bd13945da22f4e3659f2f84cd5bcfad",
				roundTemp: true,
				onlyTemp: true
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Paris",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "9bd13945da22f4e3659f2f84cd5bcfad",
				fade: false,
				maxNumberOfDays: 3,
				lang: "fr",
				roundTemp: true,
				appendLocationNameToHeader: false,
				colored: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

