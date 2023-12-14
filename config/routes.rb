Rails.application.routes.draw do
  root 'pages#home'
  get '/ip', to: 'ip#index'
end
