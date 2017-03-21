Rails.application.routes.draw do
  root "demos#index"
  get "*path" => "demos#index"
end
