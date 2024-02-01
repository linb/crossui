(xui.Locale.en||(xui.Locale.en={})).inline={
    $_$:1,
    ok:'O K',
    cancel:'Cancel',
    set:'SET',
    today:'Today',
    now:'Now',
    yes:'Yes',
    no:'No',
    noFlash:'No Flash PlugIn!',
    transparent:'transparent',
    required:'Required field',
    required2:'There is required field need to be filled out',
    invalid:'Invalid field',
    invalid2:'There is invalid field'
};
xui.Locale.en.date={
    WEEKS:{
        '0':'Su',
        '1':'Mo',
        '2':'Tu',
        '3':'We',
        '4':'Th',
        '5':'Fr',
        '6':'Sa',
        '7':'WK'
    },
    VIEWS:{
        '10 ms':'10 millisecond',
        '100 ms':'100 milliseconds',
        '1 s':'1 second',
        '10 s':'10 seconds',
        '1 n':'1 minute',
        '5 n':'5 minutes',
        '10 n':'10 minutes',
        '30 n':'30 minutes',
        '1 h':'1 hour',
        '2 h':'2 hours',
        '6 h':'6 hours',
        '1 d':'1 day',
        '1 w':'1 week',
        '15 d':'15 days',
        '1 m':'1 month',
        '1 q':'1 quarter',
        '1 y':'1 year',
        '1 de':'10 years',
        '1 c':'1 century'
    },
    MONTHS:{
        '1':'Jan.',
        '2':'Feb.',
        '3':'Mar.',
        '4':'Apr.',
        '5':'May.',
        '6':'Jun.',
        '7':'Jul.',
        '8':'Aug.',
        '9':'Sep.',
        '10':'Oct.',
        '11':'Nov.',
        '12':'Dec.'
    },
    MS:'ms',
    S:'s',
    N:'n',
    H:'h',
    D:'d',
    W:'w',
    M:'m',
    Q:'q',
    Y:'y',
    DE:'de',
    C:'c',
    HN:function(n,a,b){return (a.length==1?'0':'')+a+":"+(b.length==1?'0':'')+b},
    DHN:function(n,a,b,c){return a +'th '+ (b.length==1?'0':'')+b + ":" +(c.length==1?'0':'')+c },
    MDHN:function(n,a,b,c,d){return b+ 'th ' + xui.getRes('date.MONTHS.'+a) + " " + (c.length==1?'0':'')+c + ":" + (d.length==1?'0':'')+d},
    HNS:function(n,a,b,c){return (a.length==1?'0':'')+a+":"+(b.length==1?'0':'')+b+":"+(c.length==1?'0':'')+c},
    HNSMS:function(n,a,b,c,d){return (a.length==1?'0':'')+a+":"+(b.length==1?'0':'')+b+":"+(c.length==1?'0':'')+c+ ' ' +(d.length==1?'00':d.length==2?'0':'')+d},
    YM:function(n,a,b){return xui.getRes('date.MONTHS.'+b)+' '+a},
    YQ:function(n,a,b){return b+'Q ' + a},
    YMD:function(n,a,b,c){return a+'-'+(b.length==1?'0':'')+b+'-'+(c.length==1?'0':'')+c},
    YMD2:function(n,a,b,c){return xui.getRes('date.MONTHS.'+b)+' '+c+', '+a},
    MD:function(n,a,b){return xui.getRes('date.MONTHS.'+a) + " "+ b},
    YMDH:function(n,a,b,c,d){return a+'-'+(b.length==1?'0':'')+b+'-'+(c.length==1?'0':'')+c + ' ' +(d.length==1?'0':'')+d+':00'},
    YMDHN:function(n,a,b,c,d,e){return a+'-'+(b.length==1?'0':'')+b+'-'+(c.length==1?'0':'')+c + ' ' +(d.length==1?'0':'')+d+":"+(e.length==1?'0':'')+e},
    YMDHNS:function(n,a,b,c,d,e,f){return a+'-'+(b.length==1?'0':'')+b+'-'+(c.length==1?'0':'')+c + ' ' +(d.length==1?'0':'')+d+":"+(e.length==1?'0':'')+e+":"+(f.length==1?'0':'')+f},
    ALL:function(n,a,b,c,d,e,f,g){return a+'-'+(b.length==1?'0':'')+b+'-'+(c.length==1?'0':'')+c + ' ' +(d.length==1?'0':'')+d+":"+(e.length==1?'0':'')+e+":"+(f.length==1?'0':'')+f +" " +(g.length==1?'00':g.length==2?'0':'')+g}
};
xui.Locale.en.color={
  LIST:{
    "FFFFFF":"White",
    "FFFFF0":"Ivory",
    "FFFFE0":"Light Yellow",
    "FFFF00":"Yellow",
    "FFFAFA":"Snow",
    "FFFAF0":"Floral White",
    "FFFACD":"Lemon Chiffon",
    "FFF8DC":"Cornislk",
    "FFF5EE":"Sea Shell",
    "FFF0F5":"Lavender Blush",
    "FFEFD5":"Papaya Whip",
    "FFEBCD":"Blanched Almond",
    "FFE4E1":"Misty Rose",
    "FFE4C4":"Bisque",
    "FFE4B5":"Moccasin",
    "FFDEAD":"Navajo White",
    "FFDAB9":"Peach Puff",
    "FFD700":"Gold",
    "FFC0CB":"Pink",
    "FFB6C1 ":"Light Pink",
    "FFA500":"Orange",
    "FFA07A":"Light Salmon",
    "FF8C00":"Dark Orange",
    "FF7F50":"Coral",
    "FF69B4":"Hot Pink",
    "FF6347":"Tomato",
    "FF4500":"Orange Red",
    "FF1493":"Deep Pink",
    "FF00FF":"Magenta",
    "FF0000":"Red",
    "FDF5E6":"Old Lace",
    "FAFAD2":"Light Goldenrod Yellow",
    "FAF0E6":"Linen",
    "FAEBD7":"Antique White",
    "FA8072":"Salmon",
    "F8F8FF":"Ghost White",
    "F5FFFA":"Medium Spring Green",
    "F5F5F5":"White Smoke",
    "F5DEB3":"Wheat",
    "F4A460":"Sandy Brown",
    "F0FFFF":"Azure",
    "F0FFF0":"Honeydew",
    "F0F8FF":"Alice Blue",
    "F0E68C":"Khaki",
    "F08080":"Light Coral",
    "EEE8AA":"Pale Godenrod",
    "EE82EE":"Violet",
    "E9967A":"Dark Salmon",
    "E6E6FA":"Lavender",
    "E1FFFF":"Light Cyan",
    "DEB887":"Bruly Wood",
    "DDA0DD":"plum",
    "DCDCDC":"Gainsboro",
    "DC143C":"Crimson",
    "DB7093":"Pale Violet Red",
    "DAA520":"Gold Enrod",
    "DA70D6":"Orchid",
    "D8BFD8":"Thistle",
    "D3D3D3":"Light Grey",
    "D2B48C":"Tan",
    "D2691E":"Chocolate",
    "CD853F":"Peru",
    "CD5C5C":"Indian Red",
    "C71585":"Medium Violet Red",
    "C0C0C0":"Silver",
    "BDB76B":"Dark Khaki",
    "BC8F8F":"Rosy Brown",
    "BA55D3":"Medium Orchid",
    "B22222":"Fire Brick",
    "B0E0E6":"Pow Der Blue",
    "B0C4DE":"Light Steel Blue",
    "AFEEEE":"Pale Turquoise",
    "ADFF2F":"Green Yellow",
    "ADD8E6":"Light BLue",
    "A9A9A9":"Dark Gray",
    "A52A2A":"Brown",
    "A0522D":"Sienna",
    "9932CC":"Dark Orchid",
    "98FB98":"Pale Green",
    "9400D3":"Dark Voilet",
    "9370DB":"Medium Purple",
    "90EE90":"Light Green",
    "8FBC8F":"Dark Sea Green",
    "8B4513":"Saddle Brown",
    "8B008B":"Dark Magenta",
    "8B0000":"Dark Red",
    "8A2BE2":"Blue Violet",
    "87CEFA":"Light Sky Blue",
    "87CEEB":"Sky Blue",
    "808080":"Gray",
    "808000":"Olive",
    "800080":"Purple",
    "800000":"Maroon",
    "7FFFAA":"Auqamarin",
    "7FFF00":"Chartreuse",
    "7CFC00":"Lawn Green",
    "7B68EE":"Medium Slate Blue",
    "778899":"Light Slate Gray",
    "708090":"Slate Gray",
    "6B8E23":"Beige",
    "6A5ACD":"Slate Blue",
    "696969":"Dim Gray",
    "6495ED":"Cornflower Blue",
    "5F9EA0":"Cadet Blue",
    "556B2F":"Olive Drab",
    "4B0082":"Indigo",
    "48D1CC":"Medium Turquoise",
    "483D8B":"Dark Slate Blue",
    "4682B4":"Steel Blue",
    "4169E1":"Royal Blue",
    "40E0D0":"Turquoise",
    "3CB371":"Spring Green",
    "32CD32":"Lime Green",
    "2F4F4F":"Dark Slate Gray",
    "2E8B57":"Sea Green",
    "228B22":"Forest Green",
    "20B2AA":"Light Sea Green",
    "1E90FF":"Doder Blue",
    "191970":"Midnight Blue",
    "00FFFF":"Aqua",
    "00FF7F":"Mint Cream",
    "00FF00":"Lime",
    "00FA9A":"Medium Aquamarine",
    "00CED1":"Dark Turquoise",
    "00BFFF":"Deep Sky Blue",
    "008B8B":"Dark Cyan",
    "008080":"Teal",
    "008000":"Green",
    "006400":"Dark Green",
    "0000FF":"Blue",
    "0000CD":"Medium Blue",
    "00008B":"Dark Blue",
    "000080":"Navy",
    "000000":"Black"
  }
};
xui.Locale.en.editor={
    bold:'Bold',
    italic:'Italic',
    underline:'Underline',
    strikethrough:'Strikethrough',
    subscript:'Subscript',
    superscript:'Superscript',
    forecolor:'Font Color',
    bgcolor:'Background Color',
    left:'Align Left',
    center:'Align Center',
    right:'Align Right',
    justify:'Justify',
    indent:'Indent',
    outdent:'Outdent',
    ol:'Ordered List',
    ul:'Unordered List',
    hr:'Insert Horizontal Rule',
    unlink:'Remove Link',
    removeformat:'Remove Formatting',
    html:"HTML Editor",

    insertimage:'Insert Image',
    insertimage2:'Image URL:',
    createlink:'Insert Link',
    createlink2:'Link URL:',
    fontsize:'Font Size',
    fontname:'Font Family',
    formatblock:'Font Block',
    fontsizeList:'1,1(8pt);2,2(10pt);3,3(12pt);4,4(14pt);5,5(18pt);6,6(24pt);...,...',
    fontnameList:'Arial;Arial Black;Comic Sans MS;Courier New;Impact;Tahoma;Times New Roman;Trebuchet MS;Verdana;...',
    formatblockList:'p,Normal;h1,Heading1;h2,Heading2;h3,Heading3;h4,Heading4;h5,Heading5;h6,Heading6;...,...'
};