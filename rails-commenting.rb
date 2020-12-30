# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) This is the name of the controller for this application and within it are all the methods that are necessary to make the views and routes.
class BlogPostsController < ApplicationController
  def index
    # 2) This local variable is storing all the instances BlogPost within the database
    @posts = BlogPost.all
  end

  def show
    # 3) This allows for each specific item in the database to be retrived based on id that is passed as a param.
    @post = BlogPost.find(params[:id])
  end

  # 4)This the method for the forum which will have the requrirments to create a new instance of the class Post but will not create a new post.
  def new
    @post = Post.new
  end

  def create
    # 5)The instance variable allows for new blog post to be created and added into the database. The  method .create is taking another method as an argumnet that keeps the database protected.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) This is using the .update method and taking in the private method as an argument to pass in the params for the update to actually update in the database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) This redirects back to the post trying to be deleted if something goes wrong instead of redirecting to the list of all blog post.
      redirect_to blog_post_path(@post)
    end
  end

  # 8) This is a rails statement that keeps this method within the controller class and does not allow it to be called anywhere else.
  private
  def blog_post_params
    # 9) This line of code states what infroamtion is required when creating a new instance and protects the database from entires that do not meet all the requriements.
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) Builds a has_many and belongs_to relationship between BlogPost and comments where each blogpost can contain many comments.
  has_many :comments
end
