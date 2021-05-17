let pies = 0;
let pps = 0;
let ppc = 1;

let bakeCostArray = [100, 1000, 25000, 300000, 1200000, 4000000, 10000000, 50000000, 100000000];
let storeCostArray = [2000, 10000, 100000, 1000000, 50000000, 350000000, 5000000000, 35000000000, 9999999999999]
let buyEvent = document.querySelectorAll('.pieType');
let storeEvent = document.querySelectorAll('.storeItem');
let clickMap = document.getElementById('pieMap');

buyEvent.forEach(buy => buy.addEventListener('click', buyPies));
storeEvent.forEach(item => item.addEventListener('click', buyStore))
clickMap.addEventListener('click', clickPie);

//BAKE LEFT SIDE//
function buyPies(event) {
    let eTarget = event.target;
    let target = '';
    if(eTarget === document.getElementById('strawberry') 
            || document.getElementById('strawberryCost') 
            || document.getElementById('strawberryImg') 
            || document.getElementById('strawberryP')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('raspberry') 
            || document.getElementById('raspberryCost')
            || document.getElementById('raspberryImg') 
            || document.getElementById('raspberryP')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('apple') 
            || document.getElementById('appleCost')
            || document.getElementById('appleImg') 
            || document.getElementById('appleP')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('banana') 
            || document.getElementById('bananaCost')
            || document.getElementById('bananaImg') 
            || document.getElementById('bananaP')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('blueberry') 
            || document.getElementById('blueberryCost')
            || document.getElementById('blueberryImg') 
            || document.getElementById('blueberryP')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('grape') 
            || document.getElementById('grapeCost')
            || document.getElementById('grapeImg') 
            || document.getElementById('grapeP')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('cherry') 
            || document.getElementById('cherryCost')
            || document.getElementById('cherryImg') 
            || document.getElementById('cherryP')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('mango') 
            || document.getElementById('mangoCost')
            || document.getElementById('mangoImg') 
            || document.getElementById('mangoP')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('chocolate') 
            || document.getElementById('chocolateCost')
            || document.getElementById('chocolateImg') 
            || document.getElementById('chocolateP')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('')) {
        target = eTarget.parentElement;
        target = target.getAttribute('id');
    } else {
        target = eTarget.parentElement;
        target = target.getAttribute('id');
    }

    switch(target) {
        case 'strawberry':
            countPriceUp(bakeCostArray[0], 0);
            break;
        case 'strawberryCost':
            countPriceUp(bakeCostArray[0], 0);
            break;
        case 'strawberryImg':
            countPriceUp(bakeCostArray[0], 0);
            break;
        case 'strawberryP':
            countPriceUp(bakeCostArray[0], 0);
            break;
        case 'raspberry':
            countPriceUp(bakeCostArray[1], 1);
            break;
        case 'raspberryCost':
            countPriceUp(bakeCostArray[1], 1);
            break;
        case 'raspberryImg':
            countPriceUp(bakeCostArray[1], 1);
            break;
        case 'raspberryP':
            countPriceUp(bakeCostArray[1], 1);
            break;
        case 'apple':
            countPriceUp(bakeCostArray[2], 2);
            break;
        case 'appleCost':
            countPriceUp(bakeCostArray[2], 2);
            break;
        case 'appleImg':
            countPriceUp(bakeCostArray[2], 2);
            break;
        case 'appleP':
            countPriceUp(bakeCostArray[2], 2);
            break;
        case 'banana':
            countPriceUp(bakeCostArray[3], 3);
            break;
        case 'bananaCost':
            countPriceUp(bakeCostArray[3], 3);
            break;
        case 'bananaImg':
            countPriceUp(bakeCostArray[3], 3);
            break;
        case 'bananaP':
            countPriceUp(bakeCostArray[3], 3);
            break;
        case 'blueberry':
            countPriceUp(bakeCostArray[4], 4);
            break;
        case 'blueberryCost':
            countPriceUp(bakeCostArray[4], 4);
            break;
        case 'blueberryImg':
            countPriceUp(bakeCostArray[4], 4);
            break;
        case 'blueberryP':
            countPriceUp(bakeCostArray[4], 4);
            break;
        case 'grape':
            countPriceUp(bakeCostArray[5], 5);
            break;
        case 'grapeCost':
            countPriceUp(bakeCostArray[5], 5);
            break;
        case 'grapeImg':
            countPriceUp(bakeCostArray[5], 5);
            break;
        case 'grapeP':
            countPriceUp(bakeCostArray[5], 5);
            break;
        case 'cherry':
            countPriceUp(bakeCostArray[6], 6);
            break;
        case 'cherryCost':
            countPriceUp(bakeCostArray[6], 6);
            break;
        case 'cherryImg':
            countPriceUp(bakeCostArray[6], 6);
            break;
        case 'cherryP':
            countPriceUp(bakeCostArray[6], 6);
            break;
        case 'mango':
            countPriceUp(bakeCostArray[7], 7);
            break;
        case 'mangoCost':
            countPriceUp(bakeCostArray[7], 7);
            break;
        case 'mangoImg':
            countPriceUp(bakeCostArray[7], 7);
            break;
        case 'mangoP':
            countPriceUp(bakeCostArray[7], 7);
            break;
        case 'chocolate':
            countPriceUp(bakeCostArray[8], 8);
            break;
        case 'chocolateCost':
            countPriceUp(bakeCostArray[8], 8);
            break;
        case 'chocolateImg':
            countPriceUp(bakeCostArray[8], 8);
            break;
        case 'chocolateP':
            countPriceUp(bakeCostArray[8], 8);
            break;
        default:
            console.log('bake error');
    }
    
}

