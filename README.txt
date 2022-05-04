1. PROJECT: City Information Guide


2. DESCRIPTION: Site to share some information and photos about some major canadian cities.


3. PSEUDO CODE
3.1 Connect to API Ninjas - City to retrieve all data
	- Use useEffect with axios and State
	- Set() to store value for data everytime the city State changes
3.2 Connect to Unsplash API to retrieve all photos
	- Use useEffect with axios and State
	- Set() to store photos everytime the city State changes
3.3 Create a form component to:
	- show the dropdown list
	- store the user's choice
3.4 Create a Display Information component to display all city information according to a user's selection.
3.5 Create a Display Photo component to display all city photos according to a user's selection.
3.6 Create a method to set() the cityName to the State
3.7 App.js passes the selected data for the Display Information Component
3.8 App.js passes the selected data for the Display Information Component


4. FILE STRUCTURE
- JS for each component are stored inside src/components folder
- CSS files are stored inside src/styles folder


5. APIs
5.1 API Ninjas - City API: https://api-ninjas.com/api/city

- URL: https://api.api-ninjas.com/v1

- Endpoints: 
    + City: /city
        * Parameters: client_id: "your key", name: 'city name'
    + Country: /country
        * Parameters: client_id: "your key",name: 'country name'
    

- Authentication: 

5.2 Unsplash API: https://unsplash.com/documentation#like-a-photo

- URL: https://api.unsplash.com/

- Endpoints: 
    + List: /photos
        * Parameters: 
    + 1 photo: /photos/:id
        * Parameters: 
    + Download: /photos/:id/download
        * Parameters: 

- Authentication: https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY