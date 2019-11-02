

import test from 'ava';
import uid from '../dist/index';

test('try-collision', async t => {
	const map = new Map();
	const generatorCount = 1000;
	const valueCount = 2000;
	const totalCount = generatorCount * valueCount;
	let testCount = 0;

	const finished = new Promise((resolve, reject) => {
		for (var i = 0; i < generatorCount; i++) {
			(async () => {
				try {
					const generator = uid.generator();
					for (var i = 0; i < valueCount; i++) {
						(async () => {
							const uid = generator.next().value;
							if (map.has(uid)) { resolve('FAILED'); }
							map.set(uid, true);
							testCount++;
							if (testCount === totalCount) { resolve('PASSED'); }
						})()
					}

				}
				catch (err) { console.log(err); reject(err); }
			})();
		}
	});

	const received = await finished;
	t.is(received, 'PASSED');
});
