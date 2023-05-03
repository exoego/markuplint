import type { ExampleData } from '../modules/examples';
import type { FC } from 'react';

import { examples } from '../modules/examples';

type Props = { onSelect?: (files: ExampleData) => void; disabled?: boolean };

export const ExampleSelector: FC<Props> = ({ onSelect, disabled = false }) => {
	return (
		<ul className="grid gap-12 px-8 pt-4 pb-12">
			{Object.keys(examples)
				.sort()
				.map(categoryKey => {
					const category = examples[categoryKey];
					return (
						<li key={categoryKey}>
							<h3 className="text-lg font-bold mb-4">{category.metadata.title}</h3>
							<ul className="grid gap-3">
								{Object.keys(category.examples)
									.sort()
									.map(exampleKey => {
										const example = category.examples[exampleKey];
										return (
											<li key={exampleKey}>
												<button
													className="px-4 py-2 shadow rounded border border-gray-300 hover:shadow-md focus:shadow-md"
													disabled={disabled}
													onClick={() => {
														onSelect?.(example);
													}}
												>
													{example.metadata.title}
												</button>
											</li>
										);
									})}
							</ul>
							{category.metadata.docLink && (
								<p className="mt-4">
									<a
										href={category.metadata.docLink}
										target="_blank"
										rel="noreferrer"
										className="text-ml-blue-darker underline external-link"
									>
										{category.metadata.docText}
									</a>
								</p>
							)}
						</li>
					);
				})}
		</ul>
	);
};
