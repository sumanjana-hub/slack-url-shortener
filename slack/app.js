const { WebClient } = require("@slack/web-api");

const SLACK_TOKEN = "xoxb-6691926275538-6692224839442-Zz54RNqZ6wjjvzNsCJYO8vBC";
const CHANNEL_ID = "C06M47U4Q56";

async function sendMessage(message) {
    try {
      
        const webClient = new WebClient(SLACK_TOKEN);

       
        const result = await webClient.chat.postMessage({
            text: message,
            channel: CHANNEL_ID
        });

       
        console.log('Message sent:', result);
    } catch (error) {
       
        console.error('Error sending message to Slack:', error);
    }
}


// Call the function to send the test message
sendMessage("hello token");
