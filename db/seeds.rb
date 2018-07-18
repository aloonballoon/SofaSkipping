# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Location.destroy_all
Booking.destroy_all


sf = Location.create!(city: "San Francisco", country: "United States of America", lat: 37.7749295, lng: -122.41941550000001)
la = Location.create!(city: "Los Angeles", country: "United States of America", lat: 34.0522342, lng: -118.2436849)
ny = Location.create!(city: "New York", country: "United States of America", lat: 40.741895, lng: -73.989308)
ch = Location.create!(city: "Chicago", country: "United States of America", lat: 41.8781136, lng: -87.62979819999998)
ist = Location.create!(city: "Istanbul", country: "Turkey", lat: 41.0082376, lng: 28.97835889999999)
sp = Location.create!(city: "Sao Paulo", country: "Brazil", lat: -23.5505199, lng: -46.63330940000003)

alan = User.create!(first_name: "Alan", last_name: "Uraz", username: 'alanuraz', email: 'alanuraz@gmail.com', home_location_id: sf.id, age: 28, bio: "first member", password: "hellothere")
ayda = User.create!(first_name: "Ayda", last_name: "Uraz", username: 'aydauraz', email: 'aydauraz@gmail.com', home_location_id: sf.id, age: 24, bio: "second member", password: "hellothere")
guest = User.create!(first_name: "Guest", last_name: "Guest", username: "Guest", email: "guest@guest.com", home_location_id: ch.id, age: 99, bio: "Just checking out the site", password: '123456')
leana = User.create!(first_name: "Leana", last_name: "Glick", username: "leanaglick", email: "leana@glick.com", home_location_id: ny.id, age: 29, bio: "third member", password: 'hellothere')
john = User.create!(first_name: "John", last_name: "Freedman", username: "jfreed", email: "jfreedman@freedman.com", home_location_id: la.id, age: 29, bio: "hella", password: 'hellothere')
markie = User.create!(first_name: "Markie", last_name: "Ross", username: "marcus", email: "markie@markie.com", home_location_id: la.id, age: 29, bio: "hella", password: 'hellothere')
sam = User.create!(first_name: "Sam", last_name: "Adams", username: "adams", email: "adams@adams.com", home_location_id: la.id, age: 29, bio: "hella", password: 'hellothere')
travis = User.create!(first_name: "Travis", last_name: "Palm", username: "palmy", email: "tpalm@freedman.com", home_location_id: sf.id, age: 29, bio: "hella", password: 'hellothere')
adrienne = User.create!(first_name: "Adrienne", last_name: "Smith", username: "smithy", email: "smithy@smithy.com", home_location_id: la.id, age: 29, bio: "hella", password: 'hellothere')
jess = User.create!(first_name: "Jess", last_name: "Or", username: "jbird", email: "jj@jj.com", home_location_id: ny.id, age: 29, bio: "hella", password: 'hellothere')
john = User.create!(first_name: "John", last_name: "Freedman", username: "jjj", email: "jj@freedman.com", home_location_id: la.id, age: 29, bio: "hella", password: 'hellothere')
john = User.create!(first_name: "John", last_name: "Freedman", username: "freeeed", email: "jf@freedman.com", home_location_id: la.id, age: 29, bio: "hella", password: 'hellothere')

Booking.create!(host_id: alan.id, guest_id: ayda.id, start_date: "2018/05/13", end_date: "2018/06/15")
Booking.create!(host_id: ayda.id, guest_id: leana.id, start_date: "2018/07/13", end_date: "2018/08/15")
Booking.create!(host_id: alan.id, guest_id: leana.id, start_date: "2018/09/13", end_date: "2018/10/15")
Booking.create!(host_id: leana.id, guest_id: ayda.id, start_date: "2018/10/13", end_date: "2018/11/15")
Booking.create!(host_id: guest.id, guest_id: alan.id, start_date: "2018/11/13", end_date: "2018/12/15")
Booking.create!(host_id: alan.id, guest_id: guest.id, start_date: "2019/01/13", end_date: "2019/01/15")
