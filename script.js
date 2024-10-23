document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
      const faqItem = item.parentElement;
      faqItem.classList.toggle('active');
    });
  });
  