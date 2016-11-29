module.exports = (Franz, Options) => {

  function getMessages(){
    const res = document.title.match(/^(\((\d+)\))?.*$/);
    var unread = 0;
    if(res){
      unread = res[2];
    }
    Franz.setBadge(unread);
  }

  Franz.loop(getMessages);
};