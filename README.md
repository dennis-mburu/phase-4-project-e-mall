# phase-4-project-E-mall

This is a full-stack project meaning it conststs of the React front-end part, and a backend part, with the API being 
generated by Ruby's popular framework **Ruby on Rails** to support the React front-end. 

This project is also part of the requirements to complete phase 4 of the moringa + flatiron shool curriculum (Ruby on Rails)

## Author
This Project was Created and Edited by **Dennis Mburu Mwaura**.

## Project Description and User Story
This project, as the name suggests, is an E-commerce website and has been designed to work as follows:
1. All Users with access to the deployed site can view all the products published by all the different vendors even without logging in. They will However only be limited to view the product and vendor details but will not have a cart where they can make online orders and manage their cart.

2. A user can create an account or log in either as a vendor or a customer.

3. If logged in as a vendor, the user can:
    a. Publish new Products.
    b. Modify ONLY the products that they sell
    c. Delete their own products after selling.

4.  If logged in as a customer, the user user will have a cart which they can edit by making new orders on different products or removing previously ordered products.

Some of the back-end requirements include: 
- [x] *Use a Rails API backend with a React frontend.*
- [x] *Have at least two resources (two DB tables) on the backend; your application must have full CRUD actions for at least one resource.*
- [x] *Have at least two different client-side routes using React Router.*
- [x] *Implement authentication/authorization. At a minimum, a user should be able to log into the site and stay logged in via user ID in the session hash. Password protection is optional.*


## Project Setup Instructions.
In order to set up this project on your local machine, you will first have to clone it. Both the front end and back end are in Located in this same repository. The front-end is in a directory called *client*

After cloning, first change the directory to the *client* folder and run a quick **npm install** on the command line. This will install all the necessary node modules required for the react front-end.
Once the installation is complete, you can run **npm start** to go live and view the react project on your web- browser

With this 2 tasks complete, change directory to the backend folder and run a quick **bundle install** which will also install the necessary required gems for the backend application.
After bundle install, you will need 2 more comands to set up your server and get it live.

First, you have to run **rails db:migrate** which will create your database and set up all your tables in the local environment. You can also run **rails db:seed** to populate your tables with some starter data, though this is not entirely neccessary. 

Last but not least, run **rails s** to get your server running and host your database locally. After starting the server, you will however need to refresh your react frontend application in the browser, so that a connection can be established. 

You can now accomplish all the steps/procedures that have been listed in the user story.


## Project Live Link.

https://powerful-thicket-39465.herokuapp.com/

The link above is all you need to get the site up and running.


## CopyRight & License Information
This is an Open Source Project with an MIT license. For more Information on the license terms and condition, see the attached [LICENSE](./LICENSE)