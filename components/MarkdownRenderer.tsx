import { remark } from 'remark';
import html from 'remark-html';

interface MarkdownRendererProps {
  content: string;
}

export default async function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div
      className="prose prose-invert"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
