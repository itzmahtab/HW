function generateTable() {
    let num = document.getElementById('num').value;
    let tableDiv = document.getElementById('table');
    let errorDiv = document.getElementById('error');
    tableDiv.innerHTML = "";
    errorDiv.innerHTML = "";

    if (!num || isNaN(num)) {
        errorDiv.innerHTML = "Please enter a valid number!";
        return;
    }

    num = Number(num);

    if (num <= 0) {
        errorDiv.innerHTML = "Please enter a number greater than 0!";
        return;
    }

    tableDiv.innerHTML = `<h3>Multiplication Table of ${num}</h3>`;
    for (let i = 1; i <= 10; i++) {
        tableDiv.innerHTML += `<p>${num} x ${i} = ${num * i}</p>`;
    }
}

function showPage(page) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById(page).style.display = 'block';
}

window.onload = function() {
    showPage('home');
};
