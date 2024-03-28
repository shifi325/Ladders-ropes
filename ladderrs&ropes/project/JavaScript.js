//זריקת קוביה
var cube = 0;
var flagA1;//מתשנה לשמירת הl ocalstorage של התור
function startNew() {//פונקצית פתיחה מציגה את כפתור בחירת רמת קושי
    document.getElementById("chooseGame").style.display = "none";
    document.getElementById("level").style.display = "grid";
    document.getElementById("winLose").style.display = "none";
    style();
}
function check1() {//הפונקציה בודקת אם יש משחק בזכרון על מנת להציג כפתור המשך משחק
    if (localStorage.l2 || localStorage.l3 || localStorage.t2 || localStorage.t3 ) {
        document.getElementById("prev").style.display = "inline";
    }
    else
        document.getElementById("prev").style.display = "none";
}
function instruction1()//כפתור פתיחת דיב הוראות
{
    document.getElementById("instruction").style.display = "grid";

}
function ask2() {//שואל אם בטוח רוצה להחליף סוג משחק
    document.getElementById("ask1").style.display = "grid";
    document.getElementById("mmenu").style.display = "none";
}
function no1() {//במידה והתחרט ולא רוצה לשנות
    document.getElementById("ask1").style.display = "none";
}
function change() {//שינוי סוג משחק בתפריט
    document.getElementById("ask1").style.display = "none";
    if (flag) {
        for (var k = 47; k <= 100; k++) {//לולאה ליצירת רקע הלוח על הדיבים
            document.getElementById('i' + k).setAttribute('src', "pictures/" + k + ".png");
        }
        for (var a = 1; a <= 46; a++) {
            document.getElementById('i' + a).setAttribute('src', "pictures/" + a + ".jpg");

        }
        flag = 0;
        localStorage.setItem("flag", 0);
    }
    else {
        for (var k = 47; k <= 100; k++) {//לולאה ליצירת רקע הלוח על הדיבים
            document.getElementById('i' + k).setAttribute('src', "pictures/easy/e" + k + ".png");
        }
        for (var a = 1; a <= 46; a++) {
            document.getElementById('i' + a).setAttribute('src', "pictures/easy/e" + a + ".jpg");

        }
        flag = 1;
        localStorage.setItem("flag", 1);
    }
    restart();
   
}

