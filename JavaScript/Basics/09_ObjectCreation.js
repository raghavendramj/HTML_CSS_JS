//1st Way to create object -> Factory function!
function createCircle(raduis) {
  return {
    raduis,
    draw: function () {
      console.log("Factory function! - draw");
    },
  };
}

var circleObject = createCircle(10)
circleObject.draw();

//2nd Way is Constructor function
function Circle(raduis){
    console.log('this', this);
    this.raduis = raduis;
    this.draw = function(){
        console.log("Circle -> onstructor function - draw! - ", this.raduis);
    }
}

// This is ES6 Conversion
// class Circle {
//     constructor(raduis) {
//         console.log('this', this);
//         this.raduis = raduis;
//         this.draw = function () {
//             console.log("Circle -> onstructor function - draw! - ", this.raduis);
//         };
//     }
// }

var anotherCircle = new Circle(10);
//1. -> new operator -> create a empty object -> {}
//2 -> it will set this to point to that current object -> this ->  {}
//3. returns the object from the function.  -> {radius, draw} -> returns
// => happens automatically!

anotherCircle.draw();
var circleObject2 = new Circle(35);
circleObject2.draw();