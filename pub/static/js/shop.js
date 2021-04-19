/* JS Libraries */
"use strict";
console.log('----------')
console.log('SCRIPT: Creating and loading our JS libraries')

// Let's make a small Jquery clone.
// One way to make a library is to write a function
// that returns an object with the library functions, important
// values, etc.
function $$$(selector) {

    const _self = {}
    _self.selector = selector
    _self.element = document.querySelector(selector) 

    _self.text = function() {
        return _self.element.innerText
    }

    _self.addClass = function(className) {
        if (!_self.element.classList.contains(className)) {
            _self.element.classList.add(className)
        }
    }

    _self.attr = function(name, value) {
        if (!value) {
            return _self.element.getAttribute(name)
        } else {
            _self.element.setAttribute(name, value)
        }
    }

    return _self
}

///////
// Different way of creating library: creating an object constructor and then
// adding to its prototype.

// A Circle Generator Library (which also uses some jQuery functions)
(function(global, document, $) { 
function Generator() {
    // the constructor function should instantiate any variables that
    //  each Circle Generator instance should have a unique version of.
    //  In this case, each CG should have its own array of circles separate from
    //  other CGs.
    this.blocks = []
    // this..
    // this.. (any values you need for each 'instance' of this library)
}
/*function CircleG() {
    // the constructor function should instantiate any variables that
    //  each Circle Generator instance should have a unique version of.
    //  In this case, each CG should have its own array of circles separate from
    //  other CGs.
    this.circles = []
    // this..
    // this.. (any values you need for each 'instance' of this library)
}
*/
// For funcionality and values common to all CircleGenerators,
//  we can add to the prototype property of the constructor.
Generator.prototype = {
/*
    // Every CG will make use of the same makeCircle() and changeCircleColors function
    makeThree: function() {
        const circle = document.createElement('div')
        circle.style = 'width: 260px; height: 458px; border: 1px solid darkorange; position: relative; float: left; margin: 10px; background-color: white;'
        var item = document.createElement('img')
        circle.appendChild(item)
        item.src = './style/images/vm.png'
        item.style = 'margin:5px; width: 250px; height: 278px;'
        
        const c1 = document.createElement('div')
        c1.style = 'width: 260px; height: 458px; border: 1px solid darkorange; position: relative; float: left; margin: 10px; background-color: white;'
        var item1 = document.createElement('img')
        c1.appendChild(item1)
        item1.src = './style/images/vm.png'
        item1.style = 'margin:5px; width: 250px; height: 278px;'
        
        const c2 = document.createElement('div')
        c2.style = 'width: 260px; height: 458px; border: 1px solid darkorange; position: relative; float: left; margin: 10px; background-color: white;'
        var item2 = document.createElement('img')
        c2.appendChild(item2)
        item2.src = './style/images/./style/images/vm.png.png'
        item2.style = 'margin:5px; width: 250px; height: 278px;'
        // why not use a little jQuery:
        const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        body.append(circle)
        body.append(c1)
        body.append(c2)
        
        this.circles.push(circle) // add to the circles list
        this.circles.push(c1)
        this.circles.push(c2)
    },
    
    makeBackground: function() {
       const bg = document.createElement('div')
       bg.style = 'background-image: url("bg1.jpg"); min-height: 500%; background-size: cover; background-attachment: fixed; background-repeat: no-repeat; background-position: center center;'
 
        // why not use a little jQuery:
        //const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        body.append(bg)
       
        this.circles.push(bg) // add to the circles list
        
    },
*/
    makeBackground: function() {
        const bg = document.createElement('main')
        //main.appendChild(bg)
        bg.style = 'text-align: center;min-height: 500%; background-image: url("./style/images/bg1.jpg");  background-size: cover; background-attachment: fixed; background-repeat: no-repeat; background-position: center center;'
        //bg.style = 'display:flex; min-height: 500%; background-image: url("bg1.jpg");  background-size: cover; background-attachment: fixed; background-repeat: no-repeat; background-position: center center;'
        
        //bg.style = 'background-image: url("bg1.jpg");'

        const body = $('body')
        body.append(bg)
    },

    makeHeader: function() {
        //const main = document.createElement('main')
        //main.style = 'height: 100%;'
        
        //const bg = document.createElement('div')
        //main.appendChild(bg)
        //bg.style = 'min-height: 500%; background-image: url("bg1.jpg");  background-size: cover; background-attachment: fixed; background-repeat: no-repeat; background-position: center center;'
        //bg.style = 'background-image: url("bg1.jpg");'


        const header = document.createElement('header')
        //bg.appendChild(header)
        //header.style = 'justify-content: center; display: block; width: 980px; height: 70px;background-color: antiquewhite;border-bottom: 3px solid pink;margin: 0 auto;'
        header.style = 'display: inline-block; width: 980px; height: 70px; background-color: antiquewhite;border-bottom: 3px solid pink; margin-bottom: 50px;'
        header.className = 'header'
        const body = $('main')
        body.append(header)
        
    
        var bar = document.createElement('ul')
        header.appendChild(bar)
        bar.style = 'width: 980px; margin: 0 auto; list-style-type: none;'
        
        var singleele = document.createElement('li')
        bar.appendChild(singleele)
        singleele.style = 'float: left;'
        var image = document.createElement('img') 
        singleele.appendChild(image)
        image.src = './style/images/logo3.png'
        image.style = 'width: 100px; height: 100px; border:3px solid pink; margin-right: 20px; margin-left: -43px; border-radius: 50%;'
        

        var singleele1 = document.createElement('li')
        bar.appendChild(singleele1)
        singleele1.style = 'float: left;'
        var text1 = document.createElement('a')
        singleele1.appendChild(text1)
        text1.href = "#"
        text1.innerText = 'Selection'
        text1.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'
        text1.onmouseover = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: darkorange; font-size: 20px;'}
        text1.onmouseout = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'}
        

        var singleele2 = document.createElement('li')
        bar.appendChild(singleele2)
        singleele2.style = 'float: left;'
        var text2 = document.createElement('a')
        singleele2.appendChild(text2)
        text2.href = "#"
        text2.innerText = 'Selection'
        text2.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'
        text2.onmouseover = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: darkorange; font-size: 20px;'}
        text2.onmouseout = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'}
        

        var singleele3 = document.createElement('li')
        bar.appendChild(singleele3)
        singleele3.style = 'float: left;'
        var text3 = document.createElement('a')
        singleele3.appendChild(text3)
        text3.href = "#"
        text3.innerText = 'Selection'
        text3.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'
        text3.onmouseover = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: darkorange; font-size: 20px;'}
        text3.onmouseout = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'}
        

        var singleele3 = document.createElement('li')
        bar.appendChild(singleele3)
        singleele3.style = 'float: left;'
        var text3 = document.createElement('a')
        singleele3.appendChild(text3)
        text3.href = "#"
        text3.innerText = 'Selection'
        text3.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'
        text3.onmouseover = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: darkorange; font-size: 20px;'}
        text3.onmouseout = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'}
        

        var singleele4 = document.createElement('li')
        bar.appendChild(singleele4)
        singleele4.style = 'float: left;'
        var text4 = document.createElement('a')
        singleele4.appendChild(text4)
        text4.href = "#"
        text4.innerText = 'Selection'
        text4.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'
        text4.onmouseover = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: darkorange; font-size: 20px;'}
        text4.onmouseout = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'}
        

        var singleele5 = document.createElement('li')
        bar.appendChild(singleele5)
        singleele5.style = 'float: left;'
        var text5 = document.createElement('a')
        singleele5.appendChild(text5)
        text5.href = "#"
        text5.innerText = 'Selection'
        text5.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'
        text5.onmouseover = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: darkorange; font-size: 20px;'}
        text5.onmouseout = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'}
        

        var singleele6 = document.createElement('li')
        bar.appendChild(singleele6)
        singleele6.style = 'float: left;'
        var text6 = document.createElement('a')
        singleele6.appendChild(text6)
        text6.href = '#'
        text6.innerText = 'Selection'
        text6.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'
        text6.onmouseover = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: darkorange; font-size: 20px;'}
        text6.onmouseout = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'}
        


        //this.circles.push(header)
        //this.circles.push(bar)
        //this.circles.push(header)
    }, 

    arrangeone: function() {
        const content = document.createElement('div')
        content.style = 'width: 980px; margin-bottom: 30px; display: inline-block; position: relative'
        content.className = 'banner'

        const bg = document.createElement('div')
        content.appendChild(bg)
        bg.style = 'margin: 0 auto; width: 906px; height: 326px; background-color: :#ffffff; padding: 8px 10px 8px 6px;'
        bg.className = 'style'

        const body = $('main')
        body.append(content)

        var dl1 = document.createElement('dl')
        bg.appendChild(dl1)
        dl1.style = 'width: 279px; height: 313px; float: left; margin-left: 6px;'
        
        var dt1 = document.createElement('dt')
        dl1.appendChild(dt1)
        //dt1.style = 'height: 149px; background: no-repeat;background-size: 100% 100%;float: left; width: 162px;margin-bottom: 8px;'
        
        var image1 = document.createElement('img')
        dt1.appendChild(image1)
        image1.src = './style/images/vm.png'
        image1.style = 'height: 149px; background-size: 100% 100%;float: left; width: 162px;margin-bottom: 8px;'
        image1.className = 'left1'

        var dd1 = document.createElement('dd')
        dl1.appendChild(dd1)
        dd1.style = 'margin: 0; float: left; width: 117px;margin-bottom: 8px; height: 149px;line-height: 149px;'

        var title1 = document.createElement('a')
        dd1.appendChild(title1)
        title1.innerText = 'Global'
        title1.href = '#'
        title1.style = 'display: block;text-align: center;background-color: antiquewhite;color: #ec6e47;text-decoration: none;'
        title1.onmouseover = function(){this.style = 'display: block;text-align: center;background-color: pink;color: #ec6e47;text-decoration: none; font-size: 20px;'}
        title1.onmouseout = function(){this.style = 'display: block;text-align: center;background-color: antiquewhite;color: #ec6e47;text-decoration: none;'}
        title1.className = 'left2'

        const dt2 = document.createElement('dt')
        dl1.appendChild(dt2)
        //dt2.style = 'float: left; width: 162px;height: 149px;background: no-repeat;background-size: 100% 100%;'
        
        var image2 = document.createElement('img')
        dt2.appendChild(image2)
        image2.src = './style/images/vm2.png'
        image2.style = 'float: left; width: 162px;height: 149px;background: no-repeat;background-size: 100% 100%;'
        image2.className = 'left3'

        const dd2 = document.createElement('dd')
        dl1.appendChild(dd2)
        dd2.style = 'margin: 0; float: left;width: 117px;height: 149px;line-height: 149px;'

        const title2 = document.createElement('a')
        dd2.appendChild(title2)
        title2.innerText = 'Global'
        title2.href = '#'
        title2.style = 'display: block;text-align: center;background-color: antiquewhite;color: #ec6e47;text-decoration: none;'
        title2.onmouseover = function(){this.style = 'display: block;text-align: center;background-color: pink;color: #ec6e47;text-decoration: none;font-size: 20px;'}
        title2.onmouseout = function(){this.style = 'display: block;text-align: center;background-color: antiquewhite;color: #ec6e47;text-decoration: none;'}
        title2.className = 'left4'


        var dl2 = document.createElement('dl')
        bg.appendChild(dl2)
        dl2.style = 'margin-bottom: 8px;width: 279px; height: 313px; float: left; margin-left: 6px;'
        
        var dt3 = document.createElement('dt')
        dl2.appendChild(dt3)
        //dt3.style = 'margin-bottom: 8px;float: left; width: 162px; height: 169px;background: url("../images/3.jpg") no-repeat;background-size: 100% 100%;'
        
        var image3 = document.createElement('img')
        dt3.appendChild(image3)
        image3.src = './style/images/vm.png'
        image3.style = 'margin-bottom: 8px;float: left; width: 162px; height: 149px;background: url("../images/3.jpg") no-repeat;background-size: 100% 100%;'
        image3.className = 'center1'

        const dd3 = document.createElement('dd')
        dl2.appendChild(dd3)
        dd3.style = 'margin: 0;float: left;width: 117px;height: 149px;line-height: 149px;'
        
        const title3 = document.createElement('a')
        dd3.appendChild(title3)
        title3.innerText = 'Global'
        title3.href = '#'
        title3.style = 'display: block;text-align: center;background-color: antiquewhite;color: #ec6e47;text-decoration: none;'
        title3.onmouseover = function(){this.style = 'display: block;text-align: center;background-color: pink;color: #ec6e47;text-decoration: none;font-size: 20px;'}
        title3.onmouseout = function(){this.style = 'display: block;text-align: center;background-color: antiquewhite;color: #ec6e47;text-decoration: none;'}
        title3.className = 'center2'


        const dt4 = document.createElement('dt')
        dl2.appendChild(dt4)
        //dt4.style = 'float: left; width: 162px;height: 137px;background: url("../images/4.jpg") no-repeat;background-size: 100% 100%;'
        
        const image4 = document.createElement('img')
        dt4.appendChild(image4)
        image4.src = './style/images/vm2.png'
        image4.style = 'margin-bottom: 8px;float: left; width: 162px; height: 149px; background-size: 100% 100%;'
        image4.className = 'center3'

        const dd4 = document.createElement('dd')
        dl2.appendChild(dd4)
        dd4.style = 'margin: 0; float: left; width: 117px; height: 149px;line-height: 149px;'
        
        const title4 = document.createElement('a')
        dd4.appendChild(title4)
        title4.innerText = 'Global'
        title4.href = '#'
        title4.style = ' display: block;text-align: center;background-color: antiquewhite;color: #ec6e47;text-decoration: none;'
        title4.onmouseover = function(){this.style = 'display: block;text-align: center;background-color: pink;color: #ec6e47;text-decoration: none;font-size: 20px;'}
        title4.onmouseout = function(){this.style = 'display: block;text-align: center;background-color: antiquewhite;color: #ec6e47;text-decoration: none;'}
        title4.className = 'center4'


        const dl3 = document.createElement('dl')
        bg.appendChild(dl3)
        dl3.style = 'width: 322px;height:306px;float: left; margin-left: 6px;'
        
        const dt5 = document.createElement('dt')
        dl3.appendChild(dt5)
        //dt5.style = 'float: left;height: 314px;width: 190px;background: url("../images/5.jpg");background-size: 100% 100%;'
        
        const image5 = document.createElement('img')
        dt5.appendChild(image5)
        image5.src = './style/images/vm.png'
        image5.style = 'margin-bottom: 8px;float: left; width: 205px; height: 306px;background-size: 100% 100%;'
        image5.className = 'right1'

        const dd5 = document.createElement('dd')
        dl3.appendChild(dd5)
        dd5.style = 'margin: 0;float: left; width: 117px;height: 306px;line-height: 306px;'
        
        const title5 = document.createElement('a')
        dd5.appendChild(title5)
        title5.innerText = 'Global'
        title5.href = '#'
        title5.style = ' display: block;text-align: center;background-color: antiquewhite;color: #ec6e47;text-decoration: none;'
        title5.onmouseover = function(){this.style = 'display: block;text-align: center;background-color: pink;color: #ec6e47;text-decoration: none;font-size: 20px;'}
        title5.onmouseout = function(){this.style = 'display: block;text-align: center;background-color: antiquewhite;color: #ec6e47;text-decoration: none;'}
        title5.className = 'right2'

    
    },




    makeRow: function() {
        //const title = document.createElement('div')
        //title.style = 'font-family: 楷体;color: white;display: block;background-color: #ec6e47;margin-top: 20px;margin-left: 117px;width: 275px;height: 50px;line-height: 50px;'
        //const main = document.createElement('main')
        //main.style = 'height: 100%;'

        //const bg = document.createElement('div')
        // main.appendChild(bg)
        //bg.style = 'min-height: 500%; background-image: url("bg1.jpg");  background-size: cover; background-attachment: fixed; background-repeat: no-repeat; background-position: center center;'
        //bg.style = 'background-image: url("bg1.jpg");'


        const test = document.createElement('div')
        //bg.appendChild(test)
        //title.appendChild(test)
        //test.style = 'height: 542px; width: 957px; background-color: :#FCF; padding: 10px 36px 5px; position: relative; margin: 0 auto;'
        test.style = 'height: 542px; width: 980px; background-color: :#FCF; padding: 10px 10px 10px;  position: relative; margin: 0 auto; '
        //test.style = 'height: 542px; width: 1000px; background-color: #FCF; margin: 0 auto;'
        test.className = 'content'
        //test.style = 'background:; min-height: 500%; background-size: cover; background-attachment: fixed; background-repeat: no-repeat; background-position: center center;'
        //test.style = 'background:#cccccc url(require("bg1.jpg")) fixed;height: 542px;width: 957px;'

        const body = $('main')
        body.append(test)



        const circle = document.createElement('div')
        test.appendChild(circle)
        circle.style = 'margin: 20px 8px 0px;width: 260px;height: 458px;padding: 20px;background-color: white;border: 1px solid darkorange;float: left;'
        circle.className = 'sale'
        var link = document.createElement('a')
        circle.appendChild(link)
        link.href = '#'
        link.className = 'link'
        var item = document.createElement('img')
        link.appendChild(item)
        item.src = './style/images/vm.png'
        item.style = 'margin:5px; width: 250px; height: 278px;'
        item.className = 'demo'
        var price = document.createElement('div')
        circle.appendChild(price)
        price.style = 'text-align: left; margin-left: 9px; color: black; font-weight: bold;'
        price.innerText = '$'
        price.className = 'price'
        var intro = document.createElement('a')
        circle.appendChild(intro)
        intro.style = 'text-align: left;color: deepskyblue;font-weight: normal;text-decoration: none;font-family: 汉仪柳楷繁;display: block; margin-left: 9px; margin-top: 15px;'
        intro.innerText = '2021'
        intro.href = '#'
        intro.className = 'introduce'
        var saleamount = document.createElement('div')
        circle.appendChild(saleamount)
        saleamount.style = 'text-align: left; color: grey;float: left;height: 20px;font-size: smaller;width: 120px; solid 1px;line-height: 20px;margin-top: 10px;margin-bottom: 20px; margin-left: 10px;'
        saleamount.innerText = 'sale amount '
        saleamount.className = 'salemount'
        const buttondiv = document.createElement('div')
        circle.appendChild(buttondiv)
        buttondiv.style = 'margin: auto ; clear: both; height: 20px; line-height: 20px;width: 145px;text-align: center;padding: 5px 0px;  background-color: darkorange; border-radius: 30px; border: 2px solid red;'
        var buybutton = document.createElement('a')
        buttondiv.appendChild(buybutton)
        buybutton.style = 'color: white;text-decoration: none;'
        buybutton.innerText = 'add to cart'
        buybutton.href = '#'
        buybutton.className = 'buy'
        
        const c1 = document.createElement('div')
        test.appendChild(c1)
        c1.style = 'margin: 20px 8px 0px;width: 260px;height: 458px;padding: 20px;background-color: white;border: 1px solid darkorange;float: left;'
        c1.className = 'sale'
        var link1 = document.createElement('a')
        c1.appendChild(link1)
        link1.href = '#'
        link1.className = 'link'
        var item1 = document.createElement('img')
        link1.appendChild(item1)
        item1.src = './style/images/vm.png'
        item1.style = 'margin:5px; width: 250px; height: 278px;'
        item1.className = 'demo'
        var price1 = document.createElement('div')
        c1.appendChild(price1)
        price1.style = 'text-align: left;margin-left: 9px; color: black; font-weight: bold;'
        price1.innerText = '$'
        var intro1 = document.createElement('a')
        c1.appendChild(intro1)
        intro1.style = 'text-align: left;color: deepskyblue;font-weight: normal;text-decoration: none;font-family: 汉仪柳楷繁;display: block; margin-left: 9px; margin-top: 15px;'
        intro1.innerText = '2021'
        intro1.href = '#'
        intro1.className = 'link'
        var saleamount1 = document.createElement('div')
        c1.appendChild(saleamount1)
        saleamount1.style = 'text-align: left;color: grey;float: left;height: 20px;font-size: smaller;width: 120px; solid 1px;line-height: 20px;margin-top: 10px;margin-bottom: 20px; margin-left: 10px;'
        saleamount1.innerText = 'sale amount '
        const buttondiv1 = document.createElement('div')
        c1.appendChild(buttondiv1)
        buttondiv1.style = 'margin: auto ; clear: both; height: 20px; line-height: 20px;width: 145px;text-align: center;padding: 5px 0px;  background-color: darkorange; border-radius: 30px; border: 2px solid red;'
        var buybutton1 = document.createElement('a')
        buttondiv1.appendChild(buybutton1)
        buybutton1.style = 'color: white;text-decoration: none;'
        buybutton1.innerText = 'add to cart'
        buybutton1.href = '#'
        buybutton1.className = 'link'


        const c2 = document.createElement('div')
        test.appendChild(c2)
        c2.style = 'margin: 20px 8px 0px;width: 260px;height: 458px;padding: 20px;background-color: white;border: 1px solid darkorange;float: left;'
        c2.className = 'sale'
        var link2 = document.createElement('a')
        c2.appendChild(link2)
        link2.href = '#'
        link2.className = 'link'
        var item2 = document.createElement('img')
        link2.appendChild(item2)
        item2.src = './style/images/vm.png'
        item2.style = 'margin:5px; width: 250px; height: 278px;'
        var price2 = document.createElement('div')
        c2.appendChild(price2)
        price2.style = 'text-align: left;margin-left: 9px; color: black; font-weight: bold;'
        price2.innerText = '$'
        var intro2 = document.createElement('a')
        c2.appendChild(intro2)
        intro2.style = 'text-align: left;color: deepskyblue;font-weight: normal;text-decoration: none;font-family: 汉仪柳楷繁;display: block; margin-left: 9px; margin-top: 15px;'
        intro2.innerText = '2021'
        intro2.href = '#'
        intro2.className = 'link'
        var saleamount2 = document.createElement('div')
        c2.appendChild(saleamount2)
        saleamount2.style = 'text-align: left;color: grey;float: left;height: 20px;font-size: smaller;width: 120px; solid 1px;line-height: 20px;margin-top: 10px;margin-bottom: 20px; margin-left: 10px;'
        saleamount2.innerText = 'sale amount '
        const buttondiv2 = document.createElement('div')
        c2.appendChild(buttondiv2)
        buttondiv2.style = 'margin: auto ; clear: both; height: 20px; line-height: 20px;width: 145px;text-align: center;padding: 5px 0px;  background-color: darkorange; border-radius: 30px; border: 2px solid red;'
        var buybutton2 = document.createElement('a')
        buttondiv2.appendChild(buybutton2)
        buybutton2.style = 'color: white;text-decoration: none;'
        buybutton2.innerText = 'add to cart'
        buybutton2.href = '#'
        buybutton2.className = 'link'
        // why not use a little jQuery:
        //const body = $('main') // jQuery equivalent to: const body = document.querySelector('body')
        //body.append(title)
        //body.append(test)*/
        
        //this.circles.push(title)
        //this.circles.push(test)
    // this.circles.push(circle) // add to the circles list
        //this.circles.push(c1)
        // this.circles.push(c2)
    },

    changeImg: function(i, image) {
        //alert(parseInt(i/3));
        //i%3;
        //alert(i%3);
       
        
        var imgs = document.getElementsByClassName("content")[parseInt(i/3)];
        imgs.getElementsByTagName("img")[(i - 3*parseInt(i/3))].src = image;

    },

    changePrice: function(i, pricenum) {
        var prices = document.getElementsByClassName("content")[parseInt(i/3)];
        prices.getElementsByTagName("div")[(i - 3*parseInt(i/3))*4 +1].innerHTML = pricenum;
    },

    changeIntro: function(i, introtext) {
        var intros = document.getElementsByClassName("content")[parseInt(i/3)];
        intros.getElementsByTagName("a")[(i - 3*parseInt(i/3))*3+1].innerHTML = introtext;
    },

    changeLink: function(i, linktext) {
        var links = document.getElementsByClassName("content")[parseInt(i/3)];
        links.getElementsByTagName("a")[(i - 3*parseInt(i/3))].href = linktext;
        var links1 = document.getElementsByClassName("content")[parseInt(i/3)];
        links1.getElementsByTagName("a")[((i - 3*parseInt(i/3))*3)+1].href = linktext;
        var links2 = document.getElementsByClassName("content")[parseInt(i/3)];
        links2.getElementsByTagName("a")[((i - 3*parseInt(i/3))*3)+2].href = linktext;
    },

    changeSa: function(i, satext) {
        var sas = document.getElementsByClassName("content")[parseInt(i/3)];
        sas.getElementsByTagName("div")[(i - 3*parseInt(i/3))*4 + 2].innerText = satext;
    },


    changeBackgroundImg: function(i, image) {
        var bgimg = document.getElementsByTagName("main");
        bgimg[i].style.backgroundImage = image;
    },

    changeHeaderLogo: function(i, image) {
        var logo = document.getElementsByClassName("header");
        logo.getElementsByTagName("img")[0].src = image;
    },

    changeHeaderText: function(i, text) {
        var t = document.getElementsByClassName("header");
        t.getElementsByTagName("img")[i].innerHTML = text;
    },

    changeBannerImage: function(i, image) {
        var imgs = document.getElementsByClassName("banner")[parseInt(i/5)];
        imgs.getElementsByTagName("img")[(i-5*parseInt(i/5))].src = image;

    },

    changeBannerText: function(i, text) {
        var t = document.getElementsByClassName("banner")[parseInt(i/5)];
        t.getElementsByTagName("a")[(i-5*parseInt(i/5))].innerHTML = text;
    }

    


/*
    changeBackColor: function() {
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i+3].style.backgroundColor = 'black'
        }
    },
    changeImg: function(str, image) {
        var imgs = document.getElementsByClassName(str);
        imgs.src = image;
        alert(imgs.src);
        
    },
    // changePrice: function(i, pricenum) {
    //     var prices = document.getElementsByName("left1");
    //     prices.innerHTML = pricenum;
    //  },
    changeIntro: function(i, introtext) {
        var intros = document.getElementsByTagName("a");
        intros[((i-1)*3)+8].innerHTML = introtext;
    },
    changeLink: function(i, linktext) {
        var links = document.getElementsByTagName("a");
        links[(i-1)*3+9].href = linktext;
        var links1 = document.getElementsByTagName("a");
        links1[((i-1)*3+10)].href = linktext;
        var links2 = document.getElementsByTagName("a");
        links2[((i-1)*3+11)].href = linktext;
    },
    changeSa: function(i, satext) {
        var sas = document.getElementsByTagName("div");
        sas[(i-1)*4 + 4].innerText = satext;
    }
*/


}


global.Generator = global.Generator || Generator

})(window, window.document, $); // pass the global window object and jquery to the anonymous function. They will now be locally scoped inside of the function.

    


    


