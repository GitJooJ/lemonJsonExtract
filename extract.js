import instanceJson from './instances_default.json' assert {type: 'json'};
import xywhJson from 'jsonfile';

const instances = instanceJson.annotations;
let xywh = [];

for (let i = 0; i < instances.length; i++) {
    xywh.push({
        ID:instances[i].id,
        X:instances[i].bbox[0], 
        Y:instances[i].bbox[1], 
        W:instances[i].bbox[2], 
        H:instances[i].bbox[3]
    });
}

xywhJson.writeFile('./xywh.json', xywh, function (err) {
    console.error(err)
},
console.log('xywh.json saved'));


