const totalCases = document.getElementById('totalCases');
const totalDeaths = document.getElementById('totalDeaths');
const totalRecovered = document.getElementById('totalRecovered');
const updatedTime = document.getElementById('updatedTime');
const newCases = document.getElementById('newCases');
const newDeaths = document.getElementById('newDeaths');
const newRecovered = document.getElementById('newRecovered');
const newCasesPercentage = document.getElementById('newCasesPercentage');
const newDeathsPercentage = document.getElementById('newDeathsPercentage');
const newRecoveredPercentage = document.getElementById('newRecoveredPercentage');
const country = 'NP';
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://covid19-api.org/api/status/${country}`, true);
xhr.onload = function () {
    if (this.status == 200) {
        let fetchedContent = JSON.parse(this.responseText);
        let time = fetchedContent.last_update;
        let timeArray = time.split('T');
        totalCases.innerText = fetchedContent.cases;
        totalDeaths.innerText = fetchedContent.deaths;
        totalRecovered.innerText = fetchedContent.recovered;
        updatedTime.innerText = `Last Update On ${timeArray[0]} ${timeArray[1]}`;
    } else {
        console.error('Unable to fetch the content at the Time');
    }
}
xhr.send();

const newXhr = new XMLHttpRequest();
newXhr.open('GET', `https://covid19-api.org/api/diff/${country}`, true);
newXhr.onload = function () {
    if (this.status == 200) {
        let fetchedContent = JSON.parse((this.responseText));
        newCases.innerText = fetchedContent.new_cases;
        newDeaths.innerText = fetchedContent.new_deaths;
        newRecovered.innerText = fetchedContent.new_recovered;
        newCasesPercentage.innerText = fetchedContent.new_cases_percentage;
        newDeathsPercentage.innerText = fetchedContent.new_deaths_percentage;
        newRecoveredPercentage.innerText = fetchedContent.new_recovered_percentage;
    } else {
        console.log('Unable to fetch the content at the Time');
    }
}
newXhr.send();
