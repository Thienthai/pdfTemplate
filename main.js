function getBase64Image(img) {
  // Create an empty canvas element
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  // Copy the image contents to the canvas
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  // Get the data-URL formatted image
  // Firefox supports PNG and JPEG. You could check img.src to
  // guess the original format, but be aware the using "image/jpg"
  // will re-encode the image.
  var dataURL = canvas.toDataURL("image/png");


  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

var x = document.createElement("IMG");
x.setAttribute("src","images/scn.png")
var dataImg = getBase64Image(x)

var dd = {
  footer: {
    columns: [
      { 
        margin:[50,0,0,0],
        text: 'Buyers Sign: ______________'
      },
      { 
        text: 'Seller Sign: ______________',
        margin:[30,0,0,0],
      },
      {
        text: 'Authorities Sign: ______________' 
      }
    ]
  },
	content: [
    {
      columns: [
        {
          
          image: "data:image/png;base64," + dataImg,
          width: 100,
          height: 100,
          
        },
        [
            {
              text: 'Sachanon Textile', 
              style: 'header',
              margin: [10,0,0,0],
            },
            {
              text: '43 moou 6 soi 70/4 Phrapradang Phrasamutjaedee Samutprakarn 10140', 
              style: 'subheader',
              margin: [10,3,0,0],
            },
            {
              text: 'Tel: 02-463-8653, 089-788-5439', 
              style: 'subheader',
              margin: [10,3,0,0],
            },
        ]         
      ],
    },
    {
      columns: [
        {
          
          text: "Tax Issue No: 3449671345",
          margin: [0,10,0,0],
          fontSize: 11,
          decoration: 'underline'
        },
        {
          text: "Invoice",
          fontSize: 13,
          margin: [60,7,0,0],
          decoration: 'underline',
          bold: 'true'
        },
        [
          {
            text: "Invoice No: AA098651Z",
            margin: [60,0,0,0],
            fontSize: 10,
            decoration: 'underline'
          },
          {
            text: "Date: 01/05/2562",
            margin: [60,3,0,0],
            fontSize: 10,
            decoration: 'underline'
          },
        ]       
      ],
    },
    [
      {
        margin: [0,10,0,0],
        text: "Name: Thienthai Chotchaicharin",
        fontSize: 10,
        decoration: 'underline'
      },
      {
        columns: [
          {
            margin: [0,2,0,0],
            text: "Addess: 99/414 Place and Park Prachautid 90 Phrasamutjaedee Samutprakarn 10290",
            decoration: 'underline',
            fontSize: 10,
            width: 280 
          },
        ]
      }
    ],
		{
		  margin: [0,20,0,8],
			style: 'tableExample',
			table: {
			    widths: [50, 160, 50, 50, 153],
				body: [
            [
              {text: 'No.', bold: 'true', style: 'tableHeader'}, 
              {text: 'Products', bold: 'true', style: 'tableHeader'}, 
              {text: 'Qantity', bold: 'true', style: 'tableHeader'}, 
              {text: 'Price', bold: 'true', style: 'tableHeader'},
              {text: 'Total Price', bold: 'true', style: 'tableHeader'}
            ],
					[{text:'Sample value 1', fontSize:10}, {text:'Sample value 2', fontSize:10}, {text:'Sample value 3', fontSize:10},{text:'Sample value 4', fontSize:10},{text:'Sample value 5', fontSize:10}],
					[{text:'Sample value 1', fontSize:10}, {text:'Sample value 2', fontSize:10}, {text:'Sample value 3', fontSize:10},{text:'Sample value 4', fontSize:10},{text:'Sample value 5', fontSize:10}],
					[{text:'Sample value 1', fontSize:10}, {text:'Sample value 2', fontSize:10}, {text:'Sample value 3', fontSize:10},{text:'Sample value 4', fontSize:10},{text:'Sample value 5', fontSize:10}],
					[{text:'Sample value 1', fontSize:10}, {text:'Sample value 2', fontSize:10}, {text:'Sample value 3', fontSize:10},{text:'Sample value 4', fontSize:10},{text:'Sample value 5', fontSize:10}],
					[{text:'Sample value 1', fontSize:10}, {text:'Sample value 2', fontSize:10}, {text:'Sample value 3', fontSize:10},{text:'Sample value 4', fontSize:10},{text:'Sample value 5', fontSize:10}]
				]
			},
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex % 2 === 0) ? '#eeeeff' : null;
				}
			}
    },
    {
      columns: [
        {
          margin: [0,5,0,0],
          text: "Remark: This is my remark on this invoice slip",
          fontSize: 11
        },
        [
          {
            text: "Discount: 3%",
            alignment: 'right',
            fontSize: 11,
            bold: 'true',
            decoration: 'underline',
            margin: [5,0,7,3],
          },
          {
            text: "Vat: 50 Baht",
            alignment: 'right',
            fontSize: 11,
            bold: 'true',
            decoration: 'underline',
            margin: [0,0,7,3],
          },
          {
            text: "Total: 2000 Baht",
            alignment: 'right',
            fontSize: 11,
            bold: 'true',
            decoration: 'underline',
            margin: [0,0,7,0],
          }
        ]
      ]
    },
  ],
	styles: {
		header: {
			fontSize: 14,
			bold: true
		},
		subheader: {
			fontSize: 10,
			bold: false
		},
		quote: {
			italics: true
		},
		small: {
			fontSize: 8
		}
	}
}

createPdf(dd,null,pdfMake.fonts).open();