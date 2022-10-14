class ChangeColumnVendors < ActiveRecord::Migration[7.0]
  def change
    change_column :vendors, :phone, :string
  end
end
