const user = {
        Name: "Satyam",
        age: 22,
        branch: "EEE",

        welcomeuser: function() {
                //console.log(`${this.Name},  is the welcomeuser`);
                //console.log(this); // This refers the current object address.
        }

}
// user.welcomeuser();
// user.Name = "Samrat";
// user.welcomeuser();
console.log(this);  // {} it does not give any output if this is inside the current object then it will return the address and value.