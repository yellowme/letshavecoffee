class QuestionsController < ApplicationController
  def random_list
    puts params[:code]
    @questions = Question.all.limit(30)
    render :random_list
  end
end
