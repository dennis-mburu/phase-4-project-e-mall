class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username, :phone, :email, :avatar, :password_digest
end
