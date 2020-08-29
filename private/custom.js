/*Perpetual Functions*/
let oncePerStorage = (() => {
    let called = localStorage.getItem("calledPerStorage") || 0;
    let duration = 1 * 60 * 60 * 1000; // 1hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perStorage() {
                localStorage.setItem("calledPerStorage", now);
                called = now;
                $.ajax({
                    url: 'private/perStorage.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perStorage();
        }
    }
})();

let onceOilStore = (() => {
    let called = localStorage.getItem("calledOilStore") || 0;
    let duration = 4 * 60 * 60 * 1000; // 1hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function oilStore() {
                localStorage.setItem("calledOilStore", now);
                called = now;
                $.ajax({
                    url: 'private/oilStore.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return oilStore();
        }
    }
})();

let oncePerSolar = (() => {
    let called = localStorage.getItem("calledPerSolar") || 0;
    let duration = 1 * 60 * 60 * 1000; // 1hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perSolar() {
                localStorage.setItem("calledPerSolar", now);
                called = now;
                $.ajax({
                    url: 'private/perSolar.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perSolar();
        }
    }
})();

let oncePerMachines = (() => {
    let called = localStorage.getItem("calledPerMachines") || 0;
    let duration = 1 * 60 * 60 * 1000; // 1hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perMachines() {
                localStorage.setItem("calledPerMachines", now);
                called = now;
                $.ajax({
                    url: 'private/perMachines.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perMachines();
        }
    }
})();

let oncePerBatt = (() => {
    let called = localStorage.getItem("calledPerBatt") || 0;
    let duration = 2 * 60 * 60 * 1000; // 2hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perBatt() {
                localStorage.setItem("calledPerBatt", now);
                called = now;
                $.ajax({
                    url: 'private/perBatt.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perBatt();
        }
    }
})();

let oncePerDestruction = (() => {
    let called = localStorage.getItem("calledPerDestruction") || 0;
    let duration = 2 * 60 * 60 * 1000; // 2hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perDestruction() {
                localStorage.setItem("calledPerDestruction", now);
                called = now;
                $.ajax({
                    url: 'private/perDestruction.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perDestruction();
        }
    }
})();

let oncePerLabT2 = (() => {
    let called = localStorage.getItem("calledPerLabT2") || 0;
    let duration = 2 * 60 * 60 * 1000; // 2hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perLabT2() {
                localStorage.setItem("calledPerLabT2", now);
                called = now;
                $.ajax({
                    url: 'private/perLabT2.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perLabT2();
        }
    }
})();

let oncePerLabT4 = (() => {
    let called = localStorage.getItem("calledPerLabT4") || 0;
    let duration = 2 * 60 * 60 * 1000; // 2hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perLabT4() {
                localStorage.setItem("calledPerLabT4", now);
                called = now;
                $.ajax({
                    url: 'private/perLabT4.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perLabT4();
        }
    }
})();

let oncePerRocketFuelT2 = (() => {
    let called = localStorage.getItem("calledPerRocketFuelT2") || 0;
    let duration = 1 * 60 * 60 * 1000; // 1hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perRocketFuelT2() {
                localStorage.setItem("calledPerRocketFuelT2", now);
                called = now;
                $.ajax({
                    url: 'private/perRocketFuelT2.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perRocketFuelT2();
        }
    }
})();

let oncePerRocketFuelT3 = (() => {
    let called = localStorage.getItem("calledPerRocketFuelT3") || 0;
    let duration = 2 * 60 * 60 * 1000; // 2hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perRocketFuelT3() {
                localStorage.setItem("calledPerRocketFuelT3", now);
                called = now;
                $.ajax({
                    url: 'private/perRocketFuelT3.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perRocketFuelT3();
        }
    }
})();

let oncePerMeteorite = (() => {
    let called = localStorage.getItem("calledPerMeteorite") || 0;
    let duration = 2 * 60 * 60 * 1000; // 2hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perMeteorite() {
                localStorage.setItem("calledPerMeteorite", now);
                called = now;
                $.ajax({
                    url: 'private/perMeteorite.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perMeteorite();
        }
    }
})();

let oncePerDyson = (() => {
    let called = localStorage.getItem("calledPerDyson") || 0;
    let duration = 2 * 60 * 60 * 1000; // 2hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function perDyson() {
                localStorage.setItem("calledPerDyson", now);
                called = now;
                $.ajax({
                    url: 'private/perDyson.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return perDyson();
        }
    }
})();