function continue1() {//פותח דף משחק 
    document.getElementById("instruction").style.display = "none";
    document.getElementById("mmenu").style.display = "none";
}
function back1(elem) {
    window.location.assign(elem.dataset.link);
}
function go2(elem) {
    window.location.assign(elem.dataset.link);
}
function conGame() {//במידה והמשתמש בחר להמשיך מהמקום שהפסיק
    document.getElementById("buttonE").style.display = "none";
    document.getElementById("chooseGame").style.display = "none";
    document.getElementById("la1").innerText = " שחקן 1: " + localStorage.getItem("name");
    document.getElementById("la2").innerText = "שחקן 2: המחשב שלך";
    document.getElementById("la3").innerText = "אנא לחץ על הקוביה על מנת להתחיל את המשחק";
    document.getElementById('audio').load();
    document.getElementById('audio').play();
    able = 1;
    //מיקום חייל השחקן
    document.getElementById('solider1').style.top = localStorage.getItem("t2") + "vh";
    document.getElementById('solider1').style.left = localStorage.getItem("l2") + "vw";
    l1 = document.getElementById('solider1').style.left;
    t1 = document.getElementById('solider1').style.top;


    //מיקום חייל המחשב
    document.getElementById('solider2').style.top = localStorage.getItem("t3") + "vh";
    document.getElementById('solider2').style.left = localStorage.getItem("l3") + "vw";
    l12 = document.getElementById('solider2').style.left;
    t12 = document.getElementById('solider2').style.top;
    l2 = Number(localStorage.getItem("l2"));
    t2 = Number(localStorage.getItem("t2"));
    if (l2 < 56 && (t2 == 92 ||//בדיקה איזו תמונה להציג לשחקן, לכיוון שמאל או ימין
        (t2 > 71 && t2 < 73) ||
        (t2 > 51 && t2 < 53) ||
        (t2 > 31 && t2 < 33) ||
        (t2 > 10.7 && t2 < 12))) {
        j[0].src = "pictures/right_1.png";
        j[1].src = "pictures/right_2.png";
    }
    else {
        j[0].src = "pictures/left_1.png";
        j[1].src = "pictures/left_2.png";
    }
    l3 = Number(localStorage.getItem("l3"));
    t3 = Number(localStorage.getItem("t3"));
    //בדיקה איזו תמונה להציג למחשב, לכיוון שמאל או ימין
    if (l3 < 56 && (t3 == 92 || (t3 > 71 && t3 < 73) || (t3 > 51 && t3 < 53) || (t3 > 31 && t3 < 33) || (t3 > 10.7 && t3 < 12))) {

        z[0].src = "pictures/rightA_1.png";
        z[1].src = "pictures/rightA_2.png";
    }
    else {
        z[0].src = "pictures/leftA_1.png";
        z[1].src = "pictures/leftA_2.png";
    }
    var flag1 = Number(localStorage.getItem("flag"));//משתנה על מנת לדעת אם זה לוח מהיר או רגיל
    if (flag1) {
        startE();
    }
    else {
        start();
    }
    flagA1 = Number(localStorage.getItem("flagA"));//משתנה לדעת תור מי
    if (flagA1 == 1) {
        compSteps();
    }
    else {
        document.getElementById("la3").innerText = "המחשב סיים את תורו, אנא הטל את הקוביה";
        go1 = 1;
    }
    numThrow = 1;
   

}
var count = 101;
var numThrow;//מספר זריקות הקוביה מתחילת המשחק
var flag;
function start() {// יצירת המטריצה סוג: רגיל
    flag = 0;
    localStorage.setItem("flag", 0);
    document.getElementById("level").style.display = "none";
    document.getElementById("warrp").style.display = "grid";
    document.getElementById("solider1").style.display = "grid";
    document.getElementById("solider2").style.display = "grid";
    document.getElementById("throw").style.display = "grid";

    numThrow = 0;
    for (let i = 1; i <= 10; i++)//לולאה ליצירת דיבים ללוח
    {
        if (i % 2 == 1)
            for (let a = 1; a <= 10; a++)
            {
                count--;
                document.getElementById("d1").innerHTML += "<div id='" + count + "'></div>";
            }
        else {
            for (let k = 10; k > 0; k--) {
                document.getElementById("d1").innerHTML += "<div id='" + ((Number)(count - k)) + "'></div>";

            }
            count =count- 10;
        }
    }
    for (var k = 47; k <= 100; k++) {//לולאה ליצירת רקע הלוח על הדיבים
        var oImg = document.createElement("img");
        oImg.setAttribute('class', 'back');
        oImg.setAttribute('id', 'i' + k);
        oImg.setAttribute('src', "pictures/" + k + ".png");
        document.getElementById(k).appendChild(oImg);

    }
    for (var a = 1; a <= 46; a++) {
        var oImg = document.createElement("img");
        oImg.setAttribute('class', 'back');
        oImg.setAttribute('id', 'i' + a);
        oImg.setAttribute('src', "pictures/" + a + ".jpg");
        document.getElementById(a).appendChild(oImg);
    }
   
}
function startE() {// יצירת המטריצה סוג: מהיר
    flag = 1;
    localStorage.setItem("flag", 1);
    document.getElementById("level").style.display = "none";
    document.getElementById("warrp").style.display = "grid";
    document.getElementById("solider1").style.display = "grid";
    document.getElementById("solider2").style.display = "grid";
    document.getElementById("throw").style.display = "grid";

    numThrow = 0;
    for (let i = 1; i <= 10; i++)//לולאה ליצירת דיבים ללוח
    {
        if (i % 2 == 1)
            for (let a = 1; a <= 10; a++) {
                count--;
                document.getElementById("d1").innerHTML += "<div id='" + count + "'></div>";
            }
        else {
            for (let k = 10; k > 0; k--) {
                document.getElementById("d1").innerHTML += "<div id='" + ((Number)(count - k)) + "'></div>";

            }
            count = count - 10;
        }
    }
    for (var k = 47; k <= 100; k++) {//לולאה ליצירת רקע הלוח על הדיבים
        var oImg = document.createElement("img");
        oImg.setAttribute('class', 'back');
        oImg.setAttribute('id', 'i'+k);
        oImg.setAttribute('src', "pictures/easy/e" + k + ".png");
        document.getElementById(k).appendChild(oImg);

    }
    for (var a = 1; a <= 46; a++) {
        var oImg = document.createElement("img");
        oImg.setAttribute('class', 'back');
        oImg.setAttribute('id', 'i' + a);
        oImg.setAttribute('src', "pictures/easy/e" + a + ".jpg");
        document.getElementById(a).appendChild(oImg);
    }

}
function menuO() {
    document.getElementById("mmenu").style.display = "grid";
}
function menuC() {
    document.getElementById("mmenu").style.display = "none";
}

