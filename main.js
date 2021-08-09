let pies = 0;
let pps = 0;
let ppc = 1;
let clicks = 0;

let bakeCostArray = [100, 2000, 25000, 300000, 1200000, 4000000, 10000000, 50000000, 100000000];
let bakeItemArray = ['strawberry', 'raspberry', 'apple', 'banana', 'blueberry', 'grape', 'cherry', 'mango', 'chocolate'];
let storeCostArray = [2000, 10000, 100000, 1000000, 50000000, 350000000, 5000000000, 35000000000, 9999999999999];
let storeItemArray = ['ingredients', 'catHelper', 'cupcake', 'cookie', 'delivery', 'expand', 'dogHelper', 'doughnut', 'worldDelivery'];
let buyEvent = document.querySelectorAll('.pieType');
let storeEvent = document.querySelectorAll('.storeItem');
let clickMap = document.getElementById('map');

buyEvent.forEach(buy => buy.addEventListener('mouseup', buyPies));
storeEvent.forEach(item => item.addEventListener('mouseup', buyStore))
clickMap.addEventListener('mouseup', clickPieUp);
clickMap.addEventListener('mousedown', clickPieDown);
window.addEventListener('load', customCSS);

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
            if(pies >= bakeCostArray[0]) {
                countPriceUp(bakeCostArray[0], 10 , 0);
                break;
            }
        case 'strawberryCost':
            if(pies >= bakeCostArray[0]) {
                countPriceUp(bakeCostArray[0], 10, 0);
                break;
            }
        case 'strawberryImg':
            if(pies >= bakeCostArray[0]) {
                countPriceUp(bakeCostArray[0], 10, 0);
                break;
            }
        case 'strawberryP':
            if(pies >= bakeCostArray[0]) {
                countPriceUp(bakeCostArray[0], 10, 0);
                break;
            }
        case 'raspberry':
            if(pies >= bakeCostArray[1]) {
                countPriceUp(bakeCostArray[1], 150, 1);
                break;
            }
        case 'raspberryCost':
            if(pies >= bakeCostArray[1]) {
                countPriceUp(bakeCostArray[1], 150, 1);
                break;
            }
        case 'raspberryImg':
            if(pies >= bakeCostArray[1]) {
                countPriceUp(bakeCostArray[1], 150, 1);
                break;
            }
        case 'raspberryP':
            if(pies >= bakeCostArray[1]) {
                countPriceUp(bakeCostArray[1], 150, 1);
                break;
            }
        case 'apple':
            if(pies >= bakeCostArray[2]) {
                countPriceUp(bakeCostArray[2], 400, 2);
                break;
            }
        case 'appleCost':
            if(pies >= bakeCostArray[2]) {
                countPriceUp(bakeCostArray[2], 400, 2);
                break;
            }
        case 'appleImg':
            if(pies >= bakeCostArray[2]) {
                countPriceUp(bakeCostArray[2], 400, 2);
                break;
            }
        case 'appleP':
            if(pies >= bakeCostArray[2]) {
                countPriceUp(bakeCostArray[2], 400, 2);
                break;
            }
        case 'banana':
            if(pies >= bakeCostArray[3]) {
                countPriceUp(bakeCostArray[3], 1390, 3);
                break;
            }
        case 'bananaCost':
            if(pies >= bakeCostArray[3]) {
                countPriceUp(bakeCostArray[3], 1390, 3);
                break;
            }
        case 'bananaImg':
            if(pies >= bakeCostArray[3]) {
                countPriceUp(bakeCostArray[3], 1390, 3);
                break;
            }
        case 'bananaP':
            if(pies >= bakeCostArray[3]) {
                countPriceUp(bakeCostArray[3], 1390, 3);
                break;
            }
        case 'blueberry':
            if(pies >= bakeCostArray[4]) {
                countPriceUp(bakeCostArray[4], 2599, 4);
                break;
            }
        case 'blueberryCost':
            if(pies >= bakeCostArray[4]) {
                countPriceUp(bakeCostArray[4], 2599, 4);
                break;
            }
        case 'blueberryImg':
            if(pies >= bakeCostArray[4]) {
                countPriceUp(bakeCostArray[4], 2599, 4);
                break;
            }
        case 'blueberryP':
            if(pies >= bakeCostArray[4]) {
                countPriceUp(bakeCostArray[4], 2599, 4);
                break;
            }
        case 'grape':
            if(pies >= bakeCostArray[5]) {
                countPriceUp(bakeCostArray[5], 10000, 5);
                break;
            }
        case 'grapeCost':
            if(pies >= bakeCostArray[5]) {
                countPriceUp(bakeCostArray[5], 10000, 5);
                break;
            }
        case 'grapeImg':
            if(pies >= bakeCostArray[5]) {
                countPriceUp(bakeCostArray[5], 10000, 5);
                break;
            }
        case 'grapeP':
            if(pies >= bakeCostArray[5]) {
                countPriceUp(bakeCostArray[5], 10000, 5);
                break;
            }
        case 'cherry':
            if(pies >= bakeCostArray[6]) {
                countPriceUp(bakeCostArray[6], 25000, 6);
                break;
            }
        case 'cherryCost':
            if(pies >= bakeCostArray[6]) {
                countPriceUp(bakeCostArray[6], 25000, 6);
                break;
            }
        case 'cherryImg':
            if(pies >= bakeCostArray[6]) {
                countPriceUp(bakeCostArray[6], 25000, 6);
                break;
            }
        case 'cherryP':
            if(pies >= bakeCostArray[6]) {
                countPriceUp(bakeCostArray[6], 25000, 6);
                break;
            }
        case 'mango':
            if(pies >= bakeCostArray[7]) {
                countPriceUp(bakeCostArray[7], 60000, 7);
                break;
            }
        case 'mangoCost':
            if(pies >= bakeCostArray[7]) {
                countPriceUp(bakeCostArray[7], 60000, 7);
                break;
            }
        case 'mangoImg':
            if(pies >= bakeCostArray[7]) {
                countPriceUp(bakeCostArray[7], 60000, 7);
                break;
            }
        case 'mangoP':
            if(pies >= bakeCostArray[7]) {
                countPriceUp(bakeCostArray[7], 60000, 7);
                break;
            }
        case 'chocolate':
            if(pies > bakeCostArray[8]) {
                countPriceUp(bakeCostArray[8], 200000, 8);
                break;
            }
        case 'chocolateCost':
            if(pies >= bakeCostArray[8]) {
                countPriceUp(bakeCostArray[8], 200000, 8);
                break;
            }
        case 'chocolateImg':
            if(pies >= bakeCostArray[8]) {
                countPriceUp(bakeCostArray[8], 200000, 8);
                break;
            }
        case 'chocolateP':
            if(pies >= bakeCostArray[8]) {
                countPriceUp(bakeCostArray[8], 200000, 8);
                break;
            }
        default:
            console.log('bake error');
    }
    
}

