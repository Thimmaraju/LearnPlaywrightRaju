step1(10, function (result1, boolvalue) {
    if (!boolvalue) {
        step2(result1, function (result2, boolvalue) {
            if (!boolvalue) {
                step3(result2, function (result3, boolvalue) {
                    if (!boolvalue) {
                        console.log("Results " + result3);
                    }
                })
            }
        })
    }
});

function step1(value, callback) {
    callback(value + 10, false);
}

function step2(value, callback) {
    callback(value + 10, false);
}

function step3(value, callback) {
    callback(value + 10, false);  //40
}


//=====================================

function step1(value, error) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject('Something went wrong');
        } else {
            resolve(value + 10);
        }
    });
}



function step2(value, error) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject('Something went wrong');
        } else {
            resolve(value + 10);
        }
    });
}

function step3(value, error) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject('Something went wrong');
        } else {
            resolve(value + 10);
        }
    });
}

// Usage:
step1(10, false)
    .then((result1) => step2(result1, false))
    .then((result2) => step3(result2, false))
    .then((result3) => console.log(result3))
    .catch((error) => console.log(error));



