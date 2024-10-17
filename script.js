// Buttons
const runningShoeButton = document.getElementById('menu-rshoe');
const casualSneakerButton = document.getElementById('menu-csneaker');
const formalShoeButton = document.getElementById('menu-flshoe');
const hikingBootButton = document.getElementById('menu-hboot');

// Cards
const runningShoe = document.getElementById('runningShoe');
const casualSneaker = document.getElementById('casualSneaker');
const formalShoe = document.getElementById('formalShoe');
const hikingBoot = document.getElementById('hikingBoot');

let currentShoe = '';

runningShoeButton.addEventListener('click', () => changeGallery('rshoe'));
casualSneakerButton.addEventListener('click', () => changeGallery('csneaker'));
formalShoeButton.addEventListener('click', () => changeGallery('flshoe'));
hikingBootButton.addEventListener('click', () => changeGallery('hboot'));

function changeGallery(shoe) {
    debugger
    if (shoe === currentShoe) {
        currentShoe = '';
        showAll();
        return;
    }

    currentShoe = shoe;

    switch (shoe) {
        case 'rshoe':
            runningShoe.hidden = false;
            casualSneaker.hidden = true;
            formalShoe.hidden = true;
            hikingBoot.hidden = true;
            break;

        case 'csneaker':
            runningShoe.hidden = true;
            casualSneaker.hidden = false;
            formalShoe.hidden = true;
            hikingBoot.hidden = true;
            break;

        case 'flshoe':
            runningShoe.hidden = true;
            casualSneaker.hidden = true;
            formalShoe.hidden = false;
            hikingBoot.hidden = true;
            break;
        
        case 'hboot':
            runningShoe.hidden = true;
            casualSneaker.hidden = true;
            hikingBoot.hidden = false;
            formalShoe.hidden = true;
            break;

        default:
            alert('Sapato inválido!');
            showAll();
            break;
    }
}

function showAll() {
    runningShoe.hidden = false;
    casualSneaker.hidden = false;
    formalShoe.hidden = false;
    hikingBoot.hidden = false;
}