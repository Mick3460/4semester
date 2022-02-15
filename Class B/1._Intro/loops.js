// no for loops in javascript.
// It's errorprone because of int i indexing
// overly verbose
// for loops arent functional
// with the right loop methods, we can achieved immutable data (y)

const smartPhones = [
    {brand: "Samsung", price: 4500},
    {brand: "Iphone", price: 7200},
    {brand: "Sony Experia", price: 3800}
];

// CODE SMELL,    SIDE EFFECT COMPUTER SCIENCE

//subtract 500 from each phone, bcuz of $ale
/*
LAD VÆRE AT GØRE DETTE:         const array = []
                                 .... kode som pusher til array
    Use forEach if you just need to iterate
    Use map when you need immutable data structures
*/
const discountedPhones = smartPhones.map(smartPhone => {
    smartPhone.price -= 500
    return smartPhone
});
//console.log(discountedPhones);


//remove phones above 4000
const cheapPhones = smartPhones.filter(phone => phone.price <= 4000)
//console.log(cheapPhones);


