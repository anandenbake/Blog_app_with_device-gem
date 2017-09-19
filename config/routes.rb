Rails.application.routes.draw do
	devise_for :users, controllers: { sessions: 'users/sessions' , registrations: 'users/registrations' }



      resources :articles  do
      	resources :comments
      end

  root 'welcome#index'

end
