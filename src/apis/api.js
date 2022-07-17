import req from "./https.js";
var token = "CWB-15B3B066-F9BB-4F94-A113-9830F7BAA981";

// API：鄉鎮天氣預報-臺灣未來1週天氣預報
export const taiwanWeekWeather = () => {
  return req("get", "/v1/rest/datastore/F-D0047-091", {
    Authorization: token,
  }).then((res) => {
    return res.data.records.locations[0].location;
  });
};
