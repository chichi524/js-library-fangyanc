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

function CircleGenerator() {
    // the constructor function should instantiate any variables that
    //  each Circle Generator instance should have a unique version of.
    //  In this case, each CG should have its own array of circles separate from
    //  other CGs.
    this.circles = []
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
CircleGenerator.prototype = {
/*
    // Every CG will make use of the same makeCircle() and changeCircleColors function
    makeThree: function() {
        const circle = document.createElement('div')
        circle.style = 'width: 260px; height: 458px; border: 1px solid darkorange; position: relative; float: left; margin: 10px; background-color: white;'
        var item = document.createElement('img')
        circle.appendChild(item)
        item.src = 'vm.png'
        item.style = 'margin:5px; width: 250px; height: 278px;'
        
        const c1 = document.createElement('div')
        c1.style = 'width: 260px; height: 458px; border: 1px solid darkorange; position: relative; float: left; margin: 10px; background-color: white;'
        var item1 = document.createElement('img')
        c1.appendChild(item1)
        item1.src = 'vm.png'
        item1.style = 'margin:5px; width: 250px; height: 278px;'
        
        const c2 = document.createElement('div')
        c2.style = 'width: 260px; height: 458px; border: 1px solid darkorange; position: relative; float: left; margin: 10px; background-color: white;'
        var item2 = document.createElement('img')
        c2.appendChild(item2)
        item2.src = 'vm.png'
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
    makeRow: function() {
        //const title = document.createElement('div')
        //title.style = 'font-family: 楷体;color: white;display: block;background-color: #ec6e47;margin-top: 20px;margin-left: 117px;width: 275px;height: 50px;line-height: 50px;'
        const main = document.createElement('main')
        main.style = 'height: 100%;'

        const bg = document.createElement('div')
        main.appendChild(bg)
        bg.style = 'min-height: 500%; background-image: url("bg1.jpg");  background-size: cover; background-attachment: fixed; background-repeat: no-repeat; background-position: center center;'
        //bg.style = 'background-image: url("bg1.jpg");'
 

        const test = document.createElement('div')
        bg.appendChild(test)
        //title.appendChild(test)
        test.style = 'height: 542px; width: 957px; background-color: :#FCF; padding: 10px 36px 5px; position: relative; margin: 0 auto;'
        //test.style = 'background:; min-height: 500%; background-size: cover; background-attachment: fixed; background-repeat: no-repeat; background-position: center center;'
        //test.style = 'background:#cccccc url(require("bg1.jpg")) fixed;height: 542px;width: 957px;'

        const circle = document.createElement('div')
        test.appendChild(circle)
        circle.style = 'margin: 20px 8px 0px;width: 260px;height: 458px;padding: 20px;background-color: white;border: 1px solid darkorange;float: left;'
        var link = document.createElement('a')
        circle.appendChild(link)
        link.href = '#'
        var item = document.createElement('img')
        link.appendChild(item)
        item.src = 'vm.png'
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

        
        const c1 = document.createElement('div')
        test.appendChild(c1)
        c1.style = 'margin: 20px 8px 0px;width: 260px;height: 458px;padding: 20px;background-color: white;border: 1px solid darkorange;float: left;'
        var link1 = document.createElement('a')
        c1.appendChild(link1)
        link1.href = '#'
        var item1 = document.createElement('img')
        link1.appendChild(item1)
        item1.src = 'vm.png'
        item1.style = 'margin:5px; width: 250px; height: 278px;'
        var price1 = document.createElement('div')
        c1.appendChild(price1)
        price1.style = 'margin-left: 9px; color: black; font-weight: bold;'
        price1.innerText = '$'
        var intro1 = document.createElement('a')
        c1.appendChild(intro1)
        intro1.style = 'color: deepskyblue;font-weight: normal;text-decoration: none;font-family: 汉仪柳楷繁;display: block; margin-left: 9px; margin-top: 15px;'
        intro1.innerText = '2021'
        intro1.href = '#'
        var saleamount1 = document.createElement('div')
        c1.appendChild(saleamount1)
        saleamount1.style = 'color: grey;float: left;height: 20px;font-size: smaller;width: 120px; solid 1px;line-height: 20px;margin-top: 10px;margin-bottom: 20px; margin-left: 10px;'
        saleamount1.innerText = 'sale amount '
        const buttondiv1 = document.createElement('div')
        c1.appendChild(buttondiv1)
        buttondiv1.style = 'margin: auto ; clear: both; height: 20px; line-height: 20px;width: 145px;text-align: center;padding: 5px 0px;  background-color: darkorange; border-radius: 30px; border: 2px solid red;'
        var buybutton1 = document.createElement('a')
        buttondiv1.appendChild(buybutton1)
        buybutton1.style = 'color: white;text-decoration: none;'
        buybutton1.innerText = 'add to cart'
        buybutton1.href = '#'
        


        const c2 = document.createElement('div')
        test.appendChild(c2)
        c2.style = 'margin: 20px 8px 0px;width: 260px;height: 458px;padding: 20px;background-color: white;border: 1px solid darkorange;float: left;'
        var link2 = document.createElement('a')
        c2.appendChild(link2)
        link2.href = '#'
        var item2 = document.createElement('img')
        link2.appendChild(item2)
        item2.src = 'vm.png'
        item2.style = 'margin:5px; width: 250px; height: 278px;'
        var price2 = document.createElement('div')
        c2.appendChild(price2)
        price2.style = 'margin-left: 9px; color: black; font-weight: bold;'
        price2.innerText = '$'
        var intro2 = document.createElement('a')
        c2.appendChild(intro2)
        intro2.style = 'color: deepskyblue;font-weight: normal;text-decoration: none;font-family: 汉仪柳楷繁;display: block; margin-left: 9px; margin-top: 15px;'
        intro2.innerText = '2021'
        intro2.href = '#'
        var saleamount2 = document.createElement('div')
        c2.appendChild(saleamount2)
        saleamount2.style = 'color: grey;float: left;height: 20px;font-size: smaller;width: 120px; solid 1px;line-height: 20px;margin-top: 10px;margin-bottom: 20px; margin-left: 10px;'
        saleamount2.innerText = 'sale amount '
        const buttondiv2 = document.createElement('div')
        c2.appendChild(buttondiv2)
        buttondiv2.style = 'margin: auto ; clear: both; height: 20px; line-height: 20px;width: 145px;text-align: center;padding: 5px 0px;  background-color: darkorange; border-radius: 30px; border: 2px solid red;'
        var buybutton2 = document.createElement('a')
        buttondiv2.appendChild(buybutton2)
        buybutton2.style = 'color: white;text-decoration: none;'
        buybutton2.innerText = 'add to cart'
        buybutton2.href = '#'

        // why not use a little jQuery:
        const body = $('body') // jQuery equivalent to: const body = document.querySelector('body')
        //body.append(title)
        body.append(main)
        
        //this.circles.push(title)
        this.circles.push(test)
        this.circles.push(circle) // add to the circles list
        this.circles.push(c1)
        this.circles.push(c2)
    },


    changeBackColor: function() {
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i+3].style.backgroundColor = 'black'
        }
    },

    changeImg: function(i, image) {
        var imgs = document.getElementsByTagName("img");
        imgs[i-1].src = image;
    },

    changePrice: function(i, pricenum) {
        var prices = document.getElementsByTagName("div");
        prices[i*4].innerHTML = pricenum;
    },

    changeIntro: function(i, introtext) {
        var intros = document.getElementsByTagName("a");
        intros[((i-1)*3)+1].innerHTML = introtext;
    },

    changeLink: function(i, linktext) {
        var links = document.getElementsByTagName("a");
        links[(i-1)*3].href = linktext;
        var links1 = document.getElementsByTagName("a");
        links1[((i-1)*3)+1].href = linktext;
        var links2 = document.getElementsByTagName("a");
        links2[((i-1)*3)+2].href = linktext;
    },

    changeSa: function(i, satext) {
        var sas = document.getElementsByTagName("div");
        sas[(i-1)*4 + 5].innerText = satext;
    },



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
*/
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
        item.src = 'vm.png'
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
    }


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
        item.src = 'vm.png'
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

}

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
