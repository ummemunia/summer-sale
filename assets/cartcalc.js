
function getItemName(itemName) {
    const itemNameString = document.getElementById(itemName);
    const itemNameValue = itemNameString.innerText;
    return itemNameValue;
}

function setItemName(itemName, kataName) {
    const item = document.getElementById(itemName);

    const count = item.childElementCount;
    const showName = document.createElement('p');
    showName.innerHTML = `${count + 1}. ${kataName}`;
    showName.classList.add('py-2');
    item.appendChild(showName);
}

function getPrice(itemName) {
    const itemNameString = document.getElementById(itemName);
    const itemNameValue = parseFloat(itemNameString.innerText);
    return itemNameValue;
}

function getCouponName(itemName) {
    const itemNameString = document.getElementById(itemName);
    const itemNameValue = itemNameString.value;
    return itemNameValue;
}

let total = 0;
let discount = 0;
let totalPrice = 0;

document.getElementById('kata').addEventListener('click', function () {

    const kataName = getItemName('kataName');
    console.log(kataName);

    const setName = setItemName('itemList', kataName);

    const kataPrice = getPrice('kataPrice');
    console.log(kataPrice);

    total = parseFloat(total) + kataPrice;
    document.getElementById('totalPrice').innerText = total.toFixed(2) + `Tk`;
    document.getElementById('total').innerText = total.toFixed(2) + `Tk`;

    // const coupon = getCouponName('couponCode');
    // console.log(coupon);

    const couponMatch = getItemName('couponCodeMatch');
    console.log(couponMatch);

    const couponCode = getCouponName('couponCode');
    console.log(couponCode);

    if (total > 0) {
        const purchaseButtons = document.getElementById('purchase');
        purchaseButtons.removeAttribute('disabled');
    }
    else {
        return false;
    }

    if (total >= 200) {
        const codeButtons = document.getElementById('apply');
        codeButtons.removeAttribute('disabled');
        // const purchaseButtons = document.getElementById('purchase');
        // purchaseButtons.removeAttribute('disabled');

        document.getElementById('apply').addEventListener('click', function () {
            const couponCode = getCouponName('couponCode');
            console.log(couponCode);
            if (couponMatch === couponCode) {
                discount = ((total * 20) / 100);
                totalPrice = total - discount;
                document.getElementById('discount').innerText = discount.toFixed(2) + `Tk`;
                document.getElementById('total').innerText = totalPrice.toFixed(2) + `Tk`;
                console.log('match');
            }
            else {
                alert('not applicable');
            }
        })
    }
    else {
        return false;
    }


})

document.getElementById('piri').addEventListener('click', function () {

    const piriName = getItemName('piriName');
    console.log(piriName);

    const setName = setItemName('itemList', piriName);

    const piriPrice = getPrice('piriPrice');
    console.log(piriPrice);

    total = parseFloat(total) + piriPrice;
    document.getElementById('totalPrice').innerText = total.toFixed(2) + `Tk`;

    document.getElementById('total').innerText = total.toFixed(2) + `Tk`;

    // const coupon = getCouponName('couponCode');
    // console.log(coupon);

    const couponMatch = getItemName('couponCodeMatch');
    console.log(couponMatch);

    const couponCode = getCouponName('couponCode');
    console.log(couponCode);

    if (total > 0) {
        const purchaseButtons = document.getElementById('purchase');
        purchaseButtons.removeAttribute('disabled');
    }
    else {
        return false;
    }

    if (total >= 200) {
        const codeButtons = document.getElementById('apply');
        codeButtons.removeAttribute('disabled');
        // const purchaseButtons = document.getElementById('purchase');
        // purchaseButtons.removeAttribute('disabled');

        document.getElementById('apply').addEventListener('click', function () {
            const couponCode = getCouponName('couponCode');
            console.log(couponCode);
            if (couponMatch === couponCode) {
                discount = ((total * 20) / 100);
                totalPrice = total - discount;
                document.getElementById('discount').innerText = discount.toFixed(2) + `Tk`;
                document.getElementById('total').innerText = totalPrice.toFixed(2) + `Tk`;
                console.log('match');
            }
            else {
                alert('not applicable');
            }
        })
    }
    else {
        return false;
    }

})

document.getElementById('piri').addEventListener('click', function () {

    const piriName = getItemName('piriName');
    console.log(piriName);

    const setName = setItemName('itemList', piriName);

    const piriPrice = getPrice('piriPrice');
    console.log(piriPrice);

    total = parseFloat(total) + piriPrice;
    document.getElementById('totalPrice').innerText = total.toFixed(2) + `Tk`;

    document.getElementById('total').innerText = total.toFixed(2) + `Tk`;

    // const coupon = getCouponName('couponCode');
    // console.log(coupon);

    const couponMatch = getItemName('couponCodeMatch');
    console.log(couponMatch);

    const couponCode = getCouponName('couponCode');
    console.log(couponCode);

    if (total > 0) {
        const purchaseButtons = document.getElementById('purchase');
        purchaseButtons.removeAttribute('disabled');
    }
    else {
        return false;
    }

    if (total >= 200) {
        const codeButtons = document.getElementById('apply');
        codeButtons.removeAttribute('disabled');
        // const purchaseButtons = document.getElementById('purchase');
        // purchaseButtons.removeAttribute('disabled');

        document.getElementById('apply').addEventListener('click', function () {
            const couponCode = getCouponName('couponCode');
            console.log(couponCode);
            if (couponMatch === couponCode) {
                discount = ((total * 20) / 100);
                totalPrice = total - discount;
                document.getElementById('discount').innerText = discount.toFixed(2) + `Tk`;
                document.getElementById('total').innerText = totalPrice.toFixed(2) + `Tk`;
                console.log('match');
            }
            else {
                alert('not applicable');
            }
        })
    }
    else {
        return false;
    }

})

document.getElementById('cooker').addEventListener('click', function () {

    const cookerName = getItemName('cookerName');
    console.log(cookerName);

    const setName = setItemName('itemList', cookerName);

    const cookerPrice = getPrice('cookerPrice');
    console.log(cookerPrice);

    total = parseFloat(total) + cookerPrice;
    document.getElementById('totalPrice').innerText = total.toFixed(2) + `Tk`;

    document.getElementById('total').innerText = total.toFixed(2) + `Tk`;

    // const coupon = getCouponName('couponCode');
    // console.log(coupon);

    const couponMatch = getItemName('couponCodeMatch');
    console.log(couponMatch);

    const couponCode = getCouponName('couponCode');
    console.log(couponCode);

    if (total > 0) {
        const purchaseButtons = document.getElementById('purchase');
        purchaseButtons.removeAttribute('disabled');
    }
    else {
        return false;
    }

    if (total >= 200) {
        const codeButtons = document.getElementById('apply');
        codeButtons.removeAttribute('disabled');
        // const purchaseButtons = document.getElementById('purchase');
        // purchaseButtons.removeAttribute('disabled');

        document.getElementById('apply').addEventListener('click', function () {
            const couponCode = getCouponName('couponCode');
            console.log(couponCode);
            if (couponMatch === couponCode) {
                discount = ((total * 20) / 100);
                totalPrice = total - discount;
                document.getElementById('discount').innerText = discount.toFixed(2) + `Tk`;
                document.getElementById('total').innerText = totalPrice.toFixed(2) + `Tk`;
                console.log('match');
            }
            else {
                alert('not applicable');
            }
        })
    }
    else {
        return false;
    }

})

document.getElementById('cap').addEventListener('click', function () {

    const capName = getItemName('capName');
    console.log(capName);

    const setName = setItemName('itemList', capName);

    const capPrice = getPrice('capPrice');
    console.log(capPrice);

    total = parseFloat(total) + capPrice;
    document.getElementById('totalPrice').innerText = total.toFixed(2) + `Tk`;

    document.getElementById('total').innerText = total.toFixed(2) + `Tk`;

    // const coupon = getCouponName('couponCode');
    // console.log(coupon);

    const couponMatch = getItemName('couponCodeMatch');
    console.log(couponMatch);

    const couponCode = getCouponName('couponCode');
    console.log(couponCode);

    if (total > 0) {
        const purchaseButtons = document.getElementById('purchase');
        purchaseButtons.removeAttribute('disabled');
    }
    else {
        return false;
    }

    if (total >= 200) {
        const codeButtons = document.getElementById('apply');
        codeButtons.removeAttribute('disabled');
        // const purchaseButtons = document.getElementById('purchase');
        // purchaseButtons.removeAttribute('disabled');

        document.getElementById('apply').addEventListener('click', function () {
            const couponCode = getCouponName('couponCode');
            console.log(couponCode);
            if (couponMatch === couponCode) {
                discount = ((total * 20) / 100);
                totalPrice = total - discount;
                document.getElementById('discount').innerText = discount.toFixed(2) + `Tk`;
                document.getElementById('total').innerText = totalPrice.toFixed(2) + `Tk`;
                console.log('match');
            }
            else {
                alert('not applicable');
            }
        })
    }
    else {
        return false;
    }


})

document.getElementById('jersey').addEventListener('click', function () {

    const jerseyName = getItemName('jerseyName');
    console.log(jerseyName);

    const setName = setItemName('itemList', jerseyName);

    const jerseyPrice = getPrice('jerseyPrice');
    console.log(jerseyPrice);

    total = parseFloat(total) + jerseyPrice;
    document.getElementById('totalPrice').innerText = total.toFixed(2) + `Tk`;
    document.getElementById('total').innerText = total.toFixed(2) + `Tk`;

    // const coupon = getCouponName('couponCode');
    // console.log(coupon);

    const couponMatch = getItemName('couponCodeMatch');
    console.log(couponMatch);

    const couponCode = getCouponName('couponCode');
    console.log(couponCode);

    if (total > 0) {
        const purchaseButtons = document.getElementById('purchase');
        purchaseButtons.removeAttribute('disabled');
    }
    else {
        return false;
    }

    if (total >= 200) {
        const codeButtons = document.getElementById('apply');
        codeButtons.removeAttribute('disabled');
        // const purchaseButtons = document.getElementById('purchase');
        // purchaseButtons.removeAttribute('disabled');

        document.getElementById('apply').addEventListener('click', function () {
            const couponCode = getCouponName('couponCode');
            console.log(couponCode);
            if (couponMatch === couponCode) {
                discount = ((total * 20) / 100);
                totalPrice = total - discount;
                document.getElementById('discount').innerText = discount.toFixed(2) + `Tk`;
                document.getElementById('total').innerText = totalPrice.toFixed(2) + `Tk`;
                console.log('match');
            }
            else {
                alert('not applicable');
            }
        })
    }
    else {
        return false;
    }

})

document.getElementById('shoe').addEventListener('click', function () {

    const shoeName = getItemName('shoeName');
    console.log(shoeName);

    const setName = setItemName('itemList', shoeName);

    const shoePrice = getPrice('shoePrice');
    console.log(shoePrice);

    total = parseFloat(total) + shoePrice;
    document.getElementById('totalPrice').innerText = total.toFixed(2) + `Tk`;
    document.getElementById('total').innerText = total.toFixed(2) + `Tk`;

    // const coupon = getCouponName('couponCode');
    // console.log(coupon);

    const couponMatch = getItemName('couponCodeMatch');
    console.log(couponMatch);

    const couponCode = getCouponName('couponCode');
    console.log(couponCode);

    if (total > 0) {
        const purchaseButtons = document.getElementById('purchase');
        purchaseButtons.removeAttribute('disabled');
    }
    else {
        return false;
    }

    if (total >= 200) {
        const codeButtons = document.getElementById('apply');
        codeButtons.removeAttribute('disabled');
        // const purchaseButtons = document.getElementById('purchase');
        // purchaseButtons.removeAttribute('disabled');

        document.getElementById('apply').addEventListener('click', function () {
            const couponCode = getCouponName('couponCode');
            console.log(couponCode);
            if (couponMatch === couponCode) {
                discount = ((total * 20) / 100);
                totalPrice = total - discount;
                document.getElementById('discount').innerText = discount.toFixed(2) + `Tk`;
                document.getElementById('total').innerText = totalPrice.toFixed(2) + `Tk`;
                console.log('match');
            }
            else {
                alert('not applicable');
            }
        })
    }
    else {
        return false;
    }


})

document.getElementById('chair').addEventListener('click', function () {

    const chairName = getItemName('chairName');
    console.log(chairName);

    const setName = setItemName('itemList', chairName);

    const chairPrice = getPrice('chairPrice');
    console.log(chairPrice);

    total = parseFloat(total) + chairPrice;
    document.getElementById('totalPrice').innerText = total.toFixed(2) + `Tk`;
    document.getElementById('total').innerText = total.toFixed(2) + `Tk`;

    // const coupon = getCouponName('couponCode');
    // console.log(coupon);

    const couponMatch = getItemName('couponCodeMatch');
    console.log(couponMatch);

    const couponCode = getCouponName('couponCode');
    console.log(couponCode);

    if (total > 0) {
        const purchaseButtons = document.getElementById('purchase');
        purchaseButtons.removeAttribute('disabled');
    }
    else {
        return false;
    }

    if (total >= 200) {
        const codeButtons = document.getElementById('apply');
        codeButtons.removeAttribute('disabled');
        // const purchaseButtons = document.getElementById('purchase');
        // purchaseButtons.removeAttribute('disabled');

        document.getElementById('apply').addEventListener('click', function () {
            const couponCode = getCouponName('couponCode');
            console.log(couponCode);
            if (couponMatch === couponCode) {
                discount = ((total * 20) / 100);
                totalPrice = total - discount;
                document.getElementById('discount').innerText = discount.toFixed(2) + `Tk`;
                document.getElementById('total').innerText = totalPrice.toFixed(2) + `Tk`;
                console.log('match');
            }
            else {
                alert('not applicable');
            }
        })
    }
    else {
        return false;
    }


})

