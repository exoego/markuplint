import type { MLASTAttr, MLASTNode } from '@markuplint/ml-ast';

export function nodeListToDebugMaps(nodeList: MLASTNode[], withAttr = false) {
	return nodeList
		.map(n => {
			const r: string[] = [];
			if (!n.isGhost) {
				r.push(tokenDebug(n));
				if (withAttr && 'attributes' in n) {
					r.push(...attributesToDebugMaps(n.attributes).flat());
				}
			} else {
				r.push(`[N/A]>[N/A](N/A)${n.nodeName}: ${visibleWhiteSpace(n.raw)}`);
			}
			return r;
		})
		.flat();
}

export function attributesToDebugMaps(attributes: MLASTAttr[]) {
	return attributes.map(n => {
		const r = [
			tokenDebug({
				...n,
				name: n.type === 'html-attr' ? n.name.raw : n.raw,
			}),
		];
		if (n.type === 'html-attr') {
			r.push(`  ${tokenDebug(n.spacesBeforeName, 'bN')}`);
			r.push(`  ${tokenDebug(n.name, 'name')}`);
			r.push(`  ${tokenDebug(n.spacesBeforeEqual, 'bE')}`);
			r.push(`  ${tokenDebug(n.equal, 'equal')}`);
			r.push(`  ${tokenDebug(n.spacesAfterEqual, 'aE')}`);
			r.push(`  ${tokenDebug(n.startQuote, 'sQ')}`);
			r.push(`  ${tokenDebug(n.value, 'value')}`);
			r.push(`  ${tokenDebug(n.endQuote, 'eQ')}`);
			r.push(`  isDirective: ${!!n.isDirective}`);
			r.push(`  isDynamicValue: ${!!n.isDynamicValue}`);
		}
		if (n.potentialName != null) {
			r.push(`  potentialName: ${visibleWhiteSpace(n.potentialName)}`);
		}
		if (n.type === 'html-attr' && n.candidate) {
			r.push(`  candidate: ${visibleWhiteSpace(n.candidate)}`);
		}
		return r;
	});
}

function tokenDebug<
	N extends {
		startOffset: number;
		endOffset: number;
		startLine: number;
		endLine: number;
		startCol: number;
		endCol: number;
		nodeName?: string;
		name?: string;
		potentialName?: string;
		type?: string;
		raw: string;
	},
>(n: N, type = '') {
	return `[${n.startLine}:${n.startCol}]>[${n.endLine}:${n.endCol}](${n.startOffset},${n.endOffset})${
		n.nodeName || n.potentialName || n.name || n.type || type
	}: ${visibleWhiteSpace(n.raw)}`;
}

function visibleWhiteSpace(chars: string) {
	return chars.replace(/\n/g, '⏎').replace(/\t/g, '→').replace(/\s/g, '␣');
}
