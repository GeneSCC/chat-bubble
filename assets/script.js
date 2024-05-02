// open chat-box
// $(document).ready(function(){
//     toggleChatBox();
// })

// Function to toggle chat box visibility
function toggleChatBox() {
    $('#chat-box').slideToggle();

    var input = document.getElementById('chatInput');
    input.focus();
}


// message functions
function sendMessage() {
    var input = document.getElementById('chatInput');
    
    if(input.value !== ''){
        var messages = document.getElementById('chatMessages');

        //user name
        var user = document.createElement('div');
        user.textContent ='You';
        user.style.fontWeight = 'bold';
        user.style.padding = '10px';
        user.style.marginTop = '5px';
        user.style.display = 'flex';
        user.style.justifyContent = 'flex-end';
        messages.appendChild(user);

        //user message
        var message = document.createElement('div');
        message.textContent = input.value;
        message.style.padding = '10px'; 
        message.style.display = 'flex';
        message.style.justifyContent = 'flex-end';
        message.style.backgroundColor = '#f0f0f0';
        message.style.wordWrap = 'break-word';
        messages.appendChild(message);

        respondMessage();
        input.value = '';
        
    }
    
}


//bot response function
function respondMessage(){
    var botInput = 'Panagdait! I am Chat Columbano';
    var botMessage = document.getElementById('chatMessages');

    //bot name
    var bot = document.createElement('div');
    bot.textContent ='Chat Columbano';
    bot.style.fontWeight = 'bold';
    bot.style.padding = '10px';
    bot.style.marginTop = '5px';
    botMessage.appendChild(bot);

    //bot message
    var message = document.createElement('div');
    message.textContent = botInput;
    message.style.padding = '10px';
    message.style.backgroundColor = '#f0f0f0';
    message.style.wordWrap = 'break-word';
    botMessage.appendChild(message);

    var random = document.createElement('div');
    random.style.padding = '5px';
    botMessage.appendChild(random);
    random.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

}

function scrollToElement(element, offset) {
    window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
    });
}


var inputField = document.getElementById('chatInput');
// Add event listener to input field
inputField.addEventListener('keydown', function(event) {
    if ((event.key === 'Enter' || event.keyCode === 13) && !event.shiftKey) {

        event.preventDefault();
        sendMessage();
        inputField.value = '';
    }
});
