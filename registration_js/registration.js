const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        request: "registration",
        name: document.getElementById('name').value,
        logo: document.getElementById('logo').value,
        prime: document.getElementById('prime').value,
        leader: document.getElementById('leader').value,
        members: document.getElementById('members').value,
        manager: document.getElementById('manager').value,
        trainer: document.getElementById('trainer').value,
    };

    tg.sendData(JSON.stringify(formData)); 
    tg.close();
});