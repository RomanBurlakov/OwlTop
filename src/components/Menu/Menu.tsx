import React from 'react';
import { getMenu } from '@/api/menu';

export default async function Menu() {
	const menu = await getMenu(0);

	return (
		<ul>
			{menu.map((e, i) => {
				return (
					<li key={i}>
						{e._id.secondCategory}
						{e.pages.map((e2, i) => {
							return (
								<li key={i}>
									{e2.category}
								</li>
							);
						})}
					</li>
				);
			})}
		</ul>
	);
}