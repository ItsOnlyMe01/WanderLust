const samplelistings = [
  {
    title: "Luxury Villa in Goa",
    description: "A stunning villa with a private pool and beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1454388683759-ee76c15fee26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Mountain Resort in Shimla",
    description: "Charming resort with panoramic views of the Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1718606267789-de728d02f064?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Shimla, Himachal Pradesh",
    country: "India",
  },
  {
    title: "Modern Apartment in Bangalore",
    description: "Stylish apartment with state-of-the-art amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1611151394056-319824d98c09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    },
    price: 2500,
    location: "Bangalore, Karnataka",
    country: "India",
  },
  {
    title: "Beachfront Cottage in Kochi",
    description: "Quaint cottage right on the beach with beautiful sunset views.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/972361238/photo/clearwater-beach-florida.jpg?s=1024x1024&w=is&k=20&c=FsHaaNsdDbFEwteTIsNHOMIYSdjMnzwLgW90jXkC9T4=",
    },
    price: 1500,
    location: "Kochi, Kerala",
    country: "India",
  },
  {
    title: "Historical Haveli in Jaipur",
    description: "Elegant haveli with traditional architecture and modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3000,
    location: "Jaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Countryside Villa in Udaipur",
    description: "Luxurious villa surrounded by serene countryside views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Udaipur, Rajasthan",
    country: "India",
  },
  {
    title: "City Penthouse in Mumbai",
    description: "Spacious penthouse with stunning cityscape views.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1722927254497-ed40548c5b85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    },
    price: 6000,
    location: "Mumbai, Maharashtra",
    country: "India",
  },
  {
    title: "Eco Lodge in Rishikesh",
    description: "Eco-friendly lodge perfect for yoga and meditation retreats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568843434422-bbfa459d1927?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 800,
    location: "Rishikesh, Uttarakhand",
    country: "India",
  },
  {
    title: "Luxury Suite in Delhi",
    description: "Opulent suite in a premium location with top-notch amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464703278390-df5b3f1f61b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Heritage House in Pondicherry",
    description: "Charming heritage house with French colonial architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602002418209-55d7a55adf42?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2000,
    location: "Pondicherry",
    country: "India",
  }
];


  // const samplelistings=[
  //   {
  //     title: "Luxury Villa in Goa",
  //     description: "A stunning villa with a private pool and beach access.",
  //     image: {
  //       filename:"listingimage",
  //      url:"https://images.unsplash.com/photo-1454388683759-ee76c15fee26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     },
  //     price: 4500,
  //     location: "Goa",
  //     country: "India"
  //   },
  //   {
  //     title: "Mountain Resort in Shimla",
  //     description: "Charming resort with panoramic views of the Himalayas.",
  //     image: "https://images.unsplash.com/photo-1718606267789-de728d02f064?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 1200,
  //     location: "Shimla, Himachal Pradesh",
  //     country: "India"
  //   },
  //   {
  //     title: "Modern Apartment in Bangalore",
  //     description: "Stylish apartment with state-of-the-art amenities.",
  //     image: "https://images.unsplash.com/photo-1611151394056-319824d98c09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  //     price: 2500,
  //     location: "Bangalore, Karnataka",
  //     country: "India"
  //   },
  //   {
  //     title: "Beachfront Cottage in Kochi",
  //     description: "Quaint cottage right on the beach with beautiful sunset views.",
  //     image: "https://media.istockphoto.com/id/972361238/photo/clearwater-beach-florida.jpg?s=1024x1024&w=is&k=20&c=FsHaaNsdDbFEwteTIsNHOMIYSdjMnzwLgW90jXkC9T4=",
  //     price: 1500,
  //     location: "Kochi, Kerala",
  //     country: "India"
  //   },
  //   {
  //     title: "Historical Haveli in Jaipur",
  //     description: "Elegant haveli with traditional architecture and modern comforts.",
  //     image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 3000,
  //     location: "Jaipur, Rajasthan",
  //     country: "India"
  //   },
  //   {
  //     title: "Countryside Villa in Udaipur",
  //     description: "Luxurious villa surrounded by serene countryside views.",
  //     image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 4000,
  //     location: "Udaipur, Rajasthan",
  //     country: "India"
  //   },
  //   {
  //     title: "City Penthouse in Mumbai",
  //     description: "Spacious penthouse with stunning cityscape views.",
  //     image: "https://plus.unsplash.com/premium_photo-1722927254497-ed40548c5b85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  //     price: 6000,
  //     location: "Mumbai, Maharashtra",
  //     country: "India"
  //   },
  //   {
  //     title: "Eco Lodge in Rishikesh",
  //     description: "Eco-friendly lodge perfect for yoga and meditation retreats.",
  //     image: "https://images.unsplash.com/photo-1568843434422-bbfa459d1927?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 800,
  //     location: "Rishikesh, Uttarakhand",
  //     country: "India"
  //   },
  //   {
  //     title: "Luxury Suite in Delhi",
  //     description: "Opulent suite in a premium location with top-notch amenities.",
  //     image: "https://images.unsplash.com/photo-1464703278390-df5b3f1f61b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 3500,
  //     location: "Delhi",
  //     country: "India"
  //   },
  //   {
  //     title: "Heritage House in Pondicherry",
  //     description: "Charming heritage house with French colonial architecture.",
  //     image: "https://images.unsplash.com/photo-1602002418209-55d7a55adf42?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 2000,
  //     location: "Pondicherry",
  //     country: "India"
  //   },
  
  //   {
  //     title: "Eco Lodge in Rishikesh",
  //     description: "Eco-friendly lodge perfect for yoga and meditation retreats.",
  //     image: "https://images.unsplash.com/photo-1568843434422-bbfa459d1927?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 800,
  //     location: "Rishikesh, Uttarakhand",
  //     country: "India"
  //   },
  //   {
  //     title: "Luxury Villa in Goa",
  //     description: "A stunning villa with a private pool and beach access.",
  //     image: "https://images.unsplash.com/photo-1454388683759-ee76c15fee26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 4500,
  //     location: "Goa",
  //     country: "India"
  //   },
  //   {
  //     title: "Mountain Resort in Shimla",
  //     description: "Charming resort with panoramic views of the Himalayas.",
  //     image: "https://images.unsplash.com/photo-1718606267789-de728d02f064?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 1200,
  //     location: "Shimla, Himachal Pradesh",
  //     country: "India"
  //   },
  //   {
  //     title: "Modern Apartment in Bangalore",
  //     description: "Stylish apartment with state-of-the-art amenities.",
  //     image: "https://images.unsplash.com/photo-1611151394056-319824d98c09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  //     price: 2500,
  //     location: "Bangalore, Karnataka",
  //     country: "India"
  //   },
  //   {
  //     title: "Beachfront Cottage in Kochi",
  //     description: "Quaint cottage right on the beach with beautiful sunset views.",
  //     image: "https://media.istockphoto.com/id/972361238/photo/clearwater-beach-florida.jpg?s=1024x1024&w=is&k=20&c=FsHaaNsdDbFEwteTIsNHOMIYSdjMnzwLgW90jXkC9T4=",
  //     price: 1500,
  //     location: "Kochi, Kerala",
  //     country: "India"
  //   },
  //   {
  //     title: "Historical Haveli in Jaipur",
  //     description: "Elegant haveli with traditional architecture and modern comforts.",
  //     image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 3000,
  //     location: "Jaipur, Rajasthan",
  //     country: "India"
  //   },
  //   {
  //     title: "Countryside Villa in Udaipur",
  //     description: "Luxurious villa surrounded by serene countryside views.",
  //     image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 4000,
  //     location: "Udaipur, Rajasthan",
  //     country: "India"
  //   },
  //   {
  //     title: "City Penthouse in Mumbai",
  //     description: "Spacious penthouse with stunning cityscape views.",
  //     image: "https://plus.unsplash.com/premium_photo-1722927254497-ed40548c5b85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  //     price: 6000,
  //     location: "Mumbai, Maharashtra",
  //     country: "India"
  //   },
  //   {
  //     title: "Eco Lodge in Rishikesh",
  //     description: "Eco-friendly lodge perfect for yoga and meditation retreats.",
  //     image: "https://images.unsplash.com/photo-1568843434422-bbfa459d1927?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 800,
  //     location: "Rishikesh, Uttarakhand",
  //     country: "India"
  //   },
  //   {
  //     title: "Luxury Suite in Delhi",
  //     description: "Opulent suite in a premium location with top-notch amenities.",
  //     image: "https://images.unsplash.com/photo-1464703278390-df5b3f1f61b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 3500,
  //     location: "Delhi",
  //     country: "India"
  //   },
  //   {
  //     title: "Heritage House in Pondicherry",
  //     description: "Charming heritage house with French colonial architecture.",
  //     image: "https://images.unsplash.com/photo-1602002418209-55d7a55adf42?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 2000,
  //     location: "Pondicherry",
  //     country: "India"
  //   },
  
  //   {
  //     title: "Eco Lodge in Rishikesh",
  //     description: "Eco-friendly lodge perfect for yoga and meditation retreats.",
  //     image: "https://images.unsplash.com/photo-1568843434422-bbfa459d1927?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 800,
  //     location: "Rishikesh, Uttarakhand",
  //     country: "India"
  //   },
  //   {
  //     title: "Luxury Villa in Goa",
  //     description: "A stunning villa with a private pool and beach access.",
  //     image: "https://images.unsplash.com/photo-1454388683759-ee76c15fee26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 4500,
  //     location: "Goa",
  //     country: "India"
  //   },
  //   {
  //     title: "Mountain Resort in Shimla",
  //     description: "Charming resort with panoramic views of the Himalayas.",
  //     image: "https://images.unsplash.com/photo-1718606267789-de728d02f064?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 1200,
  //     location: "Shimla, Himachal Pradesh",
  //     country: "India"
  //   },
  //   {
  //     title: "Modern Apartment in Bangalore",
  //     description: "Stylish apartment with state-of-the-art amenities.",
  //     image: "https://images.unsplash.com/photo-1611151394056-319824d98c09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  //     price: 2500,
  //     location: "Bangalore, Karnataka",
  //     country: "India"
  //   },
  //   {
  //     title: "Beachfront Cottage in Kochi",
  //     description: "Quaint cottage right on the beach with beautiful sunset views.",
  //     image: "https://media.istockphoto.com/id/972361238/photo/clearwater-beach-florida.jpg?s=1024x1024&w=is&k=20&c=FsHaaNsdDbFEwteTIsNHOMIYSdjMnzwLgW90jXkC9T4=",
  //     price: 1500,
  //     location: "Kochi, Kerala",
  //     country: "India"
  //   },
  //   {
  //     title: "Historical Haveli in Jaipur",
  //     description: "Elegant haveli with traditional architecture and modern comforts.",
  //     image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 3000,
  //     location: "Jaipur, Rajasthan",
  //     country: "India"
  //   },
  //   {
  //     title: "Countryside Villa in Udaipur",
  //     description: "Luxurious villa surrounded by serene countryside views.",
  //     image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 4000,
  //     location: "Udaipur, Rajasthan",
  //     country: "India"
  //   },
  //   {
  //     title: "City Penthouse in Mumbai",
  //     description: "Spacious penthouse with stunning cityscape views.",
  //     image: "https://plus.unsplash.com/premium_photo-1722927254497-ed40548c5b85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  //     price: 6000,
  //     location: "Mumbai, Maharashtra",
  //     country: "India"
  //   },
  //   {
  //     title: "Eco Lodge in Rishikesh",
  //     description: "Eco-friendly lodge perfect for yoga and meditation retreats.",
  //     image: "https://images.unsplash.com/photo-1568843434422-bbfa459d1927?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 800,
  //     location: "Rishikesh, Uttarakhand",
  //     country: "India"
  //   },
  //   {
  //     title: "Luxury Suite in Delhi",
  //     description: "Opulent suite in a premium location with top-notch amenities.",
  //     image: "https://images.unsplash.com/photo-1464703278390-df5b3f1f61b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 3500,
  //     location: "Delhi",
  //     country: "India"
  //   },
  //   {
  //     title: "Heritage House in Pondicherry",
  //     description: "Charming heritage house with French colonial architecture.",
  //     image: "https://images.unsplash.com/photo-1602002418209-55d7a55adf42?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 2000,
  //     location: "Pondicherry",
  //     country: "India"
  //   },
  
  //   {
  //     title: "Eco Lodge in Rishikesh",
  //     description: "Eco-friendly lodge perfect for yoga and meditation retreats.",
  //     image: "https://images.unsplash.com/photo-1568843434422-bbfa459d1927?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     price: 800,
  //     location: "Rishikesh, Uttarakhand",
  //     country: "India"
  //   },
  // ];

 module.exports={data:samplelistings};