"use strict";
exports.__esModule = true;
var md5_1 = require("./ts-md5/dist/md5");
//const jsSHA1 = require("jssha/sha1");
//import jsSHA from "jssha/dist/sha512.js";
//const {jsSHA51} = require('jssha');
//import jsSHA from "jssha";
var SHA2_1 = require("./SHA2");
//===================================
function SHAA384(swr) {
    var r;
    r = SHA2_1.SHA2_384(swr);
    return r;
}
exports.SHAA384 = SHAA384;
function gMD5(swr) {
    //var r:string=Md5,hashStr(swr);
    var myhash = md5_1.Md5.hashStr(swr);
    return myhash;
}
exports.gMD5 = gMD5;
//===================================
function superQ() {
    var q;
    //q="_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890=!@#$%&*(){}^~<>/\\-+";
    q = "_stIJQR90UVmnklAB7856uv{}opGHEF<>cdKL&*OPefSTij12YZWXab34yzwxqrghCDMN=!@#$%()^~/\\-+";
    return q;
}
//===================================
function pegaIndiceSha(ind, xsha) {
    var s;
    var siz, r;
    //xsha="_"+xsha;
    siz = xsha.length;
    r = -1;
    siz--;
    if (ind > siz) {
        ind = ind % siz;
        if (ind == 0) {
            ind = siz;
        }
        s = xsha.charAt(ind);
    }
    else {
        s = xsha.charAt(ind);
    }
    r = pegaIndiceSuperQ(s);
    return r;
}
//===================================
//Redu pega índice ximd
function getIndiceXimd(ind, ximd) {
    var s;
    var siz, r;
    // ximd="_"+ximd;
    siz = ximd.length;
    r = -1;
    siz--;
    //console.log(ximd);
    if (ind > siz) {
        ind = ind % siz;
        if (ind == 0) {
            ind = siz;
        }
        s = ximd.charAt(ind);
    }
    else {
        s = ximd.charAt(ind);
    }
    //  if (ind>60)
    // console.log("----------------->Indice/SizeXimd:"+ind+"/"+siz);
    r = pegaIndiceSuperQ(s);
    return r;
}
//===================================
function pegaLetraSuperQ(ind) {
    var q, r;
    var sizQ, i, res;
    q = superQ();
    res = 600;
    sizQ = q.length;
    sizQ--; //=82
    //console.log("Índice:"+ind+" TamanhoQ:"+siz);
    if (ind >= sizQ) {
        res = ind % sizQ;
        ind = res;
    }
    if (res == 0) {
        ind = sizQ;
    }
    for (i = 1; i <= sizQ; i++) {
        if (i == ind) {
            r = q.charAt(i);
            break;
        }
    }
    return r;
}
//==================================
function pegaIndiceSuperQ(str) {
    var q;
    var sizQ, i, r;
    q = superQ();
    r = 0;
    sizQ = q.length;
    sizQ--;
    for (i = 1; i <= sizQ; i++) {
        if (q.charAt(i) == str) {
            r = i;
        }
    }
    return r;
}
//================================
function getSize(sw) {
    var d, i, c;
    d = 0;
    i = 0;
    c = 0;
    while ((d < 1) || (c < 11000)) {
        c++;
        i++;
        if (pegaIndiceSuperQ(sw.charAt(i)) == 0) {
            d++;
        }
    }
    return c;
}
//==================================
function nSortii(sword, ximd, xsha) {
    var q, c, s, y;
    var ttt, k, i, j, sizW, t, t2, sizX, sizQ;
    q = superQ();
    //82chars
    sword = "_" + sword;
    ximd = "_" + ximd;
    sizQ = q.length;
    sizQ--;
    sizW = sword.length;
    sizW--;
    sizX = ximd.length;
    sizX--;
    ttt = 0;
    s = '';
    c = '';
    j = 0;
    t = 0;
    i = 0;
    //===========
    j = 0;
    i = 0;
    k = 0;
    for (i = 1; i <= sizX; i++) {
        for (k = 1; k <= sizQ; k++) {
            if (ximd.charAt(i) == q.charAt(k)) {
                ttt = ttt + k;
            }
        }
    }
    //==========
    j = 0;
    t = 0;
    i = 0;
    k = 0;
    for (i = 1; i <= sizW; i++) {
        t2 = 0;
        c = sword.charAt(i);
        //k=pegaIndiceSha(i,xsha);
        t = pegaIndiceSuperQ(c);
        if (c == "+") {
            t = 82;
        }
        if (c == "s") {
            t = 1;
        }
        k = pegaIndiceSha(i, xsha);
        j = getIndiceXimd(i, ximd);
        t2 = i + t + j + k;
        y = pegaLetraSuperQ(t2);
        // if (i<700)
        //console.log("Letra:"+c+" Índice:"+i+" ÍndLetra:"+t+" ÍndXimd:"+j+" Soma:"+t2+" LetraPega:"+y);
        if ((t2 % 82) == 0) {
            y = "+";
        }
        s = s + y;
    }
    s = s + "&" + ttt.toString();
    return s;
}
//==================================
function nSortiiBack(sword, ximd, xsha) {
    var c, d, q, s, w, ver;
    var k, i, j, sizW, sizX, sizQ, x, xxx, ttt, sss;
    var a, b;
    q = superQ();
    a = 0;
    sizQ = q.length;
    sizQ--; //old siz3
    sword = "_" + sword;
    sizW = sword.length;
    sizW--;
    // sizW=getSize(sword);
    ximd = "_" + ximd;
    sizX = ximd.length;
    sizX--; //old siz2
    ttt = 0;
    xxx = 0;
    sss = 0;
    s = '';
    c = '';
    d = '';
    x = 0;
    j = 0;
    i = 0;
    a = 0;
    b = 0;
    w = '';
    ver = 'Not In';
    //=========
    for (i = 1; i <= sizX; i++) {
        for (k = 1; k <= sizQ; k++) {
            if (ximd.charAt(i) == q.charAt(k)) {
                ttt = ttt + k;
            }
        }
    }
    //==========
    j = 0;
    k = 0;
    i = 0;
    if (sword.charAt(sizW - 2) == "&") {
        sss = sizW - 2;
    }
    else if (sword.charAt(sizW - 3) == "&") {
        sss = sizW - 3;
    }
    else if (sword.charAt(sizW - 4) == "&") {
        sss = sizW - 4;
    }
    else if (sword.charAt(sizW - 5) == "&") {
        sss = sizW - 5;
    }
    for (i = sss + 1; i <= sizW; i++) {
        s = sword.charAt(i);
        d = d + s;
    }
    sizW = sss - 1;
    xxx = parseInt(d);
    if (xxx == ttt) {
        ver = 'In';
        s = '';
        c = '';
        x = 0;
        j = 0;
        i = 0;
        k = 0;
        for (i = 1; i <= sizW; i++) {
            c = sword.charAt(i);
            a = pegaIndiceSuperQ(c);
            j = getIndiceXimd(i, ximd);
            k = pegaIndiceSha(i, xsha);
            b = i + j + k;
            while (a < b) {
                a = a + sizQ;
                if (a > b) {
                    break;
                }
            }
            // if (a==b)    { console.log("Índice a e b iguais:"+i); }
            if (a >= b) {
                x = a - b;
                if (x == 0) {
                    x = sizQ;
                }
                w = pegaLetraSuperQ(x);
                // if (i<=785)
                //console.log("[Índice:"+i+"] [j:"+j+"] [Letra: "+c+"] [a:"+a+"] [b:"+b+"] [x:"+x+"]");
                s = s + w;
            }
        }
    }
    if (xxx != ttt) {
        //s=xxx.toString();
        // s=d;
        s = sword;
    }
    return s;
}
//==================================
//==================================
function nSortiiBack2(sword, ximd, xsha, sizW) {
    var c, d, q, s, w, ver;
    var k, i, j, sizX, sizQ, x, xxx, ttt, sss;
    var a, b;
    q = superQ();
    a = 0;
    sizQ = q.length;
    sizQ--; //old siz3
    sword = "_" + sword;
    // sizW=sword.length; sizW--;
    // sizW=getSize(sword);
    ximd = "_" + ximd;
    sizX = ximd.length;
    sizX--; //old siz2
    ttt = 0;
    xxx = 0;
    sss = 0;
    s = '';
    c = '';
    d = '';
    x = 0;
    j = 0;
    i = 0;
    a = 0;
    b = 0;
    w = '';
    ver = 'Not In';
    //=========
    for (i = 1; i <= sizX; i++) {
        for (k = 1; k <= sizQ; k++) {
            if (ximd.charAt(i) == q.charAt(k)) {
                ttt = ttt + k;
            }
        }
    }
    //==========
    j = 0;
    k = 0;
    i = 0;
    if (sword.charAt(sizW - 2) == "&") {
        sss = sizW - 2;
    }
    else if (sword.charAt(sizW - 3) == "&") {
        sss = sizW - 3;
    }
    else if (sword.charAt(sizW - 4) == "&") {
        sss = sizW - 4;
    }
    else if (sword.charAt(sizW - 5) == "&") {
        sss = sizW - 5;
    }
    for (i = sss + 1; i <= sizW; i++) {
        s = sword.charAt(i);
        d = d + s;
    }
    sizW = sss - 1;
    xxx = parseInt(d);
    //if (xxx==ttt) {
    ver = 'In';
    s = '';
    c = '';
    x = 0;
    j = 0;
    i = 0;
    k = 0;
    for (i = 1; i <= sizW; i++) {
        c = sword.charAt(i);
        a = pegaIndiceSuperQ(c);
        j = getIndiceXimd(i, ximd);
        k = pegaIndiceSha(i, xsha);
        b = i + j + k;
        while (a < b) {
            a = a + sizQ;
            if (a > b) {
                break;
            }
        }
        // if (a==b)    { console.log("Índice a e b iguais:"+i); }
        if (a >= b) {
            x = a - b;
            if (x == 0) {
                x = sizQ;
            }
            w = pegaLetraSuperQ(x);
            // if (i<=785)
            //console.log("[Índice:"+i+"] [j:"+j+"] [Letra: "+c+"] [a:"+a+"] [b:"+b+"] [x:"+x+"]");
            s = s + w;
        }
    }
    //}
    if (xxx != ttt) {
        //s=xxx.toString();
        // s=d;
        s = sword;
    }
    // return sizW.toString();
    return s;
}
//==================================
//==================================
//==================================
function inverte(str) {
    var i;
    var s, c;
    c = "";
    s = "";
    i = (str.length) + 1;
    while (i > 0) {
        i--;
        c = str.charAt(i);
        s = s + c;
    }
    return s;
}
//==================================
function baralha1(str) {
    var tam, i;
    var d, c, s;
    tam = str.length;
    s = '';
    c = '';
    s = '';
    for (i = 0; i <= tam; i++) {
        if ((i % 2) != 0) {
            c = str.charAt(i);
            d = str.charAt(i - 1);
            s = s + c;
            s = s + d;
        }
    }
    if ((tam % 2) != 0) {
        s = s + (str.charAt(tam));
    }
    return s;
}
//==================================
//==================================
function revertePart(swor, qtde) {
    var siz, i, j;
    var strPart, strTotal;
    siz = swor.length;
    siz--;
    strTotal = "";
    for (i = 0; i <= siz; i++) {
        strPart = "";
        if (((i + 1) % qtde) == 0) {
            for ((j = (i - (qtde - 1))); j <= i; j++) {
                strPart = strPart + swor.charAt(j);
            }
            strTotal = strTotal + inverte(strPart);
        }
    }
    strPart = "";
    if (((siz + 1) % qtde) != 0) {
        j = ((siz + 1) % (qtde));
        j--;
        if (j < 0) {
            j = 0;
        }
        console.log("j:" + j);
        for (i = (siz - j); i <= siz; i++) {
            //console.log("i:"+i);
            strPart = strPart + swor.charAt(i);
        }
        strTotal = strTotal + strPart;
    }
    return strTotal;
}
//==================================
function sortinger(str, imd, xsha) {
    var simd;
    var sword;
    simd = imd;
    sword = str;
    simd = inverte(imd);
    sword = inverte(sword);
    sword = revertePart(sword, 4);
    sword = nSortii(sword, simd, xsha);
    //sword=Base64.encode(sword);
    return sword;
}
exports.sortinger = sortinger;
function sortingerBack(str, imd, xsha) {
    var simd;
    var sword;
    simd = imd;
    sword = str;
    //sword=Base64.decode(str);
    // xsha=
    simd = inverte(imd);
    sword = nSortiiBack(sword, simd, xsha);
    sword = revertePart(sword, 4);
    sword = inverte(sword);
    //sword=Base64.decode(sword);
    return sword;
}
exports.sortingerBack = sortingerBack;
function sortingerBack2(str, imd, xsha, sizW) {
    var simd;
    var sword;
    simd = imd;
    sword = str;
    //sword=Base64.decode(str);
    // xsha=
    simd = inverte(imd);
    sword = nSortiiBack2(sword, simd, xsha, sizW);
    sword = revertePart(sword, 4);
    sword = inverte(sword);
    //sword=Base64.decode(sword);
    return sword;
}
exports.sortingerBack2 = sortingerBack2;
//==================
function sobreSuperQ() {
    var i; //61
    var q = superQ();
    console.log("Tamanho: " + q.length);
    console.log("Posições Finais");
    for (i = 60; i <= q.length; i++) {
        console.log("Pos:" + i + " ->" + q.charAt(i));
    }
}
//==================
/*
function getSha384(txty:string){
    var s:string;
    s='';
    const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
shaObj.update(txty);

const hash = shaObj.getHash("HEX");
s=hash;
return s;
}
*/
///*
/*
var mystr="TSFxUThCUE9FQE9SQ1I2c1owbjljSiRnVTlZbjhMRDVhWWdlTH0jeU0hRGghVjd1blluTmNpcz4lVyFIOWx2UUprYmhsbmMzNGwoWlckRXBwXGlwUHBJPVk5N3N0a21lSDNaZ1hZZElXd1olYWRkcVNzYXAxZytwVHshREdzR34oOG17Q3cwcmJqail7XkFSSkZkZWZ+TUFXbGlWZGMkTGlAb2lOVXJta0M9Q0xzXiNheVRvKl5FXk9DMndKR0t+UUJMUkF1Q1V3VWZoLzBPPTJEbnZ2M20mR1defXVHMDwoND1+L0N2WSVcdiNUI2YqQC1+UE5QLSZrVFpMbjRaPnFmT1JaQnZhOFJNSFVnPkBvdXYxL1hSeklAY1Nce3oleDx0SVZlSVZHVmM9ZFNYMEFrTExLe3k0PDV0eUI9dXJ2Y214b1w+OWhGRiVnSX1UYyVQR0QobV4tJWVmN2FnMXpoNnVHTWJPNVFue0g+Wk12eXIkeldUI0tsRUlmQDY8OT1MMitSWXkjXk48KFBcUDhLPVlhbyN9VWZjI01wIypOTnVrdVN5MyhkTVFIdHNBN2NQMy09I2oyUVE5ODBvWEFuKC9eYiRaTXdJTnBMTWQxdytibSZiQSh5I0JmVzVXQD0xR2NWbyEkdn5wRyhZTCtRa3NXIUp9Zz0qNG8mXms8YnVvXmNCWVdraXMpU2tne1lcPWtyWSNVM0U5R3tzQUlaWXdEJTRCR084THMhWH14XE1yZk9UKmJ+Sy1PViN+OSlhbmpeWjlQdFEzR2srMHp9WFcpQ3ZQOUdkfTRXJl5pKXEkJHthSyNDcVw2QSEmdmt0cDRUZ0l3PSReZzVjM0I4RmV+WnVjUXU0KXVXUFAjVm9CWD5XRDZhQSF+SGt2dEEvdWFzTz4rdzg9TitnTXpOXkwtRkZFR3AqRlUxQGleQVptJDBufWVmeGF4L0RPMUskdnAyJXIvYjZcPCVlRyheQUlYR3Q0JntVKyZZcmZUTDwzdXlyMGN3PmlEL2ZmPHR5JFR1bEpvemNMQ1EhIXYtSWI4bHpWdkIwKERzJFJyZkhwI3g0cDA2LUhuSmw1IUtcSlZUeUt3KihIMjE0KC8xdVZkeDRAKkZZL2xGKWFtZXcmYmlKQi8tcDVjdHF6eVYhPGNqJXFkIyV7ajRDJVBBJU1Fb05AfkdWUn5VK2FCIV5iUkYpOXJOXHFYdm1JMHpqbz1LOWRPYml1RHhjdzYlTzgtKi9mY3VCbyElUDJmfldKTyY8b14qKTlZNFIqRGYpNGN0aCV6K3RycF50NGpWRXZXck1kaHklWEchemh9QjlrfitPKXNvbWNhdnoqTTdteXZZQnJ3KTN9M2ZKOSVlQjB+XmshaFR0Pj5qQGpcZUx7Yz04bTZaZ0ZHbzxCb3FnVEllKF5DQWVMaWt4L0lmMDZYUHFPXnp1eH1jaVZWRGFjJmpJUk5mPCs0YllEQigraks1M355QS0qNEFDTFNTYXFDSzV5VDF0WSRZbzJHIT1TXkF3M1I1dTJjVDMzOG5RTyUjVlJGelIrUmpqVW5lQ0M2PHQ0WE0zTz1DWXpCTSh3emstQ1RwPGRLVXclMT1DUDgmbjlPQ2dscDBWVUo4ZEY0IWVFeitPdTFWYlAveWk2Zm5CJU8wY2FVRXFEdHFqfSNDaiV6ZHttbEwjdkFYc2RQR0w9SmsqKCh0aktGWj1tWmgvL3R2RzJiVDdWendOcD4hcmttWkNKdE89eUR+MFVzKjNvTz1heXQ1e3pZdl5We1c1QWYrKjlOeDQzPms8ZjNvUTIpTU57Z3M1eV4hK31CbG9aJjExNjY=";

//var mystr=Base64.encode("abcdefghijklmnopqrstuvwx");
//var mystr="Olá a todos, esse aqui é o meu projeto, tenham uma boa noite!";
//console.log("Teste GetIndiceXimd: "+getIndiceXimd(64,"_ae05df466d9affa51d4651e9dedca1d1"));
//console.log("========String==========");
//console.log(mystr);
mystr=Base64.decode(mystr);
console.log("=========My Hash=========");
var myhash:string=Md5.hashStr("c019a83600b6bcc935897b4346f759fa3a66938c765d786ada5dc3cc988816c878b2b94dea1df89c76241a4ea395149fb2629f1c524ac033f78f0b37db54b35b");

//console.log(Base64.decode(mystr));
console.log(myhash);
console.log("========My Hash 2==========");
var myhash2:string=SHA2_384("c019a83600b6bcc935897b4346f759fa3a66938c765d786ada5dc3cc988816c878b2b94dea1df89c76241a4ea395149fb2629f1c524ac033f78f0b37db54b35b");
console.log(myhash2);


//console.log("=======nSortii===========");
//var abc:string=sortinger(mystr,myhash,myhash2);
//console.log("-->"+abc);
///*
console.log("=======nSortiiBack========");
var cde:string=sortingerBack(mystr,myhash,myhash2);
console.log("-->"+cde);
console.log("-->"+Base64.decode(cde));
if (cde==mystr) {
    console.log("Success!");
}
/*console.log("=======Reverse String/number===========");
var numero:number=4;
var reverso1=revertePart(mystr,numero);
console.log(reverso1);
console.log("=======Reverse String/number BACK===========");
var reverso2=revertePart(reverso1,numero);
console.log(reverso2);
if (reverso2==mystr) {
    console.log("Success!");
}
*/
//*/
//var mystr= Base64.encode('Agradecemos aos seguintes artistas talentosos por contribuírem com ilustrações originais para esta publicação');
/*
var abc:string=sortinger(mystr,myhash);
var abc:string=neoSortez(mystr,myhash);

console.log("-->"+myhash);
console.log("-->"+mystr);
console.log("-------------");
console.log("-->"+abc);

//console.log("Teste Pega LetraSuperQ 162: "+pegaLetraSuperQ(162));

///var df=sortingerBack(abc,myhash);
var df=neoSortezBack(abc,myhash);
console.log("-->"+Base64.decode(df));
console.log("-->"+df);

*/
//End...
