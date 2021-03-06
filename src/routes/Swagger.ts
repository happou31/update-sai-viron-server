import {
  Endpoint,
  RouteFuntionType,
  HandlerFunctionType
} from "../lib/Endpoint";

type ReturnType = any;

export default class Swagger extends Endpoint<ReturnType> {
  route = "/swagger.json";
  method = "GET";
  data: HandlerFunctionType<ReturnType> = req => {
    return {
      theme: "standard",
      color: "white",
      name: "Update-sai custom Manager",
      tags: ["update_name", "update_sai"],
      thumbnail:
        "https://pbs.twimg.com/profile_images/875388523569856512/PBvkNAHs_400x400.jpg",

      pages: [
        {
          section: "dashboard",
          group: "",
          id: "quickview",
          name: "ダッシュボード",
          components: [
            {
              api: {
                method: "get",
                path: "/show/history"
              },
              name: "History",
              style: "table"
            },
            {
              api: {
                method: "get",
                path: "/show/settings"
              },
              name: "Settings",
              style: "table"
            }
          ]
        }
      ]
    };
  };
}
