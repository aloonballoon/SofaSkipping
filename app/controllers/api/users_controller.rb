class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.where(first_name: params[:user][:first_name]).or(User.where(last_name: params[:user][:last_name])).or(User.where(username: params[:user][:username])).or(User.where(email: params[:user][:email]))
    unless @users.empty?
      render 'api/users/index'
    else
      render json: {message: "No users by those fields found!"}, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def guests
    @user = User.find(params[:id])
    @guests = @user.guests
    render 'api/users/guests'
  end

  def hosts
    @user = User.find(params[:id])
    @hosts = @user.hosts
    render 'api/users/hosts'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, :email, :user_status, :age, :bio, :home_location_id)
  end

end
