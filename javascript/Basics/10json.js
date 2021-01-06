var data = {
    name: 'saikrishna',
    age: 27,
    email: "saikrishna@gmail.com",
    Phone: 949494949
}

console.log(data.name);
console.log('name' + data.name + "age" + data.age + 'Phone' + data.Phone);

// String Intropolation
console.log(`${data.name} ${data.age}        ${data.Phone}`)

var data1 = {
    sai1: {
        name: "sai",
        age: 27,
        email: 'saikishna@121.com'
    },
    sai2: {
        name: "sai",
        age: 27,
        email: 'saikishna@121.com'
    },
    sai3: {
        name: "sai",
        age: 27,
        email: 'saikishna@121.com'
    }, sai4: {
        name: "sai",
        age: 27,
        email: 'saikishna@121.com'
    }
}
console.log("saiiiiiii", data1.sai1.name)
var data = [{
    sai: {
        fullname: "saikrishna",
        age: 27,
        phone: 99999999,
        email: "sai@gmail.com"
    },
    kri: {
        fullname: "saikrishna1",
        age: 28,
        phone: 99999999,
        email: "sai1@gmail.com"
    },
    Ban: {
        fullname: "saikrishna",
        age: 27,
        phone: 99999999,
        email: "sai@gmail.com"
    }
}, {
    saikri: {
        fullname: "saiiiiiiiiiiiii123",
        age: 27,
        phone: 99999999,
        email: "sai@gmail.com"
    },
    kri: {
        fullname: "saikrishna1",
        age: 28,
        phone: 99999999,
        email: "sai1@gmail.com"
    },
    Ban: {
        fullname: "saikrishna",
        age: 27,
        phone: 99999999,
        email: "sai@gmail.com"
    }
}];
console.log("kriiiiiiii", data[1].saikri.fullname);



