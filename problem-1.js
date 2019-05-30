/*
Q1
There is an open chat.
When a person enters the chat, the following message is displayed.
"[Nickname] came in."
When a person leaves the chat, the following message is displayed.
"[Nickname] has left."
There are two ways to change nicknames in a chat:
After leaving the chat, you can re-enter with the new nickname.
Change nickname in a chat.
When changing a nickname, the nickname of the previous messages displayed in the chat is also changed.
For example, if a person uses the nickname "Muzi" and "Prodo" in the chat in order, the following message is displayed in the chat.
"Muzi came in." "Prodo came in."
When “Muzi” leaves the room, the following message is left.
"Muzi came in." "Prodo came in." "Muzi has left."
When Muzi comes back in again with the new nickname, Prodo, the previous messages are changed to Prodo as follows.
"Prodo came in." "Prodo came in." "Prodo has left." "Prodo came in."
Since the chat allows duplicate nicknames, there are currently two people in the chat who use the nickname, Prodo. Now, when Prodo (the second person) changes his nickname to Ryan, the chat message is changed as follows.
"Prodo came in." "Ryan came in." "Prodo has left." "Prodo came in."
Complete the function that returns the entire chat messages. */

function solution(record){
  const chatHistory = []
  const answer = []
  const users = {}
  
  //create chatHistory
  record.forEach((logs, i) => {
    const element = logs.split(' ')
    switch (element[0]) {
      case 'Enter':
        users[element[1]] = {nickname: element[2]}
        chatHistory.push(`${element[1]} came in`)
        break;
      case 'Leave':
        chatHistory.push(`${element[1]} left`)
        break;
      case 'Change':
        users[element[1]].nickname = element[2]
        break;
    }
  })
  
  //replace uid to user nickname in chatHistory
  chatHistory.forEach( logs => {
    const element = logs.split(' ')
    answer.push(logs.replace(element[0], users[element[0]].nickname))
  })
  return answer
}