/*  makeFrame: function() {
        //const title = document.createElement('div')
        //title.style = 'font-family: 楷体;color: white;display: block;background-color: #ec6e47;margin-top: 20px;margin-left: 117px;width: 275px;height: 50px;line-height: 50px;'
        const test = document.createElement('div')
        //title.appendChild(test)
        test.style = 'height: 542px;width: 957px;background-color: : #FCF;padding: 10px 36px 5px; position: block; margin: 0 auto;'
        // why not use a little jQuery:
        //const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        //body.append(title)
        body.append(test)
        
        //this.circles.push(title)
        this.circles.push(test)
        //this.circles.push(circle) // add to the circles list
    },
*/
    /*makeSale: function() {
        //const title = document.createElement('div')
        //title.style = 'font-family: 楷体;color: white;display: block;background-color: #ec6e47;margin-top: 20px;margin-left: 117px;width: 275px;height: 50px;line-height: 50px;'
     
        const circle = document.createElement('div')
        //test.appendChild(circle)
        circle.style = 'margin: 20px 8px 0px;width: 260px;height: 458px;padding: 20px;background-color: white;border: 1px solid darkorange;float: left;'
        var link = document.createElement('a')
        circle.appendChild(link)
        link.href = '#'
        var item = document.createElement('img')
        link.appendChild(item)
        item.src = './style/images/vm.png'
        item.style = 'margin:5px; width: 250px; height: 278px;'
        var price = document.createElement('div')
        circle.appendChild(price)
        price.style = 'margin-left: 9px; color: black; font-weight: bold;'
        price.innerText = '$'
        var intro = document.createElement('a')
        circle.appendChild(intro)
        intro.style = 'color: deepskyblue;font-weight: normal;text-decoration: none;font-family: 汉仪柳楷繁;display: block; margin-left: 9px; margin-top: 15px;'
        intro.innerText = '2021'
        intro.href = '#'
        var saleamount = document.createElement('div')
        circle.appendChild(saleamount)
        saleamount.style = 'color: grey;float: left;height: 20px;font-size: smaller;width: 120px; solid 1px;line-height: 20px;margin-top: 10px;margin-bottom: 20px; margin-left: 10px;'
        saleamount.innerText = 'sale amount '
        const buttondiv = document.createElement('div')
        circle.appendChild(buttondiv)
        buttondiv.style = 'margin: auto ; clear: both; height: 20px; line-height: 20px;width: 145px;text-align: center;padding: 5px 0px;  background-color: darkorange; border-radius: 30px; border: 2px solid red;'
        var buybutton = document.createElement('a')
        buttondiv.appendChild(buybutton)
        buybutton.style = 'color: white;text-decoration: none;'
        buybutton.innerText = 'add to cart'
        buybutton.href = '#'
        // why not use a little jQuery:
        //const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        //body.append(title)
        //body.append(circle)
        
        //this.circles.push(title)
        //this.circles.push(test)
        this.circles.push(circle) // add to the circles list
    }*/
