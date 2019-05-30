/*
There is a mobile game with stage. We wanna get the failure rate of each stage.
The failure rate is defined as follows;
Number of players who have reached the stage but have not yet cleared / Number of players who have reached the stage.
Complete the function to return an array containing the number of the stage in descending order of the highest failure rate, when total stages N, an array users containing the stage in which the game user is currently playing are given as a parameter.
*/

function solution(n, users){
  const userFail = {};
  const answer = [];
  let userCt = users.length;
  
  //counts the number of users that failed a stage.
  //assigns a key of stage number with a value that denotes how many users failed that stage
  users.forEach(lvl => {
    !userFail[lvl] ? userFail[lvl] = 1 : userFail[lvl]++;
  });

  //calculate failRate for each stage and place in answer array according to stage number
  for( let stage in userFail){
    answer[stage-1] = {stage: +stage, failRate: userFail[stage]/userCt}
    userCt-=userFail[stage];
  };

  //remove number of players that beat all stages
  if(answer[answer.length-1].stage > n) answer.pop();
  
  //fill in empty array elements with stage num and failrate of 0
  for(let i = 0; i< n; i++){
    if(!answer[i]) answer[i] = {stage: i+1, failRate: 0};
  }; 

  //sort array by failrate then by stage num
  answer.sort((a,b) => {
    if(a.failRate > b.failRate) return -1;
    if(a.failRate < b.failRate) return 1;
    if(a.failRate === b.failRate){
      if(a.stage < b.stage) return -1;
      if(a.stage > b.stage) return 1;
      return 0;
    }
    return 0;
  });

  //transform array to required format
  answer.forEach((e, i, array) =>{
    array[i] = e.stage
  });

  return answer;
};
