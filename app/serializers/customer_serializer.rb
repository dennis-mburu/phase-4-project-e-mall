class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username, :phone, :email, :avatar, :user_type
end
