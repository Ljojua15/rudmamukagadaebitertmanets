var main = 1;

function ChangeColor(){
    var imge = ["blue","purple","red","black","yellow","green","brown","orange"];

    document.getElementsByTagName("body")[0].style.background = imge[main++];

    if(main > imge.length - 1)
    main = 0;
}