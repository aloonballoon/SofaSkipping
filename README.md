SofaSkipping is a clone of CouchSurfing, a hospitality and social networking site. It implements a Ruby on Rails back-end, React and Redux front-end, and Google Maps/Places API for location services.

Members can arrange homestays while traveling, search worldwide locations for hosts or fellow travelers, and message each other for meet-ups. All services on the site are meant to be free. Gift giving is encouraged as tokens of gratitude.

**Features**

* Authentication
  * Members can log-in or sign-up
  * Demo access available for previewing
  * User sessions are back-end authenticated

* Bookings
  * Members, upon signing in, can arrange homestays with other members.
  * Homestays are selected based on members, location, and dates
  * Homestays must be confirmed by the hosting party in order to become official

* Locations
  * Members can view an assortment of locations around the world for their bookings
  * Location will show fellow members in the area, either hosts or travelers
  * Nearby locations will be rendered based on geographic proximity

* Spots search (by location and availability) & Google Maps on search
  * Navbar will have duel search: one for searching for specific members, and another for location search using Google Maps/Places API

* Reviews
  * Members can leave reviews of other members if they have stayed with them in the past

* Member profiles
  * Profiles will detail a members geographic location, various information (e.g. age, education, etc), and their status if they are accepting members at this time

**Technical Details**

User of Google Maps/Places Autocomplete in order to facilitate searches.

Search bar in the nav has two functions: One searches for fellow members by name, username, or email. The other does location search using Google Maps. In order to have both functionalities, the search bar input was assigned to a variable, which switched based on the user deignated search filter: "Explore" or "Find Members".

```

let input;
if (this.state.searchFilter === "Find Members") {
    input = <form className="dash-nav-input-form" onSubmit={(e) => this.handleSubmit(e)}>
              <input onChange= {(e) => this.handleChange(e)} value={this.state.text} className="dash-nav-search-input" type="text" placeholder={placeholder} onSubmit={(e) => this.handleSubmit(e)}>
              </input>
            </form>
} else if (this.state.searchFilter === "Explore") {
    input = <form onSubmit={(e) => this.handleSubmit(e)}>
              <Autocomplete
                className="dash-nav-search-input" style={{width: '80%'}, {height: '80%'}}
                onChange={(e) => this.handleChange(e)}
                onPlaceSelected={(place) => {
                this.handleGoogle({place});
                }}
                types={['(regions)']}
              />
            </form>}


```

**To Do**

* Implement further geographic proximity searches
* Reviews
* Messages
* Pages displaying all users that fit a profile
* Connection between location search results and a user index page
* Locations will return if they are not already in the database
* Seed more locations