function open1() {//פונקציית הצגת חלון הכנסת שם לשחקן
    document.getElementById("open").style.display = "revert";
}
var userObj;
function userDetails(name) {// יצירת שחקן
    this.name = name
   
}
var able = 0;
function saveDetails() {//שמירת שם השחקן והצגתו
    able = 1;//תחילת משחק לאפשר ללחוץ על הקוביה
    var name = document.getElementById("text").value;
    userObj = new userDetails(name);
    if (name) {
        var userObjAsStr = JSON.stringify(userObj);
        localStorage.setItem("name", userObj.name);
        document.getElementById("open").style.display = "none";
        document.getElementById("buttonE").style.display = "none";
        document.getElementById("la1").innerText = " שחקן 1: " + localStorage.getItem("name") ;
        document.getElementById("la2").innerText = "שחקן 2: המחשב שלך";
        document.getElementById("la3").innerText = "אנא לחץ על הקוביה על מנת להתחיל את המשחק";
        document.getElementById('audio').load();
        document.getElementById('audio').play();
        
    }
    else alert("על מנת להתחיל במשחק, הנך מתבקש להכניס שם שחקן");   
}


var flagA;//משתנה על מנת לדעת של מי התור כשאמשיך משחק קודם
function turnAround() {
    var time1 = 100;
    document.getElementById('turn1').load();
    document.getElementById('turn1').play();
    for (let i = 0; i < 15; i++)
    {
        cube = 0;
        cube = Math.ceil((Math.random() * 6));
        switch (cube) {
            case 1:
                {
                    setTimeout(() => { document.getElementById("throw").style.backgroundImage = "url('pictures/s1.png')" }, time1);
                    break;
                }
            case 2:
                {

                    setTimeout(() => { document.getElementById("throw").style.backgroundImage = "url('pictures/s2.png')" }, time1);
                    break;
                }
            case 3:
                {
                    setTimeout(() => { document.getElementById("throw").style.backgroundImage = "url('pictures/s3.png')" }, time1);
                    break;
                }
            case 4:
                {
                    setTimeout(() => { document.getElementById("throw").style.backgroundImage = "url('pictures/s4.png')" }, time1);
                    break;
                }
            case 5:
                {
                    setTimeout(() => { document.getElementById("throw").style.backgroundImage = "url('pictures/s5.png')" }, time1);
                    break;
                }
            case 6:
                {
                    setTimeout(() => { document.getElementById("throw").style.backgroundImage = "url('pictures/s6.png')" }, time1);
                    break;
                }
        }
        time1 += 100;
    }
}
var cnt = 0;//
var numthrow1=0//משתנה שיגרום לי לא לאפשר לחייל לצעוד בפעם הראשונה כשהקוביה רק מגרילה מי יתחיל
function startGame() {
    if (able) {
        if (!cnt) {
            cnt = 1;
            let cube1;
            if (!numThrow) {//במידה וזו הזריקה הראשונה
                numThrow++;
                numthrow1 = 0;
                turnAround();
                setTimeout(() => { document.getElementById("la3").innerText = "המספר שהוגרל לך הוא:" + cube, cube1 = cube }, 1600);
                document.getElementById("throw").style.visibility = "none";
                setTimeout(() => { turnAround(), cube1 -= cube }, 3200);
                setTimeout(() => { document.getElementById("la3").innerText = "המספר שהוגרל למחשב הוא:" + cube }, 4800);
                setTimeout(() => { first(cube1) }, 6400);

            }
            else {
                numthrow1 = 1;
                turnAround();
                turn1 = 0;
                go1 = 0;
                setTimeout(() => { document.getElementById("la3").innerText = "עליך לצעוד " + cube + " צעדים", go1 = 1 }, 1800);
            }
        }
    }

} function first(cube1) {
    if (cube1 > 0) {
        document.getElementById("la3").innerText = "אתה משחק ראשון, אנא הטל את הקוביה";
        turn1 = 0;
        cnt = 0;
        document.getElementById("throw").style.visibility = "visible";
    }
    else {
        document.getElementById("la3").innerText = "המחשב משחק ראשון";
        compSteps();
    }
}
//יצירת שחקן
var j = 0;
var j = [new Image(), new Image()];
j[0].src = "pictures/right_1.png";
j[1].src = "pictures/right_2.png";
var countm = 0;
function imgm() {
    document.getElementById('solider1').src = j[countm].src;
    countm++;
    if (countm > j.length - 1)
        countm = 0;
}
function img2() {
    setInterval("imgm()", 200);
}
img2();
var l1;
var t1;
//יצירת שחקן2
var z = 0;
var z = [new Image(), new Image()];
z[0].src = "pictures/rightA_1.png";
z[1].src = "pictures/rightA_2.png";
var countm2 = 0;
function imgm2() {
    document.getElementById('solider2').src = (z[countm2]).src;
    countm2++;
    if (countm2 > z.length - 1)
        countm2 = 0;
}
function img22() {
    setInterval("imgm2()", 200);
}
img22();
var l12;
var t12;
var go1 = 0;//מאפשר לחייל ללכת
var turn1= 1;//משתנה למנוע יותר מלחיצה אחת על ENTER
function style() {
    //מיקום חייל השחקן
    document.getElementById('solider1').style.top = 92 + "vh";
    document.getElementById('solider1').style.left = 1 + "vw";
    l1 = document.getElementById('solider1').style.left;
    t1 = document.getElementById('solider1').style.top;
    localStorage.setItem("t2", 92);
    localStorage.setItem("l2", 1);
    //מיקום חייל המחשב
    document.getElementById('solider2').style.top = 92 + "vh";
    document.getElementById('solider2').style.left = 2.2 + "vw";
    l12 = document.getElementById('solider2').style.left;
    t12 = document.getElementById('solider2').style.top;
    localStorage.setItem("t3", 92);
    localStorage.setItem("l3", 2.2);
}
var l2 = 1, t2 = 92;
function steps(key) {//פונקצייה להולכת החייל
    if (go1) {
        var a = key.keyCode;
        switch (a) {
            case 37://left
                {
                    
                    document.getElementById('move1').load();
                    document.getElementById('move1').play();
                    if (l2 > 3 && (t2 == 81.9 ||
                        (t2 > 61 && t2 < 63) ||
                        (t2 > 41 && t2 < 43) ||
                        (t2 > 20.8 && t2 < 23) ||
                        (t2 > 0.5 && t2 < 3)) && cube > 0) {
                        j[0].src = "pictures/left_1.png";
                        j[1].src = "pictures/left_2.png";
                        l2 -= 6.2;
                        document.getElementById('solider1').style.left = l2 + "vw";
                        l1 = document.getElementById('solider1').style.left;
                        cube--;
                    }
                        break;
                    
                }

            case 39://right
                {
                    if (numthrow1) {
                        document.getElementById('move1').load();
                        document.getElementById('move1').play();
                        if (l2 < 56 && (t2 == 92 ||
                            (t2 > 71 && t2 < 73) ||
                            (t2 > 51 && t2 < 53) ||
                            (t2 > 31 && t2 < 33) ||
                            (t2 > 10.7 && t2 < 12)) && cube > 0) {
                            j[0].src = "pictures/right_1.png";
                            j[1].src = "pictures/right_2.png";
                            l2 += 6.2;
                            document.getElementById('solider1').style.left = l2 + "vw";
                            l1 = document.getElementById('solider1').style.left;
                            cube--;
                        }
                        break;
                    }
                }

            case 38://up
                {

                    document.getElementById('move1').load();
                    document.getElementById('move1').play();
                    if ((l2 > 56 && (t2 == 92 ||
                        (t2 > 71 && t2 < 73) ||
                        (t2 > 51 && t2 < 53) ||
                        (t2 > 31 && t2 < 33) ||
                        (t2 > 10.7 && t2 < 12)))
                        || (l2 < 3 && (t2 == 81.9 ||
                            (t2 > 61 && t2 < 63) ||
                            (t2 > 41 && t2 < 43) ||
                            (t2 > 20.8 && t2 < 23) 
                            )) && cube > 0) {

                        j[0].src = "pictures/up_1.png";
                        j[1].src = "pictures/up_2.png";
                        t2 -= 10.1;
                        document.getElementById('solider1').style.top = t2 + "vh";
                        t1 = document.getElementById('solider1').style.top;
                        cube--;
                    }
                    break;
                }

            case 13://enter
                {
                    go1 = 0;
                    if (!turn1) {
                        turn1 = 1;
                    flagA = 1;
                        localStorage.setItem("flagA", 1);
                        localStorage.setItem("t2", t2);
                        localStorage.setItem("l2", l2);
                        if (t2 > 0.5 && t2 < 4 && l2 > 0.5 && l2 < 4) {
                            localStorage.clear();
                            document.getElementById('win').load();
                            document.getElementById('win').play();
                            document.getElementById("winLose").style.display = "grid";
                            document.getElementById("b1").innerText = "ניצחת";
                            document.getElementById("lab1").innerText = "!כל הכבוד";
                        }
                        else {
                            if (!cube) {
                                upDown2()
                                setTimeout(() => { compSteps() }, 700);
                            }
                            else
                                if (numThrow!=-1) {
                                    go1 = 1;
                                    turn1 = 0;
                            alert(" עדיין לא סיימת את תורך צעד עוד" + cube + " צעדים");
                        }
                        break;
                        }
                    }
                }
               
           }
    }
}
    

