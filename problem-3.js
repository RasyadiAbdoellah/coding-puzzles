/*
A Candidate Key is an attribute or a set of attributes that can uniquely identify a tuple of a relation in the relational database and satisfies the following two properties.
- Uniqueness: The relation does not have two distinct tuples (i.e. rows or records in common database language) with the same values for these attributes.
- Minimality: There should no subset of these attributes satisfy uniqueness, which means if we exclude one of these attributes, then uniqueness will be broken.

[Student number, Name, Major, Grade]

[100,”ryan”,”music”,2]
[200,”apeach”,”math”,2]
[300,”tube”,”computer”,3]
[400,”con”,”computer”,4]
[500,”muzi”,”music”,3]
[600,”apeach”,”music”,2]

In the above example, each student has a unique "student number".
Thus, the ["student number"] can be the candidate key of the relation.
Then, because there are students who use the same name ("apeach") for "name", "name" can not be a candidate key.
However, if you use ["name", "major"] together, all the tuples of the relation can be uniquely identified, so they can become candidate keys.
Of course, it is possible to uniquely identify all tuples in a relation using ["name", "major", "grade"], but it can not be a candidate key because it does not satisfy the minimum.
Therefore, the candidate key of the input above is ["student number"], ["name", "major"].
Find how many candidate keys are there for given array relation.
*/

function solution(rel){
  let answer = 0;
  
  //test every row element
  for(let i = 0; i < rel[0].length; i++){
    let singleUnique = true; //flag for testing uniquenss of single element
    let doubleUnique = true; //flag for testing uniqueness of two combined elements
    let map = new Map(); //used for testing

    //test every row
    for( item of rel ){
      if(!map.has(item[i])){ //if map does not have item[i] add it on
        map.set(item[i]);
      } else {
        singleUnique = false; //if map already has item[i] the row element is not unique, hence singleUnique is false
      }
    }
    //test doubleUniques only if singleUnique is false
    if(!singleUnique){
      //uses same process as above but combines item[i] with the next item element ( item[i+1] )
      for (item of rel){
        if(!map.has(item[i] + item[i+1])){
          map.set(item[i]+item[i+1]);
        } else {
          doubleUnique = false;
        }
      }
    }
    //increment answer if either is true
    if(singleUnique || doubleUnique) answer++;
  }
  return answer;
}
