class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :username
      t.integer :phone
      t.string :email
      t.string :avatar
      t.string :password_digest

      t.timestamps
    end
  end
end