/*
    makeHeader: function() {
        //const main = document.createElement('main')
        //main.style = 'height: 100%;'
        
        //const bg = document.createElement('div')
        //main.appendChild(bg)
        //bg.style = 'min-height: 500%; background-image: url("bg1.jpg");  background-size: cover; background-attachment: fixed; background-repeat: no-repeat; background-position: center center;'
        //bg.style = 'background-image: url("bg1.jpg");'
 
        const header = document.createElement('header')
        //bg.appendChild(header)
        header.style = 'width: 980px; height: 70px;background-color: antiquewhite;border-bottom: 3px solid pink;margin: 0 auto;'
        
        const body = $('main')
        body.append(header)
        
     
        var bar = document.createElement('ul')
        header.appendChild(bar)
        bar.style = 'width: 980px; margin: 0 auto; list-style-type: none;'
        
        var singleele = document.createElement('li')
        bar.appendChild(singleele)
        singleele.style = 'float: left;'
        var image = document.createElement('img') 
        singleele.appendChild(image)
        image.src = 'logo.png'
        image.style = 'width: 100px; height: 100px; border:3px solid pink; margin-right: 40px; margin-left: -43px; border-radius: 50%;'
    
        var singleele1 = document.createElement('li')
        bar.appendChild(singleele1)
        singleele1.style = 'float: left;'
        var text1 = document.createElement('a')
        singleele1.appendChild(text1)
        text1.href = "#"
        text1.innerText = 'Selection'
        text1.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'
        text1.onmouseover = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: darkorange; font-size: 20px;'}
        text1.onmouseout = function(){this.style = 'display: inline-block; height: 70px; text-decoration: none; line-height: 70px; width: 120px; text-align: center; color: hotpink;'}
        //text1.hover = 'color: darkorange; font-size: 20px;'
        //text1.onmouseover = 'color: darkorange; font-size: 20px;'
        //text1.style = 'hover{color: darkorange; font-size: 20px;}'
    
    /*  var singleele2 = document.createElement('li')
        bar.appendChild(singleele2)
        var text2 = document.createElement('a')
        singleele2.appendChild(text2)
        text2.href = "#"
        text2.innerText = 'Selection'
        var singleele3 = document.createElement('li')
        bar.appendChild(singleele3)
        var text3 = document.createElement('a')
        singleele3.appendChild(text3)
        text3.href = "#"
        text3.innerText = 'Selection'
        var singleele4 = document.createElement('li')
        bar.appendChild(singleele4)
        var text4 = document.createElement('a')
        singleele4.appendChild(text4)
        text4.href = "#"
        text4.innerText = 'Selection'
        var singleele5 = document.createElement('li')
        bar.appendChild(singleele5)
        var text5 = document.createElement('a')
        singleele5.appendChild(text5)
        text5.href = "#"
        text5.innerText = 'Selection'
        var singleele6 = document.createElement('li')
        bar.appendChild(singleele6)
        var text6 = document.createElement('a')
        singleele6.appendChild(text6)
        text6.href = "#"
        text6.innerText = 'Selection'
        const body = $('body')
        body.append(main)
        //this.circles.push(header)
        //this.circles.push(bar)
        //this.circles.push(header)
    }*/ 


