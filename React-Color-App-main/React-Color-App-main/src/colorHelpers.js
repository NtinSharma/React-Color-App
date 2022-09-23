import chroma from 'chroma-js'

const Levels =[50,100,200,300,400,500,600,700,800,900];  //! Size -> 10

function generatePalette(starterPalette){ 
    const newPalette ={ 
        paletteName:starterPalette.paletteName, 
        id:starterPalette.id, 
        emoji:starterPalette.emoji, 
        colors:{}  
        //* Initially I have made the Colors a Empty Object in which I can store the multiple Array for Different Levels
    };
    //* Now we are filling up our Empty Colors objects with Empty Array.
    for(let level of Levels){
        newPalette.colors[level]=[];
    }
    //* So now we have Created a Object of Empty Array which will look like this
    //* colors:{
    //*     50:[],100:[],200:[],300:[],400:[],500:[],600:[],700:[],800:[],900:[]
    //*   }
    //*Now we just have to fill them up.

    for(let color of starterPalette.colors){ 
        //* So For each Color we are giving out 10 different Colors 
        let scale = generateScale(color.color,10).reverse();  //* It will gives us 10 diff. color now we have to store them.
        //* WE need to reverse them cuz our range is from dark to white but we want color in order of white to  dark
        //* scale : [#hjh,#vhj,#vhg,.....]
        //* levels : [50,100,200,........]
        //* So as u can see the both level & scale are in sync.
        for(let i in scale){ 
            newPalette.colors[Levels[i]].push({
                name:`${color.name} ${Levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex :scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb","rgba").replace(")",",1.0)")
            });
        }
    }
    return newPalette;

}

//* To generate a Numbers of Colors from one Color we first have to give it a Range 
//* Range would Look like this,
//* [black,midColor,white] <- So this a range by using this the chroma can generate the colors
//* But if we give the black colors then all our color are more on the dark side.
//* [midColor.darken(1.4),midColor,white]
function getRange(hexColor){ 
    const startClr = chroma(hexColor).darken(1.4).hex();
    const endClr = "#fff";
    return [startClr,hexColor,endClr];
}


//* So the Below Function gives us the 10 colors 
//* chroma.scale(<Accepts the Range>) <- It will gives us the scale
//* Its mode is Lightness A-B
//* .color(noOfColor) <- It will give us 10 different colors
function generateScale(hexColor,noOfColors){ 
    return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(noOfColors);
}

export  {generatePalette};