document.getElementById('childChair').addEventListener('click', function () {

    const childChairName = getItemName('childChairName');
    console.log(childChairName);

    const setName = setItemName('itemList', childChairName);

    const childChairPrice = getPrice('childChairPrice');
    console.log(childChairPrice);

    total = parseFloat(total) + childChairPrice;
    document.getElementById('totalPrice').innerText = total.toFixed(2) + `Tk`;
    document.getElementById('total').innerText = total.toFixed(2) + `Tk`;

    // const coupon = getCouponName('couponCode');
    // console.log(coupon);

    const couponMatch = getItemName('couponCodeMatch');
    console.log(couponMatch);

    const couponCode = getCouponName('couponCode');
    console.log(couponCode);

    if (total > 0) {
        const purchaseButtons = document.getElementById('purchase');
        purchaseButtons.removeAttribute('disabled');
    }
    else {
        return false;
    }

    if (total >= 200) {
        const codeButtons = document.getElementById('apply');
        codeButtons.removeAttribute('disabled');
        // const purchaseButtons = document.getElementById('purchase');
        // purchaseButtons.removeAttribute('disabled');

        document.getElementById('apply').addEventListener('click', function () {
            const couponCode = getCouponName('couponCode');
            console.log(couponCode);
            if (couponMatch === couponCode) {
                discount = ((total * 20) / 100);
                totalPrice = total - discount;
                document.getElementById('discount').innerText = discount.toFixed(2) + `Tk`;
                document.getElementById('total').innerText = totalPrice.toFixed(2) + `Tk`;
                console.log('match');
            }
            else {
                alert('not applicable');
            }
        })
    }
    else {
        return false;
    }


})

document.getElementById('sofa').addEventListener('click', function () {

    const sofaName = getItemName('sofaName');
    console.log(sofaName);

    const setName = setItemName('itemList', sofaName);

    const sofaPrice = getPrice('sofaPrice');
    console.log(sofaPrice);

    total = parseFloat(total) + sofaPrice;
    document.getElementById('totalPrice').innerText = total.toFixed(2) + `Tk`;

    document.getElementById('total').innerText = total.toFixed(2) + `Tk`;

    // const coupon = getCouponName('couponCode');
    // console.log(coupon);

    const couponMatch = getItemName('couponCodeMatch');
    console.log(couponMatch);

    const couponCode = getCouponName('couponCode');
    console.log(couponCode);

    if (total > 0) {
        const purchaseButtons = document.getElementById('purchase');
        purchaseButtons.removeAttribute('disabled');
    }
    else {
        return false;
    }

    if (total >= 200) {
        const codeButtons = document.getElementById('apply');
        codeButtons.removeAttribute('disabled');
        // const purchaseButtons = document.getElementById('purchase');
        // purchaseButtons.removeAttribute('disabled');

        document.getElementById('apply').addEventListener('click', function () {
            const couponCode = getCouponName('couponCode');
            console.log(couponCode);
            if (couponMatch === couponCode) {
                discount = ((total * 20) / 100);
                totalPrice = total - discount;
                document.getElementById('discount').innerText = discount.toFixed(2) + `Tk`;
                document.getElementById('total').innerText = totalPrice.toFixed(2) + `Tk`;
                console.log('match');
            }
            else {
                alert('not applicable');
            }
        })
    }
    else {
        return false;
    }

})


document.getElementById('home').addEventListener('click', function(){

    document.getElementById('totalPrice').innerText = '';
    document.getElementById('total').innerText = '';
    document.getElementById('discount').innerText = '';
    document.getElementById('itemList').innerText = '';

    const apply = document.getElementById('apply');
    apply.classList.add('disabled');

    const purchase = document.getElementById('purchase');
    purchase.setAttribute('disabled', 'true');
})





