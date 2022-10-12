class AddUserTypeToCustomers < ActiveRecord::Migration[7.0]
  def change
    add_column :customers, :user_type, :string
  end
end
