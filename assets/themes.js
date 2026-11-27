const picker = document.querySelector('#theme');
const system = window.matchMedia('(prefers-color-scheme: dark)');
function applyTheme() {
  document.documentElement.className = picker.value === 'system'
    ? (system.matches ? 'dark' : 'light') : picker.value;
}
try {
  const saved = localStorage.getItem('hkksi-theme');
  if (Array.from(picker.options).some(option => option.value === saved)) picker.value = saved;
} catch {}
picker.addEventListener('change', () => {
  applyTheme();
  try { localStorage.setItem('hkksi-theme', picker.value); } catch {}
});
system.addEventListener('change', applyTheme);
applyTheme();