var l3 = 2.2, t3 = 92;
var time2 = 0;
function ifwin() {//זימון פונקצית הפסד
    if (t3 > 0.5 && t3 < 4 && l3 > 0.5 && l3 < 4) { lose(); }
}
function compSteps()//פונקציה זימון להולכת המחשב
{
    document.getElementById("la3").innerText = "המחשב משחק";
    time2 = 2000;
    turnAround();
    while (cube)
    {     
            setTimeout(() => { compSteps2() }, time2);
            time2 += 700;
             cube--;
    }
 
    setTimeout(() => { upDown() }, time2);
    time2 += 500;
    setTimeout(() => { document.getElementById("la3").innerText = "המחשב סיים את תורו, אנא הטל את הקוביה", cnt = 0, ifwin(), flagA = 0, localStorage.setItem("flagA", 0), flagA = 0, localStorage.setItem("flagA", 0) }, time2);
}
function lose() {//פונקצית הפסד
    localStorage.clear();
    document.getElementById("winLose").style.display = "grid";
    document.getElementById("lab1").innerText = "אל תתיאש, נסה שוב";
    document.getElementById("b1").innerText = "הפסדת";
    document.getElementById('lose').load();
    document.getElementById('lose').play();

   
}
    function compSteps2() {//פונקציה להולכת המחשב


            document.getElementById('move1').load();
            document.getElementById('move1').play();

            if (l3 > 3 && (t3 == 81.9 ||
                (t3 > 61 && t3 < 63) ||
                (t3 > 41 && t3 < 43) ||
                (t3 > 20.8 && t3 < 23) ||
                (t3 > 0.5 && t3 < 3))) {
                z[0].src = "pictures/leftA_1.png";
                z[1].src = "pictures/leftA_2.png";
                l3 -= 6.2;
                document.getElementById('solider2').style.left = l3 + "vw";
                l12 = document.getElementById('solider2').style.left;
                localStorage.setItem("l3", l3);
            }
            else {
                if (l3 < 56 && (t3 == 92 ||
                    (t3 > 71 && t3 < 73) ||
                    (t3 > 51 && t3 < 53) ||
                    (t3 > 31 && t3 < 33) ||
                    (t3 > 10.7 && t3 < 12))) {

                    z[0].src = "pictures/rightA_1.png";
                    z[1].src = "pictures/rightA_2.png";
                    l3 += 6.2;
                    document.getElementById('solider2').style.left = l3 + "vw";
                    l12 = document.getElementById('solider2').style.left;
                    localStorage.setItem("l3", l3);

                }
                else {
                    if ((l3 > 56 && (t3 == 92 ||
                        (t3 > 71 && t3 < 73) ||
                        (t3 > 51 && t3 < 53) ||
                        (t3 > 31 && t3 < 33) ||
                        (t3 > 10.7 && t3 < 12)))
                        || (l3 < 3 && (t3 == 81.9 ||
                            (t3 > 61 && t3 < 63) ||
                            (t3 > 41 && t3 < 43) ||
                            (t3 > 20.8 && t3 < 23)
                        ))) {
                        z[0].src = "pictures/upA_1.png";
                        z[1].src = "pictures/upA_2.png";
                        t3 -= 10.1;
                        document.getElementById('solider2').style.top = t3 + "vh";
                        t12 = document.getElementById('solider2').style.top;
                        localStorage.setItem("t3", t3);
                    }
                }
            }
            
        }
        
    //מערכים לשמירת מיקומי הסולמות וחבלים
    lef1 = new Array(43.5, 24.5, 13, 0.5, 31.5, 0.5, 56, 50, 24.5, 43.5, 13);//טווח שמאל
    lef2 = new Array(47, 28, 16, 4, 34, 4, 59, 54, 28, 47, 16);
    to1 = new Array(81, 81, 61, 51, 41, 30.5, 30.5, 20, 10, 10, 0.5);//טווח גובה
    to2 = new Array(83, 83, 63, 53, 43, 33, 33, 23, 13, 13, 3);
    endLeft1 = new Array(39.4, 27, 20.8, 8.4, 27, 8.4, 58, 51.8, 27, 45.6, 14.6);//מיקום חייל מחשב משמאל
    endLeft2 = new Array(38.2, 25.8, 19.6, 7.2, 25.8, 7.2, 56.8, 50.6, 25.8, 44.4, 13.4);//מיקום חייל שחקן משמאל
    entTop = new Array(51.6, 51.6, 21.3, 41.5, 31.4, 71.8, 81.9, 11.2, 1.1, 41.5, 21.3);//מיקום החיילים מלמעלה
    function upDown() {//פעולת סולמות וחבלים לשחקן המחשב
        if (!flag) {
            for (var q = 0; q < 11; q++) {
                if (l3 > lef1[q] && l3 < lef2[q] && t3 > to1[q] && t3 < to2[q]) {
                    z[0].src = "pictures/upA_1.png";
                    z[1].src = "pictures/upA_2.png";
                    l3 = endLeft1[q];
                    t3 = entTop[q];
                    document.getElementById('solider2').style.top = t3 + "vh";
                    t12 = document.getElementById('solider2').style.top;
                    document.getElementById('solider2').style.left = l3 + "vw";
                    l12 = document.getElementById('solider2').style.left;
                    if (q == 0 || q == 1 || q == 2 || q == 3 || q == 4 || q == 7 || q == 8) {
                        document.getElementById('up1').load();
                        document.getElementById('up1').play();
                    }
                    else {
                        document.getElementById('down1').load();
                        document.getElementById('down1').play();
                    }
                }
            }
        }
        else {
            for (var q = 0; q < 9; q++) {
                if (l3 > lef1[q] && l3 < lef2[q] && t3 > to1[q] && t3 < to2[q]) {
                    z[0].src = "pictures/upA_1.png";
                    z[1].src = "pictures/upA_2.png";
                    l3 = endLeft1[q];
                    t3 = entTop[q];
                    document.getElementById('solider2').style.top = t3 + "vh";
                    t12 = document.getElementById('solider2').style.top;
                    document.getElementById('solider2').style.left = l3 + "vw";
                    l12 = document.getElementById('solider2').style.left;
                    if (q == 0 || q == 1 || q == 2 || q == 3 || q == 4 || q == 7 || q == 8) {
                        document.getElementById('up1').load();
                        document.getElementById('up1').play();
                    }
                    else {
                        document.getElementById('down1').load();
                        document.getElementById('down1').play();
                    }
                }
            }

        }
         localStorage.setItem("t3", t3);
         localStorage.setItem("l3", l3);
    }
    function upDown2() {//פעולת סולמות וחבלים לשחקן 
        if (!flag) {
            for (var q = 0; q < 11; q++) {
                if (l2 > lef1[q] && l2 < lef2[q] && t2 > to1[q] && t2 < to2[q]) {
                    j[0].src = "pictures/up_1.png";
                    j[1].src = "pictures/up_2.png";
                    l2 = endLeft2[q];
                    t2 = entTop[q];
                    document.getElementById('solider1').style.top = t2 + "vh";
                    t1 = document.getElementById('solider1').style.top;
                    document.getElementById('solider1').style.left = l2 + "vw";
                    l1 = document.getElementById('solider1').style.left;
                    if (q == 0 || q == 1 || q == 2 || q == 3 || q == 4 || q == 7 || q == 8) {
                        document.getElementById('up1').load();
                        document.getElementById('up1').play();
                    }
                    else {
                        document.getElementById('down1').load();
                        document.getElementById('down1').play();
                    }
                }
            }
        }
        else {
            for (var q = 0; q < 9; q++) {
                if (l2 > lef1[q] && l2 < lef2[q] && t2 > to1[q] && t2 < to2[q]) {
                    j[0].src = "pictures/up_1.png";
                    j[1].src = "pictures/up_2.png";
                    l2 = endLeft2[q];
                    t2 = entTop[q];
                    document.getElementById('solider1').style.top = t2 + "vh";
                    t1 = document.getElementById('solider1').style.top;
                    document.getElementById('solider1').style.left = l2 + "vw";
                    l1 = document.getElementById('solider1').style.left;
                    if (q == 0 || q == 1 || q == 2 || q == 3 || q == 4 || q == 7 || q == 8) {
                        document.getElementById('up1').load();
                        document.getElementById('up1').play();
                    }
                    else {
                        document.getElementById('down1').load();
                        document.getElementById('down1').play();
                    }
                }
            }
           
        }
        localStorage.setItem("t2", t2);
        localStorage.setItem("l2", l2);
}
function restart() {//התחלת משחק חדש

    style();
    l3 = 2.2;
    t3 = 92;
    time2 = 0;
    l2 = 1;
    t2 = 92;
    cube = 0;
    numThrow = 0;
    cnt = 0;
    able = 0;
    j[0].src = "pictures/right_1.png";
    j[1].src = "pictures/right_2.png";
    z[0].src = "pictures/rightA_1.png";
    z[1].src = "pictures/rightA_2.png";
    document.getElementById("mmenu").style.display = "none";
    document.getElementById("winLose").style.display = "none";
    document.getElementById("buttonE").style.display = "inline";
    document.getElementById("la1").innerText = "";
    document.getElementById("la2").innerText = "";
    document.getElementById("la3").innerText = "";
}


