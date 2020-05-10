/*CMD
  command: البحث عن الثغرات وإغلاقها
  help: 
  need_reply: true
  auto_retry_time: 
  folder: search & close = 270
  answer: تمام أبي منك رابط الموقع و بكلمك بأقرب وقت👍
  keyboard: 
  aliases: 
CMD*/

var admin_chat = "752566858"

user_link = Libs.commonLib.getLinkFor(user)

msg = "Search & Close \n"+"Client: \n ----------\n" + user_link +
     "\n-----------\n" +
      message 

Bot.sendMessageToChatWithId(admin_chat, msg);
