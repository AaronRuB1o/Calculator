const container = document.getElementById('root');
if (!container) {
    console.error('Element with ID "root" not found.');
  } else {
    fetch('../template/calculator.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        container.innerHTML = html;
      })
      .catch(err => console.error("Error loading calculator.html:", err));
  }
  
// root.render('/template/calculator.html');

