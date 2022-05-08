# BD Books Warehouse

This project Live site [Link](https://bd-books-warehouse.web.app/)

StackOverflow [Link](https://stackoverflow.com/questions/72155223/how-to-use-jwt-in-react)

## Purpose

This is a warehouse website. Here is the information about product storage accounting and product management.

## home

First there are banners with pictures of several warehouses and buttons for product management.

This is followed by the TOP CATEGORIES section which lists the best selling CATEGORIES categories.

After that there are OUR TOP LISTING BOOKS of the warehouse.

Then there's TOP PUBLISHER, which lists the best-selling publications.

## Manage Inventories

Manage Inventories This page has a list for managing all products and there is a button to delete from this list where clicking will delete the product and above all there is another button Add Items where clicking can take you to Add Items page and add new products.

## Add Items

If you submit all the product information on the Add Items page, new product will be added

## My Items

On the My Items page only the logged in user will show a list of all the products added and will be able to delete specific products.

## Blogs

The following questions are answered on the Blogs page

### `1.` Difference between javascript and nodejs

### `2.` When should you use nodejs and when should you use MongoDB

### `3. `Differences between SQL and NoSQL databases.

### `4.` What is the purpose of JWT and how does it work

## More that has been used

The basic version of the `JWT` token is used for email / password-based authentication. After logging in, a `JWT` token is created and stored on the client-side and for my item page, the token is sent with the call and verified to the user. `401` and `403` have been applied. And `.env` files have been added

## All the technologies that have been used

### react-bootstrap: `2.3.1`
### react-dom: `18.1.0`
### react-firebase-hooks: `5.0.3`
### react-hook-form: `7.30.0`
### react-icons: `4.3.1`
### react-router-dom: `6.3.0`
