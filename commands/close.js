/*CMD
  command: إغلاق الثغرات
  help: 
  need_reply: true
  auto_retry_time: 
  folder: close = 150

  <<ANSWER
,بكلمك بأفرب وقت تمام أبي منك رابط الموقع والثغرات 
مثال :
(رابط الموقع)
الثغرات :
1- (اسم الثغرة):(مستوى الامان)
-----
بكلمك بأقرب وقت 👍
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var admin_chat = "752566858"

user_link = Libs.commonLib.getLinkFor(user)

msg = "Close \n"+"Client: \n ----------\n" + user_link +
     "\n-----------\n" +
      message 

Bot.sendMessageToChatWithId(admin_chat, msg);