/*    makeSingle: function() {
        //const title = document.createElement('div')
        //title.style = 'font-family: 楷体;color: white;display: block;background-color: #ec6e47;margin-top: 20px;margin-left: 117px;width: 275px;height: 50px;line-height: 50px;'
        const test = document.createElement('div')
        //title.appendChild(test)
        test.style = 'height: 542px; width: 957px;background-color: : #FCF;padding: 10px 36px 5px; position: block; margin: 0 auto;'
    
        const circle = document.createElement('div')
        test.appendChild(circle)
        circle.style = 'margin: 20px 8px 0px;width: 260px;height: 458px;padding: 20px;background-color: white;border: 1px solid darkorange;float: left;'
        var link = document.createElement('a')
        circle.appendChild(link)
        link.href = '#'
        var item = document.createElement('img')
        link.appendChild(item)
        item.src = './style/images/vm.png'
        item.style = 'margin:5px; width: 250px; height: 278px;'
        var price = document.createElement('div')
        circle.appendChild(price)
        price.style = 'margin-left: 9px; color: black; font-weight: bold;'
        price.innerText = '$'
        var intro = document.createElement('a')
        circle.appendChild(intro)
        intro.style = 'color: deepskyblue;font-weight: normal;text-decoration: none;font-family: 汉仪柳楷繁;display: block; margin-left: 9px; margin-top: 15px;'
        intro.innerText = '2021'
        intro.href = '#'
        var saleamount = document.createElement('div')
        circle.appendChild(saleamount)
        saleamount.style = 'color: grey;float: left;height: 20px;font-size: smaller;width: 120px; solid 1px;line-height: 20px;margin-top: 10px;margin-bottom: 20px; margin-left: 10px;'
        saleamount.innerText = 'sale amount '
        const buttondiv = document.createElement('div')
        circle.appendChild(buttondiv)
        buttondiv.style = 'margin: auto ; clear: both; height: 20px; line-height: 20px;width: 145px;text-align: center;padding: 5px 0px;  background-color: darkorange; border-radius: 30px; border: 2px solid red;'
        var buybutton = document.createElement('a')
        buttondiv.appendChild(buybutton)
        buybutton.style = 'color: white;text-decoration: none;'
        buybutton.innerText = 'add to cart'
        buybutton.href = '#'
        // why not use a little jQuery:
        const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        //body.append(title)
        body.append(test)
        
        //this.circles.push(title)
        this.circles.push(test)
        this.circles.push(circle) // add to the circles list
    },
*/   

