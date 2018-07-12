# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all


User.create!(first_name: "Alan", last_name: "Uraz", username: 'alanuraz', email: 'alanuraz@gmail.com', home_location_id: 1, age: 28, bio: "first member", password: "hellothere")

User.create!(first_name: "Ayda", last_name: "Uraz", username: 'aydauraz', email: 'aydauraz@gmail.com', home_location_id: 1, age: 24, bio: "second member", password: "hellothere")

User.create!(first_name: "Guest", last_name: "Guest", username: "Guest", email: "guest@guest.com", home_location_id: 1, age: 99, bio: "Just checking out the site", password: '123456')

User.create!(first_name: "Leana", last_name: "Glick", username: "leanaglick", email: "leana@glick.com", home_location_id: 1, age: 29, bio: "third member", password: 'hellothere')
