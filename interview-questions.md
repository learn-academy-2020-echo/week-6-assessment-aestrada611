# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:

  I think that the foreign key will be the name of the first table lowercased with _id appended to the end of it. So it would be animal_id. This would belong to the sightings model.

  Researched answer:

  After doing so research it seems that it is the name of the first model with _id at the end. It would be animal_id and it would be on the sightings model because there can be many sightings related to on animal. This would mean that in the animal model we should write out has_many :sightings and in the sightings model we would type out belongs_to :animal.


2. Which RESTful routes must always be passed params? Why?

  Your answer:

  I am not sure which ones specifically need to be passed params but I know it has to do with CRUD actions and being able to create, update, read, and delete. I think that delete and update are going to be the ones that must have changes that must be passes as params.

  Researched answer:

After some research it seems that CRUD is related to restful routes but there are more restufl routes that may correspond to each RESTful route. Index and show correspond to read and only show data. New and create are routes that correspond with create and these two work together to make a new instance within the database. New allows for the form to be created and store the properties of the entry. New allows for those properties to be passed as params to actually create an instance of a class. Edit and update correspond to update and they work very similar to new and create. Edit shows the form and update takes the properties for an item as params and updates in the database. The last would be delete that corresponds to destroy which targets an instance and deletes it.


2.0 answer
Create/Update will call the params method
Update, show, and destory will need an id



3. Name three rails generator commands. What is created by each?

  Your answer:

  Rails generate model:
  This command generates a model that the "table" of the database will follow which includes the name of it and the column names and data type that will be stored.

  Rails generate controller:
  This command generates a controller for a rails application that will contain all of the methods for the corresponding views that will be rendered.

  Rails generate migration:
  This command will update the database and can change columns, add columns, rename columns, and delete columns in the database as well as update items within the database.

  Researched answer:

  Rails generate model:
  This command generates a model that the "table" of the database will follow which includes the name of it and the column names and data type that will be stored. The model name should be Pascal cased because it will be the name of the table. The columns are named column_name:datatype and are snake_cased.

  Rails generate controller:
  This command generates a controller for a rails application that will contain all of the methods for the corresponding views that will be rendered. It is responsible for routing external requests to internal actions. It manages caching. It is PascalCased and is often named Main or Home or even Index.

  Rails generate migration:
  This command will update the database and can change columns, add columns, rename columns, and delete columns in the database as well as update items within the database. It is written out as $rails generate migration action_name_here with the action being snake_cased. The migration starts with the purpose (create, add, remove, update) and ends with the table name. For example [add_item_to_column_name] Allows to change the shape of the database.

  Rails generate rspec:install
  This command generates the files needed to run RSpec testing.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    '/users'          'user#index'
-This will show all of the users

method="GET"    '/users/1'        'user#show'
-This will show a specific user

method="GET"    '/users/new'      'user#new'
-This will route to the view with the form to make a new user.

method="GET"    /users/edit/1     'user#edit'
-This routes to the view with the form where the properties that want to be updated are made.

method="POST"   /users/           'user#create'
-This take what is in the form and make the actual change in the database.

method="PUT"    /users/1         'user#update'
-This route makes the changes on the form actually occur in the database.
-Should we use put or patch???


method="DELETE" /users/1        'user#destroy'
-This will delete an instance of a class



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started.


1. As a user I can create a To Do List Application

2. As a user the task must include name, date, and mark tasks as complete/incomplete

3. As a user I can see a form to add an item to the list

4. As a user I can add more items to the to do list

5. As a user I can see all of the items on the list

6. As a user I can i can see a form to edit an item on the list

7. As a user I can i can edit items on the list

8. As a user I can navigate between pages

9. As a user I can target a specific task

10. As a user I can delete items from the list