/*Resource Functions*/
let onceGetBatt = (() => {
    let called = localStorage.getItem("calledBatt1") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function getBatt1() {
                localStorage.setItem("calledBatt1", now);
                called = now;
                $.ajax({
                    url: 'private/getBatt1.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return getBatt1();
        }
    }
})();

let onceGetBatt2 = (() => {
    let called = localStorage.getItem("calledBatt2") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function getBatt2() {
                localStorage.setItem("calledBatt2", now);
                called = now;
                $.ajax({
                    url: 'private/getBatt2.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return getBatt2();
        }
    }
})();

let onceGetBatt3 = (() => {
    let called = localStorage.getItem("calledBatt3") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function getBatt3() {
                localStorage.setItem("calledBatt3", now);
                called = now;
                $.ajax({
                    url: 'private/getBatt3.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return getBatt3();
        }
    }
})();

let onceGetBatt4 = (() => {
    let called = localStorage.getItem("calledBatt4") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function getBatt4() {
                localStorage.setItem("calledBatt4", now);
                called = now;
                $.ajax({
                    url: 'private/getBatt4.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return getBatt4();
        }
    }
})();

let onceGetBatt5 = (() => {
    let called = localStorage.getItem("calledBatt5") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function getBatt5() {
                localStorage.setItem("calledBatt5", now);
                called = now;
                $.ajax({
                    url: 'private/getBatt5.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return getBatt5();
        }
    }
})();

/*Tier Functions*/
let onceTier3 = (() => {
    let called = localStorage.getItem("calledTier3") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function unTier3() {
                localStorage.setItem("calledTier3", now);
                called = now;
                $.ajax({
                    url: 'private/unTier3.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return unTier3();
        }
    }
})();

let onceTier4 = (() => {
    let called = localStorage.getItem("calledTier4") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function unTier4() {
                localStorage.setItem("calledTier4", now);
                called = now;
                $.ajax({
                    url: 'private/unTier4.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return unTier4();
        }
    }
})();

let onceTier5 = (() => {
    let called = localStorage.getItem("calledTier5") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function unTier5() {
                localStorage.setItem("calledTier5", now);
                called = now;
                $.ajax({
                    url: 'private/unTier5.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return unTier5();
        }
    }
})();

/*Rocket Functions*/
let onceRocket = (() => {
    let called = localStorage.getItem("calledRocket") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function getRocket() {
                localStorage.setItem("calledRocket", now);
                called = now;
                $.ajax({
                    url: 'private/getRocket.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return getRocket();
        }
    }
})();

let onceLaunch = (() => {
    let called = localStorage.getItem("calledLaunch") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function launchRocket() {
                localStorage.setItem("calledLaunch", now);
                called = now;
                $.ajax({
                    url: 'private/launchRocket.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return launchRocket();
        }
    }
})();

/*Planet/Explore functions*/
let onceMoon = (() => {
    let called = localStorage.getItem("calledMoon") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function moonUnlock() {
                localStorage.setItem("calledMoon", now);
                called = now;
                $.ajax({
                    url: 'private/moonUnlock.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return moonUnlock();
        }
    }
})();

let onceVenus = (() => {
    let called = localStorage.getItem("calledVenus") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function venusUnlock() {
                localStorage.setItem("calledVenus", now);
                called = now;
                $.ajax({
                    url: 'private/venusUnlock.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return venusUnlock();
        }
    }
})();

let onceMars = (() => {
    let called = localStorage.getItem("calledMars") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function marsUnlock() {
                localStorage.setItem("calledMars", now);
                called = now;
                $.ajax({
                    url: 'private/marsUnlock.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return marsUnlock();
        }
    }
})();

let onceAsteroid = (() => {
    let called = localStorage.getItem("calledAsteroid") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function asteroidUnlock() {
                localStorage.setItem("calledAsteroid", now);
                called = now;
                $.ajax({
                    url: 'private/asteroidUnlock.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return asteroidUnlock();
        }
    }
})();

let onceWonder = (() => {
    let called = localStorage.getItem("calledWonder") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function wonderUnlock() {
                localStorage.setItem("calledWonder", now);
                called = now;
                $.ajax({
                    url: 'private/wonderUnlock.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return wonderUnlock();
        }
    }
})();

let onceJupiter = (() => {
    let called = localStorage.getItem("calledJupiter") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function jupiterUnlock() {
                localStorage.setItem("calledJupiter", now);
                called = now;
                $.ajax({
                    url: 'private/jupiterUnlock.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return jupiterUnlock();
        }
    }
})();

let onceSaturn = (() => {
    let called = localStorage.getItem("calledSaturn") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function saturnUnlock() {
                localStorage.setItem("calledSaturn", now);
                called = now;
                $.ajax({
                    url: 'private/saturnUnlock.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return saturnUnlock();
        }
    }
})();

let oncePluto = (() => {
    let called = localStorage.getItem("calledPluto") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function plutoUnlock() {
                localStorage.setItem("calledPluto", now);
                called = now;
                $.ajax({
                    url: 'private/plutoUnlock.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return plutoUnlock();
        }
    }
})();

let onceKuiper = (() => {
    let called = localStorage.getItem("calledKuiper") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function kuiperUnlock() {
                localStorage.setItem("calledKuiper", now);
                called = now;
                $.ajax({
                    url: 'private/kuiperUnlock.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return kuiperUnlock();
        }
    }
})();

let onceSol = (() => {
    let called = localStorage.getItem("calledSol") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function solUnlock() {
                localStorage.setItem("calledSol", now);
                called = now;
                $.ajax({
                    url: 'private/solUnlock.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return solUnlock();
        }
    }
})();

/*Wonder functions*/
let oncePrecious = (() => {
    let called = localStorage.getItem("calledPrecious") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function preciousWonder() {
                localStorage.setItem("calledPrecious", now);
                called = now;
                $.ajax({
                    url: 'private/preciousWonder.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return preciousWonder();
        }
    }
})();

let oncePreciousAct = (() => {
    let called = localStorage.getItem("calledPreciousAct") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function preciousWonderAct() {
                localStorage.setItem("calledPreciousAct", now);
                called = now;
                $.ajax({
                    url: 'private/preciousWonderAct.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return preciousWonderAct();
        }
    }
})();

let onceEnergetic = (() => {
    let called = localStorage.getItem("calledEnergetic") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function energeticWonder() {
                localStorage.setItem("calledEnergetic", now);
                called = now;
                $.ajax({
                    url: 'private/energeticWonder.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return energeticWonder();
        }
    }
})();

let onceEnergeticAct = (() => {
    let called = localStorage.getItem("calledEnergeticAct") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function energeticWonderAct() {
                localStorage.setItem("calledEnergeticAct", now);
                called = now;
                $.ajax({
                    url: 'private/energeticWonderAct.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return energeticWonderAct();
        }
    }
})();

let onceTechWonder = (() => {
    let called = localStorage.getItem("calledTechWonder") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function techWonder() {
                localStorage.setItem("calledTechWonder", now);
                called = now;
                $.ajax({
                    url: 'private/techWonder.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return techWonder();
        }
    }
})();

let onceTechWonderAct = (() => {
    let called = localStorage.getItem("calledTechWonderAct") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function techWonderAct() {
                localStorage.setItem("calledTechWonderAct", now);
                called = now;
                $.ajax({
                    url: 'private/techWonderAct.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return techWonderAct();
        }
    }
})();

let onceMeteoriteWonder = (() => {
    let called = localStorage.getItem("calledMeteoriteWonder") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function meteoriteWonder() {
                localStorage.setItem("calledMeteoriteWonder", now);
                called = now;
                $.ajax({
                    url: 'private/meteoriteWonder.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return meteoriteWonder();
        }
    }
})();

let onceMeteoriteWonderAct = (() => {
    let called = localStorage.getItem("calledMeteoriteWonderAct") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function meteoriteWonderAct() {
                localStorage.setItem("calledMeteoriteWonderAct", now);
                called = now;
                $.ajax({
                    url: 'private/meteoriteWonderAct.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return meteoriteWonderAct();
        }
    }
})();

/*SolCenter Functions*/
let oncePlasmaResearch = (() => {
    let called = localStorage.getItem("calledPlasmaResearch") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function plasmaResearch() {
                localStorage.setItem("calledPlasmaResearch", now);
                called = now;
                $.ajax({
                    url: 'private/plasmaResearch.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return plasmaResearch();
        }
    }
})();

let onceEmcResearch = (() => {
    let called = localStorage.getItem("calledEmcResearch") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function EmcResearch() {
                localStorage.setItem("calledEmcResearch", now);
                called = now;
                $.ajax({
                    url: 'private/EmcResearch.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return EmcResearch();
        }
    }
})();

let onceDysonResearch = (() => {
    let called = localStorage.getItem("calledDysonResearch") || 0;
    let duration = 4 * 60 * 60 * 1000; // 4hrs =  4 * 60 mins * 60 secs , then to milliseconds (Js Time)
    return function () {
        let now = Date.now();
        if ((now - called) > duration) {
            function dysonResearch() {
                localStorage.setItem("calledDysonResearch", now);
                called = now;
                $.ajax({
                    url: 'private/dysonResearch.php',
                    success: function (data) {
                        $('.result').html(data);
                    }
                });
            }
            return dysonResearch();
        }
    }
})();