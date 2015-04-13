jQuery("#simulation")
  .on("click", ".s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "0px 0px 0px 0px",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f84caae4-330a-4d41-8bd6-3be950e94d65"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "0px 0px 0px 0px",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_17": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19": {
                      "attributes": {
                        "background-color": "#80B8F1",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19": {
                      "attributes": {
                        "background-color": "#157EFB",
                        "background-image": "none",
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_19": {
                      "attributes-ie": {
                        "-pie-background": "#157EFB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "9.0pt",
                        "line-height": "9.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_18": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/322d3b82-9aad-4c1e-a4a1-1a9901585b6d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_58": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_58 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_58": {
                      "attributes": {
                        "color": "#007DFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt",
                        "line-height": "12.0pt"
                      }
                    }
                  },{
                    "#s-c01adcf6-1ec3-4aec-a0e2-730e1f4d495d #s-Label_58 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f985cc9d-7207-4892-be72-b4b35cb8ae22"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ad389ef0-76c7-4b05-9848-cbae9bd8e743"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ad389ef0-76c7-4b05-9848-cbae9bd8e743"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_286")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/23941ffc-9432-4292-be21-82a8b308d114"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_119")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e68d1485-e772-48ea-810d-a92f09021538"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_126")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66861949-3efb-400c-95b8-33772d4f5321"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_162")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f84caae4-330a-4d41-8bd6-3be950e94d65"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_79")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a8f529e4-fd9f-4777-aadd-de29ef30ec7c"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });