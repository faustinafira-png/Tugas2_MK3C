alert("Selamat datang!");
function cekLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username dan password wajib diisi!");
    } else {
        alert("Data login sudah lengkap!");
    }
}

function cekRegister() {
    let nama = document.getElementById("nama").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let konfirmasiPassword = document.getElementById("konfirmasi-password").value;
    let kelas = document.getElementById("kelas").value;

    if (nama === "" || username === "" || password === "") {
        alert("Data penting harus diisi!");
    } else if (password.length < 8) {
        alert("Password minimal 8 karakter!");
    } else if (password !== konfirmasiPassword) {
        alert("Password dan konfirmasi password tidak sama!");
    } else if (kelas === "") {
        alert("Silakan pilih kelas!");
    } else {
        alert("Data registrasi valid!");
    }
}