function countPriceUp(taste, i) {
    pieCounter += taste;
    pps += taste;
    taste = taste / 0.6;
    taste = parseInt(taste);
    Math.floor(taste);
    bakeCostArray[i] = taste;

    switch(i) {
        case 0:
            document.getElementById('strawberryCost').innerHTML = taste + ' Pies';
            break;
        case 1:
            document.getElementById('raspberryCost').innerHTML = taste + ' Pies';
            break;
        case 2:
            document.getElementById('appleCost').innerHTML = taste + ' Pies';
            break;
        case 3:
            document.getElementById('bananaCost').innerHTML = taste + ' Pies';
            break;
        case 4:
            document.getElementById('blueberryCost').innerHTML = taste + ' Pies';
            break;
        case 5:
            document.getElementById('grapeCost').innerHTML = taste + ' Pies';
            break;
        case 6:
            document.getElementById('cherryCost').innerHTML = taste + ' Pies';
            break;
        case 7:
            document.getElementById('mangoCost').innerHTML = taste + ' Pies';
            break;
        case 8:
            document.getElementById('chocolateCost').innerHTML = taste + ' Pies';
            break;
    }
}

//STORE RIGHT SIDE//
function buyStore(event) {
    let target = event.target;

    if(target === document.getElementsByClassName('storeItem').childNodes
        || document.getElementsByClassName('storeItem')) {
        target = target.getAttribute('id');
        if(target === null) {
            target = event.target.parentElement.getAttribute('id');
            if(target === null) {
                target = event.target.parentElement.parentElement.getAttribute('id');
            }
        }
    }

    switch(target) {
        case 'ingredients':
            if(pies > bakeCostArray[0]) {
                ppc += 9;
                document.getElementById(target).remove();
            }
            break;
        case 'catHelper':
            if(pies > bakeCostArray[1]) {
                ppc += 30;
                document.getElementById(target).remove();
            }
            break;
        case 'cupcake':
            if(pies > bakeCostArray[2]) {
                ppc += 100;
                document.getElementById(target).remove();
            }
            break;
        case 'cookie':
            if(pies > bakeCostArray[3]) {
                ppc += 300;
                document.getElementById(target).remove();
            }
            break;
        case 'delivery':
            if(pies > bakeCostArray[4]) {
                ppc += 1000;
                document.getElementById(target).remove();
            }
            break;
        case 'expand':
            if(pies > bakeCostArray[5]) {
                ppc += 2000;
                document.getElementById(target).remove();
            }
            break;
        case 'dogHelper':
            if(pies > bakeCostArray[6]) {
                ppc += 5000;
                document.getElementById(target).remove();
            }
            break;
        case 'doughnut':
            if(pies > bakeCostArray[7]) {
                ppc += 10000;
                document.getElementById(target).remove();
            }
            break;
        case 'worldDelivery':
            if(pies > bakeCostArray[8]) {
                ppc += 200000;
                document.getElementById(target).remove();
            }
            break;
        default:
            console.log('store error');
    }
}

//PIE MIDDLE CLICK//
function clickPie(event) {
    event.preventDefault();
    console.log('click works');
}