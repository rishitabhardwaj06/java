const addveggies=(callback)=>{
    setTimeout(()=>{
        const veggies = "🥗"
        console.log("Veggies Prepared",veggies);
        callback(veggies);
    },3000);
};


const addtikki=(veggies,callback)=>{
    setTimeout(()=>{
        const tikki =veggies + "🥯"
        console.log("Tikki Prepared",tikki);
        callback(tikki);
    },3000);
};



const makeburger=(veggies,tikki,callback)=>{
    setTimeout(()=>{
        const burger = veggies + tikki + "🍔"
        console.log("Burger Prepared",burger);
        callback(burger);
    },3000);
};

addveggies((veggies)=>{
    console.log("Preparing of tikki started")
    addtikki(veggies,(tikki)=>{
        console.log("Preparing of burger started")
        makeburger(veggies,tikki,(burger)=>{
                   console.log("Burger is served")
        });
    });
});