Rails.application.routes.draw do
  get '/:code', to: 'questions#random_list'
end
