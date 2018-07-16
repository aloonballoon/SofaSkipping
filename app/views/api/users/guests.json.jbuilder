# json.users do
#   @guests.each do |guest|
#     json.set! guest.id do
#       json.location guest.location
#
#
#       json.trips do
#         guest.trips.each do |trip|
#           json.set! trip.id do
#             json.merge! trip.attributes
#           end
#         end
#       end
#
#
#       json.extract! guest, :id, :username, :email, :first_name, :last_name, :user_status, :bio, :age, :home_location_id
#     end
#   end
# end
