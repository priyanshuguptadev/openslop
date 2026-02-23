import {marked} from 'marked';
import TerminalRenderer from 'marked-terminal';

const renderer = new TerminalRenderer();

marked.setOptions({
	renderer: renderer as any,
});

export function renderMarkdown(md: string): string {
	return marked.parse(md) as string;
}