//  changeCirclesColor: function() {
//      for (let i = 0; i < this.circles.length; i++) {
//          this.circles[i].style.backgroundColor = 'white'
//      }
//  }



// Above is the code for the library itself.
// We will use our libraries in a separate script file, examples.js

/*CircleG.prototype = {
    // Every CG will make use of the same makeCircle() and changeCircleColors function
    makeCircle: function() {
        const circle = document.createElement('div')
        circle.style = 'width: 260px; height: 458px; border: 1px solid darkorange; margin: 10px; background-color: white;'
        
        // why not use a little jQuery:
        const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        body.append(circle)
        
        this.circles.push(circle) // add to the circles list
    },
    changeCirclesColor: function() {
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].style.backgroundColor = 'white'
        }
    }
}*/
/*    makeFrame: function() {
        //const title = document.createElement('div')
        //title.style = 'font-family: 楷体;color: white;display: block;background-color: #ec6e47;margin-top: 20px;margin-left: 117px;width: 275px;height: 50px;line-height: 50px;'
        const test = document.createElement('div')
        //title.appendChild(test)
        test.style = 'height: 542px;width: 957px;background-color: : #FCF;padding: 10px 36px 5px; position: block; margin: 0 auto;'
        // why not use a little jQuery:
        //const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        //body.append(title)
        body.append(test)
        
        //this.circles.push(title)
        this.circles.push(test)
        //this.circles.push(circle) // add to the circles list
    },
    makeSale: function() {
        //const title = document.createElement('div')
        //title.style = 'font-family: 楷体;color: white;display: block;background-color: #ec6e47;margin-top: 20px;margin-left: 117px;width: 275px;height: 50px;line-height: 50px;'
        const circle = document.createElement('div')
        //test.appendChild(circle)
        circle.style = 'margin: 20px 8px 0px;width: 260px;height: 458px;padding: 20px;background-color: white;border: 1px solid darkorange;float: left;'
        var link = document.createElement('a')
        circle.appendChild(link)
        link.href = '#'
        var item = document.createElement('img')
        link.appendChild(item)
        item.src = './style/images/vm.png'
        item.style = 'margin:5px; width: 250px; height: 278px;'
        var price = document.createElement('div')
        circle.appendChild(price)
        price.style = 'margin-left: 9px; color: black; font-weight: bold;'
        price.innerText = '$'
        var intro = document.createElement('a')
        circle.appendChild(intro)
        intro.style = 'color: deepskyblue;font-weight: normal;text-decoration: none;font-family: 汉仪柳楷繁;display: block; margin-left: 9px; margin-top: 15px;'
        intro.innerText = '2021'
        intro.href = '#'
        var saleamount = document.createElement('div')
        circle.appendChild(saleamount)
        saleamount.style = 'color: grey;float: left;height: 20px;font-size: smaller;width: 120px; solid 1px;line-height: 20px;margin-top: 10px;margin-bottom: 20px; margin-left: 10px;'
        saleamount.innerText = 'sale amount '
        const buttondiv = document.createElement('div')
        circle.appendChild(buttondiv)
        buttondiv.style = 'margin: auto ; clear: both; height: 20px; line-height: 20px;width: 145px;text-align: center;padding: 5px 0px;  background-color: darkorange; border-radius: 30px; border: 2px solid red;'
        var buybutton = document.createElement('a')
        buttondiv.appendChild(buybutton)
        buybutton.style = 'color: white;text-decoration: none;'
        buybutton.innerText = 'add to cart'
        buybutton.href = '#'
        // why not use a little jQuery:
        //const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        //body.append(title)
        //body.append(circle)
        
        //this.circles.push(title)
        //this.circles.push(test)
        this.circles.push(circle) // add to the circles list
    },
    makeHeader: function() {
        const header = document.createElement('header')
        bg.appendChild(header)
        var bar = document.createElement('ul')
        header.appendChild(bar)
        var singleele = document.createElement('li')
        bar.appendChild(singleele)
        var image = document.appendChild('img') 
        singleele.appendChild(image)
        image.src = 'logo.jpg'
        var singleele1 = document.createElement('li')
        bar.appendChild(singleele1)
        var text1 = document.createElement('a')
        singleele1.appendChild(text1)
        text1.href = "#"
        text1.innerText = 'Selection'
        var singleele2 = document.createElement('li')
        bar.appendChild(singleele2)
        var text2 = document.createElement('a')
        singleele2.appendChild(text2)
        text2.href = "#"
        text2.innerText = 'Selection'
        var singleele3 = document.createElement('li')
        bar.appendChild(singleele3)
        var text3 = document.createElement('a')
        singleele3.appendChild(text3)
        text3.href = "#"
        text3.innerText = 'Selection'
        var singleele4 = document.createElement('li')
        bar.appendChild(singleele4)
        var text4 = document.createElement('a')
        singleele4.appendChild(text4)
        text4.href = "#"
        text4.innerText = 'Selection'
        var singleele5 = document.createElement('li')
        bar.appendChild(singleele5)
        var text5 = document.createElement('a')
        singleele5.appendChild(text5)
        text5.href = "#"
        text5.innerText = 'Selection'
        var singleele6 = document.createElement('li')
        bar.appendChild(singleele6)
        var text6 = document.createElement('a')
        singleele6.appendChild(text6)
        text6.href = "#"
        text6.innerText = 'Selection'
    }
*/

    
     
