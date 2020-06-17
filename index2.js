const tableBody = document.getElementById('tableBody');
const country = 'NP';
const xhr = new XMLHttpRequest();
let html = '';
xhr.open('GET', `https://covid19-api.org/api/timeline/${country}`, true);
xhr.onload = function () {
    if (this.status == 200) {
        let fetchedDocument = JSON.parse(this.responseText);
        fetchedDocument.forEach((element, index) => {
            let time = element.last_update;
            let timeArray = time.split('T');
            let fullDate = timeArray[0];
            html += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${fullDate}</td>
            <td>${element.cases}</td>
            <td>${element.recovered}</td>
            <td>${element.deaths}</td>
        </tr> `
        })
        tableBody.innerHTML = html;
    }
    else {
        console.log('Data Cannot be Fetched At This Time');
    }
}
xhr.send();