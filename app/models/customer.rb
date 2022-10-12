class Customer < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true

    has_many :orders
    has_many :products, through: :orders
end
