function askQuestion() {
    var p = prompt('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
    if (p != null) {
        document.getElementById('ask-question').innerHTML = 'Yikes! ' + p + ' is a lot of wood!';
    }
}