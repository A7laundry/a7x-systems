/* eslint-disable @typescript-eslint/no-explicit-any */

export const mdxComponents: Record<string, React.ComponentType<any>> = {
  h1: ({ children }) => (
    <h1 className="mt-10 mb-4 font-serif text-4xl font-normal text-text-primary">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 mb-3 font-serif text-2xl font-normal text-text-primary">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 mb-2 text-xl font-semibold text-text-primary">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-text-secondary">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-text-secondary">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-text-secondary">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-accent-500 pl-4 italic text-text-muted">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-surface-2 px-1.5 py-0.5 text-sm text-accent-400">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-xl border border-border bg-surface-2 p-4 text-sm">
      {children}
    </pre>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a href={href} className="text-accent-400 underline underline-offset-2 hover:text-accent-500" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-text-primary">{children}</strong>
  ),
  hr: () => <hr className="my-8 border-border" />,
}
