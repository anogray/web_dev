var path = require('path');
//let file1 = 'E:\OBS Studio\Videos\pattern_10.mkv'
//let file1 = 'E:\OBS Studio\Web_Dev\test_learn\doc_test1.ppt'
//let file1 = 'E:\OBS Studio\Web_Dev\test_learn\doc_test.zip'
let file1 = 'E:\OBS Studio\Web_Dev\test_learn\other_file.rtf'


//let extension = path.extname(file1);

//console.log(extension);

//let formats = new Set(['.mp3', '.mkv', 'jpeg'])
let formats = {'Documents':['.docx','.xlsx', '.ppt' , '.txt'],'Media':['.mkv','jpeg','.mp3'], 'Archives':['.zip']}
//let extenstion = path.extname(src);
//console.log(formats["Documents"][2])
//console.log(formats, typeof(formats))
//console.log(formats['Archives'])
// for(let i = 0;i<[key].length;i++)
// {console.log("thanks")}


let flag = 0;
for (let key in formats) 
{   for(let k=0;k<formats[key].length;k++)
    {    
        if(extension == formats[key][k])
        {
            console.log(key);
            flag = 1;
            break;
        }
    }
}
if(!flag)
    {
console.log('This file will go in others directory '+extension)
    }














// let flag = 0;
// for (let key in formats) 
// {    if(extension == formats[key])
//     {
//         console.log(key)
//         flag = 1;
//     }
// }
// if(!flag)
//     {
// console.log('This file will go in others directory '+extension)
//     }


/* if(cElem.isFile==true)
{
        let extenstion = path.extname(src)
        let srcPath = path.join(src,cElem.newName);
        var flag = 0;
for (let key in formats) 
{    if(extension == formats[key])
    {   
        let destPath = path.join(dest,key,cElem.oldName);
        fs.copyFileSync(srcPath,destPath);
        console.log(`${cElem.oldName} copied to dest`);
        console.log(key)
        flag = 1;
    }
}
if(!flag)
    {
        let destPath = path.join(dest,'Other',cElem.oldName);
        fs.copyFileSync(srcPath,destPath);
        console.log(`${cElem.oldName} copied to dest`);
    }
        
} */


// if(cElem.isFile==true)
// {
//         let extenstion = path.extname(src)
//         let srcPath = path.join(src,cElem.newName);
//         var flag = 0;
// for (let key in formats) 
// {    if(extension == formats[key])
//     {   
//         let destPath = path.join(dest,key,cElem.oldName);
//         fs.copyFileSync(srcPath,destPath);
//         console.log(`${cElem.oldName} copied to dest`);
//         console.log(key)
//         flag = 1;
//     }
// }
// if(!flag)
//     {
//         let destPath = path.join(dest,'Other',cElem.oldName);
//         fs.copyFileSync(srcPath,destPath);
//         console.log(`${cElem.oldName} copied to dest`);
//     }
        
// }


/* if(cElem.isFile==true)
{
 let srcPath = path.join(src,cElem.newName);
 let destPathe = path.join(dest,cElem.oldName);
 let extension = path.extname(destPathe);
 let flag = 0;
    for (let key in formats) 
    {   for(let k=0;k<formats[key].length;k++)
        {    
            if(extension == formats[key][k])
            {   let destPath = path.join(dest,key,cElem.oldName);
                fs.copyFileSync(srcPath,destPath);
                console.log(`${cElem.oldName} copied to dest`);
                flag = 1;
                break;
            }
        }
    }
    if(!flag)
    {
            let destPath = path.join(dest,'Other',cElem.oldName);
            fs.copyFileSync(srcPath,destPath);
            console.log(`${cElem.oldName} copied to dest`);
    }
} */






