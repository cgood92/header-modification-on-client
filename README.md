# header-modification-on-client
Proof of concept of how to add a header to a request for an asset

Concept:

1. Client click on a link to view an asset
2. Server responds with HTML/JavaScript
3. The client runs the returns JavaScript
    - An Ajax request is made to download the raw data
    - The client is directed to the raw data downloaded
    
    
In this example, the `index.js` server would be the one that we have control over, while the `image-server` would be beyond our control (a 3rd-party system).

To run this, you can clone this repository and run `yarn && yarn start`.
