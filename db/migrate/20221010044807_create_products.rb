class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.integer :price
      t.string :image_url
      t.integer :stock
      t.string :vendor_id

      t.timestamps
    end
  end
end
