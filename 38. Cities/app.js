"use strict";
function describe_city(city, country = 'USA') {
    console.log(`${city} is in ${country}.`);
}
describe_city('Karachi', 'Pakistan');
describe_city('New York');
describe_city('London', 'United Kingdom');
describe_city('Mumbai', 'India');
