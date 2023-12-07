document.addEventListener("DOMContentLoaded", function () {
    // Завдання 1
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        var form = document.getElementById("myForm");
        var inputs = form.getElementsByTagName("input");

        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if (!input.checkValidity()) {
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        }

        if (form.checkValidity()) {
            displayInformation();
        }
    }

    function displayInformation() {
        // Отримання значень полів та їх виведення, наприклад, у вікні alert
        var pib = document.getElementById("pib").value;
        var group = document.getElementById("group").value;
        var idCard = document.getElementById("idCard").value;
        var dob = document.getElementById("dob").value;
        var email = document.getElementById("email").value;

        var info = "ПІБ: " + pib + "\nГрупа: " + group + "\nID-card: " + idCard + "\nДата народж.: " + dob + "\ne-mail: " + email;
        alert(info);
    }
    
    //Завдання 2
    // Створення таблиці розміром 6x6
    let table = document.createElement("table");

    for (let i = 0; i < 6; i++) {
        let row = table.insertRow();
        for (let j = 0; j < 6; j++) {
            let cell = row.insertCell();
            cell.textContent = i * 6 + j + 1;

            // Зміна колірів при наведенні та click, а також за умовою наявності цифри 8
            cell.addEventListener("mouseover", function () {
                if (cell.textContent.includes("23")) {
                    cell.style.backgroundColor = getRandomColor();
                }
            });

            cell.addEventListener("click", function () {
                if (cell.textContent.includes("23")) {
                    cell.style.backgroundColor = prompt("Введіть колір (наприклад, 'blue', '#00ff00', 'rgb(255, 0, 0)')", "");
                }
            });

            cell.addEventListener("dblclick", function () {
                // Зміна кольору клітинок головної діагоналі таблиці
                if (i === j) {
                    for (let k = 0; k < 6; k++) {
                        table.rows[k].cells[k].style.backgroundColor = getRandomColor();
                    }
                }
            });
        }
    }

    document.body.appendChild(table);
});

// Генерація випадкового кольору
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}