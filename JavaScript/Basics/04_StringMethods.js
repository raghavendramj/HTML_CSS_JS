function indexMethods() {
  var str = "hello world";
  console.log("length :- ", str.length);
  console.log("indexOf :- ", str.indexOf("world"));
  str = "hello world hello javascript hello";
  console.log("lastIndexOf :- ", str.lastIndexOf("hello"));
  console.log("lastIndexOf :- ", str.lastIndexOf("l"));
}
// indexMethods();

function subStringAndSubstr() {
  var str = "my favorite country is India";

  //first param -> starting index, second-> end index
  console.log("str.substring(3, 11) -> ", str.substring(3, 11));

  //first param -> start index, second -> length
  console.log("str.substr(3, 11) -> ", str.substr(3, 11));
}

// subStringAndSubstr();

function replaceMethods() {
    var str = "my favorite city is bangalore and bangalore is a nice place to hang out!";
    var out = str.replace(/bangalore/g, "kolkota");
    console.log("str.replace(/bangalore/g, 'kolkota')", out);
}
// replaceMethods();

function sliceMethods(){
    var str = "my favorite country is India";
    console.log("str.slice(12, 19) :- ", str.slice(12, 19));
}

sliceMethods();