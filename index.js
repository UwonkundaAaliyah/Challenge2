const mark = document.querySelector('#ma');
mark.addEventListener('click', () => {
  const unread = document.querySelectorAll('.grey');
  unread.forEach(notification => {
    notification.classList.toggle('gray');
  });
  const unreadCount = document.querySelector('.blu');
  unreadCount.innerText = '0';
});