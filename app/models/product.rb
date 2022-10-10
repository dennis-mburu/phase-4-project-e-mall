class Product < ApplicationRecord
    belongs_to :vendor
    has_many :orders
    has_many :customers, through: :orders
end
