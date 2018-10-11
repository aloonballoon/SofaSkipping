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
Review.destroy_all



sf = Location.create!(city: "San Francisco", country: "United States of America", lat: 37.7749295, lng: -122.41941550000001)
la = Location.create!(city: "Los Angeles", country: "United States of America", lat: 34.0522342, lng: -118.2436849)
ny = Location.create!(city: "New York", country: "United States of America", lat: 40.741895, lng: -73.989308)
ch = Location.create!(city: "Chicago", country: "United States of America", lat: 41.8781136, lng: -87.62979819999998)
ist = Location.create!(city: "Istanbul", country: "Turkey", lat: 41.0082376, lng: 28.97835889999999)
sp = Location.create!(city: "Sao Paulo", country: "Brazil", lat: -23.5505199, lng: -46.63330940000003)
cr = Location.create!(city: "Caracas", country: "Venezuela", lat: -23.5505199, lng: -46.63330940000003)
tk = Location.create!(city: "Tokyo", country: "Japan", lat: -23.5505199, lng: -46.63330940000003)
bj = Location.create!(city: "Beijing", country: "China", lat: -23.5505199, lng: -46.63330940000003)
kh = Location.create!(city: "Khumjung", country: "Nepal", lat: 27.9343193, lng: 86.7818523)
fp = Location.create!(city: "French Polynesia", country: "French Polynesia", lat: -17.679742, lng: -149.406843)


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
simcha = User.create!(first_name: "Simcha", last_name: "Cohen", username: "simisimiyay", email: "simcha@aa.com", home_location_id: ny.id, age: 26, bio: "I am Alan's best friend", password: 'hellothere')
james = User.create!(first_name: "James", last_name: "Dreyfus", username: "simissgdfgsimiyay", email: "simchsdfa@aa.com", home_location_id: fp.id, age: 26, bio: "I am Alan's best friend", password: 'hellothere')
mike = User.create!(first_name: "Mike", last_name: "Ralpheo", username: "simisimdsfgdfgssiyay", email: "sisdfaaamcha@aa.com", home_location_id: kh.id, age: 26, bio: "I am Alan's best friend", password: 'hellothere')

main_users = []
main_users << simcha
main_users << alan
main_users << ayda
main_users << leana
main_users << sam
main_users << markie
main_users << guest
main_users << travis
main_users << adrienne
main_users << jess
main_users << john




Booking.create!(host_id: alan.id, guest_id: ayda.id, start_date: "2018/05/13", end_date: "2018/06/15", confirmed: true)
Booking.create!(host_id: ayda.id, guest_id: leana.id, start_date: "2018/07/13", end_date: "2018/08/15", confirmed: true)
Booking.create!(host_id: alan.id, guest_id: leana.id, start_date: "2018/09/13", end_date: "2018/10/15", confirmed: true)
Booking.create!(host_id: leana.id, guest_id: ayda.id, start_date: "2018/10/13", end_date: "2018/11/15", confirmed: true)
Booking.create!(host_id: guest.id, guest_id: alan.id, start_date: "2018/11/13", end_date: "2018/12/15", confirmed: true)
Booking.create!(host_id: alan.id, guest_id: guest.id, start_date: "2019/01/13", end_date: "2019/01/15", confirmed: true)

Booking.create!(host_id: ayda.id, guest_id: guest.id, start_date: "2019/02/13", end_date: "2019/02/15", confirmed: true)
Booking.create!(host_id: leana.id, guest_id: guest.id, start_date: "2019/03/13", end_date: "2019/03/15", confirmed: true)
Booking.create!(host_id: adrienne.id, guest_id: guest.id, start_date: "2019/04/13", end_date: "2019/04/15", confirmed: true)
Booking.create!(host_id: simcha.id, guest_id: guest.id, start_date: "2019/05/13", end_date: "2019/05/15", confirmed: true)

Booking.create!(host_id: guest.id, guest_id: ayda.id, start_date: "2018/01/13", end_date: "2018/01/15", confirmed: true)
Booking.create!(host_id: guest.id, guest_id: leana.id, start_date: "2018/02/13", end_date: "2018/02/15", confirmed: true)
Booking.create!(host_id: guest.id, guest_id: jess.id, start_date: "2018/03/13", end_date: "2018/03/15", confirmed: true)
Booking.create!(host_id: guest.id, guest_id: simcha.id, start_date: "2018/04/13", end_date: "2018/04/15", confirmed: true)



Review.create!(reviewer_id: guest.id, reviewee_id: alan.id, body: "Great guy. Awesome programmer. Please email him at alanuraz@gmail.com. Visit his site: alanuraz@gmail.com", title: "I'm for hire!", review_date: "2018/08/10", recommended: true, rating: 5)
Review.create!(reviewer_id: leana.id, reviewee_id: alan.id, body: "He's great", title: "Cool dude", review_date: "2018/08/10", recommended: true, rating: 5)

users_arr = []
#make fake users
50.times do
  age = (1..100).to_a.sample
  quote = Faker::DumbAndDumber.quote
  fname = Faker::Name.first_name
  lname = Faker::Name.last_name
  email = "#{fname}#{lname}@aa.com"
  random_city = [sf, la, ny, ch, ist, bj, tk, sp, kh, fp].sample
  user = User.create!(first_name: fname, last_name: lname, home_location_id: random_city.id, email: email, password: "hellothere", bio: quote, age: age)
  users_arr << user
end

# make fake reviews for fake users
200.times do
  quote = Faker::Lebowski.quote
  title = Faker::GreekPhilosophers.quote
  random_rating = (1..5).to_a.sample
  random_boolean = [true, false].sample
  review_date = "2018/08/10"
  reviewer = users_arr.sample
  reviewee = users_arr.sample

  until reviewee != reviewer
    reviewee = users_arr.sample
  end

  Review.create!(reviewer_id: reviewer.id, reviewee_id: reviewee.id, body: quote, title: title, review_date: review_date, recommended: random_boolean, rating: random_rating)
end

# make fake reviews for main users
100.times do
  quote = Faker::Lebowski.quote
  title = ["Great", "Horrible", "Best Place Ever", "It was ok", "Nasty couch", "Hire me"].sample
  random_rating = (1..5).to_a.sample
  random_boolean = [true, false].sample
  review_date = "2018/08/10"
  reviewer = main_users.sample
  reviewee = main_users.sample

  until reviewee != reviewer
    reviewee = users_arr.sample
  end

    Review.create!(reviewer_id: reviewer.id, reviewee_id: reviewee.id, body: quote, title: title, review_date: review_date, recommended: random_boolean, rating: random_rating)
end

#make fake bookings
50.times do
  host = users_arr.sample
  guest = users_arr.sample

  until guest != host
    guest = users_arr.sample
  end

  Booking.create!(host_id: host.id, guest_id: guest.id, start_date: "2018/04/13", end_date: "2018/04/15", confirmed: true)
end
