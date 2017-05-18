// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var edge = require('electron-edge');

// Get dll
var toErMahGerd = edge.func({
     assemblyFile: 'MyExternalDLLLibrary.dll',
     typeName: 'MyExternalDLLLibrary.MyClass',
     methodName: "ToCSharpText"
});

document.getElementById("translate-btn").addEventListener("click", function (e) { 

     var inputText = document.getElementById("input-text").value;
     toErMahGerd(inputText, function (error, result) {
          document.getElementById("output-text").innerHTML = result; 
     }); 

});