



// t1
function task1() {
    console.log("A");

    setTimeout(function () {
        console.log("B");
    }, 0);

    console.log("C");
}



// t2
function task2() {
    console.log("1");

    Promise.resolve().then(function () {
        console.log("2");
    });

    console.log("3");
}



// t3
function task3() {
    console.log("Start");

    setTimeout(function () {
        console.log("Timeout");
    }, 0);

    Promise.resolve().then(function () {
        console.log("Promise");
    });

    console.log("End");
}




// t4
function task4() {
    setTimeout(function () {
        console.log("Task Queue");
    }, 0);

    Promise.resolve().then(function () {
        console.log("Microtask Queue");
    });
}




// t5
async function task5() {
    console.log("1");

    await Promise.resolve();

    console.log("2");
}

console.log("3");


// t6
function task6() {
    console.log("A");

    Promise.resolve()
        .then(function () {
            console.log("B");
        })
        .then(function () {
            console.log("C");
        });

    console.log("D");
}




// t7
function task7() {
    console.log("1");

    setTimeout(function () {
        console.log("2");
    }, 1000);

    Promise.resolve().then(function () {
        console.log("3");
    });

    console.log("4");
}




// t8
async function task8() {
    console.log("Start");

    await Promise.resolve();

    console.log("Middle");

    await Promise.resolve();

    console.log("End");
}




// t9
function task9() {
    console.log("A");

    setTimeout(function () {
        console.log("B");

        Promise.resolve().then(function () {
            console.log("C");
        });
    }, 0);

    console.log("D");
}


