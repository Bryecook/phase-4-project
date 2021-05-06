# On the Rocks, a cocktail website

##Resources and Relationships

### Cocktail API
### Cocktail -CRUD
### User
### Favorite List
### CocktailListJoiner
### Dislike List


### Favorite List has many CocktailListJoiner and Cocktails thru CocktailListJoiner
### Dislike List has many CocktailListJoiner and Cocktails thru CocktailListJoiner
### CocktailListJoiner has one List and one Cocktail
### User has one favorite list.
### User has one Dislike List.

## Client routes

### Browse Page where users can browse drinks
### Login Page where users can login.
### User Profile Page with links favorite/dislike list pages. Can edit/delete user here.
### Favorite list page where users can view their favorite list.
### Dislike List Page where users can view their dislike list.

## Resource Attributes

### User - Name, Age, Hometown, profile picture
### Favorite List- user.id
### Dislike list- user.id
### CocktailListJoiner- list.id, cocktail.id
### Cocktail API- a whole bunch of ish

## CRUD

### User- full CRUD
### Both lists- CRU
### CocktailListJoiner- full CRUD