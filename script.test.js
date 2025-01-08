import { vitest } from "vitest";
import {expect,test} from "vitest";
import { szamitKoltseget } from "script.js";

//Nalivajko Dávid

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



test("gazdaságos, van biztosítás, 5 nap", () =>{
    const result = szamitKoltseget(gzkolcsonzes1)
    expect(result.osszesKoltseg).toBe(20000)
})

test("gazdaságos, nincs biztosítás, 5 nap", () =>{
    const result = szamitKoltseget(gzkolcsonzes2)
    expect(result.osszesKoltseg).toBe(15000)
})

test("gazdaságos, van biztosítás, 10 nap", () =>{
    const result = szamitKoltseget(gzkolcsonzes3)
    expect(result.osszesKoltseg).toBe(36000)
})

test("gazdaságos, nincs biztosítás, 10 nap", () =>{
    const result = szamitKoltseget(gzkolcsonzes4)
    expect(result.osszesKoltseg).toBe(27000)
})

/////////

test("családi, van biztosítás, 5 nap", () =>{
    const result = szamitKoltseget(cskolcsonzes1)
    expect(result.osszesKoltseg).toBe(30000)
})

test("családi, nincs biztosítás, 5 nap", () =>{
    const result = szamitKoltseget(cskolcsonzes2)
    expect(result.osszesKoltseg).toBe(25000)
})

test("családi, van biztosítás, 10 nap", () =>{
    const result = szamitKoltseget(cskolcsonzes3)
    expect(result.osszesKoltseg).toBe(54000)
})

test("családi, nincs biztosítás, 10 nap", () =>{
    const result = szamitKoltseget(cskolcsonzes4)
    expect(result.osszesKoltseg).toBe(45000)
})

///////

test("luxus, van biztosítás, 5 nap", () =>{
    const result = szamitKoltseget(lxkolcsonzes1)
    expect(result.osszesKoltseg).toBe(55000)
})

test("luxus, nincs biztosítás, 5 nap", () =>{
    const result = szamitKoltseget(lxkolcsonzes2)
    expect(result.osszesKoltseg).toBe(50000)
})

test("luxus, van biztosítás, 10 nap", () =>{
    const result = szamitKoltseget(lxkolcsonzes3)
    expect(result.osszesKoltseg).toBe(99000)
})

test("luxus, nincs biztosítás, 10 nap", () =>{
    const result = szamitKoltseget(lxkolcsonzes4)
    expect(result.osszesKoltseg).toBe(90000)
})
