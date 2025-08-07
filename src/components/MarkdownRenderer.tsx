import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownRendererProps {
  children: string;
}

const MarkdownRenderer = ({ children }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        p: ({ node, ...props }) => <p className="text-muted-foreground leading-relaxed mb-4" {...props} />,
        strong: ({ node, ...props }) => <strong className="font-semibold text-foreground" {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc list-inside text-muted-foreground space-y-1" {...props} />,
        li: ({ node, ...props }) => <li className="text-muted-foreground" {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;