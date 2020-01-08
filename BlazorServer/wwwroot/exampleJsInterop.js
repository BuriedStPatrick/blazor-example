window.convertArray = (win1251Array) => {
    var win1251decoder = new TextDecoder('windows-1251');
    var bytes = new Uint8Array(win1251Array);
    var decodedArray = win1251decoder.decode(bytes);
    console.log(decodedArray);
    return decodedArray;
};

window.thing = () => {
    window.document.getElementById('test').innerText = 'TEST!';
}

window.returnArrayAsyncJs = () => {
    DotNet.invokeMethodAsync("BlazorServer", "ReturnArrayAsync").then(data => {
        data.push(4);
        console.log(data);
    })
}