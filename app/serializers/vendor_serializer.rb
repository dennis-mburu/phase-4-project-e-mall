class VendorSerializer < ActiveModel::Serializer
  attributes :id, :username, :phone, :email, :avatar, :store_address, :bio
end
