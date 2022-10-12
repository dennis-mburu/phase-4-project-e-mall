class AddUserTypeToVendors < ActiveRecord::Migration[7.0]
  def change
    add_column :vendors, :user_type, :string
  end
end
