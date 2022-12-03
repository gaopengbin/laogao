window['Authorization'] = 'Bearer 50b62382-b8c5-4a46-b17a-662b190e9c78';
window['serverId'] = 'ccf4642302fe4854b4a6be8c9a371fba'
window['baseUrl'] = 'http://39.152.31.83:11208/geoserver'
window['wfsUrl'] = '/geoserver39/2dd391dcc4fa481bb982092c52a77a8b/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=2dd391dcc4fa481bb982092c52a77a8b%3A1_L_EPSNet_1_L二维服务&maxFeatures=50&outputFormat=application%2Fjson&srsName=EPSG:4326'
window['sceneTree'] = [
    {
        czmObject: {
            xbsjType: "Imagery",
            xbsjGuid: "41f7f98c-5c95-4e96-b67e-ccf5ece0920d",
            name: "天地图影像",
            xbsjZIndex: -1,
            xbsjImageryProvider: {
                XbsjImageryProvider: {
                    url: "http://t6.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=cf7c0b94d43b4d5e1f27a5712b147c70",
                },
            },
        },
    },
    {
        title: "管网",
        expand: true,
        // enabled:false,
        children: [
            {
                title: "安防",
                expand: false,
                children: [
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            xbsjGuid: "2d6ded21-0be0-4d67-b305-e5fe996cf03e",
                            name: "安防_L",
                            rectangle: [
                                2.1580196857746077, 0.458684147441102, 2.1583248605632797,
                                0.45888781192618655,
                            ],
                            xbsjImageryProvider: {
                                XbsjImageryProvider: {},
                                UrlTemplateImageryProvider: {},
                                WebMapServiceImageryProvider: {},
                                WebMapTileServiceImageryProvider: {
                                    url: "http://39.152.31.83:11208/geoserver/gwc/service/wmts/rest/2dd391dcc4fa481bb982092c52a77a8b%3A1_L_EPSNet_网络数据集1/{style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}?format=image/png",
                                    format: "image/png",
                                    layer: "1_L_EPSNet_网络数据集1",
                                    style: "line",
                                    tileMatrixSetID: "EPSG:4326",
                                    tileMatrixLabels: [
                                        "EPSG:4326:0",
                                        "EPSG:4326:1",
                                        "EPSG:4326:2",
                                        "EPSG:4326:3",
                                        "EPSG:4326:4",
                                        "EPSG:4326:5",
                                        "EPSG:4326:6",
                                        "EPSG:4326:7",
                                        "EPSG:4326:8",
                                        "EPSG:4326:9",
                                        "EPSG:4326:10",
                                        "EPSG:4326:11",
                                        "EPSG:4326:12",
                                        "EPSG:4326:13",
                                        "EPSG:4326:14",
                                        "EPSG:4326:15",
                                        "EPSG:4326:16",
                                        "EPSG:4326:17",
                                        "EPSG:4326:18",
                                        "EPSG:4326:19",
                                        "EPSG:4326:20",
                                        "EPSG:4326:21",
                                    ],
                                    tilingScheme: "Geographic",
                                    maximumLevel: 21,
                                },
                                ArcGisMapServerImageryProvider: {},
                                GoogleEarthEnterpriseImageryProvider: {},
                                createTileMapServiceImageryProvider: {},
                                type: "WebMapTileServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            xbsjGuid: "d21ad228-7f57-4a7f-a0a7-d708a21a2555",
                            name: "安防_P",
                            rectangle: [
                                2.1580196857746077, 0.458684147441102, 2.1583248605632797,
                                0.45888781192618655,
                            ],
                            xbsjImageryProvider: {
                                XbsjImageryProvider: {},
                                UrlTemplateImageryProvider: {},
                                WebMapServiceImageryProvider: {},
                                WebMapTileServiceImageryProvider: {
                                    url: "http://39.152.31.83:11208/geoserver/gwc/service/wmts/rest/2dd391dcc4fa481bb982092c52a77a8b%3A1_P_EPSNet_网络数据集1/{style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}?format=image/png",
                                    format: "image/png",
                                    layer: "1_P_EPSNet_网络数据集1",
                                    style: "point",
                                    tileMatrixSetID: "EPSG:4326",
                                    tileMatrixLabels: [
                                        "EPSG:4326:0",
                                        "EPSG:4326:1",
                                        "EPSG:4326:2",
                                        "EPSG:4326:3",
                                        "EPSG:4326:4",
                                        "EPSG:4326:5",
                                        "EPSG:4326:6",
                                        "EPSG:4326:7",
                                        "EPSG:4326:8",
                                        "EPSG:4326:9",
                                        "EPSG:4326:10",
                                        "EPSG:4326:11",
                                        "EPSG:4326:12",
                                        "EPSG:4326:13",
                                        "EPSG:4326:14",
                                        "EPSG:4326:15",
                                        "EPSG:4326:16",
                                        "EPSG:4326:17",
                                        "EPSG:4326:18",
                                        "EPSG:4326:19",
                                        "EPSG:4326:20",
                                        "EPSG:4326:21",
                                    ],
                                    tilingScheme: "Geographic",
                                    maximumLevel: 21,
                                },
                                ArcGisMapServerImageryProvider: {},
                                GoogleEarthEnterpriseImageryProvider: {},
                                createTileMapServiceImageryProvider: {},
                                type: "WebMapTileServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Tileset",
                            name: "安防管线",
                            url: "http://120.48.115.17:8080/data/GX/安防/line/tileset.json",
                            // xbsjStyle: "{\"color\":\"rgba(255,255,255,0.5)\"}",
                            xbsjClippingPlanes: {},
                            xbsjCustomShader: {},
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Tileset",
                            name: "安防管点",
                            url: "http://120.48.115.17:8080/data/GX/安防/point/tileset.json",
                            xbsjClippingPlanes: {},
                            xbsjCustomShader: {},
                        },
                    },
                ],
            },
            {
                title: "雨水",
                expand: false,
                children: [
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "雨水线",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,
                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "6",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "雨水点",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,
                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "16",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "雨水管线",
                    //         url: "http://120.48.115.17:8080/data/GX/雨水/line/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "雨水管点",
                    //         url: "http://120.48.115.17:8080/data/GX/雨水/point/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                ],
            },
            {
                title: "污水",
                expand: false,
                // enabled: false,
                children: [
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "污水线",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "9",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "污水点",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "19",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "污水管线",
                    //         url: "http://120.48.115.17:8080/data/GX/污水/line/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "污水管点",
                    //         url: "http://120.48.115.17:8080/data/GX/污水/point/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                ],
            },
            // {
            //   title: "雨污合流",
            //   expand: false,
            //   children: [
            //     {
            //       czmObject: {
            //         xbsjType: "Imagery",
            //         name: "雨污合流线",
            //         rectangle: [
            //           2.1580188113466208, 0.4586790375022197, 2.158328170956537,

            //           0.45892043399106314,
            //         ],
            //         xbsjImageryProvider: {
            //           WebMapServiceImageryProvider: {
            //             url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
            //             proxy: null,
            //             format: "image/png",
            //             layers: "4",
            //             style: "default",
            //             tilingScheme: "",
            //             minimumLevel: 1,
            //             srs: "EPSG:4326",
            //           },
            //           type: "WebMapServiceImageryProvider",
            //         },
            //       },
            //     },
            //     {
            //       czmObject: {
            //         xbsjType: "Imagery",
            //         name: "雨污合流点",
            //         rectangle: [
            //           2.1580188113466208, 0.4586790375022197, 2.158328170956537,

            //           0.45892043399106314,
            //         ],
            //         xbsjImageryProvider: {
            //           WebMapServiceImageryProvider: {
            //             url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
            //             proxy: null,
            //             format: "image/png",
            //             layers: "14",
            //             style: "default",
            //             tilingScheme: "",
            //             minimumLevel: 1,
            //             srs: "EPSG:4326",
            //           },
            //           type: "WebMapServiceImageryProvider",
            //         },
            //       },
            //     },
            //   ],
            // },
            {
                title: "天然气",
                expand: false,
                children: [
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "天然气线",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "8",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "天然气点",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "18",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "天然气管线",
                    //         url: "http://120.48.115.17:8080/data/GX/天然气/line/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "天然气管点",
                    //         url: "http://120.48.115.17:8080/data/GX/天然气/point/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                ],
            },
            {
                title: "电力通讯",
                expand: false,
                children: [
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "电力通讯线",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "3",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "电力通讯点",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "13",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Tileset",
                            name: "电力通讯管线",
                            url: "http://120.48.115.17:8080/data/GX/电力通讯/line/tileset.json",
                            xbsjClippingPlanes: {},
                            xbsjCustomShader: {},
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Tileset",
                            name: "电力通讯管点",
                            url: "http://120.48.115.17:8080/data/GX/电力通讯/point/tileset.json",
                            xbsjClippingPlanes: {},
                            xbsjCustomShader: {},
                        },
                    },
                ],
            },
            {
                title: "电信",
                expand: false,
                children: [
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "电信线",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "1",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "电信点",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "11",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Tileset",
                            name: "电信管线",
                            url: "http://120.48.115.17:8080/data/GX/电信/line/tileset.json",
                            xbsjClippingPlanes: {},
                            xbsjCustomShader: {},
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Tileset",
                            name: "电信管点",
                            url: "http://120.48.115.17:8080/data/GX/电信/point/tileset.json",
                            xbsjClippingPlanes: {},
                            xbsjCustomShader: {},
                        },
                    },
                ],
            },
            {
                title: "联通",
                expand: false,
                children: [
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "联通线",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "5",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "联通点",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "15",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Tileset",
                            name: "联通管线",
                            url: "http://120.48.115.17:8080/data/GX/联通/line/tileset.json",
                            xbsjClippingPlanes: {},
                            xbsjCustomShader: {},
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Tileset",
                            name: "联通管点",
                            url: "http://120.48.115.17:8080/data/GX/联通/point/tileset.json",
                            xbsjClippingPlanes: {},
                            xbsjCustomShader: {},
                        },
                    },
                ],
            },
            {
                title: "铁通",
                expand: false,
                children: [
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "铁通线",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "7",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "铁通点",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "17",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "铁通管线",
                    //         url: "http://120.48.115.17:8080/data/GX/铁通/line/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "铁通管点",
                    //         url: "http://120.48.115.17:8080/data/GX/铁通/point/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                ],
            },
            {
                title: "交通信号",
                expand: false,
                children: [
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "交通信号线",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "2",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "交通信号点",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "12",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "交通信号管线",
                    //         url: "http://120.48.115.17:8080/data/GX/交通信号/line/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "交通信号管点",
                    //         url: "http://120.48.115.17:8080/data/GX/交通信号/point/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                ],
            },
            {
                title: "路灯",
                expand: false,
                children: [
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "路灯线",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "0",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    {
                        czmObject: {
                            xbsjType: "Imagery",
                            name: "路灯点",
                            rectangle: [
                                2.1580188113466208, 0.4586790375022197, 2.158328170956537,

                                0.45892043399106314,
                            ],
                            xbsjImageryProvider: {
                                WebMapServiceImageryProvider: {
                                    url: "http://82.156.16.159:6080/arcgis/services/pipe/MapServer/WmsServer",
                                    proxy: null,
                                    format: "image/png",
                                    layers: "19",
                                    style: "default",
                                    tilingScheme: "",
                                    minimumLevel: 1,
                                    srs: "EPSG:4326",
                                },
                                type: "WebMapServiceImageryProvider",
                            },
                        },
                    },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "路灯管线",
                    //         url: "http://120.48.115.17:8080/data/GX/路灯/line/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                    // {
                    //     czmObject: {
                    //         xbsjType: "Tileset",
                    //         name: "路灯管点",
                    //         url: "http://120.48.115.17:8080/data/GX/路灯/point/tileset.json",
                    //         xbsjClippingPlanes: {},
                    //         xbsjCustomShader: {},
                    //     },
                    // },
                ],
            },
        ],
    },
    {
        title: "其他",
        children: [
            {
                czmObject: {
                    xbsjType: "Terrain",
                    xbsjGuid: "d47253ba-f703-4282-92fd-0a5de4ebeb9a",
                    name: "全球14级地形",
                    show: false,
                    xbsjTerrainProvider: {
                        type: "XbsjCesiumTerrainProvider",
                        XbsjEllipsoidTerrainProvider: {},
                        XbsjCesiumTerrainProvider: {
                            url: "http://www.supermapol.com/realspace/services/3D-stk_terrain/rest/realspace/datas/info/data/path",
                            requestVertexNormals: true,
                            requestWaterMask: true,
                        },
                        GoogleEarthEnterpriseTerrainProvider: {},
                    },
                },
            },
            {
                czmObject: {
                    show: false,
                    xbsjType: "Tileset",
                    xbsjGuid: "73ee7892-91f2-47e9-b408-04d1b2368ecc",
                    name: "倾斜",
                    url: "http://39.152.31.83:11280/star/XJ_OSGB/1/tileset.json",
                    xbsjPosition: [
                        2.1581723374889434, 0.4587863508166079, -356.2406486442612,
                    ],
                    xbsjUseOriginTransform: false,
                    xbsjFlattenGuid: "ed1be020-5f32-4b93-8c67-9aeb06b0df5b",
                    xbsjClippingPlanes: {},
                    xbsjCustomShader: {},
                },
            },
            {
                czmObject: {
                    xbsjType: "Tileset",
                    name: "美丽乡村",
                    url: "http://lab.earthsdk.com/model/b2039420837611eaae25edb63a66f405/tileset.json",
                    xbsjPosition: [1.7670422767348508, 0.4268790916671945, 0],
                    xbsjClippingPlanes: {},
                    xbsjCustomShader: {},
                },
            },
        ],
    }
]
window['comps'] = [
    [
        {
            title: "拾取",
            icon: "iconfont icon-a-ziyuan2",
            children: [
                {
                    title: "模型拾取",
                    component: "EpsplanetModelPicker",
                    icon: "icon-a-zu21",
                    panel: {
                        position: {
                            top: 100,
                            left: 250,
                        },
                    },
                },
                {
                    title: "属性拾取",
                    component: "EpsplanetVectorPicker",
                    icon: "icon-a-zu21",
                    panel: {
                        position: {
                            top: 100,
                            left: 250,
                        },
                    },
                },
            ],
        },
        {
            title: "测量",
            icon: "iconfont icon-a-zu21",
            children: [
                {
                    title: "点位测量",
                    component: "EpsplanetMeasurePoint",
                },
                {
                    title: "高度测量",
                    component: "EpsplanetMeasureHeight",
                },
                {
                    title: "空间距离测量",
                    component: "EpsplanetMeasureDistance",
                },
                {
                    title: "空间面积测量",
                    component: "EpsplanetMeasureArea",
                },
                {
                    title: "贴地距离测量",
                    component: "EpsplanetGroundDistance",
                },
                {
                    title: "贴地面积测量",
                    component: "EpsplanetThreeDArea",
                    type: "trigger",
                },
                {
                    title: "方位角测量",
                    component: "EpsplanetMeasureAzimuth",
                },
                {
                    title: "清除测量结果",
                    component: "EpsplanetMeasureClear",
                },
            ],
        },
        {
            title: "搜索",
            icon: "iconfont icon-a-zu22",
            children: [
                {
                    title: "台账搜索",
                    component: "AccountSearch",
                    icon: "icon-a-zu21",
                    panel: {
                        position: {
                            top: 100,
                            left: 250,
                        },
                        dockMode: 'bottom',
                        showTitle: true
                    },
                },
                {
                    title: "附属物搜索",
                    component: "AppendicesSearch",
                    icon: "icon-a-zu21",
                    panel: {
                        position: {
                            top: 100,
                            left: 250,
                        },
                        dockMode: 'left',
                        showTitle: true
                    },
                },
            ],
        },
        {
            title: "管网分析",
            icon: "iconfont icon-a-zu364",
            children: [
                {
                    title: "爆管分析",
                    component: "Burst",
                    icon: "icon-a-zu21",
                    panel: {
                        position: {
                            top: 100,
                            left: 250,
                        },
                    },
                },
                {
                    title: "流向分析",
                    component: "Flow",
                    icon: "icon-a-zu21",
                    panel: {
                        position: {
                            top: 100,
                            left: 250,
                        },
                    },
                },
                {
                    title: "连通性分析",
                    component: "Connect",
                    icon: "icon-a-zu21",
                    panel: {
                        position: {
                            top: 100,
                            left: 250,
                        },
                    },
                },
                {
                    title: "横断面分析",
                    component: "CrossSection",
                    icon: "icon-a-zu21",
                    panel: {
                        position: {
                            top: 100,
                            left: 250,
                        },
                    },
                },
                {
                    title: "纵断面分析",
                    component: "VerticalSection",
                    icon: "icon-a-zu21",
                    panel: {
                        position: {
                            top: 100,
                            left: 250,
                        },
                    },
                },
            ],
        },
    ],
    [
        {
            title: "地表透明",
            component: "EpsplanetSurfaceOpacity",
            icon: "icon-a-zu23",
            panel: {
                position: {
                    top: 100,
                    left: 550,
                },
            },
        },
        {
            title: "地下模式",
            component: "EpsplanetUnderground",
            icon: "icon-a-ziyuan4",
            type: "trigger",
        },
        {
            title: "恢复视角",
            component: "EpsplanetCameraHome",
            icon: "icon-a-zu25",
            type: "trigger",
        },
    ],
    [
        {
            title: "开挖",
            component: "EpsplanetPotholing",
            icon: "icon-a-ziyuan3",
            panel: {
                // size: {
                //   width: 600,
                //   height: 200
                // },
                position: {
                    top: 100,
                    left: 650,
                },
            },
        },
        {
            title: "漫游",
            component: "pathRoam",
            icon: "icon-a-zu27",
            panel: {
                // size: {
                //   width: 300,
                //   height: 200,
                // },
                position: {
                    top: 100,
                    left: 650,
                },
            },
        },
        {
            title: "双屏联动",
            component: "EpsplanetDoubleView",
            icon: "icon-a-zu28",
            panel: {
                // size: {
                //   width: 300,
                //   height: 200
                // },
                position: {
                    top: 50,
                    left: 50,
                },
            },
        },
    ],
]