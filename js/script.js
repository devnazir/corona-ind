window.addEventListener('load', async function () {
    const data = await dataCoronaIndonesia();
    updateUI(data);
});

function updateUI(data) {
    const jumlahPositif = document.querySelector('.positif');
    const jumlahMeninggal = document.querySelector('.meninggal');
    const jumlahSembuh = document.querySelector('.sembuh');

    jumlahPositif.innerHTML = data.confirmed.value;
    jumlahMeninggal.innerHTML = data.deaths.value;
    jumlahSembuh.innerHTML = data.recovered.value;
}


async function dataCoronaIndonesia() {
    return await fetch("https://covid19.mathdro.id/api/countries/indonesia/")
        .then(response => {
            if (!response.ok) {
                console.log("Error")
            }
            return response.json()
        })
}
