let pieCounter = 0;
let pps = 0;
let ppc = 0;

let costArray = [100, 1000, 25000, 300000, 1200000, 4000000, 10000000, 50000000, 100000000];
let buyEvent = document.querySelectorAll('.pieType');
buyEvent.forEach(buy => buy.addEventListener('click', buyPies));
//if eTarget == target.parent.id, how??
function buyPies(event) {
    let eTarget = event.target;
    let target = '';
    if(eTarget === document.getElementById('strawberry') || document.getElementById('strawberryCost')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('raspberry') || document.getElementById('raspberryCost')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('apple') || document.getElementById('appleCost')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('banana') || document.getElementById('bananaCost')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('blueberry') || document.getElementById('blueberryCost')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('grape') || document.getElementById('grapeCost')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('cherry') || document.getElementById('cherryCost')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('mango') || document.getElementById('mangoCost')) {  
        target = eTarget.getAttribute('id');
    } else if(eTarget === document.getElementById('chocolate') || document.getElementById('chocolateCost')) {  
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
            countPriceUp(costArray[0], 0);
            break;
        case 'strawberryCost':
            countPriceUp(costArray[0], 0);
            break;
        case 'raspberry':
            countPriceUp(costArray[1], 1);
            break;
        case 'raspberryCost':
            countPriceUp(costArray[1], 1);
            break;
        case 'apple':
            countPriceUp(costArray[2], 2);
            break;
        case 'appleCost':
            countPriceUp(costArray[2], 2);
            break;
        case 'banana':
            countPriceUp(costArray[3], 3);
            break;
        case 'bananaCost':
            countPriceUp(costArray[3], 3);
            break;
        case 'blueberry':
            countPriceUp(costArray[4], 4);
            break;
        case 'blueberryCost':
            countPriceUp(costArray[4], 4);
            break;
        case 'grape':
            countPriceUp(costArray[5], 5);
            break;
        case 'grapeCost':
            countPriceUp(costArray[5], 5);
            break;
        case 'cherry':
            countPriceUp(costArray[6], 6);
            break;
        case 'cherryCost':
            countPriceUp(costArray[6], 6);
            break;
        case 'mango':
            countPriceUp(costArray[7], 7);
            break;
        case 'mangoCost':
            countPriceUp(costArray[7], 7);
            break;
        case 'chocolate':
            countPriceUp(costArray[8], 8);
            break;
        case 'chocolateCost':
            countPriceUp(costArray[8], 8);
            break;
        default:
            console.log('taste error');
    }
    
}

function countPriceUp(taste, i) {
    pieCounter += taste;
    pps += taste;
    taste = taste / 0.6;
    taste = parseInt(taste);
    Math.floor(taste);
    costArray[i] = taste;
    console.log(costArray);
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