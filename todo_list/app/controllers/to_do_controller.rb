class ToDoController < ActionController::Base
  def items_as_json
    sleep 0.5

    render :json => ToDoItem.all
  end

  def doaddnewitem
    sleep 0.5

    item_hash =
      { :done => false, :description => params[:itemtoadd] }
    ToDoItem.create(item_hash)

    render :json => ToDoItem.all
  end

  def toggledone
    sleep 0.5

    params_to_do_item_id = params[:id].to_i

    to_do_item = ToDoItem.find_by(:id => params_to_do_item_id)
    if to_do_item
      to_do_item.update({ :done => !to_do_item.done })
    end

    render :json => ToDoItem.all
  end

  def delete
    sleep 0.5

    params_to_do_item_id = params[:id].to_i

    to_do_item = ToDoItem.find_by(:id => params_to_do_item_id)
    if to_do_item
      to_do_item.destroy
    end

    render :json => ToDoItem.all
  end

  def savechangesfor
    sleep 0.5

    params_to_do_item_id = params[:id].to_i

    desc_hash =
      { :description => params[:newdescription] }
    ToDoItem.update(params_to_do_item_id, desc_hash)

    render :json => ToDoItem.all
  end

  def clearcompleted
    sleep 0.5

    ToDoItem.where(:done => true).destroy_all

    render :json => ToDoItem.all
  end
end

