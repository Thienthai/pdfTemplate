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

var listProd = [
  {
    product: "ผ้าเช็ดตัว",
    quantity: 5,
    price: 130
  },
  {
    product: "ผ้าปูที่นอน",
    quantity: 2,
    price: 620
  },
  {
    product: "ผ้าเช็ดเท้า",
    quantity: 5,
    price: 130
  }
]

var discount = 3
var vat = 50
var total = 0

var columnKeep = []
var rowKeep = []
var i,j;
rowKeep.push([
      {text: 'ลำดับ', bold: 'true', style: 'tableHeader',alignment: 'center'}, 
      {text: 'รายการ', bold: 'true', style: 'tableHeader'}, 
      {text: 'จำนวน', bold: 'true', style: 'tableHeader',alignment: 'center'}, 
      {text: 'หน่วยละ', bold: 'true', style: 'tableHeader',alignment:'center'},
      {text: 'จำนวนเงิน', bold: 'true', style: 'tableHeader',alignment: 'center'}
])
for(i = 0;i<listProd.length;i++){
    for(j = 0;j<5;j++){
        if(j == 0){
          columnKeep.push({
            text: i+1,
            fontSize:10,
            alignment:"center"
          })
        }else if(j == 1){
          columnKeep.push({
            text: listProd[i].product,
            fontSize:10
          })         
        }else if(j == 2){
          columnKeep.push({
            text: listProd[i].quantity,
            fontSize:10,
            alignment:"center"
          })  
        }else if(j == 3){
          columnKeep.push({
            text: listProd[i].price + " บาท",
            fontSize:10,
            alignment:"center"
          })
          console.log(total)
        }else if(j == 4){
          columnKeep.push({
            text: listProd[i].price * listProd[i].quantity + " บาท",
            fontSize:10,
            alignment: 'center'
          })
          total += listProd[i].price * listProd[i].quantity
        }
    }
  rowKeep.push(columnKeep)
  columnKeep = []
}

console.log(rowKeep)
var totalPrice = total - vat - ((discount/100)*total)

var dd = {
  footer: [
    {
      columns: [
        { 
          margin:[50,-30,0,0],
          text: 'ผู้รับสินค้า: _____________'
        },
        { 
          text: 'ผู้รับเงิน: ______________',
          margin:[50,-30,0,0],
        }
      ],
    },
    {
      margin:[50,-1,0,20],
      fontSize: "10",
      width: 200,
      text: "- หากสินค้าเสียหายหรือขาดจำนวนต้องแจ้งเป็นลายลักษณ์อักษรให้บริษัทฯทราบภายใน 7 วันนับจากวันที่ได้รับสินค้ามิฉะนั้นบริษัทฯจะถือว่าผู้ซื้อได้รับสินค้าถูกต้องเรียบร้อยแล้วตามที่ระบุไว้ในเอกสารนี้"
    }
  ],
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
              text: 'ษาชานนท์ เทคซ์ไทลล์', 
              style: 'header',
              margin: [10,0,0,0]
            },
            {
              text: '99/414 หมู่ที่ 8 ตำบลนาเกลือ อำเถอพระสมุทรเจดีย์ จังหวัดสมุทรปราการ 10290', 
              style: 'subheader',
              margin: [10,3,0,0],
            },
            {
              text: 'Tel: 089-788-5439', 
              style: 'subheader',
              margin: [10,3,0,0],
            },
        ]         
      ],
    },
    {
      columns: [
        {
          
          text: "เลขที่ผู้เสียภาษี: 3449671345",
          margin: [0,10,0,0],
          fontSize: 11,
          decoration: 'underline'
        },
        {
          text: "บิลเงินสด",
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
            text: "วันที่: 01/05/2562",
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
        text: "ชื่อ-นามสกุล: เธียนไท โชติชัยชรินทร์",
        fontSize: 10,
        decoration: 'underline'
      },
      {
        columns: [
          {
            margin: [0,2,0,0],
            text: "ที่อยู่: 321/1 ซอย พหลโยธิน 48 แขวงอนุเสาวรีย์ เขตบางเขน กรุงเทพมหานคร 10220",
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
          body: rowKeep,
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
          text: "หมายเหตุ: This is my remark on this invoice slip",
          fontSize: 11
        },
        [
          {
            text: "ส่วนลด: " + discount + "%",
            alignment: 'right',
            fontSize: 11,
            bold: 'true',
            decoration: 'underline',
            margin: [5,0,7,3],
          },
          {
            text: "ภาษี: " + vat + " บาท",
            alignment: 'right',
            fontSize: 11,
            bold: 'true',
            decoration: 'underline',
            margin: [0,0,7,3],
          },
          {
            text: "รวม: " + totalPrice + "บาท",
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
      bold: true,
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
  },
  defaultStyle: {
    font: 'Kanit'
  }
}

let fonts = {
  Kanit: {
    normal: 'Kanit-Regular.ttf',
    bold: 'Kanit-Bold.ttf',
    italics: 'Kanit-Light.ttf',
    bolditalics: 'Kanit-ExtraLight.ttf'
}
}

createPdf(dd,null,fonts).open();