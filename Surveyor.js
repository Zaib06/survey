class Surveyor {
    constructor(){}
  
    getCount(){
      var votersEmailtRef = database.ref('votersEmail');
      votersEmailRef.on("value",function(data){
        votersEmail = data.val();
      })
    }
  
  
    update(email){
      var surveyoremail = "email" + votersEmail;
      database.ref(surveyoremail).set({
        email:votersEmail
      });
    }
  }