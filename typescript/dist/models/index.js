"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint-disable */
__exportStar(require("./AddCollection200Response"), exports);
__exportStar(require("./AddDataset"), exports);
__exportStar(require("./AddLayer"), exports);
__exportStar(require("./AddLayerCollection"), exports);
__exportStar(require("./AddRole"), exports);
__exportStar(require("./AuthCodeRequestURL"), exports);
__exportStar(require("./AuthCodeResponse"), exports);
__exportStar(require("./AutoCreateDataset"), exports);
__exportStar(require("./AxisOrder"), exports);
__exportStar(require("./BoundingBox2D"), exports);
__exportStar(require("./Breakpoint"), exports);
__exportStar(require("./ClassificationMeasurement"), exports);
__exportStar(require("./CollectionItem"), exports);
__exportStar(require("./CollectionItemCollection"), exports);
__exportStar(require("./CollectionItemLayer"), exports);
__exportStar(require("./CollectionType"), exports);
__exportStar(require("./ColorParam"), exports);
__exportStar(require("./ColorParamDerived"), exports);
__exportStar(require("./ColorParamStatic"), exports);
__exportStar(require("./Colorizer"), exports);
__exportStar(require("./ColorizerLinearGradient"), exports);
__exportStar(require("./ColorizerLogarithmicGradient"), exports);
__exportStar(require("./ColorizerPalette"), exports);
__exportStar(require("./ColorizerRgba"), exports);
__exportStar(require("./ContinuousMeasurement"), exports);
__exportStar(require("./Coordinate2D"), exports);
__exportStar(require("./CreateDataset"), exports);
__exportStar(require("./CreateDatasetHandler200Response"), exports);
__exportStar(require("./CreateProject"), exports);
__exportStar(require("./CsvHeader"), exports);
__exportStar(require("./DataId"), exports);
__exportStar(require("./DataIdExternal"), exports);
__exportStar(require("./DataIdInternal"), exports);
__exportStar(require("./DataPath"), exports);
__exportStar(require("./DataPathOneOf"), exports);
__exportStar(require("./DataPathOneOf1"), exports);
__exportStar(require("./Dataset"), exports);
__exportStar(require("./DatasetDefinition"), exports);
__exportStar(require("./DatasetListing"), exports);
__exportStar(require("./DateTime"), exports);
__exportStar(require("./DateTimeParseFormat"), exports);
__exportStar(require("./DerivedColor"), exports);
__exportStar(require("./DerivedNumber"), exports);
__exportStar(require("./DescribeCoverageRequest"), exports);
__exportStar(require("./ErrorResponse"), exports);
__exportStar(require("./ExternalDataId"), exports);
__exportStar(require("./FeatureDataType"), exports);
__exportStar(require("./FileNotFoundHandling"), exports);
__exportStar(require("./FormatSpecifics"), exports);
__exportStar(require("./FormatSpecificsOneOf"), exports);
__exportStar(require("./FormatSpecificsOneOfCsv"), exports);
__exportStar(require("./GdalDatasetGeoTransform"), exports);
__exportStar(require("./GdalDatasetParameters"), exports);
__exportStar(require("./GdalLoadingInfoTemporalSlice"), exports);
__exportStar(require("./GdalMetaDataList"), exports);
__exportStar(require("./GdalMetaDataRegular"), exports);
__exportStar(require("./GdalMetaDataStatic"), exports);
__exportStar(require("./GdalMetadataMapping"), exports);
__exportStar(require("./GdalMetadataNetCdfCf"), exports);
__exportStar(require("./GdalSourceTimePlaceholder"), exports);
__exportStar(require("./GeoJson"), exports);
__exportStar(require("./GetCapabilitiesFormat"), exports);
__exportStar(require("./GetCapabilitiesRequest"), exports);
__exportStar(require("./GetCoverageFormat"), exports);
__exportStar(require("./GetCoverageRequest"), exports);
__exportStar(require("./GetFeatureRequest"), exports);
__exportStar(require("./GetLegendGraphicRequest"), exports);
__exportStar(require("./GetMapExceptionFormat"), exports);
__exportStar(require("./GetMapFormat"), exports);
__exportStar(require("./GetMapRequest"), exports);
__exportStar(require("./Layer"), exports);
__exportStar(require("./LayerCollection"), exports);
__exportStar(require("./LayerCollectionListing"), exports);
__exportStar(require("./LayerListing"), exports);
__exportStar(require("./LayerUpdate"), exports);
__exportStar(require("./LayerVisibility"), exports);
__exportStar(require("./LineSymbology"), exports);
__exportStar(require("./LinearGradient"), exports);
__exportStar(require("./LogarithmicGradient"), exports);
__exportStar(require("./Measurement"), exports);
__exportStar(require("./MeasurementClassification"), exports);
__exportStar(require("./MeasurementContinuous"), exports);
__exportStar(require("./MeasurementUnitless"), exports);
__exportStar(require("./MetaDataDefinition"), exports);
__exportStar(require("./MetaDataDefinitionGdalMetaDataList"), exports);
__exportStar(require("./MetaDataDefinitionGdalMetaDataRegular"), exports);
__exportStar(require("./MetaDataDefinitionGdalMetadataNetCdfCf"), exports);
__exportStar(require("./MetaDataDefinitionGdalStatic"), exports);
__exportStar(require("./MetaDataDefinitionMockMetaData"), exports);
__exportStar(require("./MetaDataDefinitionOgrMetaData"), exports);
__exportStar(require("./MetaDataSuggestion"), exports);
__exportStar(require("./MockDatasetDataSourceLoadingInfo"), exports);
__exportStar(require("./MockMetaData"), exports);
__exportStar(require("./MultiLineString"), exports);
__exportStar(require("./MultiPoint"), exports);
__exportStar(require("./MultiPolygon"), exports);
__exportStar(require("./NumberParam"), exports);
__exportStar(require("./NumberParamDerived"), exports);
__exportStar(require("./NumberParamStatic"), exports);
__exportStar(require("./OgrMetaData"), exports);
__exportStar(require("./OgrSourceColumnSpec"), exports);
__exportStar(require("./OgrSourceDataset"), exports);
__exportStar(require("./OgrSourceDatasetTimeType"), exports);
__exportStar(require("./OgrSourceDatasetTimeTypeNone"), exports);
__exportStar(require("./OgrSourceDatasetTimeTypeStart"), exports);
__exportStar(require("./OgrSourceDatasetTimeTypeStartDuration"), exports);
__exportStar(require("./OgrSourceDatasetTimeTypeStartEnd"), exports);
__exportStar(require("./OgrSourceDurationSpec"), exports);
__exportStar(require("./OgrSourceDurationSpecInfinite"), exports);
__exportStar(require("./OgrSourceDurationSpecValue"), exports);
__exportStar(require("./OgrSourceDurationSpecZero"), exports);
__exportStar(require("./OgrSourceErrorSpec"), exports);
__exportStar(require("./OgrSourceTimeFormat"), exports);
__exportStar(require("./OgrSourceTimeFormatAuto"), exports);
__exportStar(require("./OgrSourceTimeFormatCustom"), exports);
__exportStar(require("./OgrSourceTimeFormatUnixTimeStamp"), exports);
__exportStar(require("./OrderBy"), exports);
__exportStar(require("./Permission"), exports);
__exportStar(require("./PermissionListOptions"), exports);
__exportStar(require("./PermissionListing"), exports);
__exportStar(require("./PermissionRequest"), exports);
__exportStar(require("./Plot"), exports);
__exportStar(require("./PlotOutputFormat"), exports);
__exportStar(require("./PlotQueryRectangle"), exports);
__exportStar(require("./PlotResultDescriptor"), exports);
__exportStar(require("./PlotUpdate"), exports);
__exportStar(require("./PointSymbology"), exports);
__exportStar(require("./PolygonSymbology"), exports);
__exportStar(require("./Project"), exports);
__exportStar(require("./ProjectLayer"), exports);
__exportStar(require("./ProjectListing"), exports);
__exportStar(require("./ProjectUpdateToken"), exports);
__exportStar(require("./ProjectVersion"), exports);
__exportStar(require("./Provenance"), exports);
__exportStar(require("./ProvenanceEntry"), exports);
__exportStar(require("./ProvenanceOutput"), exports);
__exportStar(require("./Provenances"), exports);
__exportStar(require("./ProviderCapabilities"), exports);
__exportStar(require("./ProviderLayerCollectionId"), exports);
__exportStar(require("./ProviderLayerId"), exports);
__exportStar(require("./Quota"), exports);
__exportStar(require("./RasterBandDescriptor"), exports);
__exportStar(require("./RasterColorizer"), exports);
__exportStar(require("./RasterColorizerSingleBand"), exports);
__exportStar(require("./RasterDataType"), exports);
__exportStar(require("./RasterDatasetFromWorkflow"), exports);
__exportStar(require("./RasterDatasetFromWorkflowResult"), exports);
__exportStar(require("./RasterPropertiesEntryType"), exports);
__exportStar(require("./RasterPropertiesKey"), exports);
__exportStar(require("./RasterQueryRectangle"), exports);
__exportStar(require("./RasterResultDescriptor"), exports);
__exportStar(require("./RasterStreamWebsocketResultType"), exports);
__exportStar(require("./RasterSymbology"), exports);
__exportStar(require("./Resource"), exports);
__exportStar(require("./ResourceDataset"), exports);
__exportStar(require("./ResourceId"), exports);
__exportStar(require("./ResourceIdDatasetId"), exports);
__exportStar(require("./ResourceIdLayer"), exports);
__exportStar(require("./ResourceIdLayerCollection"), exports);
__exportStar(require("./ResourceIdModelId"), exports);
__exportStar(require("./ResourceIdProject"), exports);
__exportStar(require("./ResourceLayer"), exports);
__exportStar(require("./ResourceLayerCollection"), exports);
__exportStar(require("./ResourceProject"), exports);
__exportStar(require("./Role"), exports);
__exportStar(require("./RoleDescription"), exports);
__exportStar(require("./STRectangle"), exports);
__exportStar(require("./SearchCapabilities"), exports);
__exportStar(require("./SearchType"), exports);
__exportStar(require("./SearchTypes"), exports);
__exportStar(require("./ServerInfo"), exports);
__exportStar(require("./SpatialPartition2D"), exports);
__exportStar(require("./SpatialReferenceAuthority"), exports);
__exportStar(require("./SpatialReferenceSpecification"), exports);
__exportStar(require("./SpatialResolution"), exports);
__exportStar(require("./StrokeParam"), exports);
__exportStar(require("./Symbology"), exports);
__exportStar(require("./SymbologyLine"), exports);
__exportStar(require("./SymbologyPoint"), exports);
__exportStar(require("./SymbologyPolygon"), exports);
__exportStar(require("./SymbologyRaster"), exports);
__exportStar(require("./TaskAbortOptions"), exports);
__exportStar(require("./TaskFilter"), exports);
__exportStar(require("./TaskListOptions"), exports);
__exportStar(require("./TaskResponse"), exports);
__exportStar(require("./TaskStatus"), exports);
__exportStar(require("./TaskStatusAborted"), exports);
__exportStar(require("./TaskStatusCompleted"), exports);
__exportStar(require("./TaskStatusFailed"), exports);
__exportStar(require("./TaskStatusRunning"), exports);
__exportStar(require("./TaskStatusWithId"), exports);
__exportStar(require("./TextSymbology"), exports);
__exportStar(require("./TimeGranularity"), exports);
__exportStar(require("./TimeInterval"), exports);
__exportStar(require("./TimeReference"), exports);
__exportStar(require("./TimeStep"), exports);
__exportStar(require("./TypedGeometry"), exports);
__exportStar(require("./TypedGeometryOneOf"), exports);
__exportStar(require("./TypedGeometryOneOf1"), exports);
__exportStar(require("./TypedGeometryOneOf2"), exports);
__exportStar(require("./TypedGeometryOneOf3"), exports);
__exportStar(require("./TypedOperator"), exports);
__exportStar(require("./TypedOperatorOperator"), exports);
__exportStar(require("./TypedResultDescriptor"), exports);
__exportStar(require("./TypedResultDescriptorPlot"), exports);
__exportStar(require("./TypedResultDescriptorRaster"), exports);
__exportStar(require("./TypedResultDescriptorVector"), exports);
__exportStar(require("./UnixTimeStampType"), exports);
__exportStar(require("./UpdateDataset"), exports);
__exportStar(require("./UpdateProject"), exports);
__exportStar(require("./UpdateQuota"), exports);
__exportStar(require("./UploadFileLayersResponse"), exports);
__exportStar(require("./UploadFilesResponse"), exports);
__exportStar(require("./UserCredentials"), exports);
__exportStar(require("./UserInfo"), exports);
__exportStar(require("./UserRegistration"), exports);
__exportStar(require("./UserSession"), exports);
__exportStar(require("./VectorColumnInfo"), exports);
__exportStar(require("./VectorDataType"), exports);
__exportStar(require("./VectorQueryRectangle"), exports);
__exportStar(require("./VectorResultDescriptor"), exports);
__exportStar(require("./Volume"), exports);
__exportStar(require("./WcsBoundingbox"), exports);
__exportStar(require("./WcsService"), exports);
__exportStar(require("./WcsVersion"), exports);
__exportStar(require("./WfsService"), exports);
__exportStar(require("./WfsVersion"), exports);
__exportStar(require("./WmsService"), exports);
__exportStar(require("./WmsVersion"), exports);
__exportStar(require("./Workflow"), exports);
__exportStar(require("./WrappedPlotOutput"), exports);
