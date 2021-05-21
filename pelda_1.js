const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti' ];

let idx = nameExists(names, "Gábor");
console.log(idx);

function nameExists(names, nameToFind) {
	let result = names.findIndex((name, idx) => {
  	if (name == nameToFind) {
    	return idx;
    }
    return false;
  });

  return result;
}