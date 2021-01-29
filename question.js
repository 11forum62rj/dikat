class Question{
    constructor(){
        this.input = createInput("");
        this.question = createButton('h3');
        this.option1= createElement('play');
        this.option2 = createButton('Play');
        this.tilte = createElement('h2');
        
    }

    display(){
        var title = createElement("My Quiz Game");

        title.position(350,0);
        
        var question = createElement("Question:- What starts and ends with the letter 'E', but has only one letter?")
        this.question.position(150,800);
        
        var option1 = createElement("1: Everyone");
        this.option1.position(150,100);
        var option2 = createElement("2: Envelope");
        this.option2.position(150,120);
           
        this.input1.position(150,230);
    }
}