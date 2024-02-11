import ReactMarkdown from 'react-markdown';
import { Txt } from '../shared/Txt';
import 'react-markdown-editor-lite/lib/index.css';

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h1(props) {
          return (
            <Txt typography="h1" className="mt-14">
              {props.children}
            </Txt>
          );
        },
        h2(props) {
          return (
            <Txt typography="h2" className="mt-14">
              {props.children}
            </Txt>
          );
        },
        h3(props) {
          return (
            <Txt typography="h3" className="mt-14">
              {props.children}
            </Txt>
          );
        },
        h4(props) {
          return (
            <Txt typography="h4" className="mt-14">
              {props.children}
            </Txt>
          );
        },
        p(props) {
          return <Txt typography="p">{props.children}</Txt>;
        },
        blockquote(props) {
          return <Txt typography="blockquote">{props.children}</Txt>;
        },
        code(props) {
          return <Txt typography="line-code">{props.children}</Txt>;
        },
        small(props) {
          return <Txt typography="small">{props.children}</Txt>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
