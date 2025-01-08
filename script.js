//Nalivajko Dávid
const checkType = ({autoTipus}) =>{
    if (autoTipus == "gazdaságos") return 3000
    else if(autoTipus == "családi") return 5000
    else if(autoTipus == "luxus") return 10000
}

const checkInsurance = ({extraBiztositas}) =>{
    return extraBiztositas ? 1000 : 0
}

const checkLength = ({kolcsonzesiIdo}) =>{
    return kolcsonzesiIdo >= 7 ? 0.9 : 1
}


const gzkolcsonzes1 = {   kolcsonzesiIdo: 5,   autoTipus: "gazdaságos",   extraBiztositas: true,   osszesKoltseg: 0, };
const gzkolcsonzes2 = {   kolcsonzesiIdo: 5,   autoTipus: "gazdaságos",   extraBiztositas: false,   osszesKoltseg: 0, };
const gzkolcsonzes3 = {   kolcsonzesiIdo: 10,   autoTipus: "gazdaságos",   extraBiztositas: true,   osszesKoltseg: 0, };
const gzkolcsonzes4 = {   kolcsonzesiIdo: 10,   autoTipus: "gazdaságos",   extraBiztositas: false,   osszesKoltseg: 0, };

const cskolcsonzes1 = {   kolcsonzesiIdo: 5,   autoTipus: "családi",   extraBiztositas: true,   osszesKoltseg: 0, };
const cskolcsonzes2 = {   kolcsonzesiIdo: 5,   autoTipus: "családi",   extraBiztositas: false,   osszesKoltseg: 0, };
const cskolcsonzes3 = {   kolcsonzesiIdo: 10,   autoTipus: "családi",   extraBiztositas: true,   osszesKoltseg: 0, };
const cskolcsonzes4 = {   kolcsonzesiIdo: 10,   autoTipus: "családi",   extraBiztositas: false,   osszesKoltseg: 0, };


const lxkolcsonzes1 = {   kolcsonzesiIdo: 5,   autoTipus: "luxus",   extraBiztositas: true,   osszesKoltseg: 0, };
const lxkolcsonzes2 = {   kolcsonzesiIdo: 5,   autoTipus: "luxus",   extraBiztositas: false,   osszesKoltseg: 0, };
const lxkolcsonzes3 = {   kolcsonzesiIdo: 10,   autoTipus: "luxus",   extraBiztositas: true,   osszesKoltseg: 0, };
const lxkolcsonzes4 = {   kolcsonzesiIdo: 10,   autoTipus: "luxus",   extraBiztositas: false,   osszesKoltseg: 0, };

let a = [gzkolcsonzes1, gzkolcsonzes2, gzkolcsonzes3, gzkolcsonzes4,
    cskolcsonzes1, cskolcsonzes2, cskolcsonzes3, cskolcsonzes4,
    lxkolcsonzes1, lxkolcsonzes2, lxkolcsonzes3, lxkolcsonzes4,
]

const szamitKoltseget = (obj) =>{
    const alapkoltseg  = checkType(obj) * obj.kolcsonzesiIdo
    const biztositas = checkInsurance(obj)
    const kolcsonzesiIdoSzorzo = checkLength(obj)
    const vegsoOsszeg = (alapkoltseg + biztositas * obj.kolcsonzesiIdo) * kolcsonzesiIdoSzorzo
    obj.osszesKoltseg = vegsoOsszeg
    return obj
}

const szamol = () =>{
    const napokSzama = document.getElementById("nap").value
    const tipus = document.getElementById("tipus").value
    const biztositas = document.querySelector('input[name="biztositas"]:checked').value === "true"
    const obj = {kolcsonzesiIdo: napokSzama, autoTipus: tipus, extraBiztositas: biztositas, osszesKoltseg: 0}
    const osszeg = szamitKoltseget(obj).osszesKoltseg
    document.getElementById("vegso").innerText = "Végösszeg: " + osszeg
}
//get values
// a.forEach(element =>{
//     console.log(szamitKoltseget(element).osszesKoltseg)
// })