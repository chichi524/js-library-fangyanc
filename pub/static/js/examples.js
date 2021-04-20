/* JS Library usage examples */
"use strict";
log('----------')
log('SCRIPT: Examples of using our libraries')
log('In general, we should have the code that uses our libraries separate from the actual library code.')

// Some normal jQuery:
const e = $('#myId')
log(e.text())

// Our jQuery clone:
const e2 = $$$('#myId')
log(e2.text())
e2.addClass('myClass')
e2.attr('myAttr', 'test')
log(e2.attr('myAttr'))

//Generator
const cg = new Generator()

//function examples(){


cg.makeBackground()
cg.makeHeader()
//cg.makeRow()
//cg.makeRow()
cg.arrangeone()
cg.makeRow()
cg.makeRow()

cg.changeImg(0, './style/images/vm.png')
cg.changeImg(1, './style/images/vm7.png')
cg.changeImg(2, './style/images/vm2.png')
cg.changePrice(0, '$100')
cg.changePrice(1, '$80')
cg.changePrice(2, '$120')
cg.changePrice(3, '$100')
cg.changePrice(4, '$80')
cg.changePrice(5, '$120')


cg.changeIntro(0, 'Vero Moda 2021 Spring Dress')
cg.changeIntro(1, 'Vero Moda 2021 Spring Dress')
cg.changeIntro(2, 'Vero Moda 2021 Spring Dress')
cg.changeLink(0, 'https://detail.tmall.com/item.htm?spm=a220o.1000855.0.da321h.47e66911bpKwBz&id=634027553104&sku_properties=1627207:1614671958')
cg.changeLink(1, 'https://detail.tmall.com/item.htm?spm=a230r.1.14.37.6a7b29deJdmDD6&id=624882721492&ns=1&abbucket=14')
cg.changeLink(2, 'https://detail.tmall.com/item.htm?spm=a230r.1.14.72.72a729def7JCBV&id=615022190979&ns=1&abbucket=14')
cg.changeSa(0, 'sale amount  200')
cg.changeSa(1, 'sale amount  100')
cg.changeSa(2, 'sale amount  150')
//}

//examples();
//cg.changeBackgroundImg(0, 'vm.png')
//document.getElementsByTagName("img")[1].src = 'vm1.png'
//document.getElementsByTagName("img")[2].src = 'vm4.png'
//document.getElementsByTagName("a")[0].href = 'https://detail.tmall.com/item.htm?spm=a220o.1000855.0.da321h.47e66911bpKwBz&id=634027553104&sku_properties=1627207:1614671958'
//document.getElementsByTagName("div")[4].innerHTML = ' $100'
//document.getElementsByTagName("div")[8].innerHTML = ' $80'
//document.getElementsByTagName("div")[12].innerHTML = ' $120'
//document.getElementsByTagName("a")[1].innerHTML = 'Vero Moda 2021 Spring Dress'
//document.getElementsByTagName("a")[1].href = 'https://detail.tmall.com/item.htm?spm=a220o.1000855.0.da321h.47e66911bpKwBz&id=634027553104&sku_properties=1627207:1614671958'
//document.getElementsByTagName("div")[5].innerHTML = 'sale amount  200'
//document.getElementsByTagName("div")[9].innerHTML = 'sale amount  200'
//document.getElementsByTagName("a")[2].innerHTML = 'add to cart'
//document.getElementsByTagName("a")[2].href = 'https://detail.tmall.com/item.htm?spm=a220o.1000855.0.da321h.47e66911bpKwBz&id=634027553104&sku_properties=1627207:1614671958'
//document.getElementsByTagName("div")[0].getElementsByTagName("div")[0].innerHTML = '100'
//cg.makeBackground()
//cg.makeThree()
//cg.makeCircle()
//cg.changeCirclesColor()