/*    makeSingle: function() {
        //const title = document.createElement('div')
        //title.style = 'font-family: 楷体;color: white;display: block;background-color: #ec6e47;margin-top: 20px;margin-left: 117px;width: 275px;height: 50px;line-height: 50px;'
        const test = document.createElement('div')
        //title.appendChild(test)
        test.style = 'height: 542px; width: 957px;background-color: : #FCF;padding: 10px 36px 5px; position: block; margin: 0 auto;'
    
        const circle = document.createElement('div')
        test.appendChild(circle)
        circle.style = 'margin: 20px 8px 0px;width: 260px;height: 458px;padding: 20px;background-color: white;border: 1px solid darkorange;float: left;'
        var link = document.createElement('a')
        circle.appendChild(link)
        link.href = '#'
        var item = document.createElement('img')
        link.appendChild(item)
        item.src = './style/images/vm.png'
        item.style = 'margin:5px; width: 250px; height: 278px;'
        var price = document.createElement('div')
        circle.appendChild(price)
        price.style = 'margin-left: 9px; color: black; font-weight: bold;'
        price.innerText = '$'
        var intro = document.createElement('a')
        circle.appendChild(intro)
        intro.style = 'color: deepskyblue;font-weight: normal;text-decoration: none;font-family: 汉仪柳楷繁;display: block; margin-left: 9px; margin-top: 15px;'
        intro.innerText = '2021'
        intro.href = '#'
        var saleamount = document.createElement('div')
        circle.appendChild(saleamount)
        saleamount.style = 'color: grey;float: left;height: 20px;font-size: smaller;width: 120px; solid 1px;line-height: 20px;margin-top: 10px;margin-bottom: 20px; margin-left: 10px;'
        saleamount.innerText = 'sale amount '
        const buttondiv = document.createElement('div')
        circle.appendChild(buttondiv)
        buttondiv.style = 'margin: auto ; clear: both; height: 20px; line-height: 20px;width: 145px;text-align: center;padding: 5px 0px;  background-color: darkorange; border-radius: 30px; border: 2px solid red;'
        var buybutton = document.createElement('a')
        buttondiv.appendChild(buybutton)
        buybutton.style = 'color: white;text-decoration: none;'
        buybutton.innerText = 'add to cart'
        buybutton.href = '#'
        // why not use a little jQuery:
        const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        //body.append(title)
        body.append(test)
        
        //this.circles.push(title)
        this.circles.push(test)
        this.circles.push(circle) // add to the circles list
    },
*/   

//  changeCirclesColor: function() {
//      for (let i = 0; i < this.circles.length; i++) {
//          this.circles[i].style.backgroundColor = 'white'
//      }
//  }



// Above is the code for the library itself.
// We will use our libraries in a separate script file, examples.js

/*CircleG.prototype = {
    // Every CG will make use of the same makeCircle() and changeCircleColors function
    makeCircle: function() {
        const circle = document.createElement('div')
        circle.style = 'width: 260px; height: 458px; border: 1px solid darkorange; margin: 10px; background-color: white;'
        
        // why not use a little jQuery:
        const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        body.append(circle)
        
        this.circles.push(circle) // add to the circles list
    },
    changeCirclesColor: function() {
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].style.backgroundColor = 'white'
        }
    }
}*/