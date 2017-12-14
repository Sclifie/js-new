var slider = {};

slider.init = function(id) {
    this.element = document.getElementById(id);
    console.log(this.element)
};
console.log(slider.element);
slider.add = function(url, alt){
    var newImg = document.createElement("img");
    newImg.setAttribute('src', url);
    newImg.setAttribute('alt', alt);
    newImg.classList.add('slide-item');
    this.element.appendChild(newImg);
};
slider.init("hello");
slider.add("#","hello world");
slider.add("#","hello world");
slider.add("#","hello world");

// var slider1 = {
//     slider:function init(hello) {
//         document.getElementById(hello);
//     },
//     img: function(url,alt) {
//         var newImg = this.slider.createElement("img");
//         this.slider.appendChild(newImg);
//         newImg.
//         newImg.setAttribute("src",url);
//         newImg.classList.add += "newClassname";
//     }
// };
// slider1.slider("hello");
