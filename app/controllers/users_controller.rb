class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  def current
    @user = current_user
  end

  def meetup
    @meetup_details = params
  end

#   @params = params
#   respond_to do |format|
#     format.json { render :show, status: :ok, location: # @params }


  def search
    @daisy = "This is Daisy flickr API testing coming from Rails"
  end


  def home
    @testing = "This is Donald testing how this works. Here is variable coming from Rails"

    @meetup_key = ENV["MEETUPS_API"]
    @flickr_key = ENV["FLICKR_API"]

    query = {
      key: ENV["GMAPS_API"],
      callback: "app.onGoogleInitialise",
      signed_in: true
    }.to_query

    @key = ENV["GMAPS_API"]

    @test = "https://maps.googleapis.com/maps/api/js?" + query

    @more_text = ENV["BROWSER_KEY"]
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    @user = current_user # prevent people updating other users

    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:firstname, :lastname, :email, :language, :gender, :current_location, :search_history, :date_of_birth, :education, :profession, :other_information)
    end
end
