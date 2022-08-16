import instanceJson from './instances_default.json' assert {type: 'json'};
import xywhJson from 'jsonfile';

const fileName = instanceJson.images;
const instances = instanceJson.annotations;
const cat = instanceJson.categories

let xywh = [];

function findCategory(id) {
    for (let cagoria = 0; cagoria < cat.length; cagoria++) {   
        if (cat[cagoria].id === id) {
            return cat[cagoria].name;
        }
    }
}

for (let i = 0; i < instances.length; i++) {
    for (let j = 0; j < fileName.length; j++) {
        let b = fileName[j]
            if(b.id === instances[i].id){
            xywh.push({
                ImageID:b.file_name,
                category:findCategory(instances[i].category),
                X:instances[i].bbox[0], 
                Y:instances[i].bbox[1], 
                W:instances[i].bbox[2], 
                H:instances[i].bbox[3]
            });
    
        }
    }
}

xywhJson.writeFile('./xywh.json', xywh, function (err) {
    console.error(err)
},
console.log('xywh.json saved'));


