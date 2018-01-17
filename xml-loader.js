// Adapted from: https://www.w3schools.com/xml/xsl_client.asp
// (like the xml snipped from the instructions ;-) )
function loadXMLDoc(filename)
{
    if (window.ActiveXObject){
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    else {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
}

function loadMovieDatabase()
{
    xml = loadXMLDoc("media.xml");
    xsl = loadXMLDoc("media.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document"){
        ex = xml.transformNode(xsl);
        document.getElementById("video-table").innerHTML = ex;
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument){
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("loading-indicator").remove();
        document.getElementById("video-table").appendChild(resultDocument);
    }
}