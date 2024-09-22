var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    (function (index) {
        nodes[index].addEventListener('click', function () {
            console.log('You clicked element #' + (index+1));
        });
    })(i);
}