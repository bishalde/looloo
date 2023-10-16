const Users = require("../db/models/Users");
const Visit = require("../db/models/WebsiteVisits");

const HomePage = async (req, res) => {
  const userTotal = await Users.countDocuments();
  const WebsiteVisits = await Visit.findOneAndUpdate({sno:5741}, { $inc: { visits: 1 }},{new:true} )
  const Projects = 69

  const websiteVisits = 69;
  res.status(200).json({
    message: "Welcome To ProjectTree Backend",
    lastUpdated: "2021-10-16",
    path: ["/login", "/register", "/profile", "/logout"],
    totalUsers: userTotal,
    totalVisites: WebsiteVisits.visits,
    totalProjects : Projects
  });
};

module.exports = HomePage;
