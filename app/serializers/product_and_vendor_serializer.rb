class ProductAndVendorSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :stock, :image_url, :username, :phone, :email, :address
  # belongs_to :vendor

  def username
    self.object.vendor.username
  end

  def phone
    self.object.vendor.phone
  end

  def email
    self.object.vendor.email
  end

  def address
    self.object.vendor.store_address
  end
end
