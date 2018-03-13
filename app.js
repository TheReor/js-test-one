var names = ['Damian', 'Joakim Spellchecker', 'Joakim'];

for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Damian') {
        document.getElementById('h1').innerText = "Yeah, he's the rl spellchecker!";
        break;
    } else {
        alert('Pff, kidding me?');
    }
    }