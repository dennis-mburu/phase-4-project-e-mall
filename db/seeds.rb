# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "Seeding..."


# vendor1 = Vendor.create(username: "", phone: , email: "", avatar: Faker::Avatar.image, store_address: "", bio: Faker::Hacker.say_something_smart, password: "" ) 
puts "Seeding Vendors" 

vendor1 = Vendor.create(username: "deno", user_type: "vendor", phone: 254707724571, email: "deno@gmail.com", avatar: Faker::Avatar.image, store_address: "Nairobi Moi Avenue City Gate Mall First Floor Shop Number U12", bio: Faker::Hacker.say_something_smart, password: "deno" )
vendor2 = Vendor.create(username: "mburu", user_type: "vendor", phone: 254701003914, email: "mburu@gmail.com", avatar: Faker::Avatar.image, store_address: "Nairobi CBD tearoom, along taveta road ", bio: Faker::Hacker.say_something_smart, password: "mburu" ) 
vendor3 = Vendor.create(username: "mwaura", user_type: "vendor", phone: 254113617655 , email: "mwaura@gmail.com", avatar: Faker::Avatar.image, store_address: "kenya cinema Kenyatta avenue 4th floor shopB5", bio: Faker::Hacker.say_something_smart, password: "mwaura" ) 

puts "Done Seeding Vendors"

puts "Seeding Customers"

# customer1 = Customer.create(username: "", phone: , email: "", avatar:Faker::Avatar.image, password: "" )

customer1 = Customer.create(username: "diana", user_type: "customer", phone: 2547334455 , email: "diana@gmail.com", avatar:Faker::Avatar.image, password: "diana" )
customer2 = Customer.create(username: "mso", user_type: "customer", phone: 2547889900, email: "mso@gmail.com", avatar:Faker::Avatar.image, password: "mso" )
customer3 = Customer.create(username: "caro", user_type: "customer", phone: 2547223344, email: "caro@gmail.com", avatar:Faker::Avatar.image, password: "caro" )

puts "Done seeding customers"

puts "Seeding Categories"

# category1 = Category.create(name: "")

category1 = Category.create(name: "electronics")
category2 = Category.create(name: "fragrances")
category3 = Category.create(name: "home-decorations")
category4 = Category.create(name: "clothes")
category5 = Category.create(name: "watches")

puts "Done Seeding Categories"



puts "Seeding Products"

# product1 = Product.create(title:"" , description: "", price: , image_url: "" , stock: , vendor_id: )


product1 = Product.create(title:"iPhone 14" , description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip", price: 89000, image_url: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , stock:10 , vendor_id:1 )
product2 = Product.create(title:"MacBook Pro" , description: "MacBook Pro 2022 with mini-LED display may launch between September, November", price:120000 , image_url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" , stock:7 , vendor_id:1 )
product3 = Product.create(title:"Rolex Cosmograph Daytona " , description: "Rolex Yacht-Master 40 116622 men's watch. Features a polished 904L Oystersteel stainless steel case and brushed with polished 904L Oystersteel stainless steel Oyster bracelet", price: 95000, image_url: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" , stock:13 , vendor_id:1 )
product4 = Product.create(title:"HP Pavilion 15-DK1056WM" , description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", price: 85000 , image_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , stock:16 , vendor_id:1 )
product5 = Product.create(title:"Fog Scent Xpressio Perfume" , description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil", price:3500 , image_url: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZyYWdyYW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" , stock:7 , vendor_id:2 )
product6 = Product.create(title:"Acqua Di Gio" , description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men", price:3000 , image_url: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZnVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" , stock:8 , vendor_id:2 )
product7 = Product.create(title:"3D Embellishment Art Lamp" , description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)", price:1000 , image_url: "https://images.unsplash.com/photo-1475783006851-1d68dd683eff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" , stock:21 , vendor_id:2 )
product8 = Product.create(title:"Handcraft Chinese style" , description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate", price:900 , image_url: "https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmFzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" , stock:4 , vendor_id:2 )
product9 = Product.create(title:" Women's Hooded Leather Biker Jacket" , description: "Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, HAND WASH ONLY", price:1200 , image_url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" , stock:5 , vendor_id:3 )
product10 = Product.create(title:"Mens Cotton Jacket" , description: "Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day ", price:1700 , image_url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , stock:7 , vendor_id:3 )
product11 = Product.create(title:"Unisex Denim Jacket" , description: "great outerwear jackets, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors", price:1500 , image_url: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , stock:8 , vendor_id:3 )
product12 = Product.create(title:"White Hoodie" , description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable ", price:700 , image_url: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvb2RpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" , stock:9 , vendor_id:3 )

puts "Done Seeding Products"


puts "Seeding Orders"

20.times do
    Order.create(customer_id: rand(1..3), product_id: rand(1..12))
end

puts "Done Seeding Orders"

puts "Seeding Complete!"