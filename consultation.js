document.getElementById('send-button').addEventListener('click', function () {
    const input = document.getElementById('chat-input');
    const messageText = input.value.trim();
  
    if (messageText) {
      const chatMessages = document.querySelector('.chat-messages');
      const newMessage = document.createElement('div');
      newMessage.classList.add('message', 'user');
      newMessage.innerHTML = `
        <p class="sender">Anda</p>
        <p class="text">${messageText}</p>
      `;
      chatMessages.appendChild(newMessage);
      input.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll ke pesan terbaru
    }
    document.addEventListener('DOMContentLoaded', function () {
      const menuIcon = document.getElementById('menu-icon');
      const navLinks = document.getElementById('nav-links');
    
      menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
      });
    });
  });