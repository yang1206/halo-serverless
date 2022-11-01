import { Context } from "https://edge.netlify.com";
export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const gameTag = url.searchParams.get("name")
  const response = await fetch(`https://www.haloapi.com/profile/h5/profiles/${gameTag}/appearance`, {
    "headers": {
      "Accept": "application/json",
      'Ocp-Apim-Subscription-Key': '41ebd915861541819dc803e3eddfdeed',
      'Accept-Language': 'zh'
    },
    "method": 'get',
  });
  const resData = await response.json();
  return context.json({
    data: resData,
    status: 200
  });
};