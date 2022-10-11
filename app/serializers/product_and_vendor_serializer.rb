class ProductAndVendorSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :stock, :image_url
  belongs_to :vendor
end
