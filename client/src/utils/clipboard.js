export function copyToClipboard(text) {
  try {
    navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    console.error('Clipboard error:', e);
    return false;
  }
}
