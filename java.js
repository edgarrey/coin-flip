let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/

         let d =  Math.random()

         if (d < .5){
            this.state = 1

         }
         else {
            this.state = 0
            } 
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */

           if (this.state === 1){
                return "HEADS"
           }
           else {
               return "TAILS"
           }
        
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }

   
};




coin.flip()
console.log(coin.toString())

let dom = document.querySelector('main')
dom.append(coin.toString())


function display20Flips(){
    for (let index = 0; index <= 20; index++) {
        
  console.log( coin.toString()[index])
    } 
}