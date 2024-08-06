const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
      console.log(`Username: ${user.username}`); 
      console.log(`Username: ${this.username}`);  // you can use this keyword also at here
      // You might want to log other details here as well
      console.log(this);
    }
  };
  
  console.log(user.username);
  user.getUserDetails();
  