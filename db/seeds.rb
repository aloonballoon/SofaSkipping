# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Location.create!(city: "San Francisco", country: "United States of America", lat: 37.7749295, lng: -122.41941550000001)
Location.create!(city: "Los Angeles", country: "United States of America", lat: 34.0522342, lng: -118.2436849)
Location.create!(city: "New York", country: "United States of America", lat: 40.741895, lng: -73.989308)
Location.create!(city: "Chicago", country: "United States of America", lat: 41.8781136, lng: -87.62979819999998)
Location.create!(city: "Istanbul", country: "Turkey", lat: 41.0082376, lng: 28.97835889999999)
Location.create!(city: "Sao Paulo", country: "Brazil", lat: -23.5505199, lng: -46.63330940000003)

User.create!(first_name: "Alan", last_name: "Uraz", username: 'alanuraz', email: 'alanuraz@gmail.com', home_location_id: 1, age: 28, bio: "first member", password: "hellothere")
User.create!(first_name: "Ayda", last_name: "Uraz", username: 'aydauraz', email: 'aydauraz@gmail.com', home_location_id: 2, age: 24, bio: "second member", password: "hellothere")
User.create!(first_name: "Guest", last_name: "Guest", username: "Guest", email: "guest@guest.com", home_location_id: 3, age: 99, bio: "Just checking out the site", password: '123456')
User.create!(first_name: "Leana", last_name: "Glick", username: "leanaglick", email: "leana@glick.com", home_location_id: 4, age: 29, bio: "third member", password: 'hellothere')

Booking.create!(host_id: 1, guest_id: 2, start_date: "2018/05/13", end_date: "2018/06/15")
Booking.create!(host_id: 2, guest_id: 3, start_date: "2018/07/13", end_date: "2018/08/15")
Booking.create!(host_id: 4, guest_id: 1, start_date: "2018/09/13", end_date: "2018/10/15")
Booking.create!(host_id: 1, guest_id: 3, start_date: "2018/10/13", end_date: "2018/11/15")
Booking.create!(host_id: 2, guest_id: 4, start_date: "2018/11/13", end_date: "2018/12/15")
Booking.create!(host_id: 4, guest_id: 1, start_date: "2019/01/13", end_date: "2019/01/15")
