const API_URL = "http://localhost:5242/api/eszkozok";
// const button = document.querySelector("#Lekerdezés");
const eszkozokLekerese = () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {

            const tabla = document.getElementById("eszkozTabla");
            tabla.innerHTML = '';

            data.forEach(eszkoz => {
                
            tabla.innerHTML += `
                <tr>
                    <td>${eszkoz.id}</td>
                    <td>${eszkoz.nev}</td>
                    <td>${eszkoz.leltariSzam}</td>
                    <td>${eszkoz.kategoria}</td>
                    <td>${eszkoz.gyarto}</td>
                    <td>${eszkoz.modell}</td>
                    <td>${eszkoz.terem}</td>
                    <td>${eszkoz.allapot}</td>
                </tr>

            `;
                
            });

        })
        .catch(error => {
            
            console.log(error)

            document.getElementById("uzenet").innerHTML =
                '<div class="alert alert-danger">Nem sikerült lekérni az adatokat.</div>';
        })
        
}
// addEventListener segítségével figyelünk egy felhasználói eseményt
// Hogyha bekövetkezik ez az eseményt (kattintás), akkor utána meghív
// egy függvényt az addEventListener -> eszkozLekerdezese.
document.getElementById("lekeresGomb")
    .addEventListener("click", eszkozokLekerese)


// button.addEventListener("click")

// function Lekerdezes(){
//     fetch("http://localhost:5242/api/eszkozok"),{
//             method: 'GET' ,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//     }
// }