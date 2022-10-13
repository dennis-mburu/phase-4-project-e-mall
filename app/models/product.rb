class Product < ApplicationRecord
    belongs_to :vendor
    has_many :orders
    has_many :customers, through: :orders
    validates :price, presence: true
    validates :title, presence: true

end
