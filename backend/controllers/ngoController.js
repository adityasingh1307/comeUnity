const axios = require("axios");

const backupNGOs = {
  mumbai: [
    {
      name: "Robin Hood Army",
      phone: "Not Available",
      website: "https://robinhoodarmy.com",
    },
    {
      name: "Akshaya Patra",
      phone: "Not Available",
      website: "https://www.akshayapatra.org",
    },
    {
      name: "Goonj",
      phone: "Not Available",
      website: "https://goonj.org",
    },
  ],

  delhi: [
    {
      name: "Smile Foundation",
      phone: "Not Available",
      website: "https://www.smilefoundationindia.org",
    },
    {
      name: "Goonj",
      phone: "Not Available",
      website: "https://goonj.org",
    },
  ],

  pune: [
    {
      name: "Helping Hands",
      phone: "Not Available",
      website: "#",
    },
  ],

  bangalore: [
    {
      name: "Food For All",
      phone: "Not Available",
      website: "#",
    },
  ],

  hyderabad: [
    {
      name: "Serve Humanity",
      phone: "Not Available",
      website: "#",
    },
  ],

  chennai: [
    {
      name: "Care Foundation",
      phone: "Not Available",
      website: "#",
    },
  ],

  kolkata: [
    {
      name: "Hope NGO",
      phone: "Not Available",
      website: "#",
    },
  ],

  jaipur: [
    {
      name: "Pink City NGO",
      phone: "Not Available",
      website: "#",
    },
  ],

  lucknow: [
    {
      name: "Helping Souls",
      phone: "Not Available",
      website: "#",
    },
  ],

  indore: [
    {
      name: "Indore Cares",
      phone: "Not Available",
      website: "#",
    },
  ],

  ahmedabad: [
    {
      name: "Community First",
      phone: "Not Available",
      website: "#",
    },
  ],
};

const getNGOsByCity = async (req, res) => {
  try {
    const city = req.params.city;
    const cityKey = city.toLowerCase();

    console.log("Searching NGOs for:", city);

    const geoResponse = await axios.get(
      `https://nominatim.openstreetmap.org/search?city=${city}&format=json&limit=1`,
      {
        headers: {
          "User-Agent": "ComeUnity/1.0",
        },
      }
    );

    if (geoResponse.data.length === 0) {
      return res.status(200).json({
        success: true,
        ngos: [],
      });
    }

    const lat = geoResponse.data[0].lat;
    const lon = geoResponse.data[0].lon;

    const query = `
      [out:json][timeout:10];
      (
        node["office"="ngo"](around:3000,${lat},${lon});
        node["amenity"="social_facility"](around:3000,${lat},${lon});
      );
      out;
    `;

    try {
      const response = await axios.post(
        "https://overpass.kumi.systems/api/interpreter",
        `data=${encodeURIComponent(query)}`,
        {
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",

            "User-Agent":
              "ComeUnity/1.0",

            Accept: "application/json",
          },

          timeout: 15000,
        }
      );

      const ngos = response.data.elements
        .slice(0, 5)
        .map((item) => ({
          name:
            item.tags?.name ||
            "Unnamed NGO",

          city: city,

          phone:
            item.tags?.phone ||
            "Not Available",

          website:
            item.tags?.website ||
            "Not Available",
        }));

      if (ngos.length > 0) {
        return res.status(200).json({
          success: true,
          source: "OSM",
          ngos,
        });
      }

      // OSM found nothing
      return res.status(200).json({
        success: true,
        source: "Backup",
        ngos:
          backupNGOs[cityKey] || [],
      });

    } catch (error) {

      console.log(
        "OSM Timeout. Using backups."
      );

      return res.status(200).json({
        success: true,
        source: "Backup",
        ngos:
          backupNGOs[cityKey] || [],
      });
    }

  } catch (error) {

    console.log(error.message);

    return res.status(200).json({
      success: true,
      ngos: [],
    });
  }
};

module.exports = {
  getNGOsByCity,
};