class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :image_url, :stock, :vendor_id
end
