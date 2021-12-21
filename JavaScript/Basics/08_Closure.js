var name = "Raghav";
function greet(){
    var message = "Hi";
    console.log(message + " "+name);
}

function greet(){
    var message = "Hi";
    function sayHi(){
        var name = "Raghav";
        console.log(message + " "+name);
    }
    sayHi();    
}   

function greet(){
    var message = "Hi";
    function sayHi(){
        var name = "Raghav";
        // CLOSURE -> PRESERVE OUTER FUNCTION's message VARIBLE
        console.log(message + " "+name);
    }
    return sayHi; 
}

function greet(){
    var message = "Welcome to ";
    function sayHi(city){       
        console.log(message + " "+city);
    }
    return sayHi; 
}

var welcomeBangalore = greet();
welcomeBangalore("Bangalore");


// CLOSURE Example
var salaryOfEmp = (function(){
    var salary = 60000; //Outer function's variable
    function changeSalaryBy(amount){
        salary += amount;    
    }    
    return {
        raise : function(val){
            changeSalaryBy(val);
        },

        lower : function(val){
            changeSalaryBy(-val);
        },

        currentSalary : function(){
            return salary;
        }        
    }

})();