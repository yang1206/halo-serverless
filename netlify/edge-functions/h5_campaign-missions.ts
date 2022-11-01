import { Context } from "https://edge.netlify.com";
export default async (request: Request, context: Context) => {

  const response = await fetch("https://www.haloapi.com/metadata/h5/metadata/campaign-missions", {
    "headers": {
      "Accept": "application/json",
      'Ocp-Apim-Subscription-Key': '41ebd915861541819dc803e3eddfdeed',
      'Accept-Language': 'zh'
    }
  });
  const resData = await response.json();
  return context.json({
    data: resData,
    status: 200
  });
};