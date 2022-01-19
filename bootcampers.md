BRANCHING and commiting often. - Ongoing

Monday:

design/CSS/Mockup - TODAY!
Component tree - TODAY

Tuesday:

Continue CSS/layout- hard code the website
serverside - database - post, get requests, create table, SQL, environmental variables.
Charts working
const form= [{id: serial primary key, comments: blogpost, range: 10%, workshop score: 5, timestamp: xx, url: www..}]

Achieve being able to submit data on our website to the database.

Wednesday:

Aim to have a complete project with full basic functionality.
All results displaying.
Extra feature - login page.

Complete the CSS for the second page and add the button to go back home. <<<
work out how to do a pie chart (and back up plan)
link the range input - find out how to get the data
find out how to display percentages from our workshop quiz. 



How client can feed data into database
Searching for pages based on week or topic.
links (dropdown?) on the home page to different areas.
What happens when you input text e.g daily reflection?
Take a name but we do not display the name.
Timestamp on the comments.
Profile picture?
Sharing work - Show name of poster
fetch request to Github 


...Things to do (Leanne)

Data will be collected on GET fetch.
Could either do on load, or where the useState changes. 
If we choose to do on useState, this will have to be declared in the parent, search form element. I'm guessing, this will then updated even if we are not on that page... like a twitter feed? 

Data will be passed down in props to our child components and rendered here to show on the website. 

Submitted Object: 

{Feeling: 0, Reflection: "Feeling Happy", Workshop: 3, Work: "filetype.git"}
{Feeling: 0, Reflection: "Feeling Happy", Workshop: 3, Work: "filetype.git"}
{Feeling: 0, Reflection: "Feeling Happy", Workshop: 3, Work: "filetype.git"}
{Feeling: 0, Reflection: "Feeling Happy", Workshop: 3, Work: "filetype.git"}

Do a get request, everytime a statechanges, for example. 
We might break the data down into just the parts we need before passing it to our components or just pass all the data down and break it down there. 

Submit to the data base. 

Get the data on userDisplay using a fetch request. 
Data retrived & JSON'd so we can access the data. 

Need to get an array of all data in the Feeling Key. 

Loop over the array and return the value at data.Feeling

let feelings = data.map((element) => element.Feeling);
console.log(feelings);

Then use the reduce method we discussed before and put on the pie chart. 

Reflections

- we want the comments to display in the reflections. 

map through the commments object to get all the comments.
Create a bullet for each comment and append to the website by using map. 

DOES THIS NEED TO BE INSIDE ANOTHER COMPONENT... IF SO WE PASS DOWN DATA TO LI COMPONENT? INSIDE OF UL?
data.map(element => return <li> element.data </li>)

setComments needs to change when people submit a new comment.

create useState in the MAIN page and setComments on click.

Get comments and append, will change when setComments is updated.

We want our page to be constantly updating, so use useEffect to fetch data whenever the state changes on the main page. 

this means setComments will be passed down as a prop from the main page. And we need to set UserDisplay as a child component of submit. 
This shouldn't affect the page being shown as it is on a different page route.  

- similar concept for share your work... displayed as a bulleted list. 


if we do 1/2/3/4/5 buttons. 

create an array variable. 
Depending on which button was clicked add the number to the array. 
use e.target.innerText ... might be a string so set to a number. 

Work out percentages on the numbers. 
... use the count Occurances method. 
divide this number by the array.length and * by 100. 

....load up some dummy data, and then if we useState to change each data component on the parent page we can perhaps demonstrate that this would be a live updare as others add their feedback? 