function countPriceUp(taste, addPies ,i) {
    pps += addPies;
    pies = pies - taste;
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
            if(pies >= storeCostArray[0]) {
                ppc += 9;
                pies = pies - storeCostArray[0];
                document.getElementById(target).style.display = 'none';
                document.getElementById('addDiv').style.height = '100px';
            }
            break;
        case 'catHelper':
            if(pies >= storeCostArray[1]) {
                ppc += 100;
                pies = pies - storeCostArray[1];
                document.getElementById(target).style.display = 'none';
                document.getElementById('addDiv').style.height = '200px';
            }
            break;
        case 'cupcake':
            if(pies >= storeCostArray[2]) {
                ppc += 500;
                pies = pies - storeCostArray[2];
                document.getElementById(target).style.display = 'none';
                document.getElementById('addDiv').style.height = '300px';
            }
            break;
        case 'cookie':
            if(pies >= storeCostArray[3]) {
                ppc += 2000;
                pies = pies - storeCostArray[3];
                document.getElementById(target).style.display = 'none';
                document.getElementById('addDiv').style.height = '400px';
            }
            break;
        case 'delivery':
            if(pies >= storeCostArray[4]) {
                ppc += 6000;
                pies = pies - storeCostArray[4];
                document.getElementById(target).style.display = 'none';
                document.getElementById('addDiv').style.height = '500px';
            }
            break;
        case 'expand':
            if(pies >= storeCostArray[5]) {
                ppc += 10000;
                pies = pies - storeCostArray[5];
                document.getElementById(target).style.display = 'none';
                document.getElementById('addDiv').style.height = '600px';
            }
            break;
        case 'dogHelper':
            if(pies >= storeCostArray[6]) {
                ppc += 16000;
                pies = pies - storeCostArray[6];
                document.getElementById(target).style.display = 'none';
                document.getElementById('addDiv').style.height = '200px';
            }
            break;
        case 'doughnut':
            if(pies >= storeCostArray[7]) {
                ppc += 50000;
                pies = pies - storeCostArray[7];
                document.getElementById(target).style.display = 'none';
                document.getElementById('addDiv').style.height = '800px';
            }
            break;
        case 'worldDelivery':
            if(pies >= storeCostArray[8]) {
                ppc += 200000;
                pies = pies - storeCostArray[8];
                document.getElementById(target).style.display = 'none';
                document.getElementById('addDiv').style.height = '900px';
            }
            break;
        default:
            console.log('store error');
    }
}

//PIE MIDDLE CLICK//

function clickPieUp() {
    pies += ppc;
    document.getElementById('pieCounter').innerHTML = pies;
    clicks++;
    if(clicks === 99) {
        start();
    }
}

//KEEP EVERYTHING UPDATED//

function start() {
    var startPies = setInterval(piesPerSecond, 1000);
    var checkSites = setInterval(checkSite, 100);
}

function piesPerSecond() {
    pies += pps;
}

function checkSite() {
    document.getElementById('pps').innerHTML = pps;
    document.getElementById('ppc').innerHTML = ppc + ' Pies Per Click';
    document.getElementById('pieCounter').innerHTML = pies;
    changeBakeColor();
    changeStoreColor();
}

//COLOR CHANGES//

function changeBakeColor() {
    for(let i = 0; i < bakeItemArray.length; i++) {
        let id = bakeItemArray[i];        
        if(pies >= bakeCostArray[i]) {
            switch(id) {
                case 'strawberry':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'raspberry':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'apple':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'banana':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'blueberry':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'grape':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'cherry':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'mango':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'chocolate':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                default:
                    console.log('bake color change failed');
                    break;
            }
        } else if(pies < bakeCostArray[i]) {
            document.getElementById(id).style.color = '#00000080';
            document.getElementById(id).style.border = '2px solid #00000080';
            document.getElementById(id).style.cursor = 'default';
        }
    }
    
}

function changeStoreColor() {
    for(let i = 0; i < storeItemArray.length; i++) {
        let id = storeItemArray[i];        
        if(pies >= storeCostArray[i]) {
            switch(id) {
                case 'ingredients':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'catHelper':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'cupcake':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'cookie':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'delivery':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'expand':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'dogHelper':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'doughnut':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case 'worldDelivery':
                    document.getElementById(id).style.color = '#1b1308';
                    document.getElementById(id).style.border = '2px solid #1b1308';
                    document.getElementById(id).style.cursor = 'pointer';
                    break;
                case null:
                    break;
                default:
                    console.log('store color change failed');
                    break;
            }
        } else if(pies < storeCostArray[i]) {
            document.getElementById(id).style.color = '#00000080';
            document.getElementById(id).style.border = '2px solid #00000080';
            document.getElementById(id).style.cursor = 'default';
        }
    }
    
}

//PIE ANIMATION//

let i = null;
function clickPieDown() {
    let pie = document.getElementById('pieImg');
    let width = 480;
    clearInterval(i);
    i = setInterval(downAnim, 10);
    function downAnim() {
        if(width === 500) {
            clearInterval(i);
        } else {
            width++;
            pie.style.width = width + 'px';
            pie.style.width = width + 'px';
        }
    }
}

//CSS CHANGES//
function customCSS() {
    let pie = document.getElementById('pieImg');
    pie.style.position = 'absolute';
    pie.style.left = '50%';
    pie.style.transform = 'translate(-50%, 0)';
}