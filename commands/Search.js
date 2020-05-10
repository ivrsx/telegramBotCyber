/*CMD
  command: البحث عن ثغرات
  help: 
  need_reply: true
  auto_retry_time: 
  folder: search = 150
  answer: أكتب الرابط لا هنت، بكلمك بأقرب وقت ممكن👍
  keyboard: 
  aliases: 
CMD*/

var admin_chat = "752566858"

user_link = Libs.commonLib.getLinkFor(user)

msg = "Search \n"+"Client: \n ----------\n" + user_link +
     "\n-----------\n" +
      message 

Bot.sendMessageToChatWithId(admin_chat, msg);
