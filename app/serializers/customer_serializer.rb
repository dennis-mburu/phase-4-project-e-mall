class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username, :phone, :email, :avatar
end
