require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:users)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post :create, user: { current_location: @user.current_location, date_of_birth: @user.date_of_birth, education: @user.education, email: @user.email, firstname: @user.firstname, gender: @user.gender, language: @user.language, lastname: @user.lastname, other_information: @user.other_information, profession: @user.profession, search_history: @user.search_history }
    end

    assert_redirected_to user_path(assigns(:user))
  end

  test "should show user" do
    get :show, id: @user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @user
    assert_response :success
  end

  test "should update user" do
    patch :update, id: @user, user: { current_location: @user.current_location, date_of_birth: @user.date_of_birth, education: @user.education, email: @user.email, firstname: @user.firstname, gender: @user.gender, language: @user.language, lastname: @user.lastname, other_information: @user.other_information, profession: @user.profession, search_history: @user.search_history }
    assert_redirected_to user_path(assigns(:user))
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete :destroy, id: @user
    end

    assert_redirected_to users_path
  end
end
