/**
 * Placeholder de rendu Markdown.
 * Par défaut, on renvoie le markdown brut encapsulé dans <pre>.
 * Remplacez ce module par votre pipeline remark/rehype/MDX.
 */
export function renderMarkdown(md: string): string {
  const escaped = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return `<pre>${escaped}</pre>`;
}
