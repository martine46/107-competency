function saveMessage(){

    var name = $("#txtName").val();
    var mail = $("#txtMail").val();
    var message = $("#txtMessage").val();

    var msg = {
        name: name,
        mail: mail,
        message: MessageChannel,
        name: "Martin"
    };

console.log(msg);
  
    $.ajax({
        url: '/api/message',
        type: 'POST',
        data: JSON.stringify(msg),
        contentType: 'application/json',
        success: function(res){
            console.log("Server says", res);
        },
        error: function(error){
            console.log("**Error saving message",error);
        }
    });
}

function init(){
    console.log("contact page");

    $("#btnSave").click(saveMessage);
    console.log("Message sent: " + saveMessage);
}



window.onload = init;