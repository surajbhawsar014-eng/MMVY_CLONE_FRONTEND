// Same behaviour as the original handleRedirect()
export function handleRedirect(title, targetUrl) {
  alert('Redirecting to: ' + title)
  if (targetUrl && !targetUrl.startsWith('#')) {
    window.open(targetUrl, '_blank', 'noopener,noreferrer')
  }
}
