Rails.application.routes.draw do
  get '/todoitems.json'      => 'to_do#items_as_json'

  post '/doaddnewitem'       => 'to_do#doaddnewitem'
  post '/toggledone/:id'     => 'to_do#toggledone'
  post '/delete/:id'         => 'to_do#delete'
  post '/savechangesfor/:id' => 'to_do#savechangesfor'
  post '/clearcompleted'     => 'to_do#clearcompleted'
end

