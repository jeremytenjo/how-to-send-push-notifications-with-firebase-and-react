export default function registerServiceWorker({ isProdMode }) {
  return isProdMode
    ? `
  <script>
    if (typeof window !== 'undefined') {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js', { scope: '/' })
        })
      }
    }
  </script>
`
    : ''
}
