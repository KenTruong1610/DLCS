// Countdown script: updates #days, #hours, #minutes, #seconds
(function(){
  // Set target departure date (YYYY, M-1, D, H, M, S)
  // Using 4 Dec 2025 08:00 local time as example
  const target = new Date(2025, 11, 18, 8, 0, 0); // month is 0-indexed: 11 = December

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');

  function pad(n){ return n.toString().padStart(2,'0'); }

  function update(){
    const now = new Date();
    let diff = target.getTime() - now.getTime();

    if(diff <= 0){
      // reached or passed
      daysEl && (daysEl.textContent = '00');
      hoursEl && (hoursEl.textContent = '00');
      minsEl && (minsEl.textContent = '00');
      secsEl && (secsEl.textContent = '00');
      clearInterval(timer);
      return;
    }

    const s = Math.floor(diff/1000);
    const days = Math.floor(s / (60*60*24));
    const hours = Math.floor((s % (60*60*24)) / (60*60));
    const minutes = Math.floor((s % (60*60)) / 60);
    const seconds = Math.floor(s % 60);

    daysEl && (daysEl.textContent = pad(days));
    hoursEl && (hoursEl.textContent = pad(hours));
    minsEl && (minsEl.textContent = pad(minutes));
    secsEl && (secsEl.textContent = pad(seconds));
  }

  // initial update
  update();
  const timer = setInterval(update, 1000);
})();
