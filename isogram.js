/* An Isogram is a word that has no repeating letters,
consecutive or non-consecutive.Implement a function that 
determines whether a string that contains only letters is
 an Isogram.Assume the empty string is an isogram.Ignore
 letter case*/

 //function isogram(str){
   //  my_string =("")
     //for(let i = 0;i < str.length; i++) {
     //if( str.length > i === 7)
     //console.log(true);
     //else if( str.length < i )

     //console.log (false);
// }
//}
 //console.log(isogram("convert"))


 function myIsogram(string){
     let charCount = 0;
for (let x = 0; x < string.length; x++){
    if (string.charAt[0] === string.charAt[x])
    newCount = charCount++;
    else
    newCount = 0;
}

if (newCount > 1)
return (string + ' is not an Isogram')
else 
return (string + ' is an Isogram')

 }
 
 console.log(myIsogram('convert'))
