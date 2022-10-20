Difference between HTTP1.1 and HTTP2;

HTTP - Hypertext Transfer Protocol is used in "Client Server" to request data from the "Remote/Local Server" 
to the WebApplication. It supports most of the Webb Applications which is in user now. Tim Berners-Lee first initiated 
the "Development of HTTP in 1989". After several stages of developments of http, "HTTP1.1 was released in 1997."

HTTP1.1:

HTTP 1.1 is the first version of HTTP. Once an user is navigated to Guvi.com the HTTP sends an request to the 
local server to 'Render the datas' from Local Server to client server. The request sent by the client server will be in 
'text-based'(message) format in return the local server will return html page for the data display. The request sent by 
the Client server uses "GET or POST" method and in return a html page will be received by the client server.

Sample Request: GET/index.html HTTP/1.1
                www.guvi.com

HTTP/2:

HTTP/2 is the second version of the HTTP which came to market in 2015. HTTP/2 is developed with SPDY Protocols.Though 
HTTP/2 came to market HTTP1.1 is still in use in most if the web. HTTP is more likely to be the issue resolver of HTTP1. 
It was more faster then HTTP 1 also, the content prioritization was more efficient in it. It send request as  
"Binary Framing layer" instead of text based requests. Binary Frmaing layer is nothing but, breaking the communication 
between the client and local server into small chunks and creates an interleaved bidirectional stream of communication.

Let's see some common difference between both the versions in the below table. 

----------------------------------------------------------------------------------------------------------------------
                        HTTP1.1                               |                          HTTP/2
----------------------------------------------------------------------------------------------------------------------
  1 | Request will be sent in Text-based format               |          It works on the Binray Framing Layer
    |                                                         |                      	
  2 | There is head of line blocking that blocks              |          It allows multiplexing so one TCP connection  
    | all the requests behind it until it doesn’t             |          is required for multiple requests.
    | get its all resources.	                                |   
    |                                                         |               
  3 |It uses requests resource Inlining for use getting       |          It uses PUSH frame by server that collects all 
    |multiple pages	                                          |          multiple pages
    |                                                         |        
  4 |It compresses data by itself.	                          |          It uses HPACK for data compression.
    |                                                         |   
-----------------------------------------------------------------------------------------------------------------------




