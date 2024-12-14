// <!-- 
//  1. Function Declaration: These function are Hoisted.
//  2. Function Expressions: These Functions are not hoisted.
//  3. Arrow Function: Small Anonymous Functions used for callBacks 
//  -->

        // Function Declaration:
        function add(a,b) {
            return a + b;
        }
        console.log(add(12,22));

        //Multiply
        function mul(a,b) {
            return a * b;
        }
        console.log(mul(11,23));

        // By String
        function greet2(name) {
            console.log('Hello ' , name);
        }
        greet2('satyam');
// ---------------------------------------------------------------------------------------
        // Function Expression
        //Sum
        let sum = function(a,b) {
            return a + b;
        }

        let res = sum(54,23);
        console.log(res);

        // Multiply
        let pro = function(a,b) {
            return a * b;
        }

        let res2 = pro(12,21)
        console.log(res2);

        //By String
        let String = function(name) {
            return name;
        }
        let greet3 = String('samrat');
        console.log(greet3);
// _______________________________________________________________________________________

        // Arrow Function

        let arrow = (a,b) => {
            console.log(a / b);
        }
        arrow(12,5);
