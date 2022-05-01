1. PROJECT:


2. DESCRIPTION


3. PSEUDO CODE
3.1 Connect to API Ninjas - City
3.2 
3.3 
3.4 
3.5 
3.6 


4. FILE STRUCTURE
-JS and CSS files for each component are stored inside each Component Folder in the src folder
-


5. APIs
5.1 API Ninjas - City API: https://api-ninjas.com/api/city

- URL: https://api.api-ninjas.com/v1

- Endpoits: 
    + City: /city
        * Parameters: client_id: "your key", name: 'city name'
    + Country: /country
        * Parameters: client_id: "your key",name: 'country name'
    

- Authentication: 

5.2 Unsplash API: https://unsplash.com/documentation#like-a-photo

- URL: https://api.unsplash.com/

- Endpoits: 
    + List: /photos
        * Parameters: 
    + 1 photo: /photos/:id
        * Parameters: 
    + Download: /photos/:id/download
        * Parameters: 

- Authentication: https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY