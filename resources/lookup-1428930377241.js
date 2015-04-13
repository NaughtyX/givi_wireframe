(function(window, undefined) {
  var dictionary = {
    "322d3b82-9aad-4c1e-a4a1-1a9901585b6d": "My GIVI_Want",
    "a8f529e4-fd9f-4777-aadd-de29ef30ec7c": "Request",
    "def2943c-422d-4516-9106-6de0b69ff95d": "Item_Cancel",
    "c01adcf6-1ec3-4aec-a0e2-730e1f4d495d": "My GIVI_Deal",
    "35da8fef-d742-470d-bd67-5d768b4b1eb0": "Request_single one",
    "93db42d5-7984-410b-9226-a3260c53a4b1": "Item_Cancel_confirm",
    "82b6cff0-dec2-4c40-999a-09e3a0428792": "My GIVI_Want_Edit",
    "26ebaa0e-5204-447f-83d2-93cf40b34b42": "Item_Comment",
    "159c27b0-ae94-4e40-acb6-7d4edd5d75e3": "My GIVI_Upload_Edit",
    "f985cc9d-7207-4892-be72-b4b35cb8ae22": "My GIVI_Deal_Edit",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "26d327b1-e707-4560-82c3-2ab193003ec7": "Item_Main",
    "f84caae4-330a-4d41-8bd6-3be950e94d65": "My GIVI_Upload",
    "e7da516d-99c3-4fcb-9c77-09e4284f1d92": "Camera roll",
    "23941ffc-9432-4292-be21-82a8b308d114": "Home",
    "66861949-3efb-400c-95b8-33772d4f5321": "Info",
    "ce2d74b0-1aca-4895-ae9d-2729e15079b9": "Item_Want it_confirm",
    "e68d1485-e772-48ea-810d-a92f09021538": "Upload",
    "6e9ebb4b-115f-44d3-8f14-86a625264868": "Item_My Item",
    "ad389ef0-76c7-4b05-9848-cbae9bd8e743": "Item_History",
    "867754e4-77a6-412a-8f8e-4b8e36327f74": "Upload_Item Info",
    "d972aa00-6b87-4f04-b9d6-ea57c0e7a50f": "Item_Edit",
    "d3502d47-9f59-44d2-898a-7699be611abb": "My GIVI",
    "d6a89ccf-f09f-4a29-991d-8a6ba8336cf6": "Info",
    "cd2769ab-fe21-43b7-84a5-d9b251e25194": "Home",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Blank"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);