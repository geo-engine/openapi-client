# coding: utf-8

"""
    Geo Engine API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from geoengine_openapi_client.models.meta_data_definition import MetaDataDefinition

class TestMetaDataDefinition(unittest.TestCase):
    """MetaDataDefinition unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> MetaDataDefinition:
        """Test MetaDataDefinition
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `MetaDataDefinition`
        """
        model = MetaDataDefinition()
        if include_optional:
            return MetaDataDefinition(
                loading_info = geoengine_openapi_client.models.ogr_source_dataset.OgrSourceDataset(
                    attribute_query = '', 
                    cache_ttl = 0, 
                    columns = geoengine_openapi_client.models.ogr_source_column_spec.OgrSourceColumnSpec(
                        bool = [
                            ''
                            ], 
                        datetime = [
                            ''
                            ], 
                        float = [
                            ''
                            ], 
                        format_specifics = null, 
                        int = [
                            ''
                            ], 
                        rename = {
                            'key' : ''
                            }, 
                        text = [
                            ''
                            ], 
                        x = '', 
                        y = '', ), 
                    data_type = 'Data', 
                    default_geometry = null, 
                    file_name = '', 
                    force_ogr_spatial_filter = True, 
                    force_ogr_time_filter = True, 
                    layer_name = '', 
                    on_error = 'ignore', 
                    sql_query = '', 
                    time = null, ),
                result_descriptor = geoengine_openapi_client.models.raster_result_descriptor.RasterResultDescriptor(
                    bands = [
                        geoengine_openapi_client.models.raster_band_descriptor.RasterBandDescriptor(
                            measurement = null, 
                            name = '', )
                        ], 
                    data_type = 'U8', 
                    spatial_grid = geoengine_openapi_client.models.spatial_grid_descriptor.SpatialGridDescriptor(
                        descriptor = 'source', 
                        spatial_grid = geoengine_openapi_client.models.spatial_grid_definition.SpatialGridDefinition(
                            geo_transform = geoengine_openapi_client.models.gdal_dataset_geo_transform.GdalDatasetGeoTransform(
                                origin_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                                    x = 1.337, 
                                    y = 1.337, ), 
                                x_pixel_size = 1.337, 
                                y_pixel_size = 1.337, ), 
                            grid_bounds = geoengine_openapi_client.models.grid_bounding_box2_d.GridBoundingBox2D(
                                bottom_right_idx = geoengine_openapi_client.models.grid_idx2_d.GridIdx2D(
                                    x_idx = 56, 
                                    y_idx = 56, ), 
                                top_left_idx = geoengine_openapi_client.models.grid_idx2_d.GridIdx2D(
                                    x_idx = 56, 
                                    y_idx = 56, ), ), ), ), 
                    spatial_reference = '', 
                    time = geoengine_openapi_client.models.time_interval.TimeInterval(
                        end = 56, 
                        start = 56, ), ),
                type = 'MockMetaData',
                cache_ttl = 0,
                data_time = geoengine_openapi_client.models.time_interval.TimeInterval(
                    end = 56, 
                    start = 56, ),
                params = [
                    geoengine_openapi_client.models.gdal_loading_info_temporal_slice.GdalLoadingInfoTemporalSlice(
                        cache_ttl = 0, 
                        time = geoengine_openapi_client.models.time_interval.TimeInterval(
                            end = 56, 
                            start = 56, ), )
                    ],
                step = geoengine_openapi_client.models.time_step.TimeStep(
                    granularity = 'millis', 
                    step = 0, ),
                time_placeholders = {
                    'key' : geoengine_openapi_client.models.gdal_source_time_placeholder.GdalSourceTimePlaceholder(
                        format = '', 
                        reference = 'start', )
                    },
                time = geoengine_openapi_client.models.time_interval.TimeInterval(
                    end = 56, 
                    start = 56, ),
                band_offset = 0,
                end = 56,
                start = 56
            )
        else:
            return MetaDataDefinition(
                loading_info = geoengine_openapi_client.models.ogr_source_dataset.OgrSourceDataset(
                    attribute_query = '', 
                    cache_ttl = 0, 
                    columns = geoengine_openapi_client.models.ogr_source_column_spec.OgrSourceColumnSpec(
                        bool = [
                            ''
                            ], 
                        datetime = [
                            ''
                            ], 
                        float = [
                            ''
                            ], 
                        format_specifics = null, 
                        int = [
                            ''
                            ], 
                        rename = {
                            'key' : ''
                            }, 
                        text = [
                            ''
                            ], 
                        x = '', 
                        y = '', ), 
                    data_type = 'Data', 
                    default_geometry = null, 
                    file_name = '', 
                    force_ogr_spatial_filter = True, 
                    force_ogr_time_filter = True, 
                    layer_name = '', 
                    on_error = 'ignore', 
                    sql_query = '', 
                    time = null, ),
                result_descriptor = geoengine_openapi_client.models.raster_result_descriptor.RasterResultDescriptor(
                    bands = [
                        geoengine_openapi_client.models.raster_band_descriptor.RasterBandDescriptor(
                            measurement = null, 
                            name = '', )
                        ], 
                    data_type = 'U8', 
                    spatial_grid = geoengine_openapi_client.models.spatial_grid_descriptor.SpatialGridDescriptor(
                        descriptor = 'source', 
                        spatial_grid = geoengine_openapi_client.models.spatial_grid_definition.SpatialGridDefinition(
                            geo_transform = geoengine_openapi_client.models.gdal_dataset_geo_transform.GdalDatasetGeoTransform(
                                origin_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                                    x = 1.337, 
                                    y = 1.337, ), 
                                x_pixel_size = 1.337, 
                                y_pixel_size = 1.337, ), 
                            grid_bounds = geoengine_openapi_client.models.grid_bounding_box2_d.GridBoundingBox2D(
                                bottom_right_idx = geoengine_openapi_client.models.grid_idx2_d.GridIdx2D(
                                    x_idx = 56, 
                                    y_idx = 56, ), 
                                top_left_idx = geoengine_openapi_client.models.grid_idx2_d.GridIdx2D(
                                    x_idx = 56, 
                                    y_idx = 56, ), ), ), ), 
                    spatial_reference = '', 
                    time = geoengine_openapi_client.models.time_interval.TimeInterval(
                        end = 56, 
                        start = 56, ), ),
                type = 'MockMetaData',
                data_time = geoengine_openapi_client.models.time_interval.TimeInterval(
                    end = 56, 
                    start = 56, ),
                params = [
                    geoengine_openapi_client.models.gdal_loading_info_temporal_slice.GdalLoadingInfoTemporalSlice(
                        cache_ttl = 0, 
                        time = geoengine_openapi_client.models.time_interval.TimeInterval(
                            end = 56, 
                            start = 56, ), )
                    ],
                step = geoengine_openapi_client.models.time_step.TimeStep(
                    granularity = 'millis', 
                    step = 0, ),
                time_placeholders = {
                    'key' : geoengine_openapi_client.models.gdal_source_time_placeholder.GdalSourceTimePlaceholder(
                        format = '', 
                        reference = 'start', )
                    },
                band_offset = 0,
                end = 56,
                start = 56,
        )
        """

    def testMetaDataDefinition(self):
        """Test MetaDataDefinition"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
