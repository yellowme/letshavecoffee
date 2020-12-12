require "test_helper"

class QuestionsControllerTest < ActionDispatch::IntegrationTest
  test "should get random_list" do
    get questions_random_list_url
    assert_response :success
  end
end
