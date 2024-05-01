document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();


    var phonenumber = document.getElementById('f').value;
    var password = document.getElementById('p').value;
    

    if (phonenumber === '09466857000' && password === 'Jose') {
        document.getElementById('comment').textContent = 'Loading...';
        window.location.href='Home/Profilehome.html';
    }
        

    else {
        document.getElementById('comment').textContent = 'Wrong password ';
        
    }

});

document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();

    var password = document.getElementById('s').value;
    

    if (password == "Jose") {
        window.location.href="Home/Profilehome.html";
        document.getElementById('comment').textContent = 'loading...'
    }

    else {
        document.getElementById('comment').textContent = 'Wrong password ';
        alert("Wrong Password")

    }

})



