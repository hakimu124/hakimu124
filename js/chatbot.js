// ===== Chatbot =====

const chatbotBtn = document.getElementById('chatbotBtn');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

// Toggle Chatbot
if (chatbotBtn && chatbot) {
    chatbotBtn.addEventListener('click', () => {
        chatbot.classList.toggle('active');
        if (chatbot.classList.contains('active')) {
            chatInput.focus();
        }
    });
}

if (chatbotClose && chatbot) {
    chatbotClose.addEventListener('click', () => {
        chatbot.classList.remove('active');
    });
}

// FAQ Responses
const faqResponses = {
    'menu': "Our menu features authentic East African dishes including Nyama Choma, Kenyan Pilau, Grilled Chicken, Pizza, Chips, Burgers, and more! Browse the full menu on our Menu page.",
    'price': "Our dishes range from KES 50 (Mineral Water) to KES 850 (Nyama Choma, Pizza Large). Most main dishes are between KES 450-850.",
    'hours': "We're open Monday to Friday from 9:00 AM to 10:00 PM. Saturday and Sunday from 10:00 AM to 9:00 PM.",
    'location': "We have three locations: Thika (Kenyatta Highway), Nakuru (Kenyatta Avenue), and Bungoma (Moi Avenue).",
    'reservation': "You can make a reservation by calling us at 0743 462086 or using the contact form on our Contact page.",
    'delivery': "Yes! Contact us for delivery options and fees based on your location.",
    'payment': "We accept M-Pesa and cash payments at our branches.",
    'special': "Our most popular dishes are Nyama Choma, Pizza, and our refreshing Fresh Juice!",
    'vegetarian': "We have several vegetarian-friendly options including Chips, Pizza, Fresh Juice, and Mineral Water.",
    'contact': "You can reach us at 0743 462086 or email info@bavarestaurant.co.ke."
};

const defaultResponses = [
    "I'd love to help! Could you rephrase your question about Bava Restaurant?",
    "For specific inquiries, you can call us at 0743 462086.",
    "Our team is here to help! Visit our Menu page to explore our delicious dishes.",
    "Great question! For the most accurate info, please contact us directly."
];

// Process user message
function processMessage(message) {
    const lowerMessage = message.toLowerCase();

    for (const [keyword, response] of Object.entries(faqResponses)) {
        if (lowerMessage.includes(keyword)) {
            return response;
        }
    }

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Add message to chat
function addMessage(text, type = 'bot') {
    if (!chatbotMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Send message
function sendMessage() {
    if (!chatInput) return;

    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    chatInput.value = '';

    // Typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot typing';
    typingDiv.innerHTML = '<p>Typing...</p>';
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Response delay
    setTimeout(() => {
        typingDiv.remove();
        const response = processMessage(text);
        addMessage(response, 'bot');
    }, 800 + Math.random() * 400);
}

// Event listeners
if (chatSend) {
    chatSend.addEventListener('click', sendMessage);
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Initial greeting
let chatbotOpened = false;
if (chatbotBtn) {
    chatbotBtn.addEventListener('click', () => {
        if (!chatbotOpened) {
            chatbotOpened = true;
            setTimeout(() => {
                addMessage("Hi! I'm your Bava AI assistant. Ask me about our menu, prices, hours, or how to order!", 'bot');
            }, 500);
        }
    });
}