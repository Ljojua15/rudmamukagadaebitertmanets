var main = 0;

function ChangeColor(){
    var image = ["blue","purple","red","black","yellow","green","brown","orange"];

    document.getElementsByTagName("body")[0].style.background = image[main++];

    if(main > image.length - 1)
    main = 0;
}