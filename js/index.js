document.querySelector('.page-loaded')
    .innerText = new Date().toLocaleTimeString();
    
document.querySelector('.fetch-html')
    .addEventListener('click', fetchHtml);

async function fetchHtml() {
    const response = await fetch('client-data.html');
    const html = await response.text();
    document.querySelector('.html-container').innerHTML = html; 
}

// function fetchHtml() {
//     fetch('client-data.html')
//       .then( response => response.text() )
//       .then( html => document.querySelector('.html-container').innerHTML = html ); 
// }

document.querySelector('.ajax-html').addEventListener('click', ajaxHtml);

function ajaxHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'client-data.html', true);
    xhr.send();
}


document.querySelector('.fetch-json')
    .addEventListener('click', fetchJson);

async function fetchJson() {
    const response = await fetch('client-data.json');
    const clientData = await response.json();
    document.querySelector('.client-name').innerText = clientData.name; 
    document.querySelector('.account-balance').innerText = clientData.balance; 
}
