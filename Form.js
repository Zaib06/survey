class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("Take the Survey");
      title.position(130, 0);
      
      var input = createInput("Email");

      var button = createButton('Yes');
      var button1 = createButton('No');
      var button2 = createButton('Yes');
      var button3 = createButton('No');
      var button4 = createButton('Yes');
      var button5 = createButton('No');
     
      input.position(130, 160);

      button.position(250, 200);
      button1.position(250,210);
      button2.position(250,250);
      button3.position(250,260);
      button4.position(250,500);
      button5.position(250,600);
    }

    updateCount(){
        if(button.mousePressed||button2.mousePressed||button4.mousePressed){
            yesCount=yesCount+1
        }
        if(button1.mousePressed||button3.mousePressed||button5.mousePressed){
            noCount=noCount+1
        }
    }  
    }
  