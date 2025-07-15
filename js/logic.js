(async ()=> {
  const container = document.getElementById('root');
  if (!container) {
    console.error('Element with ID "root" not found.');
    return; 
  }

  try {
    const resp = await fetch('../template/calculator.html');
    if (!resp.ok) throw new Error(`Template fetch failed: ${resp.status}`);
    container.innerHTML = await resp.text();
  } catch (err) {
    console.error('Error loading calculator.html:', err);
    return;         
  }

  const padHolder = document.getElementById('add_boxes');
  if (!padHolder) {
    console.error('Element with ID "add_boxes" not found inside template.');
    return;
  }

  for (let i = 1; i <= 9; i++) {
    const box = document.createElement('div');
    box.classList.add('numBox');
    box.textContent = i;
    padHolder.appendChild(box);

    if (i === 9) {
      const zeroBox = box.cloneNode(true);
      zeroBox.textContent = 0;
      padHolder.appendChild(zeroBox);
    }

  }  
})()