const jumlahPositif = document.querySelector('.positif');
const jumlahMeninggal = document.querySelector('.meninggal');
const jumlahSembuh = document.querySelector('.sembuh');
window.addEventListener('load', async function () {
    jumlahPositif.innerHTML = await PositifCorona;
    jumlahMeninggal.innerHTML = await Meninggal;
    jumlahSembuh.innerHTML = await Sembuh;
});

PositifCorona = dataCoronaIndonesia()
    .then(response => {
        return response.confirmed.value;
    });

Meninggal = dataCoronaIndonesia()
    .then(response => {
        return response.deaths.value;
    });

Sembuh = dataCoronaIndonesia()
    .then(response => {
        return response.recovered.value;
    });


async function dataCoronaIndonesia() {
    return await fetch("https://covid19.mathdro.id/api/countries/indonesia/")
        .then(response => {
            if (!response.ok) {
                console.log("Error")
            }
            return response.json()
        })
}
