class QuestionsChannel < ApplicationCable::Channel
  def subscribed
    code = params[:code].downcase
    stream_from "questions_#{code}"
  end

  def receive(data)
    code = params[:code].downcase
    ActionCable.server.broadcast("questions_#{code}", data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
