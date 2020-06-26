
 function myFunction() {
       function getRandomInt (min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        var num = getRandomInt(1, 3);

        switch(num) {
            case 1: 
                answer = 'heads';
                break;
            case 2:
                answer = 'tails';
                break;
        }
        
        document.getElementById('coin').innerHTML= answer;

        }
    
 