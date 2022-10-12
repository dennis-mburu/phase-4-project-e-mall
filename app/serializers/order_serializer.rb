class OrderSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :customer_id, :product_title, :product_image, :product_price

  def product_title
    self.object.product["title"]
  end

  def product_image
    self.object.product["image_url"]
  end

  def product_price
    self.object.product["price"]
  end
end
