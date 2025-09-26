// Taskbar Clock (Retro Look)
const clock = document.getElementById('clock');
function pad(n){ return (n<10?'0':'') + n }
function tick(){
  const d = new Date();
  clock.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes());
}
tick(); setInterval(tick, 10000);
