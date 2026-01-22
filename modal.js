const md = window.markdownit();
    
    function openModal(filePath) {
      fetch(filePath)
        .then(response => response.text())
        .then(markdown => {
          const htmlContent = md.render(markdown);
          document.getElementById('modal-content').innerHTML = htmlContent;
          document.getElementById('fullContentModal').style.display = 'block';
        })
        .catch(error => {
          document.getElementById('modal-content').innerHTML = '<p>Error loading file: ' + error.message + '</p>';
        });
    }
    
    function closeModal() {
      document.getElementById('fullContentModal').style.display = 'none';
    }
    
    // Close modal when clicking outside of it
    window.onclick = function(event) {
      const modal = document.getElementById('fullContentModal');
      if (event.target === modal) {
        closeModal();
      }
    }