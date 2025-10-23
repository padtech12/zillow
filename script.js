
        // ======================================================
        // == PROPERTY "DATABASE" ==
        // ======================================================
        // (Added owner info, expanded features/details, added full gallery URLs)
        const propertyDatabase = {
            "101": {
                id: "101", price: "$8,500,000", address: "123 Luxury Lane", cityState: "Beverly Hills, CA", beds: 5, baths: 6, sqft: "7,200",
                description: "This stunning modern villa in the heart of Beverly Hills offers breathtaking canyon views and unparalleled luxury. Featuring an open-concept floor plan, floor-to-ceiling glass walls, and a seamless indoor-outdoor flow, this home is an entertainer's dream.",
                owner: { name: "Prestige Properties", phone: "907-615-9915" },
                images: [
                    "./images/house 2/IMG-20251022-WA0053.jpg",
                    "./images/house 2/washroom.jpg",
                    "./images/house 2/hall.jpg",
                    "./images/house 2/kitchen.jpg",
                    "./images/house 2/wall.jpg",
                    "./images/house 2/bedroom2.jpg",
                ],
                features: { "Type": "Single Family", "Year built": 2023, "Heating": "Forced air, Radiant", "Cooling": "Central", "Parking": "3 car garage", "Lot size": "0.75 Acres", "HOA Dues": "$500/month", "Interior": "Hardwood Floors, Smart Home System", "Exterior": "Infinity Pool, Patio, Canyon Views" },
                priceHistory: [
                    { date: "Nov 2024", event: "Listed for Sale", price: "$8,500,000", change: "" },
                    { date: "Mar 2023", event: "Sold", price: "$7,800,000", change: "+8.9%" },
                    { date: "Jan 2023", event: "Listed for Sale", price: "$7,800,000", change: "" }
                ],
                neighborhood: "Beverly Hills"
            },
            "102": {
                 id: "102", price: "$14,200,000", address: "456 Ocean Drive", cityState: "Malibu, CA", beds: 7, baths: 9, sqft: "10,500",
                description: "Experience the ultimate coastal lifestyle in this magnificent Malibu estate with private beach access and panoramic ocean views.",
                owner: { name: "Oceanfront Realty", phone: "907-615-9915" },
                images: [
                    "./images/house1/0a128cd7c9b7c24a5d7afed98e25e269-cc_ft_960.webp",
                    "./images/house1/24e1c1c965e4f727e1fe423a3079ec4d-cc_ft_960.webp",
                    "./images/house1/4c461fb3a398fa810a498f86057b6a5f-cc_ft_576.webp",
                    "./images/house1/52996e8ae6fd37e32fdb68b02529d894-cc_ft_960.webp",
                    "./images/house1/b0b863a17d8e68028d13c9e78ea1ce0a-cc_ft_576.webp",
                    "./images/house1/b0b863a17d8e68028d13c9e78ea1ce0a-cc_ft_576.webp",
                    "https://placehold.co/1200x800/0F766E/FFFFFF?text=Tennis+Court+102"
                ],
                features: { "Type": "Estate", "Year built": 1998, "Heating": "Zoned HVAC", "Cooling": "Central AC, Zoned", "Parking": "5+ Car Garage", "Lot size": "2.1 Acres", "Special": "Private Beach Access, Tennis Court", "Interior": "High Ceilings, Chef's Kitchen", "Exterior": "Infinity Pool, Guest House" },
                priceHistory: [
                    { date: "Oct 2024", event: "Listed for Sale", price: "$14,200,000", change: "" },
                    { date: "Jun 2020", event: "Sold", price: "$12,800,000", change: "+10.9%" },
                    { date: "Apr 2020", event: "Price Reduced", price: "$12,800,000", change: "-6.6%" }
                ],
                neighborhood: "Malibu"
            },
             "103": {
                 id: "103", price: "$45,000/mo", address: "789 Park Ave, PH-1A", cityState: "New York, NY", beds: 4, baths: 5, sqft: "5,100",
                description: "A one-of-a-kind duplex penthouse offering 360-degree views of Central Park and the Manhattan skyline.",
                owner: { name: "Park Avenue Mgmt", phone: "555-555-6666" },
                images: [
                     "./images/house 3/5b3dd004b4c637ddf6b3e043a2296c5e-cc_ft_960.webp",
                     "./images/house 3/5b3dd004b4c637ddf6b3e043a2296c5e-cc_ft_960.webp",
                     "./images/house 3/69d9516db3d531d32bba88d54b224a86-cc_ft_960.webp",
                     "./images/house 3/e79075bda1c48269b1017e800d2538e5-cc_ft_960.webp",
                     "./images/house 3/84f07fe384552e0fbaba7d6a426fb48e-cc_ft_960.webp",
                     "./images/house 3/ceea2108065d397ef15540aeedf854f6-cc_ft_576.webp",
                     "./images/house 3/e79075bda1c48269b1017e800d2538e5-cc_ft_960.webp"
                ],
                features: { "Type": "Penthouse (Rental)", "Year built": 1929, "Heating": "Steam", "Cooling": "Central", "Parking": "Valet garage", "Amenities": "Doorman, Concierge, Gym", "Interior": "Duplex, High Ceilings, Library", "Exterior": "Private Terrace" },
                priceHistory: [
                    { date: "Dec 2024", event: "Listed for Rent", price: "$45,000/mo", change: "" },
                    { date: "Aug 2024", event: "Rent Increase", price: "$42,000/mo", change: "+7.1%" }
                ],
                neighborhood: "Upper East Side"
            },
            // ... [Add expanded data for other properties similarly] ...
              "201": {
                 id: "201", price: "$22,000/mo", address: "300 Biscayne Blvd, Apt 50A", cityState: "Miami, FL", beds: 3, baths: 3, sqft: "2,800",
                description: "Soar above the city in this stunning high-floor apartment with unobstructed views of Biscayne Bay and the Miami skyline.",
                owner: { name: "Downtown Rentals", phone: "555-777-8888" },
                images: [
                    "./images/house 4/127b1dbe12e6cf443a47b54495d9c8e8-cc_ft_960.webp",
                    "./images/house 4/4fe894474ddf1ff625652f04ce4a8eda-cc_ft_960.webp",
                    "./images/house 4/666273528e484bd43ed099038538a61b-cc_ft_960.webp",
                    "./images/house 4/edafa4f23f54172395b1631349d63e5b-cc_ft_576.webp",
                    "./images/house 4/e289ea2ddaf5000b243acaf32174ec08-cc_ft_960.webp",
                    "./images/house 4/e17448b6ce34dc1af136803c5655a57a-cc_ft_960.webp",
                    "./images/house 4/9dec3b85508061168dc575770195219a-cc_ft_960.webp"
                ],
                features: { "Type": "Condo (Rental)", "Year built": 2018, "Heating": "Electric", "Cooling": "Central", "Parking": "2 Assigned Spaces", "Amenities": "Spa, Gym, Rooftop Pool", "Interior": "Designer Finishes, European Cabinetry", "Exterior": "Balcony" },
                priceHistory: [
                    { date: "Nov 2024", event: "Listed for Rent", price: "$22,000/mo", change: "" },
                    { date: "Jan 2024", event: "Previous Rent", price: "$20,500/mo", change: "+7.3%" }
                ],
                neighborhood: "Brickell"
            },
            "202": {
                 id: "202", price: "$75,000/mo", address: "900 Starwood Peak", cityState: "Aspen, CO", beds: 6, baths: 7, sqft: "8,000",
                description: "A breathtaking ski-in/ski-out chalet in Aspen's most exclusive enclave. Combines rustic elegance with modern luxury.",
                owner: { name: "Mountain Escapes", phone: "555-999-0000" },
                images: [
                    "./images/house 5/04bf778a21015b5b25ff9be83edde081-cc_ft_576.webp",
                    "./images/house 5/13c77c78a2c2a7c43e3698fbc7ad3326-cc_ft_960.webp",
                    "./images/house 5/1d4dcf644a2c35be9595cf4ba04a7dd6-cc_ft_960.webp",
                    "./images/house 5/4933a2e61e7403b48d36c6875f6be135-cc_ft_960.webp",
                    "./images/house 5/4b88829f6613a0e846aca9926c355456-cc_ft_576.webp",
                    "./images/house 5/c1f37d06b6741295a8c13ea22866e62f-cc_ft_576.webp",
                    "./images/house 5/d657e6cbdbe33c15c2726a21a9e9a61e-cc_ft_960.webp",
                    "./images/house 5/c1f37d06b6741295a8c13ea22866e62f-cc_ft_576.webp",
                    "./images/house 5/b36a258570f301a062158f4fdc0e4917-cc_ft_576.webp",
                    "./images/house 5/a81aae6006f7b63369d9334f62315533-cc_ft_960.webp"
                ],
                features: { "Type": "Chalet (Rental)", "Year built": 2010, "Heating": "Radiant Floor", "Cooling": "Central AC", "Parking": "Heated 3 Car Garage", "Special": "Ski-in/Ski-out, Home Theater, Wine Cellar", "Interior": "Stone Fireplace", "Exterior": "Heated Patio, Hot Tub" },
                priceHistory: [
                    { date: "Dec 2024", event: "Listed for Rent", price: "$75,000/mo", change: "" },
                    { date: "Dec 2023", event: "Previous Season", price: "$68,000/mo", change: "+10.3%" }
                ],
                neighborhood: "Starwood"
            },
             "203": {
                 id: "203", price: "£30,000/mo", address: "22 Belgrave Square", cityState: "London, UK", beds: 5, baths: 4, sqft: "4,300",
                description: "An elegant and fully-staffed stucco-fronted townhouse on one of London's most prestigious garden squares. Impeccably restored.",
                owner: { name: "Belgravia Lettings", phone: "+44 20 7123 4567" },
                images: [
                     "./images/house 6/d30b60feb3be097c1e6916894afd915d-cc_ft_960.webp",
                     "./images/house 6/07ab80cdcd3fcd558c3c0e0759b7f68b-cc_ft_576.webp",
                     "./images/house 6/d30b60feb3be097c1e6916894afd915d-cc_ft_960.webp",
                      "./images/house 6/a2a5c306503a4b620f171d6d3e4bdf91-cc_ft_960.webp",
                       "./images/house 6/0c2938d587d31fa89aad12f9da06794a-cc_ft_960.webp",
                     "./images/house 6/0c2938d587d31fa89aad12f9da06794a-cc_ft_960.webp",
                     "./images/house 6/609135e7de094263c72c644b0d1610ca-cc_ft_960.webp",
                     "./images/house 6/609135e7de094263c72c644b0d1610ca-cc_ft_960.webp",
                     "./images/house 6/5953c515e536a2e3178336c40bba4a25-cc_ft_960.webp",
                     "./images/house 6/4ce075d21c51b12b73ebc221d09fb1b4-cc_ft_576.webp"
                ],
                features: { "Type": "Townhouse (Rental)", "Period": "Regency (Grade I Listed)", "Heating": "Gas Central", "Cooling": "Partial AC", "Parking": "Permit", "Amenities": "Garden Square Access, Fully Staffed", "Interior": "Period Features, Lift", "Exterior": "Private Garden" },
                priceHistory: [
                    { date: "Oct 2024", event: "Listed for Rent", price: "£30,000/mo", change: "" },
                    { date: "Mar 2024", event: "Previous Rent", price: "£28,000/mo", change: "+7.1%" }
                ],
                neighborhood: "Belgravia"
            },
            "301": {
                 id: "301", price: "$6,100,000", address: "88 Ridge Rd", cityState: "Jackson Hole, WY", beds: 4, baths: 4, sqft: "5,500",
                description: "Modern mountain retreat with stunning Teton views. Features reclaimed wood, natural stone, and walls of glass.",
                owner: { name: "Teton View Homes", phone: "555-234-5678" },
                images: [
                    "./images/house 6/07ab80cdcd3fcd558c3c0e0759b7f68b-cc_ft_576.webp",
                    "./images/house 6/e29955e69b24ac76a3ebb7c4ead9c7bc-cc_ft_576.webp",
                    "./images/house 6/e29955e69b24ac76a3ebb7c4ead9c7bc-cc_ft_576.webp",
                    "./images/house 6/609135e7de094263c72c644b0d1610ca-cc_ft_960.webp",
                    "./images/house 6/4ce075d21c51b12b73ebc221d09fb1b4-cc_ft_576.webp"
                ],
                features: { "Type": "Single Family", "Year built": 2019, "Heating": "Radiant Floor", "Cooling": "None", "Parking": "2 car garage", "Lot size": "5 Acres", "Interior": "Reclaimed Wood, Natural Stone", "Exterior": "Expansive Deck, Teton Views" }
            },
             "302": {
                 id: "302", price: "$3,800,000", address: "500 Saguaro Trl", cityState: "Scottsdale, AZ", beds: 3, baths: 4, sqft: "4,100",
                description: "Contemporary desert oasis blending seamlessly with its surroundings. Negative-edge pool and detached casita.",
                owner: { name: "Sonoran Builders", phone: "555-876-5432" },
                images: [
                     "./images/house 7/5a92b3509436ce13e48f660633cc042a-cc_ft_576.webp",
                     "./images/house 7/67d100e49f317c627abb7051c62ed93e-cc_ft_576.webp",
                     "./images/house 7/9edf4fa079fbc64bb1f1a1ab1a6b1ed6-cc_ft_960.webp",
                     "./images/house 7/a2c4049dbc3219db179f2bf4e9d8636a-cc_ft_576.webp",
                     "./images/house 7/b56a7883f66fa1f76bda279bb6a20506-cc_ft_960.webp"
                ],
                features: { "Type": "Single Family", "Year built": 2017, "Heating": "Forced Air (Gas)", "Cooling": "Central", "Parking": "3 car garage", "Lot size": "1.1 Acres", "Interior": "High Ceilings, Modern Finishes", "Exterior": "Negative-Edge Pool, Fire Pit, Detached Casita" }
            },
             "303": {
                 id: "303", price: "$5,950,000", address: "1500 Equestrian Way", cityState: "Franklin, TN", beds: 6, baths: 5, sqft: "6,800",
                description: "Magnificent countryside manor on 10 private acres with stately brick exterior and stocked pond.",
                owner: { name: "The Manor Group", phone: "555-112-3344" },
                images: [
                     "https://placehold.co/1200x800/365314/FFFFFF?text=Countryside+Manor+Main",
                     "https://placehold.co/1200x800/365314/FFFFFF?text=Exterior+303",
                     "https://placehold.co/1200x800/365314/FFFFFF?text=Foyer+303",
                     "https://placehold.co/1200x800/365314/FFFFFF?text=Kitchen+303",
                     "https://placehold.co/1200x800/365314/FFFFFF?text=Pond+303"
                ],
                features: { "Type": "Estate", "Year built": 2010, "Heating": "Geothermal", "Cooling": "Geothermal", "Parking": "4 car garage", "Lot size": "10 Acres", "Interior": "Grand Foyer, Chef's Kitchen", "Exterior": "Stocked Pond, Mature Trees" }
            },
             "304": {
                 id: "304", price: "$2,150,000", address: "450 Geary St, Apt 8B", cityState: "San Francisco, CA", beds: 2, baths: 2, sqft: "2,400",
                description: "Iconic urban loft in a historic building near Union Square. Exposed brick and soaring 18-foot ceilings.",
                owner: { name: "SF Loft Co.", phone: "555-556-7788" },
                images: [
                     "https://placehold.co/1200x800/4C1D95/FFFFFF?text=Urban+Loft+Main",
                     "https://placehold.co/1200x800/4C1D95/FFFFFF?text=Living+Space+304",
                     "https://placehold.co/1200x800/4C1D95/FFFFFF?text=View+304",
                     "https://placehold.co/1200x800/4C1D95/FFFFFF?text=Kitchen+304",
                     "https://placehold.co/1200x800/4C1D95/FFFFFF?text=Bedroom+304"
                ],
                features: { "Type": "Loft Condo", "Year built": "1910 (Renovated)", "Heating": "Forced Air", "Cooling": "None", "Parking": "Leased Nearby", "Amenities": "Concierge", "Interior": "Exposed Brick, Concrete Pillars, 18ft Ceilings" }
            },
            "401": {
                 id: "401", price: "$18,000/mo", address: "1000 Ocean Blvd, Unit 12C", cityState: "Santa Monica, CA", beds: 2, baths: 2, sqft: "2,100",
                description: "Chic beachfront condo with direct ocean views, minimalist design, and private balcony.",
                owner: { name: "Coastal Living Rentals", phone: "555-101-2020" },
                images: [
                    "./images/house 6/0c2938d587d31fa89aad12f9da06794a-cc_ft_960.webp",
                     "./images/house 6/0c2938d587d31fa89aad12f9da06794a-cc_ft_960.webp",
                     "./images/house 6/609135e7de094263c72c644b0d1610ca-cc_ft_960.webp",
                     "./images/house 6/609135e7de094263c72c644b0d1610ca-cc_ft_960.webp",
                     "./images/house 6/5953c515e536a2e3178336c40bba4a25-cc_ft_960.webp",
                     "./images/house 6/4ce075d21c51b12b73ebc221d09fb1b4-cc_ft_576.webp"
                ],
                features: { "Type": "Condo (Rental)", "Year built": 1995, "Heating": "Electric", "Cooling": "Central", "Parking": "2 Subterranean Spaces", "Amenities": "Pool, Gym, Doorman", "Interior": "Modern Design, High-End Appliances", "Exterior": "Ocean Views, Balcony" }
            },
             "301": {
                 id: "301", price: "$6,100,000", address: "88 Ridge Rd", cityState: "Jackson Hole, WY", beds: 4, baths: 4, sqft: "5,500",
                description: "Modern mountain retreat with stunning Teton views. Features reclaimed wood, natural stone, and walls of glass.",
                owner: { name: "Teton View Homes", phone: "555-234-5678" },
                images: [
                     "./images/house 6/07ab80cdcd3fcd558c3c0e0759b7f68b-cc_ft_576.webp",
                    "./images/house 6/e29955e69b24ac76a3ebb7c4ead9c7bc-cc_ft_576.webp",
                    "./images/house 6/e29955e69b24ac76a3ebb7c4ead9c7bc-cc_ft_576.webp",
                    "./images/house 6/609135e7de094263c72c644b0d1610ca-cc_ft_960.webp",
                    "./images/house 6/4ce075d21c51b12b73ebc221d09fb1b4-cc_ft_576.webp"
                ],
                features: { "Type": "Single Family", "Year built": 2019, "Heating": "Radiant Floor", "Cooling": "None", "Parking": "2 car garage", "Lot size": "5 Acres", "Interior": "Reclaimed Wood, Natural Stone", "Exterior": "Expansive Deck, Teton Views" }
            },
             "302": {
                 id: "302", price: "$3,800,000", address: "500 Saguaro Trl", cityState: "Scottsdale, AZ", beds: 3, baths: 4, sqft: "4,100",
                description: "Contemporary desert oasis blending seamlessly with its surroundings. Negative-edge pool and detached casita.",
                owner: { name: "Sonoran Builders", phone: "555-876-5432" },
                images: [
                    "./images/house 7/5a92b3509436ce13e48f660633cc042a-cc_ft_576.webp",
                     "./images/house 7/67d100e49f317c627abb7051c62ed93e-cc_ft_576.webp",
                     "./images/house 7/9edf4fa079fbc64bb1f1a1ab1a6b1ed6-cc_ft_960.webp",
                     "./images/house 7/a2c4049dbc3219db179f2bf4e9d8636a-cc_ft_576.webp",
                     "./images/house 7/b56a7883f66fa1f76bda279bb6a20506-cc_ft_960.webp"
                ],
                features: { "Type": "Single Family", "Year built": 2017, "Heating": "Forced Air (Gas)", "Cooling": "Central", "Parking": "3 car garage", "Lot size": "1.1 Acres", "Interior": "High Ceilings, Modern Finishes", "Exterior": "Negative-Edge Pool, Fire Pit, Detached Casita" }
            },
             "303": {
                 id: "303", price: "$5,950,000", address: "1500 Equestrian Way", cityState: "Franklin, TN", beds: 6, baths: 5, sqft: "6,800",
                description: "Magnificent countryside manor on 10 private acres with stately brick exterior and stocked pond.",
                owner: { name: "The Manor Group", phone: "555-112-3344" },
                images: [
                     "./images/house 8/427e2c2c4475fca1679ca553349e39af-cc_ft_576.webp",
                     "./images/house 8/5bb97165f18050c2cce72916acc03480-cc_ft_960.webp",
                     "./images/house 8/6194258f8e4d1d5cda8e30cfd4af08a1-cc_ft_960.webp",
                      "./images/house 8/7eeff173915ce0a26ef8c231cee2a477-cc_ft_960.webp",
                     "./images/house 8/b108892659b37b525caa96b46cf15802-cc_ft_576.webp",
                     "./images/house 8/bab2de71a92ec7cf90910c1b75abea78-cc_ft_960.webp",
                     "./images/house 8/cc507a3a3101c37e37152f9e020e346d-cc_ft_576.webp",
                     "./images/house 8/b108892659b37b525caa96b46cf15802-cc_ft_576.webp"
                ],
                features: { "Type": "Estate", "Year built": 2010, "Heating": "Geothermal", "Cooling": "Geothermal", "Parking": "4 car garage", "Lot size": "10 Acres", "Interior": "Grand Foyer, Chef's Kitchen", "Exterior": "Stocked Pond, Mature Trees" }
            },
             "304": {
                 id: "304", price: "$2,150,000", address: "450 Geary St, Apt 8B", cityState: "San Francisco, CA", beds: 2, baths: 2, sqft: "2,400",
                description: "Iconic urban loft in a historic building near Union Square. Exposed brick and soaring 18-foot ceilings.",
                owner: { name: "SF Loft Co.", phone: "555-556-7788" },
                images: [
                     "./images/house 9/0983a7fbf6e5929ded20db3eb9b313f6-cc_ft_576.webp",
                     "./images/house 9/2d1fb6ed2d55520063cc2e26571d8362-cc_ft_960.webp",
                     "./images/house 9/4bc93e365815a076e377d748551dcb5a-cc_ft_960.webp",
                     "./images/house 9/644a4191af8b624e008b23966d7f6cf7-cc_ft_576.webp",
                     "./images/house 9/ae7cdaf4ef867f674d24ac854fab49eb-cc_ft_576.webp",
                     "./images/house 9/c3e8da18b3daa9a165b87bd70b1f429a-cc_ft_960.webp",
                     "./images/house 9/cc86713c93c82b8381c65c3e1f4499f3-cc_ft_960.webp",
                     "./images/house 9/f53f628bc6211cb487877c4b9ef336b3-cc_ft_576.webp"
                ],
                features: { "Type": "Loft Condo", "Year built": "1910 (Renovated)", "Heating": "Forced Air", "Cooling": "None", "Parking": "Leased Nearby", "Amenities": "Concierge", "Interior": "Exposed Brick, Concrete Pillars, 18ft Ceilings" }
            },
            "401": {
                 id: "401", price: "$18,000/mo", address: "1000 Ocean Blvd, Unit 12C", cityState: "Santa Monica, CA", beds: 2, baths: 2, sqft: "2,100",
                description: "Chic beachfront condo with direct ocean views, minimalist design, and private balcony.",
                owner: { name: "Coastal Living Rentals", phone: "555-101-2020" },
                images: [
                     "./images/house 6/0c2938d587d31fa89aad12f9da06794a-cc_ft_960.webp",
                     "./images/house 6/0c2938d587d31fa89aad12f9da06794a-cc_ft_960.webp",
                     "./images/house 6/609135e7de094263c72c644b0d1610ca-cc_ft_960.webp",
                     "./images/house 6/609135e7de094263c72c644b0d1610ca-cc_ft_960.webp",
                     "./images/house 6/5953c515e536a2e3178336c40bba4a25-cc_ft_960.webp",
                     "./images/house 6/4ce075d21c51b12b73ebc221d09fb1b4-cc_ft_576.webp"
                ],
                features: { "Type": "Condo (Rental)", "Year built": 1995, "Heating": "Electric", "Cooling": "Central", "Parking": "2 Subterranean Spaces", "Amenities": "Pool, Gym, Doorman", "Interior": "Modern Design, High-End Appliances", "Exterior": "Ocean Views, Balcony" }
            }
        };

        // ======================================================
        // == APP LOGIC ==
        // ======================================================
        document.addEventListener('DOMContentLoaded', () => {
            // --- Element Selectors ---
            const allViews = document.querySelectorAll('.view-section');
            const navLinks = document.querySelectorAll('[data-view]');
            const mainNavLinks = document.querySelectorAll('.main-nav-link');
            const searchForm = document.getElementById('search-form');
            const searchInput = document.getElementById('search-input');
            const searchResultsTitle = document.getElementById('search-results-title');
            const propertyCards = document.querySelectorAll('.property-card');
            const messageBox = document.getElementById('message-box');
            const messageText = document.getElementById('message-text');
            const backToListingsBtn = document.getElementById('back-to-listings-btn');
            const contactOwnerBtn = document.getElementById('contact-owner-btn');
            const tourRequestForm = document.getElementById('tour-request-form');
            const contactGeneralForm = document.getElementById('contact-general-form');
            const agentContactForm = document.getElementById('agent-contact-form');
            const imageGridContainer = document.getElementById('image-grid-container');
            const seeAllPhotosBtn = document.getElementById('see-all-photos-btn');
            const photoCountSpan = document.getElementById('photo-count');

            // Image Modal Elements
            const imageModalOverlay = document.getElementById('image-modal-overlay');
            const modalImage = document.getElementById('modal-image');
            const modalCaption = document.getElementById('modal-caption');
            const modalPrevBtn = document.getElementById('modal-prev-btn');
            const modalNextBtn = document.getElementById('modal-next-btn');


            // --- State ---
            let lastView = 'home-view';
            let messageTimer;
            let currentPropertyId = null; // Track the property being viewed
            // Removed saved properties functionality
            let currentModalImageIndex = 0;
            let currentPropertyImages = [];

             // --- Constants ---
            const activeLinkClasses = ['border-blue-500', 'text-gray-900'];
            const inactiveLinkClasses = ['border-transparent', 'text-gray-500', 'hover:border-gray-300', 'hover:text-gray-700'];


            // --- Core Functions ---

            // Show a specific view (page)
            function showView(viewId, propertyIdParam = null, anchor = null) {
                currentPropertyId = propertyIdParam; // Store current property ID if applicable
                
                if (viewId !== 'detail-view') {
                    lastView = viewId; // Remember the last *list* view
                }

                allViews.forEach(view => {
                    view.classList.add('hidden');
                    view.style.opacity = '0';
                });

                const targetView = document.getElementById(viewId);
                if (targetView) {
                    targetView.classList.remove('hidden');
                    setTimeout(() => { targetView.style.opacity = '1'; }, 10); // Fade in
                }

                if (viewId === 'detail-view' && currentPropertyId) {
                    populateDetailView(currentPropertyId);
                }

                 // Update nav link styles (excluding detail view)
                 mainNavLinks.forEach(link => {
                     link.classList.remove(...activeLinkClasses);
                     link.classList.add(...inactiveLinkClasses);
                     if (link.dataset.view === viewId && viewId !== 'detail-view') {
                         link.classList.add(...activeLinkClasses);
                         link.classList.remove(...inactiveLinkClasses);
                     }
                 });
                  // Ensure no main nav links are active on home or detail view
                 if (viewId === 'home-view' || viewId === 'detail-view') {
                      mainNavLinks.forEach(link => {
                         link.classList.remove(...activeLinkClasses);
                         link.classList.add(...inactiveLinkClasses);
                     });
                 }

                // Handle scrolling
                 if (anchor) {
                     const anchorEl = document.getElementById(anchor);
                     if (anchorEl) {
                         // Timeout ensures the element is visible before scrolling
                         setTimeout(() => { anchorEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50);
                     }
                 } else {
                     window.scrollTo(0, 0); // Scroll to top if no anchor
                 }
            }

            // Populate the detail view with property data
            function populateDetailView(propertyId) {
                const property = propertyDatabase[propertyId];
                if (!property) { /* Error handled in caller */ return; }

                // Images (Main Grid)
                document.getElementById('detail-main-image').src = property.images[0] || 'https://placehold.co/600x600/CCCCCC/FFFFFF?text=No+Image';
                document.getElementById('detail-image-2').src = property.images[1] || 'https://placehold.co/300x300/CCCCCC/FFFFFF?text=N/A';
                document.getElementById('detail-image-3').src = property.images[2] || 'https://placehold.co/300x300/CCCCCC/FFFFFF?text=N/A';
                document.getElementById('detail-image-4').src = property.images[3] || 'https://placehold.co/300x300/CCCCCC/FFFFFF?text=N/A';
                document.getElementById('detail-image-5').src = property.images[4] || 'https://placehold.co/300x300/CCCCCC/FFFFFF?text=N/A';
                photoCountSpan.textContent = property.images.length;


                // Header info
                document.getElementById('detail-price').textContent = property.price;
                document.getElementById('detail-address').textContent = `${property.address}, ${property.cityState}`;
                document.getElementById('detail-beds').textContent = property.beds;
                document.getElementById('detail-baths').textContent = property.baths;
                document.getElementById('detail-sqft').textContent = property.sqft.toLocaleString();
                document.getElementById('detail-description').textContent = property.description;

                // Contact Owner info
                document.getElementById('detail-owner-name').textContent = property.owner?.name || 'N/A';
                document.getElementById('detail-owner-phone').textContent = property.owner?.phone || 'N/A';

                // Features list (formatted)
                 const featuresList = document.getElementById('detail-features-list');
                 featuresList.innerHTML = ''; // Clear previous
                 if (property.features && Object.keys(property.features).length > 0) {
                     for (const [key, value] of Object.entries(property.features)) {
                         const li = document.createElement('li');
                         li.className = 'flex flex-col sm:flex-row justify-between py-3 border-b border-gray-200';
                         li.innerHTML = `<span class="text-gray-600 text-sm font-medium w-full sm:w-1/3 mb-1 sm:mb-0">${key}</span><span class="font-semibold text-gray-900 text-sm text-left sm:text-right w-full sm:w-2/3">${value}</span>`;
                         featuresList.appendChild(li);
                     }
                 } else {
                     featuresList.innerHTML = '<li class="text-gray-500 text-sm py-2">No specific features listed.</li>';
                 }
                 
                 // Populate sidebar agent info
                 document.getElementById('sidebar-agent-name').textContent = property.owner?.name || 'N/A';
                 document.getElementById('sidebar-agent-phone').textContent = property.owner?.phone || 'N/A';
                 
                 // Populate price history
                 const priceHistoryTable = document.getElementById('price-history-table');
                 priceHistoryTable.innerHTML = '';
                 if (property.priceHistory && property.priceHistory.length > 0) {
                     property.priceHistory.forEach(entry => {
                         const row = document.createElement('tr');
                         row.innerHTML = `
                             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${entry.date}</td>
                             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${entry.event}</td>
                             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">${entry.price}</td>
                             <td class="px-6 py-4 whitespace-nowrap text-sm ${entry.change.includes('+') ? 'text-green-600' : entry.change.includes('-') ? 'text-red-600' : 'text-gray-500'}">${entry.change}</td>
                         `;
                         priceHistoryTable.appendChild(row);
                     });
                 } else {
                     priceHistoryTable.innerHTML = '<tr><td colspan="4" class="px-6 py-4 text-center text-gray-500">No price history available</td></tr>';
                 }
                 
                 // Update neighborhood content
                 const neighborhoodContent = document.getElementById('neighborhood-content');
                 if (property.neighborhood) {
                     const firstP = neighborhoodContent.querySelector('p');
                     firstP.textContent = `Located in the prestigious ${property.neighborhood} area, this property offers an exceptional lifestyle with world-class amenities and convenient access to shopping, dining, and entertainment.`;
                 }
                
                // Reset to the 'Home details' tab
                switchTab('home-details-tab');
            }

            // Switch tabs in detail view
            function switchTab(targetTabId) {
                const detailView = document.getElementById('detail-view');
                if (!detailView) return;
                const tabButtons = detailView.querySelectorAll('.tab-button');
                const tabContents = detailView.querySelectorAll('.tab-content');

                tabButtons.forEach(button => button.classList.toggle('active', button.dataset.tab === targetTabId));
                tabContents.forEach(content => content.classList.toggle('active', content.id === targetTabId));
            }

            // Show a temporary message (toast) with enhanced mobile support
            function showMessage(message, isError = false) {
                if (!message || !messageBox || !messageText) return;
                
                clearTimeout(messageTimer);
                messageText.textContent = message;
                
                messageBox.classList.toggle('bg-red-600', isError);
                messageBox.classList.toggle('bg-green-600', !isError && message.includes('sent'));
                messageBox.classList.toggle('bg-gray-900', !isError && !message.includes('sent'));
                
                if (isError && 'vibrate' in navigator) {
                    navigator.vibrate(200);
                }
                
                messageBox.classList.remove('hidden');
                messageBox.offsetHeight;
                messageBox.classList.remove('opacity-0');
                
                messageTimer = setTimeout(() => {
                    messageBox.classList.add('opacity-0');
                    setTimeout(() => messageBox.classList.add('hidden'), 300);
                }, isError ? 5000 : 3000);
            }

            // Removed save/share functionality


             // --- Image Modal Functions ---
            function openImageModal(propertyId, startIndex = 0) {
                 const property = propertyDatabase[propertyId];
                 if (!property || !property.images || property.images.length === 0) {
                    showMessage("No images available for this property.");
                    return;
                }
                currentPropertyImages = property.images;
                currentModalImageIndex = startIndex;
                updateModalImage();
                imageModalOverlay.classList.remove('hidden');
            }

            function closeImageModal() {
                imageModalOverlay.classList.add('hidden');
            }

            function updateModalImage() {
                modalImage.src = currentPropertyImages[currentModalImageIndex];
                modalCaption.textContent = `Image ${currentModalImageIndex + 1} of ${currentPropertyImages.length}`;
            }

             function showNextImage() {
                currentModalImageIndex = (currentModalImageIndex + 1) % currentPropertyImages.length;
                updateModalImage();
            }

            function showPrevImage() {
                currentModalImageIndex = (currentModalImageIndex - 1 + currentPropertyImages.length) % currentPropertyImages.length;
                updateModalImage();
            }


            // --- EVENT LISTENERS ---

            // Mobile Menu Toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    const isHidden = mobileMenu.classList.contains('hidden');
                    
                    if (isHidden) {
                        mobileMenu.classList.remove('hidden');
                        menuIcon.classList.add('hidden');
                        closeIcon.classList.remove('hidden');
                        document.body.style.overflow = 'hidden';
                    } else {
                        mobileMenu.classList.add('hidden');
                        menuIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                        document.body.style.overflow = '';
                    }
                });
                
                const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
                mobileNavLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                        menuIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                        document.body.style.overflow = '';
                    });
                });
            }

            // Navigation Links (Handles anchors too)
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const viewId = link.dataset.view;
                    const anchor = link.dataset.anchor || null;
                    if (viewId) showView(viewId, null, anchor);
                });
            });

            // Search Form
            if (searchForm) {
                searchForm.addEventListener('submit', (e) => { /* ... (no changes needed) ... */
                    e.preventDefault();
                    const query = searchInput.value.trim();
                    if (searchResultsTitle) {
                         searchResultsTitle.textContent = query ? `Showing results for "${query}"` : "All Homes for Sale";
                     }
                     showView('buy-view');
                     searchInput.value = '';
                });
            }
            
            // Property Cards with enhanced touch handling
            propertyCards.forEach(card => {
                card.addEventListener('touchstart', () => {
                    card.style.transform = 'scale(0.98)';
                }, { passive: true });
                
                card.addEventListener('touchend', () => {
                    card.style.transform = '';
                }, { passive: true });
                
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    const propertyId = card.dataset.id;
                    if (propertyDatabase[propertyId]) {
                        card.classList.add('loading');
                        setTimeout(() => {
                            showView('detail-view', propertyId);
                            card.classList.remove('loading');
                        }, 100);
                    } else {
                        showMessage(`Property ID ${propertyId} data not found.`, true);
                    }
                });
            });
            
            // Back Button
            if (backToListingsBtn) {
                 backToListingsBtn.addEventListener('click', (e) => {
                     e.preventDefault();
                     showView(lastView || 'home-view');
                 });
             }

             // Detail Page Tabs
            const detailViewContainer = document.getElementById('detail-view');
             if (detailViewContainer) {
                  detailViewContainer.addEventListener('click', (e) => {
                      if (e.target.matches('.tab-button')) {
                          e.preventDefault();
                          const targetTabId = e.target.dataset.tab;
                          if(targetTabId) switchTab(targetTabId);
                      }
                  });
              }

            // Agent Contact Form Submission
            if (agentContactForm) {
                agentContactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    // Form validation
                    const name = document.getElementById('contact-name').value.trim();
                    const email = document.getElementById('contact-email').value.trim();
                    const message = document.getElementById('agent-message').value.trim();
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (!name) {
                        showMessage("Please enter your name.", true);
                        document.getElementById('contact-name').focus();
                        return;
                    }
                    if (!email || !emailRegex.test(email)) {
                        showMessage("Please enter a valid email address.", true);
                        document.getElementById('contact-email').focus();
                        return;
                    }
                    if (!message) {
                        showMessage("Please enter a message.", true);
                        document.getElementById('agent-message').focus();
                        return;
                    }
                    
                    // Simulate loading state
                    const submitBtn = agentContactForm.querySelector('button[type="submit"]');
                    const originalText = submitBtn.textContent;
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        showMessage("Message sent to agent! They will contact you within 24 hours.");
                        agentContactForm.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 1000);
                });
            }

             // Contact Owner Button (Prefills Agent Form)
             if (contactOwnerBtn) {
                 contactOwnerBtn.addEventListener('click', (e) => {
                     e.preventDefault();
                     const property = propertyDatabase[currentPropertyId];
                     if (!property || !property.owner) return;

                     const messageInput = document.getElementById('agent-message');
                     if (messageInput) {
                         messageInput.value = `I am interested in ${property.address} and would like more information. Please contact me to discuss this property.`;
                         messageInput.focus();
                         agentContactForm.scrollIntoView({ behavior: 'smooth', block: 'center'});
                         showMessage(`Message pre-filled. Please complete the form to contact the agent.`);
                     }
                 });
             }

            // Removed tour request form (replaced with agent contact)
            
            // General Contact Form Submission
            if (contactGeneralForm) {
                 contactGeneralForm.addEventListener('submit', (e) => {
                     e.preventDefault();
                     
                     // Form validation
                     const name = document.getElementById('contact-name').value.trim();
                     const email = document.getElementById('contact-email').value.trim();
                     const message = document.getElementById('contact-message').value.trim();
                     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                     
                     if (!name) {
                         showMessage("Please enter your full name.", true);
                         document.getElementById('contact-name').focus();
                         return;
                     }
                     if (!email || !emailRegex.test(email)) {
                         showMessage("Please enter a valid email address.", true);
                         document.getElementById('contact-email').focus();
                         return;
                     }
                     if (!message) {
                         showMessage("Please enter a message.", true);
                         document.getElementById('contact-message').focus();
                         return;
                     }
                     
                     // Simulate loading state
                     const submitBtn = contactGeneralForm.querySelector('button[type="submit"]');
                     const originalText = submitBtn.textContent;
                     submitBtn.textContent = 'Sending...';
                     submitBtn.disabled = true;
                     
                     setTimeout(() => {
                         showMessage("Message sent! We'll respond within 24 hours.");
                         contactGeneralForm.reset();
                         submitBtn.textContent = originalText;
                         submitBtn.disabled = false;
                     }, 1000);
                 });
             }

              // Image Grid & Modal Trigger
             if (imageGridContainer) {
                 imageGridContainer.addEventListener('click', (e) => {
                      // Check if click is on an image or the overlay button
                     if (e.target.tagName === 'IMG' || e.target.id === 'see-all-photos-btn') {
                         openImageModal(currentPropertyId);
                     }
                 });
             }
             // Modal Navigation
             modalPrevBtn.addEventListener('click', showPrevImage);
             modalNextBtn.addEventListener('click', showNextImage);
             // Keyboard navigation for modal
             document.addEventListener('keydown', (e) => {
                if (!imageModalOverlay.classList.contains('hidden')) {
                    if (e.key === 'ArrowLeft') showPrevImage();
                    if (e.key === 'ArrowRight') showNextImage();
                    if (e.key === 'Escape') closeImageModal();
                }
             });


            // Handle window resize for responsive adjustments
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    if (window.innerWidth >= 640 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        menuIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                        document.body.style.overflow = '';
                    }
                }, 250);
            });
            
            window.addEventListener('orientationchange', () => {
                setTimeout(() => {
                    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
                }, 100);
            });
            
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
            
            document.addEventListener('touchend', (e) => {
                if (e.target.matches('button, .touch-target, .property-card')) {
                    e.preventDefault();
                }
            }, { passive: false });
            
            window.addEventListener('error', (e) => {
                console.error('Global error:', e.error);
                showMessage('Something went wrong. Please try again.', true);
            });
            
            showView('home-view');

        });
        
        window.showMessage = function(message, isError = false) {
            const messageBox = document.getElementById('message-box');
            const messageText = document.getElementById('message-text');
            if (!messageBox || !messageText) return;
            
            messageText.textContent = message;
            messageBox.classList.toggle('bg-red-600', isError);
            messageBox.classList.toggle('bg-gray-900', !isError);
            messageBox.classList.remove('hidden', 'opacity-0');
            
            setTimeout(() => {
                messageBox.classList.add('opacity-0');
                setTimeout(() => messageBox.classList.add('hidden'), 300);
            }, 3000);
        };
        
        window.closeImageModal = function() {
            const imageModalOverlay = document.getElementById('image-modal-overlay');
            if (imageModalOverlay) {
                imageModalOverlay.classList.add('hidden');
            }
        };
