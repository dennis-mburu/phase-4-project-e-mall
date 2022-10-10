class ProductAndVendorSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :image_url
  belongs_to :vendor
end
