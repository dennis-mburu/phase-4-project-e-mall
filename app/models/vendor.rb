class Vendor < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true


    has_many :products

end
