import type { ModelVideo } from "@/lib/types";

/**
 * One YouTube video per listed model. Each videoId returned HTTP 200 from YouTube oEmbed
 * and the title names the car. Other models fall back to a YouTube search.
 */
export const modelVideos: Record<string, ModelVideo> = {
  "ferrari-f40": { videoId: "mAhUtcXMyJ4", title: "Is the Ferrari F40 the GREATEST supercar of all time?", channel: "carwow" },
  "ferrari-250-gto": { videoId: "q4-TF3rKcnQ", title: "Ferrari 250 GTO drive review. Does it still deserve its almost mythical status today?", channel: "Harry's garage" },
  "ferrari-testarossa": { videoId: "aw934TfKNmg", title: "1988 Ferrari Testarossa Review // Driving The Legend", channel: "Throttle House" },
  "ferrari-dino-246": { videoId: "pAd02TlUxp8", title: "Ferrari Dino 246 GTS — Why This V6 Classic Became So Valuable | WBT Garage #10", channel: "WBT Garage" },
  "ferrari-458": { videoId: "2CxhUSg24Ng", title: "Ferrari 458 Ownership Experience - Real Review", channel: "Should I Get It Reviews" },
  "ferrari-laferrari": { videoId: "ZcUFssXlSsw", title: "Ferrari LaFerrari review – is this the best supercar ever?", channel: "carwow" },
  "ferrari-296": { videoId: "Df7tgK-oyTA", title: "2023 Ferrari 296 GTB Review // Guilty Of ONE Crime", channel: "Throttle House" },
  "ferrari-purosangue": { videoId: "lSOMqfdvvM0", title: "2024 Ferrari Purosangue Review // Why It’s Worth $400,000", channel: "Throttle House" },
  "ferrari-sf90": { videoId: "ZfdvNvaxUXk", title: "The Ferrari SF90 Stradale Review: Maranello's Biggest Mistake of This Century?", channel: "JayEmm on Cars" },
  "ferrari-f80": { videoId: "MqV6kC-skdI", title: "Ferrari F80 Review | Ferrari’s best car of the 21st century", channel: "CAR magazine" },
  "lamborghini-miura": { videoId: "hyN3esUGdm8", title: "The Lamborghini Miura Is the World's First Supercar", channel: "Doug DeMuro" },
  "lamborghini-countach": { videoId: "2YMaw-CMmY0", title: "Lamborghini Countach Review // Wolf Of ALL Streets", channel: "Throttle House" },
  "lamborghini-huracan": { videoId: "J4in22dx4J8", title: "2015 Lamborghini Huracan LP610-4 POV Test Drive & 15K Mile Review", channel: "Nothin’ But Car Reviews" },
  "lamborghini-aventador": { videoId: "gubLUmOOEg4", title: "2015 Lamborghini Aventador LP700-4 Review", channel: "Drive.com.au" },
  "lamborghini-revuelto": { videoId: "uOMysmtI6Tg", title: "The 2024 Lamborghini Revuelto Is a $700,000 Supercar with 1,000 Horsepower", channel: "Doug DeMuro" },
  "lamborghini-urus": { videoId: "_wxaYP0Nx4k", title: "Lamborghini Urus review - 0-60mph, 1/4-mile and Brake Test!", channel: "carwow" },
  "maserati-mc20": { videoId: "N62w0knERXQ", title: "The Maserati MC20 Is The Next Supercar BARGAIN | REVIEW", channel: "Cars by Cassian" },
  "alfa-romeo-spider": { videoId: "1sxaMxzf0UA", title: "Alfa Romeo Duetto Spider 1750 review", channel: "Harry's garage" },
  "fiat-panda": { videoId: "ImP0RKhdp2Q", title: "New Fiat Panda: Why everyone will buy this car", channel: "carwow" },
  "lancia-stratos": { videoId: "pG9BOrj2YYk", title: "Lancia Stratos TopGear TestDrive 720pHD", channel: "icebgg" },
  "lancia-delta": { videoId: "UTlwwsegjeg", title: "The Lancia Delta Integrale Evo 2 Is My All-Time Favorite Hot Hatch", channel: "Doug DeMuro" },
  "pagani-zonda": { videoId: "nXDbQznrG7o", title: "The Pagani Zonda Is an Insane $6 Million Supercar", channel: "Doug DeMuro" },
  "pagani-huayra": { videoId: "WnyPtKQKP3Y", title: "Here's Why the Pagani Huayra Is Worth $3 Million", channel: "Doug DeMuro" },
  "de-tomaso-pantera": { videoId: "pMjM8rkp0b4", title: "The DeTomaso Pantera Is a Gorgeous Car That Deserves More Love", channel: "Doug DeMuro" },
  "ferrari-365-gtb4": { videoId: "jzi6rxM7eZg", title: "The Ferrari Daytona is a Million Dollar Driving Experience", channel: "Cars & Bids" },
  "lamborghini-temerario": { videoId: "ViSo4UftYqw", title: "2026 Lamborghini Temerario Review + GRAND TOUR ANNOUNCEMENT", channel: "Throttle House" },
  "alfa-romeo-4c": { videoId: "L3yyjoRWwGg", title: "Vicki Reviews The Alfa Romeo 4C - Fifth Gear", channel: "Fifth Gear" },
};
