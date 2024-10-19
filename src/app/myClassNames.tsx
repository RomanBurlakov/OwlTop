type ClassName = string | number | boolean | undefined | null;
type ClassNameObject = { readonly [key: string]: ClassName };
type Args = ClassName | ClassNameObject | Args[];
type Styles = { readonly [key: string]: string };

function classNames(...args: Args[]): string {
	const classes: ClassName[] = [];
	args.forEach(e => {
		if (e) {
			if (typeof e === 'string' || typeof e === 'number') {
				classes.push(e);
			} else if ((Array.isArray(e))) {
				classes.push(classNames(...e));
			} else if (typeof e === 'object') {
				for (const key in e) {
					if (e[key]) {
						classes.push(key);
					}
				}
			}
		}
	});
	return classes.join(' ');
}

function makeParams(styles: Styles, ...args: (ClassName | ClassNameObject)[]): ClassNameObject[] {
	const ClassNameObjects: ClassNameObject[] = [];
	args.forEach(e => {
		if (e && typeof e !== 'boolean') {
			if (typeof e === 'object') {
				for (const key in e) {
					if (e[key]) {
						ClassNameObjects.push({ [styles[key]]: true });
					}
				}
			} else if (styles[e]) {
				ClassNameObjects.push({ [styles[e]]: e });
			}
		}
	});
	return ClassNameObjects;
}

export { classNames as cn, makeParams as mp };