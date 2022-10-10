class Customer < ApplicationRecord
    has_secure_password

    has_many :orders
    has_many :products, through: :orders
end
